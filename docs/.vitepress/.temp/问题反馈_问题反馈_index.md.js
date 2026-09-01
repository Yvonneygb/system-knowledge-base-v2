import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u53CD\u9988/index.md"}');
const _sfc_main = { name: "\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u53CD\u9988/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u95EE\u9898\u53CD\u9988\u662F\u4EC0\u4E48</h2><p>\u7ECF\u9500\u5546\u7AEF\u63D0\u4EA4\u53CD\u9988\u5355\uFF0C\u7ECF\u54C1\u724C\u65B9\u56DE\u590D\u540E\u67E5\u770B\u5904\u7406\u7ED3\u679C\u4E0E\u8BC4\u4EF7</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u53CD\u9988\u6E20\u9053</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u7ECF\u9500\u5546\u4FA7\u53D1\u8D77</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u63D0\u4EA4\u53CD\u9988</strong> \u2014 \u7ECF\u9500\u5546\u7AEF\u65B0\u5EFA\u5E76\u63D0\u4EA4\u53CD\u9988\u5355\uFF0C\u63CF\u8FF0\u9700\u8981\u5904\u7406\u7684\u95EE\u9898\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u54C1\u724C\u65B9\u56DE\u590D</strong> \u2014 \u54C1\u724C\u65B9\u5BF9\u53CD\u9988\u8FDB\u884C\u56DE\u590D\uFF0C\u7ECF\u9500\u5546\u67E5\u770B\u56DE\u590D\u5185\u5BB9\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u56DE\u590D\u8BC4\u4EF7</strong> \u2014 \u7ECF\u9500\u5546\u53EF\u5BF9\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u8BC4\u4EF7\u53CD\u9988\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5904\u7406\u8FB9\u754C</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u6743\u9650\u4E0E\u72B6\u6001\u7EA6\u675F</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6570\u636E\u9694\u79BB</strong> \u2014 \u7ECF\u9500\u5546\u4EC5\u80FD\u64CD\u4F5C\u672C\u7ECF\u9500\u5546\u521B\u5EFA\u7684\u53CD\u9988\u5355\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53EA\u8BFB\u5C55\u793A</strong> \u2014 \u54C1\u724C\u65B9\u56DE\u590D\u4E0E\u8BC4\u4EF7\u4E3A\u53EA\u8BFB\uFF0C\u7ECF\u9500\u5546\u4E0D\u53EF\u4FEE\u6539\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u672A\u56DE\u590D\u53EF\u53D6\u6D88</strong> \u2014 \u54C1\u724C\u65B9\u672A\u56DE\u590D\u524D\uFF0C\u7ECF\u9500\u5546\u53EF\u53D6\u6D88\u53CD\u9988\u5355\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u95EE\u9898\u53CD\u9988\u6D41\u8F6C\u8FC7\u7A0B</h2><p>\u63D0\u4EA4\u53CD\u9988\uFF0C\u54C1\u724C\u65B9\u56DE\u590D\u540E\u67E5\u770B\u7ED3\u679C\u4E0E\u8BC4\u4EF7</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u65B0\u5EFA\u53CD\u9988</h5><small>\u7ECF\u9500\u5546\u65B0\u5EFA<br>\u5E76\u63D0\u4EA4\u53CD\u9988\u5355</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u54C1\u724C\u65B9\u56DE\u590D</h5><small>\u54C1\u724C\u65B9\u5904\u7406<br>\u5E76\u56DE\u590D\u53CD\u9988</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B\u4E0E\u8BC4\u4EF7</h5><small>\u67E5\u770B\u56DE\u590D\u5185\u5BB9<br>\u8FDB\u884C\u8BC4\u4EF7\u53CD\u9988</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u72B6\u6001\u8BF4\u660E\uFF1A</strong>\u53CD\u9988\u5355\u65E0\u72EC\u7ACB\u5DE5\u4F5C\u6D41\u5F15\u64CE\uFF0C\u72B6\u6001\u7531\u7CFB\u7EDF\u76F4\u63A5\u66F4\u65B0\uFF1B\u672A\u56DE\u590D\u524D\u7ECF\u9500\u5546\u53EF\u53D6\u6D88\uFF0C\u5DF2\u56DE\u590D\u540E\u8F6C\u4E3A\u67E5\u770B\u4E0E\u8BC4\u4EF7\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u95EE\u9898\u53CD\u9988\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u65B0\u5EFA\u53CD\u9988\u5355 \u2192 \u2605\u63D0\u4EA4\u53CD\u9988\u2605 \u2192 \u2696\u54C1\u724C\u65B9\u662F\u5426\u5DF2\u56DE\u590D\uFF1F \u2192 \u67E5\u770B\u56DE\u590D\u4E0E\u8BC4\u4EF7 \u2192 \u7ED3\u675F\uFF08\u672A\u56DE\u590D\u53EF\u53D6\u6D88\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u4E3B\u6863</text><rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u53CD\u9988\u7C7B\u578B\u503C\u96C6</text><rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4E8B\u4E1A\u90E8</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="222" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="222" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="249" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u65B0\u5EFA\u53CD\u9988\u5355</text><line x1="600" y1="266" x2="600" y2="294" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="294" width="170" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="318" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u63D0\u4EA4\u53CD\u9988\u2605</text><text x="600" y="338" text-anchor="middle" fill="#DCFCE7" font-size="10">\u586B\u7C7B\u578B/\u5185\u5BB9/\u8054\u7CFB\u4EBA\xB7\u63D0\u4EA4</text><line x1="600" y1="348" x2="600" y2="376" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,376 670,406 600,436 530,406" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="410" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u662F\u5426\u5DF2\u56DE\u590D\uFF1F</text><line x1="670" y1="406" x2="780" y2="406" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="735" y="391" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="780" y="410" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u53D6\u6D88 \u2717</text><line x1="780" y1="391" x2="780" y2="330" stroke="#EF4444" stroke-width="1.5"></line><line x1="780" y1="330" x2="515" y2="330" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="600" y1="436" x2="600" y2="464" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="464" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="491" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u67E5\u770B\u56DE\u590D\u4E0E\u8BC4\u4EF7</text><line x1="600" y1="508" x2="600" y2="536" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="536" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="563" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="580" x2="600" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="440" y="634" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="657" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95EE\u9898\u56DE\u590D(\u4E8B\u4E1A\u90E8\u7AEF)</text><rect x="610" y="634" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="657" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u8BC4\u4EF7\u5C55\u793A</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u53D6\u6D88/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u53CD\u9988\u5355\u72B6\u6001\u6D41\u8F6C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u53CD\u9988\u5355\u6709\u5B8C\u6574\u7684\u72B6\u6001\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0B\u53EF\u6267\u884C\u7684\u64CD\u4F5C\u4E0D\u540C\uFF0C\u786E\u4FDD\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u95ED\u73AF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u72B6\u6001\u503C\u96C6 <code${_scopeId}>MBO.FEEDBACK_STATE</code>\uFF0C\u72B6\u6001\u6D41\u8F6C\u4E3A\uFF1A\u8349\u7A3F\u2192\u5DF2\u63D0\u4EA4\u2192\u5904\u7406\u4E2D\u2192\u5DF2\u56DE\u7B54\u2192\u5DF2\u5B8C\u6210\uFF1B\u5DF2\u63D0\u4EA4\u2192\u5DF2\u53D6\u6D88\u3002\u65B0\u589E\u53CD\u9988\u5355\u9ED8\u8BA4\u4E3A\u8349\u7A3F\u72B6\u6001\uFF0C\u63D0\u4EA4\u540E\u53D8\u4E3A\u5DF2\u63D0\u4EA4\uFF0C\u4E8B\u4E1A\u90E8\u56DE\u590D\u540E\u53D8\u4E3A\u5904\u7406\u4E2D/\u5DF2\u56DE\u7B54\uFF0C\u95EE\u9898\u5B8C\u6210\u540E\u53D8\u4E3A\u5DF2\u5B8C\u6210\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u53CD\u9988\u5355\u6709\u5B8C\u6574\u7684\u72B6\u6001\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u540C\u72B6\u6001\u4E0B\u53EF\u6267\u884C\u7684\u64CD\u4F5C\u4E0D\u540C\uFF0C\u786E\u4FDD\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u95ED\u73AF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u72B6\u6001\u503C\u96C6 "),
              createVNode("code", null, "MBO.FEEDBACK_STATE"),
              createTextVNode("\uFF0C\u72B6\u6001\u6D41\u8F6C\u4E3A\uFF1A\u8349\u7A3F\u2192\u5DF2\u63D0\u4EA4\u2192\u5904\u7406\u4E2D\u2192\u5DF2\u56DE\u7B54\u2192\u5DF2\u5B8C\u6210\uFF1B\u5DF2\u63D0\u4EA4\u2192\u5DF2\u53D6\u6D88\u3002\u65B0\u589E\u53CD\u9988\u5355\u9ED8\u8BA4\u4E3A\u8349\u7A3F\u72B6\u6001\uFF0C\u63D0\u4EA4\u540E\u53D8\u4E3A\u5DF2\u63D0\u4EA4\uFF0C\u4E8B\u4E1A\u90E8\u56DE\u590D\u540E\u53D8\u4E3A\u5904\u7406\u4E2D/\u5DF2\u56DE\u7B54\uFF0C\u95EE\u9898\u5B8C\u6210\u540E\u53D8\u4E3A\u5DF2\u5B8C\u6210\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u95EE\u9898\u7C7B\u578B\u914D\u7F6E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u95EE\u9898\u8FDB\u884C\u5206\u7C7B\u7BA1\u7406\uFF0C\u4FBF\u4E8E\u7EDF\u8BA1\u5206\u6790\u548C\u5206\u6D3E\u5904\u7406\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u95EE\u9898\u7C7B\u578B\u5206\u4E3A\u4EA7\u54C1\u95EE\u9898\u3001\u8BA2\u5355\u95EE\u9898\u3001\u7CFB\u7EDF\u95EE\u9898\u3001\u5176\u4ED6\u3002\u901A\u8FC7\u503C\u96C6\u914D\u7F6E\uFF0C\u524D\u7AEF Select \u7EC4\u4EF6\u52A0\u8F7D\u9009\u9879\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u95EE\u9898\u8FDB\u884C\u5206\u7C7B\u7BA1\u7406\uFF0C\u4FBF\u4E8E\u7EDF\u8BA1\u5206\u6790\u548C\u5206\u6D3E\u5904\u7406\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u95EE\u9898\u7C7B\u578B\u5206\u4E3A\u4EA7\u54C1\u95EE\u9898\u3001\u8BA2\u5355\u95EE\u9898\u3001\u7CFB\u7EDF\u95EE\u9898\u3001\u5176\u4ED6\u3002\u901A\u8FC7\u503C\u96C6\u914D\u7F6E\uFF0C\u524D\u7AEF Select \u7EC4\u4EF6\u52A0\u8F7D\u9009\u9879\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u8BC4\u4EF7\u529F\u80FD"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u5BF9\u95EE\u9898\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u6EE1\u610F\u5EA6\u8BC4\u4EF7\uFF0C\u5E2E\u52A9\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u95EE\u9898\u72B6\u6001\u4E3A\u5DF2\u5B8C\u6210\u65F6\uFF0C\u7ECF\u9500\u5546\u53EF\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\uFF0C\u586B\u5199\u661F\u7EA7\u8BC4\u5206\uFF081-5\u661F\uFF09\u548C\u8BC4\u4EF7\u5185\u5BB9\uFF0C\u63D0\u4EA4\u540E\u8C03\u7528 <code${_scopeId}>feedback/evaluate</code> \u63A5\u53E3\u5199\u5165 <code${_scopeId}>FEEDBACK</code> \u8868\u7684 <code${_scopeId}>GRADE</code> \u548C <code${_scopeId}>EVALUATE_CONTENT</code> \u5B57\u6BB5\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u5BF9\u95EE\u9898\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u6EE1\u610F\u5EA6\u8BC4\u4EF7\uFF0C\u5E2E\u52A9\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u95EE\u9898\u72B6\u6001\u4E3A\u5DF2\u5B8C\u6210\u65F6\uFF0C\u7ECF\u9500\u5546\u53EF\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\uFF0C\u586B\u5199\u661F\u7EA7\u8BC4\u5206\uFF081-5\u661F\uFF09\u548C\u8BC4\u4EF7\u5185\u5BB9\uFF0C\u63D0\u4EA4\u540E\u8C03\u7528 "),
              createVNode("code", null, "feedback/evaluate"),
              createTextVNode(" \u63A5\u53E3\u5199\u5165 "),
              createVNode("code", null, "FEEDBACK"),
              createTextVNode(" \u8868\u7684 "),
              createVNode("code", null, "GRADE"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "EVALUATE_CONTENT"),
              createTextVNode(" \u5B57\u6BB5\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u9644\u4EF6\u4E0A\u4F20"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u7ECF\u9500\u5546\u4E0A\u4F20\u95EE\u9898\u76F8\u5173\u622A\u56FE\u6216\u6587\u4EF6\uFF0C\u4FBF\u4E8E\u95EE\u9898\u5B9A\u4F4D\u548C\u5904\u7406\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u8BE6\u60C5\u9875\u63D0\u4F9B\u9644\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u8C03\u7528 HZERO \u6587\u4EF6\u670D\u52A1\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u4FE1\u606F\u5173\u8054\u5230\u53CD\u9988\u5355\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u7ECF\u9500\u5546\u4E0A\u4F20\u95EE\u9898\u76F8\u5173\u622A\u56FE\u6216\u6587\u4EF6\uFF0C\u4FBF\u4E8E\u95EE\u9898\u5B9A\u4F4D\u548C\u5904\u7406\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u8BE6\u60C5\u9875\u63D0\u4F9B\u9644\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u8C03\u7528 HZERO \u6587\u4EF6\u670D\u52A1\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u4FE1\u606F\u5173\u8054\u5230\u53CD\u9988\u5355\u3002")
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
        _push2(`<p${_scopeId}>\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/dealer/list.tsx</code>\u3002</p><h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_CODE\`</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_SUB_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B\uFF08parentValue=typeCode\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u53CD\u9988\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65E5\u671F\u8303\u56F4\uFF08createTimeStart/createTimeEnd\uFF09\uFF0C\u9ED8\u8BA4\u8FD1\u4E00\u4E2A\u6708</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E8F\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u884C\u5E8F\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8DE8\u5206\u9875\u5E8F\u53F7\u6E32\u67D3\uFF08commonLineNum\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>TYPE_DETAIL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>ANSWER_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>CONTENT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>PHONE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u4F4D</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u4F4D</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u5206</td><td${_scopeId}>GRADE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>EVALUATE_CONTENT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>ButtonGroup</td><td${_scopeId}>\u884C\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u6839\u636E\u72B6\u6001\u52A8\u6001\u663E\u793A</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/dealer/list.tsx"),
            createTextVNode("\u3002")
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
                createVNode("td", null, "\u53CD\u9988\u5355\u53F7"),
                createVNode("td", null, "QUESTIONID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u7C7B\u578B"),
                createVNode("td", null, "TYPE_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u95EE\u9898\u5927\u7C7B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_CODE`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5B50\u7C7B\u578B"),
                createVNode("td", null, "TYPE_SUP_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u95EE\u9898\u5B50\u7C7B"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_SUB_CODE`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B\uFF08parentValue=typeCode\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u53CD\u9988\u65F6\u95F4\u8303\u56F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u65E5\u671F\u8303\u56F4\uFF08createTimeStart/createTimeEnd\uFF09\uFF0C\u9ED8\u8BA4\u8FD1\u4E00\u4E2A\u6708")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_STATE`")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u5C55\u793A\u5B57\u6BB5"),
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
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u884C\u5E8F\u53F7"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8DE8\u5206\u9875\u5E8F\u53F7\u6E32\u67D3\uFF08commonLineNum\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5355\u53F7"),
                createVNode("td", null, "QUESTIONID"),
                createVNode("td", null, "Button(link)"),
                createVNode("td", null, "\u53CD\u9988\u5355\u7F16\u53F7\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "STATE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u7C7B\u578B"),
                createVNode("td", null, "TYPE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95EE\u9898\u5927\u7C7B\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5B50\u7C7B\u578B"),
                createVNode("td", null, "TYPE_SUP_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u95EE\u9898\u5B50\u7C7B\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7EC6\u5206"),
                createVNode("td", null, "TYPE_DETAIL_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA7\u54C1\u7EC6\u5206\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u63D0\u4EA4\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6700\u65B0\u56DE\u590D\u65F6\u95F4"),
                createVNode("td", null, "ANSWER_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6700\u65B0\u56DE\u590D\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "CONTENT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u4EBA"),
                createVNode("td", null, "CREATE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u63D0\u4EA4\u4EBA"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "PHONE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5355\u4F4D"),
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5355\u4F4D"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BC4\u5206"),
                createVNode("td", null, "GRADE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BC4\u4EF7\u661F\u7EA7"),
                createVNode("td", null, "\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A"),
                createVNode("td", null, "\u8BC4\u4EF7\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9"),
                createVNode("td", null, "EVALUATE_CONTENT"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9"),
                createVNode("td", null, "\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A"),
                createVNode("td", null, "\u8BC4\u4EF7\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64CD\u4F5C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "ButtonGroup"),
                createVNode("td", null, "\u884C\u64CD\u4F5C\u6309\u94AE"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u6839\u636E\u72B6\u6001\u52A8\u6001\u663E\u793A")
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
        _push2(`<h4${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u65B0\u589E\u53CD\u9988\u5355</td><td${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F</td><td${_scopeId}>\u8DF3\u8F6C\u65B0\u589E\u53CD\u9988\u5355\u8BE6\u60C5\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F</td><td${_scopeId}>\u5BFC\u51FA\u53CD\u9988\u5355\u5217\u8868\u5230 Excel</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u8DF3\u8F6C\u7F16\u8F91\u53CD\u9988\u5355\u8BE6\u60C5\u9875</td><td${_scopeId}>state=1\uFF08\u8349\u7A3F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5220\u9664\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>state=1\uFF08\u8349\u7A3F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u53D6\u6D88</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>state \u4E0D\u5728 [6,7,8]</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u8BC4\u4EF7</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97</td><td${_scopeId}>state=6\uFF08\u5DF2\u5B8C\u6210\uFF09</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u589E\u53CD\u9988\u5355\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u65B0\u589E\u53CD\u9988\u5355&quot;\u6309\u94AE</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u8C03\u7528 <code${_scopeId}>openTab</code> \u6253\u5F00\u65B0\u6807\u7B7E\u9875</p><p${_scopeId}>2. \u8DEF\u7531\uFF1A<code${_scopeId}>/afterSales/dealer/feedback/add</code></p><p${_scopeId}>3. \u5728\u8BE6\u60C5\u9875\u586B\u5199\u53CD\u9988\u4FE1\u606F\u540E\u4FDD\u5B58\u63D0\u4EA4</p><h4${_scopeId}>\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5BFC\u51FA&quot;\u6309\u94AE</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u6536\u96C6\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6</p><p${_scopeId}>2. \u8C03\u7528 <code${_scopeId}>POST feedback/distributor/export</code> \u63A5\u53E3\u5BFC\u51FA</p><p${_scopeId}>3. \u6D4F\u89C8\u5668\u4E0B\u8F7D Excel \u6587\u4EF6</p><h4${_scopeId}>\u6309\u94AE3\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state=1\uFF08\u8349\u7A3F\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u7F16\u8F91&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u8C03\u7528 <code${_scopeId}>openTab</code> \u6253\u5F00\u65B0\u6807\u7B7E\u9875</p><p${_scopeId}>2. \u8DEF\u7531\uFF1A<code${_scopeId}>/afterSales/dealer/feedback/edit/\${id}</code></p><p${_scopeId}>3. \u8C03\u7528 <code${_scopeId}>GET feedback/detail/\${id}</code> \u52A0\u8F7D\u8BE6\u60C5</p><p${_scopeId}>4. \u4FEE\u6539\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/save</code> \u4FDD\u5B58</p><h4${_scopeId}>\u6309\u94AE4\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state=1\uFF08\u8349\u7A3F\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u5220\u9664&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A&quot;\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F&quot;</p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>DELETE feedback/delete/\${id}</code> \u63A5\u53E3</p><p${_scopeId}>3. \u6210\u529F\u540E\u5237\u65B0\u5217\u8868</p><h4${_scopeId}>\u6309\u94AE5\uFF1A\u53D6\u6D88\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state \u4E0D\u5728 [6,7,8] \u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u53D6\u6D88&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A&quot;\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F&quot;</p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/cancel/\${id}</code> \u63A5\u53E3</p><p${_scopeId}>3. \u6210\u529F\u540E\u5237\u65B0\u5217\u8868</p><h4${_scopeId}>\u6309\u94AE6\uFF1A\u8BC4\u4EF7\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state=6\uFF08\u5DF2\u5B8C\u6210\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u8BC4\u4EF7&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\uFF08Modal\uFF0Csize=large\uFF0Cclosable\uFF0Cresizable\uFF0CdestroyOnClose\uFF09</p><p${_scopeId}>2. \u661F\u7EA7\u8BC4\u5206\uFF08Rate \u7EC4\u4EF6\uFF0C1-5\u661F\uFF0C\u5FC5\u586B\uFF0CallowHalf=false\uFF0CallowClear\uFF09</p><p${_scopeId}>3. \u8BC4\u4EF7\u5185\u5BB9\uFF08TextArea\uFF0Cname=evaluateContent\uFF0C\u6700\u591A500\u5B57\uFF0CshowLengthInfo\uFF09</p><p${_scopeId}>4. \u70B9\u51FB\u786E\u8BA4\uFF1A</p><p${_scopeId}>- \u6821\u9A8C\u8868\u5355 <code${_scopeId}>evaluateFormDs.validate()</code></p><p${_scopeId}>- \u8C03\u7528 <code${_scopeId}>POST feedback/evaluate</code> \u63A5\u53E3\u63D0\u4EA4\u8BC4\u4EF7</p><p${_scopeId}>- \u6210\u529F\u540E\u5237\u65B0\u5217\u8868 <code${_scopeId}>tableDS.query()</code></p><p${_scopeId}>5. \u70B9\u51FB\u53D6\u6D88\uFF1A\u91CD\u7F6E\u8868\u5355 <code${_scopeId}>evaluateFormDs.reset()</code></p>`);
      } else {
        return [
          createVNode("h4", null, "\u5217\u8868\u5DE5\u5177\u680F\u6309\u94AE"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u529F\u80FD\u8BF4\u660E"),
                createVNode("th", null, "\u89E6\u53D1\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u65B0\u589E\u53CD\u9988\u5355"),
                createVNode("td", null, "\u5217\u8868\u5DE5\u5177\u680F"),
                createVNode("td", null, "\u8DF3\u8F6C\u65B0\u589E\u53CD\u9988\u5355\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5217\u8868\u5DE5\u5177\u680F"),
                createVNode("td", null, "\u5BFC\u51FA\u53CD\u9988\u5355\u5217\u8868\u5230 Excel"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528")
              ])
            ])
          ]),
          createVNode("h4", null, "\u5217\u8868\u884C\u64CD\u4F5C\u6309\u94AE"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u529F\u80FD\u8BF4\u660E"),
                createVNode("th", null, "\u89E6\u53D1\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u8DF3\u8F6C\u7F16\u8F91\u53CD\u9988\u5355\u8BE6\u60C5\u9875"),
                createVNode("td", null, "state=1\uFF08\u8349\u7A3F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5220\u9664\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "state=1\uFF08\u8349\u7A3F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u53D6\u6D88"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "state \u4E0D\u5728 [6,7,8]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u8BC4\u4EF7"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97"),
                createVNode("td", null, "state=6\uFF08\u5DF2\u5B8C\u6210\uFF09")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u65B0\u589E\u53CD\u9988\u5355\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u65B0\u589E\u53CD\u9988\u5355"\u6309\u94AE')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u8C03\u7528 "),
            createVNode("code", null, "openTab"),
            createTextVNode(" \u6253\u5F00\u65B0\u6807\u7B7E\u9875")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/afterSales/dealer/feedback/add")
          ]),
          createVNode("p", null, "3. \u5728\u8BE6\u60C5\u9875\u586B\u5199\u53CD\u9988\u4FE1\u606F\u540E\u4FDD\u5B58\u63D0\u4EA4"),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u5BFC\u51FA"\u6309\u94AE')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, "1. \u6536\u96C6\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6"),
          createVNode("p", null, [
            createTextVNode("2. \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/distributor/export"),
            createTextVNode(" \u63A5\u53E3\u5BFC\u51FA")
          ]),
          createVNode("p", null, "3. \u6D4F\u89C8\u5668\u4E0B\u8F7D Excel \u6587\u4EF6"),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state=1\uFF08\u8349\u7A3F\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u7F16\u8F91"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u8C03\u7528 "),
            createVNode("code", null, "openTab"),
            createTextVNode(" \u6253\u5F00\u65B0\u6807\u7B7E\u9875")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/afterSales/dealer/feedback/edit/${id}")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u8C03\u7528 "),
            createVNode("code", null, "GET feedback/detail/${id}"),
            createTextVNode(" \u52A0\u8F7D\u8BE6\u60C5")
          ]),
          createVNode("p", null, [
            createTextVNode("4. \u4FEE\u6539\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/save"),
            createTextVNode(" \u4FDD\u5B58")
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state=1\uFF08\u8349\u7A3F\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u5220\u9664"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, '1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A"\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"'),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "DELETE feedback/delete/${id}"),
            createTextVNode(" \u63A5\u53E3")
          ]),
          createVNode("p", null, "3. \u6210\u529F\u540E\u5237\u65B0\u5217\u8868"),
          createVNode("h4", null, "\u6309\u94AE5\uFF1A\u53D6\u6D88\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state \u4E0D\u5728 [6,7,8] \u7684\u53CD\u9988\u5355\u70B9\u51FB"\u53D6\u6D88"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, '1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A"\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"'),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/cancel/${id}"),
            createTextVNode(" \u63A5\u53E3")
          ]),
          createVNode("p", null, "3. \u6210\u529F\u540E\u5237\u65B0\u5217\u8868"),
          createVNode("h4", null, "\u6309\u94AE6\uFF1A\u8BC4\u4EF7\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state=6\uFF08\u5DF2\u5B8C\u6210\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u8BC4\u4EF7"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, "1. \u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\uFF08Modal\uFF0Csize=large\uFF0Cclosable\uFF0Cresizable\uFF0CdestroyOnClose\uFF09"),
          createVNode("p", null, "2. \u661F\u7EA7\u8BC4\u5206\uFF08Rate \u7EC4\u4EF6\uFF0C1-5\u661F\uFF0C\u5FC5\u586B\uFF0CallowHalf=false\uFF0CallowClear\uFF09"),
          createVNode("p", null, "3. \u8BC4\u4EF7\u5185\u5BB9\uFF08TextArea\uFF0Cname=evaluateContent\uFF0C\u6700\u591A500\u5B57\uFF0CshowLengthInfo\uFF09"),
          createVNode("p", null, "4. \u70B9\u51FB\u786E\u8BA4\uFF1A"),
          createVNode("p", null, [
            createTextVNode("- \u6821\u9A8C\u8868\u5355 "),
            createVNode("code", null, "evaluateFormDs.validate()")
          ]),
          createVNode("p", null, [
            createTextVNode("- \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/evaluate"),
            createTextVNode(" \u63A5\u53E3\u63D0\u4EA4\u8BC4\u4EF7")
          ]),
          createVNode("p", null, [
            createTextVNode("- \u6210\u529F\u540E\u5237\u65B0\u5217\u8868 "),
            createVNode("code", null, "tableDS.query()")
          ]),
          createVNode("p", null, [
            createTextVNode("5. \u70B9\u51FB\u53D6\u6D88\uFF1A\u91CD\u7F6E\u8868\u5355 "),
            createVNode("code", null, "evaluateFormDs.reset()")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u8BE6\u60C5\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u8BE6\u60C5\u9875\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/dealer/detail.tsx</code>\uFF0C\u8BE6\u60C5\u9875\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/common/stores/detailConfig.tsx</code>\u3002</p><h4${_scopeId}>\u8BE6\u60C5\u9875\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u4EBA</td><td${_scopeId}>CONTACTS_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u4EBA\u59D3\u540D</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>PHONE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6B63\u5219\u6821\u9A8C\uFF08\u56FA\u8BDD/\u624B\u673A\u53F7\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u5730\u5740</td><td${_scopeId}>ADDRESS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u5730\u5740</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_CODE\`\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B</td><td${_scopeId}>\u53CD\u9988\u7C7B\u578B\u4E0D\u4E3A\u7A7A\u4E14\u4E0D\u4E3A&#39;10&#39;\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_SUB_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B\uFF0CtypeCode &amp;&amp; typeCode !== &#39;10&#39; \u65F6\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>TYPE_DETAIL_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>\u53CD\u9988\u7C7B\u578B=&#39;1&#39;\u4E14\u5B50\u7C7B\u578B\u4E0D\u4E3A&#39;1-7&#39;\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_DETAIL_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u5B50\u7C7B\u578B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>CONTENT</td><td${_scopeId}>TextArea</td><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF08isAdd/isEdit\uFF09\uFF0CmaxLength=2000\uFF0CshowLengthInfo</td></tr><tr${_scopeId}><td${_scopeId}>\u518D\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>COMMENT_CONTENT</td><td${_scopeId}>TextArea</td><td${_scopeId}>\u518D\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF08isDetail &amp;&amp; [4,5].includes(state)\uFF09\uFF0CmaxLength=2000</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u9644\u4EF6</td><td${_scopeId}>ATTACHMENT</td><td${_scopeId}>Attachment</td><td${_scopeId}>\u53CD\u9988\u9644\u4EF6</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91/\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A</td><td${_scopeId}>\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u6587\u4EF6\uFF0C\u5355\u6587\u4EF6\u6700\u592730M\uFF0C\u6700\u591A20\u4E2A</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB\uFF08disabled\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB\uFF0C\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DateTimePicker</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>DISTRIBUTOR_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6240\u5C5E\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u6682\u5B58</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u4FDD\u5B58\u53CD\u9988\u5355\u8349\u7A3F</td><td${_scopeId}>isAdd/isEdit \u4E14 state\u22602</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u63D0\u4EA4\u53CD\u9988\u5355</td><td${_scopeId}>isAdd/isEdit \u4E14 (!state \\</td><td${_scopeId}>\\</td><td${_scopeId}>state=1)</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u53D6\u6D88</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u53D6\u6D88\u53CD\u9988\u5355</td><td${_scopeId}>isEdit/isDetail \u4E14 state \u5728 [1,3,4,5]</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u518D\u53CD\u9988</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u5BF9\u5DF2\u56DE\u7B54\u7684\u95EE\u9898\u8FFD\u52A0\u53CD\u9988</td><td${_scopeId}>isDetail \u4E14 state \u5728 [4,5]</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91</h4><h5${_scopeId}>\u6309\u94AE1\uFF1A\u6682\u5B58\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u6682\u5B58&quot;\u6309\u94AE\uFF08isAdd/isEdit \u4E14 state\u22602\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u8C03\u7528 <code${_scopeId}>POST feedback/save</code> \u63A5\u53E3\u4FDD\u5B58\u53CD\u9988\u5355\u8349\u7A3F</p><p${_scopeId}>2. \u63D0\u4EA4\u6570\u636E\uFF1A<code${_scopeId}>getFormData()</code>\uFF08\u5305\u542B\u8868\u5355\u6570\u636E\u548C\u9644\u4EF6\u5217\u8868\uFF09</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h5${_scopeId}>\u6309\u94AE2\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u63D0\u4EA4&quot;\u6309\u94AE\uFF08isAdd/isEdit \u4E14 (!state \\|\\| state=1)\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5148\u6821\u9A8C\u8868\u5355 <code${_scopeId}>baseFormDS.validate()</code></p><p${_scopeId}>2. \u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/submit</code> \u63A5\u53E3\u63D0\u4EA4\u53CD\u9988\u5355</p><p${_scopeId}>3. \u63D0\u4EA4\u6570\u636E\uFF1A<code${_scopeId}>getFormData()</code></p><p${_scopeId}>4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h5${_scopeId}>\u6309\u94AE3\uFF1A\u53D6\u6D88\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u53D6\u6D88&quot;\u6309\u94AE\uFF08isEdit/isDetail \u4E14 state \u5728 [1,3,4,5]\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846 <code${_scopeId}>Modal.confirm({ title: &#39;\u63D0\u793A&#39;, children: &#39;\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\uFF1F&#39; })</code></p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/cancel/\${id}</code> \u63A5\u53E3\u53D6\u6D88\u53CD\u9988\u5355</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h5${_scopeId}>\u6309\u94AE4\uFF1A\u518D\u53CD\u9988\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u518D\u53CD\u9988&quot;\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5148\u6821\u9A8C\u8868\u5355 <code${_scopeId}>baseFormDS.validate()</code></p><p${_scopeId}>2. \u63D0\u53D6\u518D\u53CD\u9988\u5185\u5BB9\uFF1A<code${_scopeId}>{ commentContent, id, fileDTOList: attachmentsRef.current }</code></p><p${_scopeId}>3. \u8C03\u7528 <code${_scopeId}>POST feedback/comment</code> \u63A5\u53E3\u63D0\u4EA4\u518D\u53CD\u9988\u5185\u5BB9</p><p${_scopeId}>4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h4${_scopeId}>\u8BE6\u60C5\u9875\u7EC4\u4EF6</h4><h5${_scopeId}>\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF08FeedbackChat\uFF09</h5><p${_scopeId}>\u8BE6\u60C5\u9875\u5E95\u90E8\u5C55\u793A\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF0C\u4EE5\u804A\u5929\u6C14\u6CE1\u5F62\u5F0F\u5C55\u793A\u53CD\u9988\u548C\u56DE\u590D\u7684\u5386\u53F2\u8BB0\u5F55\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u6BCF\u6761\u8BB0\u5F55\u663E\u793A\u64CD\u4F5C\u4EBA\u3001\u6240\u5C5E\u95E8\u5E97\u3001\u64CD\u4F5C\u65F6\u95F4</li><li${_scopeId}>\u7ECF\u9500\u5546\u6D88\u606F\u5728\u5DE6\u4FA7\uFF0C\u4E8B\u4E1A\u90E8\u6D88\u606F\u5728\u53F3\u4FA7\uFF08\u6839\u636E <code${_scopeId}>from</code> \u53C2\u6570\u5224\u65AD\uFF09</li><li${_scopeId}>\u652F\u6301\u56FE\u7247\u9884\u89C8\uFF08Picture \u7EC4\u4EF6\uFF09\u3001\u89C6\u9891\u64AD\u653E\uFF08video \u6807\u7B7E\uFF09\u3001\u6587\u4EF6\u4E0B\u8F7D\uFF08a \u6807\u7B7E\uFF09</li><li${_scopeId}>\u9644\u4EF6\u6309 tab \u5206\u7EC4\u5C55\u793A</li></ul><h5${_scopeId}>\u8BC4\u4EF7\u7EC4\u4EF6\uFF08Evaluation\uFF09</h5><p${_scopeId}>\u5F53\u8BE6\u60C5\u9875 state=7\uFF08\u5DF2\u8BC4\u4EF7\uFF09\u65F6\uFF0C\u5C55\u793A\u8BC4\u4EF7\u7EC4\u4EF6\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u663E\u793A\u8BC4\u4EF7\u661F\u7EA7\uFF08Rate \u7EC4\u4EF6\uFF0CallowHalf\uFF0CallowClear\uFF0Cdisabled\uFF09</li><li${_scopeId}>\u663E\u793A\u8BC4\u4EF7\u5185\u5BB9\uFF08TextArea\uFF0Cdisabled\uFF09</li><li${_scopeId}>\u6570\u636E\u901A\u8FC7 <code${_scopeId}>evaluationRef.current?.loadData()</code> \u52A0\u8F7D</li></ul>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u8BE6\u60C5\u9875\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/dealer/detail.tsx"),
            createTextVNode("\uFF0C\u8BE6\u60C5\u9875\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/common/stores/detailConfig.tsx"),
            createTextVNode("\u3002")
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u5B57\u6BB5"),
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
                createVNode("td", null, "\u8054\u7CFB\u4EBA"),
                createVNode("td", null, "CONTACTS_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u4EBA\u59D3\u540D"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "PHONE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u6B63\u5219\u6821\u9A8C\uFF08\u56FA\u8BDD/\u624B\u673A\u53F7\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8054\u7CFB\u5730\u5740"),
                createVNode("td", null, "ADDRESS"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u8054\u7CFB\u5730\u5740"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u7C7B\u578B"),
                createVNode("td", null, "TYPE_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u95EE\u9898\u5927\u7C7B"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_CODE`\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5B50\u7C7B\u578B"),
                createVNode("td", null, "TYPE_SUP_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u95EE\u9898\u5B50\u7C7B"),
                createVNode("td", null, "\u53CD\u9988\u7C7B\u578B\u4E0D\u4E3A\u7A7A\u4E14\u4E0D\u4E3A'10'\u65F6\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_SUB_CODE`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B\uFF0CtypeCode && typeCode !== '10' \u65F6\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7EC6\u5206"),
                createVNode("td", null, "TYPE_DETAIL_CODE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u4EA7\u54C1\u7EC6\u5206"),
                createVNode("td", null, "\u53CD\u9988\u7C7B\u578B='1'\u4E14\u5B50\u7C7B\u578B\u4E0D\u4E3A'1-7'\u65F6\u663E\u793A"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_DETAIL_CODE`\uFF0C\u7EA7\u8054\u53CD\u9988\u5B50\u7C7B\u578B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "CONTENT"),
                createVNode("td", null, "TextArea"),
                createVNode("td", null, "\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF08isAdd/isEdit\uFF09\uFF0CmaxLength=2000\uFF0CshowLengthInfo")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u518D\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "COMMENT_CONTENT"),
                createVNode("td", null, "TextArea"),
                createVNode("td", null, "\u518D\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF08isDetail && [4,5].includes(state)\uFF09\uFF0CmaxLength=2000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u9644\u4EF6"),
                createVNode("td", null, "ATTACHMENT"),
                createVNode("td", null, "Attachment"),
                createVNode("td", null, "\u53CD\u9988\u9644\u4EF6"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91/\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A"),
                createVNode("td", null, "\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u6587\u4EF6\uFF0C\u5355\u6587\u4EF6\u6700\u592730M\uFF0C\u6700\u591A20\u4E2A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5355\u53F7"),
                createVNode("td", null, "QUESTIONID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB\uFF08disabled\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "STATE"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB\uFF0C\u503C\u96C6 `MBO.FEEDBACK_STATE`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DateTimePicker"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u4EBA"),
                createVNode("td", null, "CREATE_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u4EBA"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "DISTRIBUTOR_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6240\u5C5E\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6240\u5C5E\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u6309\u94AE"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5E8F\u53F7"),
                createVNode("th", null, "\u6309\u94AE\u540D\u79F0"),
                createVNode("th", null, "\u6240\u5728\u4F4D\u7F6E"),
                createVNode("th", null, "\u529F\u80FD\u8BF4\u660E"),
                createVNode("th", null, "\u89E6\u53D1\u6761\u4EF6")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u6682\u5B58"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u4FDD\u5B58\u53CD\u9988\u5355\u8349\u7A3F"),
                createVNode("td", null, "isAdd/isEdit \u4E14 state\u22602")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u63D0\u4EA4\u53CD\u9988\u5355"),
                createVNode("td", null, "isAdd/isEdit \u4E14 (!state \\"),
                createVNode("td", null, "\\"),
                createVNode("td", null, "state=1)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u53D6\u6D88"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u53D6\u6D88\u53CD\u9988\u5355"),
                createVNode("td", null, "isEdit/isDetail \u4E14 state \u5728 [1,3,4,5]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u518D\u53CD\u9988"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u5BF9\u5DF2\u56DE\u7B54\u7684\u95EE\u9898\u8FFD\u52A0\u53CD\u9988"),
                createVNode("td", null, "isDetail \u4E14 state \u5728 [4,5]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91"),
          createVNode("h5", null, "\u6309\u94AE1\uFF1A\u6682\u5B58\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u6682\u5B58"\u6309\u94AE\uFF08isAdd/isEdit \u4E14 state\u22602\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/save"),
            createTextVNode(" \u63A5\u53E3\u4FDD\u5B58\u53CD\u9988\u5355\u8349\u7A3F")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u63D0\u4EA4\u6570\u636E\uFF1A"),
            createVNode("code", null, "getFormData()"),
            createTextVNode("\uFF08\u5305\u542B\u8868\u5355\u6570\u636E\u548C\u9644\u4EF6\u5217\u8868\uFF09")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h5", null, "\u6309\u94AE2\uFF1A\u63D0\u4EA4\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u63D0\u4EA4"\u6309\u94AE\uFF08isAdd/isEdit \u4E14 (!state \\|\\| state=1)\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5148\u6821\u9A8C\u8868\u5355 "),
            createVNode("code", null, "baseFormDS.validate()")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u6821\u9A8C\u901A\u8FC7\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/submit"),
            createTextVNode(" \u63A5\u53E3\u63D0\u4EA4\u53CD\u9988\u5355")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u63D0\u4EA4\u6570\u636E\uFF1A"),
            createVNode("code", null, "getFormData()")
          ]),
          createVNode("p", null, [
            createTextVNode("4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h5", null, "\u6309\u94AE3\uFF1A\u53D6\u6D88\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u53D6\u6D88"\u6309\u94AE\uFF08isEdit/isDetail \u4E14 state \u5728 [1,3,4,5]\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5F39\u51FA\u786E\u8BA4\u6846 "),
            createVNode("code", null, "Modal.confirm({ title: '\u63D0\u793A', children: '\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\uFF1F' })")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/cancel/${id}"),
            createTextVNode(" \u63A5\u53E3\u53D6\u6D88\u53CD\u9988\u5355")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h5", null, "\u6309\u94AE4\uFF1A\u518D\u53CD\u9988\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u518D\u53CD\u9988"\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5148\u6821\u9A8C\u8868\u5355 "),
            createVNode("code", null, "baseFormDS.validate()")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u63D0\u53D6\u518D\u53CD\u9988\u5185\u5BB9\uFF1A"),
            createVNode("code", null, "{ commentContent, id, fileDTOList: attachmentsRef.current }")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/comment"),
            createTextVNode(" \u63A5\u53E3\u63D0\u4EA4\u518D\u53CD\u9988\u5185\u5BB9")
          ]),
          createVNode("p", null, [
            createTextVNode("4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u7EC4\u4EF6"),
          createVNode("h5", null, "\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF08FeedbackChat\uFF09"),
          createVNode("p", null, "\u8BE6\u60C5\u9875\u5E95\u90E8\u5C55\u793A\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF0C\u4EE5\u804A\u5929\u6C14\u6CE1\u5F62\u5F0F\u5C55\u793A\u53CD\u9988\u548C\u56DE\u590D\u7684\u5386\u53F2\u8BB0\u5F55\uFF1A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u6BCF\u6761\u8BB0\u5F55\u663E\u793A\u64CD\u4F5C\u4EBA\u3001\u6240\u5C5E\u95E8\u5E97\u3001\u64CD\u4F5C\u65F6\u95F4"),
            createVNode("li", null, [
              createTextVNode("\u7ECF\u9500\u5546\u6D88\u606F\u5728\u5DE6\u4FA7\uFF0C\u4E8B\u4E1A\u90E8\u6D88\u606F\u5728\u53F3\u4FA7\uFF08\u6839\u636E "),
              createVNode("code", null, "from"),
              createTextVNode(" \u53C2\u6570\u5224\u65AD\uFF09")
            ]),
            createVNode("li", null, "\u652F\u6301\u56FE\u7247\u9884\u89C8\uFF08Picture \u7EC4\u4EF6\uFF09\u3001\u89C6\u9891\u64AD\u653E\uFF08video \u6807\u7B7E\uFF09\u3001\u6587\u4EF6\u4E0B\u8F7D\uFF08a \u6807\u7B7E\uFF09"),
            createVNode("li", null, "\u9644\u4EF6\u6309 tab \u5206\u7EC4\u5C55\u793A")
          ]),
          createVNode("h5", null, "\u8BC4\u4EF7\u7EC4\u4EF6\uFF08Evaluation\uFF09"),
          createVNode("p", null, "\u5F53\u8BE6\u60C5\u9875 state=7\uFF08\u5DF2\u8BC4\u4EF7\uFF09\u65F6\uFF0C\u5C55\u793A\u8BC4\u4EF7\u7EC4\u4EF6\uFF1A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u663E\u793A\u8BC4\u4EF7\u661F\u7EA7\uFF08Rate \u7EC4\u4EF6\uFF0CallowHalf\uFF0CallowClear\uFF0Cdisabled\uFF09"),
            createVNode("li", null, "\u663E\u793A\u8BC4\u4EF7\u5185\u5BB9\uFF08TextArea\uFF0Cdisabled\uFF09"),
            createVNode("li", null, [
              createTextVNode("\u6570\u636E\u901A\u8FC7 "),
              createVNode("code", null, "evaluationRef.current?.loadData()"),
              createTextVNode(" \u52A0\u8F7D")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u8BC4\u4EF7\u5F39\u7A97</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5728\u5217\u8868\u9875\u9009\u62E9 state=6\uFF08\u5DF2\u5B8C\u6210\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u8BC4\u4EF7&quot;\u6309\u94AE</p><p${_scopeId}><strong${_scopeId}>\u5F39\u7A97\u914D\u7F6E</strong>\uFF1A<code${_scopeId}>Modal.open({ title: &#39;\u8BC4\u4EF7&#39;, size: &#39;large&#39;, closable: true, resizable: true, destroyOnClose: true })</code></p><p${_scopeId}><strong${_scopeId}>\u5F39\u7A97\u5185\u5BB9</strong>\uFF1A</p><ul${_scopeId}><li${_scopeId}>Form \u7EC4\u4EF6\u7ED1\u5B9A <code${_scopeId}>evaluateFormDs</code>\uFF08autoCreate: true\uFF09</li><li${_scopeId}>Rate \u7EC4\u4EF6\uFF1Aname=&#39;grade&#39;\uFF0CallowHalf=false\uFF0CallowClear\uFF0Chelp \u663E\u793A\u661F\u7EA7\u8BF4\u660E\uFF085\u661F=\u975E\u5E38\u6EE1\u610F\uFF0C1\u661F=\u975E\u5E38\u4E0D\u6EE1\u610F\uFF09</li><li${_scopeId}>TextArea \u7EC4\u4EF6\uFF1Aname=&#39;evaluateContent&#39;\uFF0Clabel=&#39;\u8BC4\u4EF7\u5185\u5BB9&#39;\uFF0CmaxLength=500\uFF0CshowLengthInfo</li></ul><p${_scopeId}><strong${_scopeId}>\u5165\u53C2\u8868\u683C</strong>\uFF1A</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u5FC5\u586B</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>id</td><td${_scopeId}>Long</td><td${_scopeId}>\u662F</td><td${_scopeId}>\u53CD\u9988\u5355ID\uFF08\u53D6\u81EA\u5F53\u524D\u884C\u8BB0\u5F55\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>grade</td><td${_scopeId}>Long</td><td${_scopeId}>\u662F</td><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7\uFF081-5\uFF09\uFF0CRate \u7EC4\u4EF6</td></tr><tr${_scopeId}><td${_scopeId}>evaluateContent</td><td${_scopeId}>String</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9\uFF08\u6700\u591A500\u5B57\uFF09\uFF0CTextArea \u7EC4\u4EF6</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u63D0\u4EA4\u63A5\u53E3</strong>\uFF1A<code${_scopeId}>POST feedback/evaluate</code></p><p${_scopeId}><strong${_scopeId}>\u63D0\u4EA4\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u70B9\u51FB\u786E\u5B9A\uFF08onOk\uFF09\uFF1A</p><p${_scopeId}>- \u6821\u9A8C\u8868\u5355 <code${_scopeId}>evaluateFormDs.validate()</code></p><p${_scopeId}>- \u6821\u9A8C\u5931\u8D25\u8FD4\u56DE false\uFF0C\u963B\u6B62\u5F39\u7A97\u5173\u95ED</p><p${_scopeId}>- \u6821\u9A8C\u901A\u8FC7\u8C03\u7528 <code${_scopeId}>POST feedback/evaluate</code> \u63A5\u53E3</p><p${_scopeId}>- \u63D0\u4EA4\u6570\u636E\uFF1A<code${_scopeId}>{ ...evaluateFormDs.current?.toData(), id: record?.get(&#39;id&#39;) }</code></p><p${_scopeId}>- \u6210\u529F\u540E\u5237\u65B0\u5217\u8868 <code${_scopeId}>tableDS.query()</code></p><p${_scopeId}>2. \u70B9\u51FB\u53D6\u6D88\uFF08onCancel\uFF09\uFF1A</p><p${_scopeId}>- \u91CD\u7F6E\u8868\u5355 <code${_scopeId}>evaluateFormDs.reset()</code></p>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u8BC4\u4EF7\u5F39\u7A97"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u5728\u5217\u8868\u9875\u9009\u62E9 state=6\uFF08\u5DF2\u5B8C\u6210\uFF09\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u8BC4\u4EF7"\u6309\u94AE')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u5F39\u7A97\u914D\u7F6E"),
            createTextVNode("\uFF1A"),
            createVNode("code", null, "Modal.open({ title: '\u8BC4\u4EF7', size: 'large', closable: true, resizable: true, destroyOnClose: true })")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u5F39\u7A97\u5185\u5BB9"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createTextVNode("Form \u7EC4\u4EF6\u7ED1\u5B9A "),
              createVNode("code", null, "evaluateFormDs"),
              createTextVNode("\uFF08autoCreate: true\uFF09")
            ]),
            createVNode("li", null, "Rate \u7EC4\u4EF6\uFF1Aname='grade'\uFF0CallowHalf=false\uFF0CallowClear\uFF0Chelp \u663E\u793A\u661F\u7EA7\u8BF4\u660E\uFF085\u661F=\u975E\u5E38\u6EE1\u610F\uFF0C1\u661F=\u975E\u5E38\u4E0D\u6EE1\u610F\uFF09"),
            createVNode("li", null, "TextArea \u7EC4\u4EF6\uFF1Aname='evaluateContent'\uFF0Clabel='\u8BC4\u4EF7\u5185\u5BB9'\uFF0CmaxLength=500\uFF0CshowLengthInfo")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u5165\u53C2\u8868\u683C"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570\u540D"),
                createVNode("th", null, "\u7C7B\u578B"),
                createVNode("th", null, "\u5FC5\u586B"),
                createVNode("th", null, "\u8BF4\u660E")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "id"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u662F"),
                createVNode("td", null, "\u53CD\u9988\u5355ID\uFF08\u53D6\u81EA\u5F53\u524D\u884C\u8BB0\u5F55\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "grade"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u662F"),
                createVNode("td", null, "\u8BC4\u4EF7\u661F\u7EA7\uFF081-5\uFF09\uFF0CRate \u7EC4\u4EF6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "evaluateContent"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9\uFF08\u6700\u591A500\u5B57\uFF09\uFF0CTextArea \u7EC4\u4EF6")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u63D0\u4EA4\u63A5\u53E3"),
            createTextVNode("\uFF1A"),
            createVNode("code", null, "POST feedback/evaluate")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u63D0\u4EA4\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, "1. \u70B9\u51FB\u786E\u5B9A\uFF08onOk\uFF09\uFF1A"),
          createVNode("p", null, [
            createTextVNode("- \u6821\u9A8C\u8868\u5355 "),
            createVNode("code", null, "evaluateFormDs.validate()")
          ]),
          createVNode("p", null, "- \u6821\u9A8C\u5931\u8D25\u8FD4\u56DE false\uFF0C\u963B\u6B62\u5F39\u7A97\u5173\u95ED"),
          createVNode("p", null, [
            createTextVNode("- \u6821\u9A8C\u901A\u8FC7\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/evaluate"),
            createTextVNode(" \u63A5\u53E3")
          ]),
          createVNode("p", null, [
            createTextVNode("- \u63D0\u4EA4\u6570\u636E\uFF1A"),
            createVNode("code", null, "{ ...evaluateFormDs.current?.toData(), id: record?.get('id') }")
          ]),
          createVNode("p", null, [
            createTextVNode("- \u6210\u529F\u540E\u5237\u65B0\u5217\u8868 "),
            createVNode("code", null, "tableDS.query()")
          ]),
          createVNode("p", null, "2. \u70B9\u51FB\u53D6\u6D88\uFF08onCancel\uFF09\uFF1A"),
          createVNode("p", null, [
            createTextVNode("- \u91CD\u7F6E\u8868\u5355 "),
            createVNode("code", null, "evaluateFormDs.reset()")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u95EE\u9898\u6807\u9898\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u53CD\u9988\u5355\u6709\u660E\u786E\u7684\u95EE\u9898\u6982\u8FF0</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u95EE\u9898\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5206\u7C7B\u6E05\u6670\uFF0C\u4FBF\u4E8E\u5206\u6D3E\u5904\u7406</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u95EE\u9898\u63CF\u8FF0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5185\u5BB9\u5B8C\u6574\uFF0C\u4FBF\u4E8E\u5904\u7406\u4EBA\u5B9A\u4F4D\u95EE\u9898</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u95EE\u9898\u6807\u9898\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u53CD\u9988\u5355\u6709\u660E\u786E\u7684\u95EE\u9898\u6982\u8FF0"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u95EE\u9898\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5206\u7C7B\u6E05\u6670\uFF0C\u4FBF\u4E8E\u5206\u6D3E\u5904\u7406"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u95EE\u9898\u63CF\u8FF0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5185\u5BB9\u5B8C\u6574\uFF0C\u4FBF\u4E8E\u5904\u7406\u4EBA\u5B9A\u4F4D\u95EE\u9898")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u95EE\u9898\u6807\u9898\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u53CD\u9988\u5355\u6709\u660E\u786E\u7684\u95EE\u9898\u6982\u8FF0</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u95EE\u9898\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5206\u7C7B\u6E05\u6670</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u95EE\u9898\u63CF\u8FF0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5185\u5BB9\u5B8C\u6574</li><li${_scopeId}>\u6821\u9A8C4\uFF1A\u8349\u7A3F\u72B6\u6001\u624D\u80FD\u63D0\u4EA4 \u2014\u2014 \u4EC5\u8349\u7A3F\u72B6\u6001\u53CD\u9988\u5355\u53EF\u63D0\u4EA4\uFF0C\u63D0\u4EA4\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u63D0\u4EA4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u95EE\u9898\u6807\u9898\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u53CD\u9988\u5355\u6709\u660E\u786E\u7684\u95EE\u9898\u6982\u8FF0"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u95EE\u9898\u7C7B\u578B\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5206\u7C7B\u6E05\u6670"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u95EE\u9898\u63CF\u8FF0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u95EE\u9898\u5185\u5BB9\u5B8C\u6574"),
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u8349\u7A3F\u72B6\u6001\u624D\u80FD\u63D0\u4EA4 \u2014\u2014 \u4EC5\u8349\u7A3F\u72B6\u6001\u53CD\u9988\u5355\u53EF\u63D0\u4EA4\uFF0C\u63D0\u4EA4\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u63D0\u4EA4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u8349\u7A3F] \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 [\u5DF2\u63D0\u4EA4] \u2500\u2500\u4E8B\u4E1A\u90E8\u53D7\u7406\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54] \u2500\u2500\u5B8C\u6210\u2500\u2500\u2192 [\u5DF2\u5B8C\u6210]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                    |</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                    \u2514\u2500\u2500\u53D6\u6D88\u2500\u2500\u2192 [\u5DF2\u53D6\u6D88]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5DF2\u56DE\u7B54] \u2500\u2500\u7ECF\u9500\u5546\u91CD\u65B0\u53CD\u9988\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54]</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8349\u7A3F</td><td${_scopeId}>\u63D0\u4EA4</td><td${_scopeId}>\u5DF2\u63D0\u4EA4</td></tr><tr${_scopeId}><td${_scopeId}>\u8349\u7A3F</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\uFF08\u5220\u9664\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u63D0\u4EA4</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u53D7\u7406</td><td${_scopeId}>\u5904\u7406\u4E2D</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u63D0\u4EA4</td><td${_scopeId}>\u53D6\u6D88</td><td${_scopeId}>\u5DF2\u53D6\u6D88</td></tr><tr${_scopeId}><td${_scopeId}>\u5904\u7406\u4E2D</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54</td><td${_scopeId}>\u5DF2\u56DE\u7B54</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u56DE\u7B54</td><td${_scopeId}>\u7ECF\u9500\u5546\u91CD\u65B0\u53CD\u9988</td><td${_scopeId}>\u5904\u7406\u4E2D</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u56DE\u7B54</td><td${_scopeId}>\u5B8C\u6210</td><td${_scopeId}>\u5DF2\u5B8C\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5B8C\u6210</td><td${_scopeId}>\u8BC4\u4EF7</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u8349\u7A3F] \u2500\u2500\u63D0\u4EA4\u2500\u2500\u2192 [\u5DF2\u63D0\u4EA4] \u2500\u2500\u4E8B\u4E1A\u90E8\u53D7\u7406\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54] \u2500\u2500\u5B8C\u6210\u2500\u2500\u2192 [\u5DF2\u5B8C\u6210]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                    |")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                    \u2514\u2500\u2500\u53D6\u6D88\u2500\u2500\u2192 [\u5DF2\u53D6\u6D88]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5DF2\u56DE\u7B54] \u2500\u2500\u7ECF\u9500\u5546\u91CD\u65B0\u53CD\u9988\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
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
                createVNode("td", null, "\u8349\u7A3F"),
                createVNode("td", null, "\u63D0\u4EA4"),
                createVNode("td", null, "\u5DF2\u63D0\u4EA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8349\u7A3F"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\uFF08\u5220\u9664\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u63D0\u4EA4"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u53D7\u7406"),
                createVNode("td", null, "\u5904\u7406\u4E2D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u63D0\u4EA4"),
                createVNode("td", null, "\u53D6\u6D88"),
                createVNode("td", null, "\u5DF2\u53D6\u6D88")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5904\u7406\u4E2D"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u56DE\u7B54"),
                createVNode("td", null, "\u5DF2\u56DE\u7B54")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u56DE\u7B54"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u91CD\u65B0\u53CD\u9988"),
                createVNode("td", null, "\u5904\u7406\u4E2D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u56DE\u7B54"),
                createVNode("td", null, "\u5B8C\u6210"),
                createVNode("td", null, "\u5DF2\u5B8C\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u5B8C\u6210"),
                createVNode("td", null, "\u8BC4\u4EF7"),
                createVNode("td", null, "\u5DF2\u8BC4\u4EF7")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "FEEDBACK\uFF08\u95EE\u9898\u53CD\u9988\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>QUESTIONID</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>TITLE</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u6807\u9898</td><td${_scopeId}>\u95EE\u9898\u6807\u9898</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u7C7B\u578B\u7F16\u7801</td><td${_scopeId}>\u95EE\u9898\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6\uFF1A\u4EA7\u54C1\u95EE\u9898/\u8BA2\u5355\u95EE\u9898/\u7CFB\u7EDF\u95EE\u9898/\u5176\u4ED6</td></tr><tr${_scopeId}><td${_scopeId}>CONTENT</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u63CF\u8FF0</td><td${_scopeId}>\u95EE\u9898\u63CF\u8FF0</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>STATE</td><td${_scopeId}>Long</td><td${_scopeId}>\u95EE\u9898\u72B6\u6001</td><td${_scopeId}>\u95EE\u9898\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>ANSWER_TIME</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>\u5904\u7406\u65F6\u95F4</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>ANSWER_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u5904\u7406\u4EBA</td><td${_scopeId}>\u5904\u7406\u4EBA</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>GRADE</td><td${_scopeId}>Long</td><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7(1-5)</td><td${_scopeId}>\u8BC4\u4EF7</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>EVALUATE_CONTENT</td><td${_scopeId}>String</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u5173\u8054</td></tr><tr${_scopeId}><td${_scopeId}>ATTACHMENT</td><td${_scopeId}>String</td><td${_scopeId}>\u9644\u4EF6</td><td${_scopeId}>\u9644\u4EF6\u4E0A\u4F20</td><td${_scopeId}>\u6587\u4EF6\u670D\u52A1\u4E0A\u4F20</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "QUESTIONID"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u7F16\u53F7"),
                createVNode("td", null, "\u95EE\u9898\u7F16\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TITLE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u6807\u9898"),
                createVNode("td", null, "\u95EE\u9898\u6807\u9898"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TYPE_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u7C7B\u578B\u7F16\u7801"),
                createVNode("td", null, "\u95EE\u9898\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6\uFF1A\u4EA7\u54C1\u95EE\u9898/\u8BA2\u5355\u95EE\u9898/\u7CFB\u7EDF\u95EE\u9898/\u5176\u4ED6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u63CF\u8FF0"),
                createVNode("td", null, "\u95EE\u9898\u63CF\u8FF0"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u95EE\u9898\u72B6\u6001"),
                createVNode("td", null, "\u95EE\u9898\u72B6\u6001"),
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_STATE`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u95F4"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u95F4"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ANSWER_TIME"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u6700\u65B0\u56DE\u590D\u65F6\u95F4"),
                createVNode("td", null, "\u5904\u7406\u65F6\u95F4"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u63D0\u4EA4\u4EBA"),
                createVNode("td", null, "\u63D0\u4EA4\u4EBA"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ANSWER_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5904\u7406\u4EBA"),
                createVNode("td", null, "\u5904\u7406\u4EBA"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "GRADE"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u8BC4\u4EF7\u661F\u7EA7(1-5)"),
                createVNode("td", null, "\u8BC4\u4EF7"),
                createVNode("td", null, "\u8BC4\u4EF7\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EVALUATE_CONTENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9"),
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9"),
                createVNode("td", null, "\u8BC4\u4EF7\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DISTRIBUTOR_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u5173\u8054")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ATTACHMENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9644\u4EF6"),
                createVNode("td", null, "\u9644\u4EF6\u4E0A\u4F20"),
                createVNode("td", null, "\u6587\u4EF6\u670D\u52A1\u4E0A\u4F20")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPDATE_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u67E5\u8BE2/\u64CD\u4F5C\u65F6</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\uFF1B\u67E5\u770B\u63A5\u53E3\u8FD4\u56DE\u6D88\u606F</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u884C\u64CD\u4F5C\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u6570\u636E\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C</td><td${_scopeId}>\u8B66\u544A</td><td${_scopeId}>\u884C\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</td><td${_scopeId}>\u5220\u9664\u65F6</td><td${_scopeId}>\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u6267\u884C\u5220\u9664</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u5220\u9664\u524D\u786E\u8BA4</td></tr><tr${_scopeId}><td${_scopeId}>\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</td><td${_scopeId}>\u53D6\u6D88\u65F6</td><td${_scopeId}>\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u53D6\u6D88</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u53D6\u6D88\u524D\u786E\u8BA4</td></tr><tr${_scopeId}><td${_scopeId}>\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4\u65F6</td><td${_scopeId}>\`TITLE\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u95EE\u9898\u6807\u9898</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4\u65F6</td><td${_scopeId}>\`TYPE_CODE\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u9009\u62E9\u95EE\u9898\u7C7B\u578B</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4\u65F6</td><td${_scopeId}>\`CONTENT\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u95EE\u9898\u63CF\u8FF0</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA\u65E0\u6570\u636E</td><td${_scopeId}>\u5BFC\u51FA\u65F6</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\uFF1B\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6</td><td${_scopeId}>\u8B66\u544A</td><td${_scopeId}>\u5BFC\u51FA\u524D\u6821\u9A8C\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u7F16\u8F91/\u5220\u9664/\u53D6\u6D88</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u5220\u9664/\u53D6\u6D88/\u91CD\u65B0\u53CD\u9988</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u5B8C\u7ED3\u4E0D\u53EF\u53D6\u6D88\uFF0C\u68C0\u67E5 STATE</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.FEEDBACK_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6</td><td${_scopeId}>OSS\u4E0A\u4F20\u5F02\u5E38\uFF0C\u68C0\u67E5\u5B58\u50A8\u670D\u52A1\u53CA\u6587\u4EF6\u683C\u5F0F</td><td${_scopeId}>error</td><td${_scopeId}>onUploadError \u6216\u65E0 fileUrl</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4\u8BC4\u4EF7</td><td${_scopeId}>\u672A\u9009\u62E9\u8BC4\u4EF7\u661F\u7EA7\uFF0C\u9009\u62E9\u540E\u63D0\u4EA4</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C STAR_LEVEL \u975E\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 feedback/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u6587\u4EF6\u670D\u52A1\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6587\u4EF6\u670D\u52A1\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u3001\u8BC4\u4EF7\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u5355\u9009\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A&quot;\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E&quot;\u3002\u5355\u9009\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u53CD\u9988\u5355\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CREATE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u4EBA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u5220\u9664\u6309\u94AE\u65F6\uFF0C\u5F39\u51FA\u4E8C\u6B21\u786E\u8BA4\u6846</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5220\u9664\u64CD\u4F5C\u524D\u5F39\u51FA\u786E\u8BA4\u6846&quot;\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F&quot;\uFF0C\u7528\u6237\u786E\u8BA4\u540E\u8C03\u7528 DELETE feedback/delete/{id} \u63A5\u53E3\u3002\u4EC5\u8349\u7A3F\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u5220\u9664\uFF0C\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CREATE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(CREATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u5F39\u51FA\u4E8C\u6B21\u786E\u8BA4\u6846</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u53D6\u6D88\u64CD\u4F5C\u524D\u5F39\u51FA\u786E\u8BA4\u6846&quot;\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F&quot;\uFF0C\u7528\u6237\u786E\u8BA4\u540E\u8C03\u7528 POST feedback/cancel/{id} \u63A5\u53E3\u3002\u4EC5\u5DF2\u63D0\u4EA4\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u53D6\u6D88\uFF0C\u53D6\u6D88\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u53D6\u6D88</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CREATE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(CREATE_TIME,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u4EA4\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CTITLE \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 TITLE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u6807\u9898\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u95EE\u9898\u6807\u9898\u662F\u53CD\u9988\u5355\u7684\u6982\u8FF0\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TITLE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CTYPE_CODE \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 TYPE_CODE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u7C7B\u578B\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u95EE\u9898\u7C7B\u578B\u7528\u4E8E\u5206\u7C7B\u7BA1\u7406\u548C\u5206\u6D3E\u5904\u7406\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7C7B\u578B,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CCONTENT \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 CONTENT \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u63CF\u8FF0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u95EE\u9898\u63CF\u8FF0\u662F\u95EE\u9898\u5B9A\u4F4D\u548C\u5904\u7406\u7684\u6838\u5FC3\u4F9D\u636E\uFF0C\u5FC5\u987B\u8BE6\u7EC6\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u63CF\u8FF0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTENT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u5BFC\u51FA\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5BFC\u51FA\u524D\u6821\u9A8C\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u63D0\u793A&quot;\u5BFC\u51FA\u65E0\u6570\u636E&quot;\u3002\u9700\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u786E\u4FDD\u6709\u6570\u636E\u53EF\u5BFC\u51FA</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>30</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u3001\u8BC4\u4EF7\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%feedback%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 questionId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 FEEDBACK \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u95EE\u9898\u7F16\u53F7\u9519\u8BEF\u3001\u53CD\u9988\u5355\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u7B49\u6309\u94AE\u65F6\uFF0C\u53CD\u9988\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5220\u9664\u8981\u6C42 STATE=0\uFF08\u8349\u7A3F\uFF09\u3001\u53D6\u6D88\u8981\u6C42 STATE=1\uFF08\u5DF2\u63D0\u4EA4\uFF09\u3001\u91CD\u65B0\u53CD\u9988\u8981\u6C42 STATE=3\uFF08\u5DF2\u56DE\u7B54\uFF09\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u95EE\u9898\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.FEEDBACK_TYPE\u3001MBO.FEEDBACK_STATE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.FEEDBACK_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.FEEDBACK_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4E0A\u4F20\u53CD\u9988\u5355\u9644\u4EF6\u65F6\uFF0COSS \u4E0A\u4F20\u629B\u9519\u6216\u4E0A\u4F20\u6210\u529F\u4F46\u54CD\u5E94\u65E0 fileUrl</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u4E0A\u4F20\u7EC4\u4EF6 onUploadError \u94A9\u5B50\u6355\u83B7\u4E0A\u4F20\u5F02\u5E38\u63D0\u793A&quot;\u4E0A\u4F20\u5931\u8D25&quot;\uFF0ConUploadSuccess \u94A9\u5B50\u6821\u9A8C\u54CD\u5E94 fileUrl \u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5219\u63D0\u793A&quot;\u4E0A\u4F20\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1AOSS \u5B58\u50A8\u670D\u52A1\u4E0D\u53EF\u7528\u3001bucketName \u914D\u7F6E\u9519\u8BEF\u3001\u6587\u4EF6\u683C\u5F0F\u4E0D\u88AB\u63A5\u53D7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>FILE_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u540D,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6587\u4EF6\u5730\u5740, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u4FE1\u606F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK_FILE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FILE_URL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATION_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BC4\u4EF7\u65F6\uFF0CSTAR_LEVEL \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8BC4\u4EF7\u5F39\u7A97\u5BF9 starLevel \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BC4\u4EF7\u661F\u7EA7\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BC4\u4EF7\u661F\u7EA7\u7528\u4E8E\u91CF\u5316\u53CD\u9988\u5904\u7406\u8D28\u91CF\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         STAR_LEVEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u661F\u7EA7, EVALUATE_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u5185\u5BB9</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> STAR_LEVEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u67E5\u8BE2/\u64CD\u4F5C\u65F6"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\uFF1B\u67E5\u770B\u63A5\u53E3\u8FD4\u56DE\u6D88\u606F"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u63A5\u53E3\u8C03\u7528\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
                createVNode("td", null, "\u884C\u64CD\u4F5C\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6570\u636E\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C"),
                createVNode("td", null, "\u8B66\u544A"),
                createVNode("td", null, "\u884C\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
                createVNode("td", null, "\u5220\u9664\u65F6"),
                createVNode("td", null, "\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u6267\u884C\u5220\u9664"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u5220\u9664\u524D\u786E\u8BA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
                createVNode("td", null, "\u53D6\u6D88\u65F6"),
                createVNode("td", null, "\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u53D6\u6D88"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u53D6\u6D88\u524D\u786E\u8BA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "`TITLE` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u95EE\u9898\u6807\u9898"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "`TYPE_CODE` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u9009\u62E9\u95EE\u9898\u7C7B\u578B"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "`CONTENT` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u95EE\u9898\u63CF\u8FF0"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA\u65E0\u6570\u636E"),
                createVNode("td", null, "\u5BFC\u51FA\u65F6"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\uFF1B\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6"),
                createVNode("td", null, "\u8B66\u544A"),
                createVNode("td", null, "\u5BFC\u51FA\u524D\u6821\u9A8C\u6570\u636E")
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
                createVNode("td", null, "\u7F16\u8F91/\u5220\u9664/\u53D6\u6D88"),
                createVNode("td", null, "\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u5220\u9664/\u53D6\u6D88/\u91CD\u65B0\u53CD\u9988"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u5B8C\u7ED3\u4E0D\u53EF\u53D6\u6D88\uFF0C\u68C0\u67E5 STATE"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.FEEDBACK_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6"),
                createVNode("td", null, "OSS\u4E0A\u4F20\u5F02\u5E38\uFF0C\u68C0\u67E5\u5B58\u50A8\u670D\u52A1\u53CA\u6587\u4EF6\u683C\u5F0F"),
                createVNode("td", null, "error"),
                createVNode("td", null, "onUploadError \u6216\u65E0 fileUrl")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4\u8BC4\u4EF7"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8BC4\u4EF7\u661F\u7EA7\uFF0C\u9009\u62E9\u540E\u63D0\u4EA4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C STAR_LEVEL \u975E\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 feedback/* \u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u8FD4\u56DE HTTP \u72B6\u6001\u7801\u975E 2xx")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u901A\u8FC7 axios \u8C03\u7528\u540E\u7AEF\u63A5\u53E3\uFF0C\u82E5\u54CD\u5E94\u72B6\u6001\u7801\u975E 2xx \u6216\u7F51\u7EDC\u5F02\u5E38\u5219\u89E6\u53D1\u9519\u8BEF\u56DE\u8C03\uFF0C\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\u5305\u62EC\uFF1Ambo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u5F02\u5E38\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\u3001SQL \u6267\u884C\u8D85\u65F6\u3001\u540E\u7AEF\u4E1A\u52A1\u5F02\u5E38\u672A\u6355\u83B7\u3001\u6587\u4EF6\u670D\u52A1\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49\u3002\u9700\u68C0\u67E5 mbo-business \u5FAE\u670D\u52A1\u8FD0\u884C\u72B6\u6001\u3001\u6587\u4EF6\u670D\u52A1\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u65E5\u5FD7\u5B9A\u4F4D\u5177\u4F53\u5F02\u5E38\u5806\u6808')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u3001\u8BC4\u4EF7\u7B49\u884C\u64CD\u4F5C\u6309\u94AE\u65F6\uFF0C\u672A\u9009\u62E9\u6570\u636E\u6216\u9009\u62E9\u4E86\u591A\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u5355\u9009\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C\u6570\u91CF\uFF0C\u82E5 selectedRows.length \u2260 1 \u5219\u963B\u6B62\u64CD\u4F5C\u5E76\u63D0\u793A"\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E"\u3002\u5355\u9009\u64CD\u4F5C\u9700\u8981\u660E\u786E\u7684\u76EE\u6807\u53CD\u9988\u5355\uFF0C\u672A\u9009\u62E9\u65F6\u65E0\u6CD5\u786E\u5B9A\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u591A\u9009\u65F6\u64CD\u4F5C\u5BF9\u8C61\u4E0D\u552F\u4E00')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TYPE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CREATE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u4EBA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u5220\u9664\u6309\u94AE\u65F6\uFF0C\u5F39\u51FA\u4E8C\u6B21\u786E\u8BA4\u6846")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5220\u9664\u64CD\u4F5C\u524D\u5F39\u51FA\u786E\u8BA4\u6846"\u786E\u5B9A\u5220\u9664\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"\uFF0C\u7528\u6237\u786E\u8BA4\u540E\u8C03\u7528 DELETE feedback/delete/{id} \u63A5\u53E3\u3002\u4EC5\u8349\u7A3F\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u5220\u9664\uFF0C\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CREATE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(CREATE_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u5F39\u51FA\u4E8C\u6B21\u786E\u8BA4\u6846")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u53D6\u6D88\u64CD\u4F5C\u524D\u5F39\u51FA\u786E\u8BA4\u6846"\u786E\u5B9A\u53D6\u6D88\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"\uFF0C\u7528\u6237\u786E\u8BA4\u540E\u8C03\u7528 POST feedback/cancel/{id} \u63A5\u53E3\u3002\u4EC5\u5DF2\u63D0\u4EA4\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u53D6\u6D88\uFF0C\u53D6\u6D88\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u53D6\u6D88')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CREATE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(CREATE_TIME,"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD HH24:MI:SS"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u4EA4\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CTITLE \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 TITLE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u6807\u9898\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u95EE\u9898\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u95EE\u9898\u6807\u9898\u662F\u53CD\u9988\u5355\u7684\u6982\u8FF0\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TYPE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TITLE "),
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CTYPE_CODE \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 TYPE_CODE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u7C7B\u578B\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u95EE\u9898\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u95EE\u9898\u7C7B\u578B\u7528\u4E8E\u5206\u7C7B\u7BA1\u7406\u548C\u5206\u6D3E\u5904\u7406\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TYPE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7C7B\u578B,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TYPE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TYPE_CODE "),
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6216\u63D0\u4EA4\u53CD\u9988\u5355\u65F6\uFF0CCONTENT \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 CONTENT \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u95EE\u9898\u63CF\u8FF0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u95EE\u9898\u63CF\u8FF0\u662F\u95EE\u9898\u5B9A\u4F4D\u548C\u5904\u7406\u7684\u6838\u5FC3\u4F9D\u636E\uFF0C\u5FC5\u987B\u8BE6\u7EC6\u586B\u5199')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u63CF\u8FF0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTENT "),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u5BFC\u51FA\u65E0\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u5BFC\u51FA\u524D\u6821\u9A8C\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u4E3A\u7A7A\uFF0C\u82E5\u4E3A\u7A7A\u5219\u63D0\u793A"\u5BFC\u51FA\u65E0\u6570\u636E"\u3002\u9700\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u786E\u4FDD\u6709\u6570\u636E\u53EF\u5BFC\u51FA')
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "30"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u54CD\u5E94\u6162\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u72B6\u6001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u3001\u8BC4\u4EF7\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%feedback%"),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u3001\u53D6\u6D88\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 questionId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 FEEDBACK \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u95EE\u9898\u7F16\u53F7\u9519\u8BEF\u3001\u53CD\u9988\u5355\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
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
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u5220\u9664\u3001\u53D6\u6D88\u3001\u91CD\u65B0\u53CD\u9988\u7B49\u6309\u94AE\u65F6\uFF0C\u53CD\u9988\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5220\u9664\u8981\u6C42 STATE=0\uFF08\u8349\u7A3F\uFF09\u3001\u53D6\u6D88\u8981\u6C42 STATE=1\uFF08\u5DF2\u63D0\u4EA4\uFF09\u3001\u91CD\u65B0\u53CD\u9988\u8981\u6C42 STATE=3\uFF08\u5DF2\u56DE\u7B54\uFF09\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u95EE\u9898\u7C7B\u578B\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.FEEDBACK_TYPE\u3001MBO.FEEDBACK_STATE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.FEEDBACK_TYPE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "MBO.FEEDBACK_STATE"),
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
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4E0A\u4F20\u53CD\u9988\u5355\u9644\u4EF6\u65F6\uFF0COSS \u4E0A\u4F20\u629B\u9519\u6216\u4E0A\u4F20\u6210\u529F\u4F46\u54CD\u5E94\u65E0 fileUrl")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u4E0A\u4F20\u7EC4\u4EF6 onUploadError \u94A9\u5B50\u6355\u83B7\u4E0A\u4F20\u5F02\u5E38\u63D0\u793A"\u4E0A\u4F20\u5931\u8D25"\uFF0ConUploadSuccess \u94A9\u5B50\u6821\u9A8C\u54CD\u5E94 fileUrl \u5B57\u6BB5\uFF0C\u4E3A\u7A7A\u5219\u63D0\u793A"\u4E0A\u4F20\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1AOSS \u5B58\u50A8\u670D\u52A1\u4E0D\u53EF\u7528\u3001bucketName \u914D\u7F6E\u9519\u8BEF\u3001\u6587\u4EF6\u683C\u5F0F\u4E0D\u88AB\u63A5\u53D7\u3001\u7F51\u7EDC\u4E2D\u65AD\u7B49')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "FILE_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u540D,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FILE_URL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6587\u4EF6\u5730\u5740, ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u4FE1\u606F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK_FILE")
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
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u8BC4\u4EF7\u65F6\uFF0CSTAR_LEVEL \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8BC4\u4EF7\u5F39\u7A97\u5BF9 starLevel \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BC4\u4EF7\u661F\u7EA7\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BC4\u4EF7\u661F\u7EA7\u7528\u4E8E\u91CF\u5316\u53CD\u9988\u5904\u7406\u8D28\u91CF\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         STAR_LEVEL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u661F\u7EA7, EVALUATE_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u5185\u5BB9")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " STAR_LEVEL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u6392\u67E5SQL\u6C47\u603B" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 1. \u67E5\u8BE2\u53CD\u9988\u5355\u5217\u8868</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, TYPE_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       CREATE_TIME, ANSWER_TIME, CREATE_NAME, ANSWER_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       GRADE, EVALUATE_CONTENT, DISTRIBUTOR_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :questionId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 2. \u67E5\u8BE2\u672A\u8BC4\u4EF7\u7684\u5DF2\u5B8C\u6210\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, CONTENT, ANSWER_TIME, CREATE_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :completedState</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 3. \u67E5\u8BE2\u67D0\u7ECF\u9500\u5546\u7684\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, CREATE_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DISTRIBUTOR_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :distributorName</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 4. \u6821\u9A8C\u95EE\u9898\u7F16\u53F7\u552F\u4E00\u6027</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cnt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 1. \u67E5\u8BE2\u53CD\u9988\u5355\u5217\u8868")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, TYPE_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       CREATE_TIME, ANSWER_TIME, CREATE_NAME, ANSWER_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       GRADE, EVALUATE_CONTENT, DISTRIBUTOR_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :questionId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 2. \u67E5\u8BE2\u672A\u8BC4\u4EF7\u7684\u5DF2\u5B8C\u6210\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, CONTENT, ANSWER_TIME, CREATE_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :completedState")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ANSWER_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 3. \u67E5\u8BE2\u67D0\u7ECF\u9500\u5546\u7684\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", CREATE_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DISTRIBUTOR_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :distributorName")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 4. \u6821\u9A8C\u95EE\u9898\u7F16\u53F7\u552F\u4E00\u6027")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cnt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "HAVING"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
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
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u53CD\u9988\u5355 CRUD \u903B\u8F91\u3001\u8BC4\u4EF7\u529F\u80FD\u3001\u72B6\u6001\u673A\u3001\u6392\u67E5 SQL</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8865\u5145 API \u63A5\u53E3\u3001\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C\u3001\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-08-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u53CD\u9988\u5355 CRUD \u903B\u8F91\u3001\u8BC4\u4EF7\u529F\u80FD\u3001\u72B6\u6001\u673A\u3001\u6392\u67E5 SQL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8865\u5145 API \u63A5\u53E3\u3001\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C\u3001\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u53CD\u9988/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
