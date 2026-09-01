import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u56DE\u590D/index.md"}');
const _sfc_main = { name: "\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u56DE\u590D/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u4E1A\u52A1\u662F\u4EC0\u4E48</h2><p>\u4E8B\u4E1A\u90E8\u7AEF\u56DE\u590D\u7ECF\u9500\u5546\u63D0\u4EA4\u7684\u53CD\u9988\u5355\uFF0C\u76F4\u81F3\u95EE\u9898\u5173\u95ED\u5E76\u8BC4\u4EF7</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5H13V13.5H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M5.5 5.5H10.5M5.5 8H10.5M5.5 10.5H8.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u56DE\u590D\u673A\u5236</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u5982\u4F55\u56DE\u590D\u4E0E\u63A8\u8FDB</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u9488\u5BF9\u53CD\u9988</strong> \u2014 \u9010\u6761\u67E5\u770B\u7ECF\u9500\u5546\u53CD\u9988\u8BE6\u60C5\u540E\u8FDB\u884C\u56DE\u590D</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53EF\u591A\u6B21\u56DE\u590D</strong> \u2014 \u5DF2\u56DE\u590D\u72B6\u6001\u53EF\u8FFD\u52A0\u56DE\u590D\uFF0C\u76F4\u81F3\u95EE\u9898\u7ED3\u675F</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L12 5V11L8 14L4 11V5Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u7ED3\u675F\u4E0E\u8BC4\u4EF7</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u95EE\u9898\u5982\u4F55\u5173\u95ED</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u7ED3\u675F\u53CD\u9988</strong> \u2014 \u5224\u65AD\u662F\u5426\u7ED3\u675F\u53CD\u9988\uFF0C\u7ED3\u675F\u5219\u8FDB\u5165\u8BC4\u4EF7\u73AF\u8282</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8BC4\u4EF7\u56DE\u5199</strong> \u2014 \u7ED3\u675F\u540E\u7684\u8BC4\u4EF7\u7ED3\u679C\u56DE\u5199\u53CD\u9988\u5355\uFF0C\u4F9B\u7ECF\u9500\u5546\u7AEF\u67E5\u770B</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u56DE\u590D\u6D41\u8F6C\u6D41\u7A0B</h2><p>\u4ECE\u67E5\u770B\u53CD\u9988\u5230\u7ED3\u675F\u8BC4\u4EF7\u7684\u5168\u8FC7\u7A0B</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 2.5V5.5M10 2.5V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B\u8BE6\u60C5</h5><small>\u67E5\u770B\u7ECF\u9500\u5546\u53CD\u9988\u5185\u5BB9<br>\u4E0E\u5386\u53F2\u56DE\u590D</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"></rect><path d="M5.5 5.5H10.5M5.5 8H10.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u56DE\u590D\u53CD\u9988</h5><small>\u586B\u5199\u56DE\u590D\u5185\u5BB9<br>\u53EF\u591A\u6B21\u8FFD\u52A0</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L12 5V11L8 14L4 11V5Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u7ED3\u675F\u53CD\u9988</h5><small>\u5224\u65AD\u662F\u5426\u7ED3\u675F<br>\u672A\u7ED3\u675F\u7EE7\u7EED\u56DE\u590D</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" fill="none" stroke="white" stroke-width="1.5"></circle><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u8BC4\u4EF7\u5173\u95ED</h5><small>\u8BC4\u4EF7\u53CD\u9988\u5E76\u56DE\u5199\u7ED3\u679C<br>\u95EE\u9898\u5173\u95ED</small></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u95EE\u9898\u56DE\u590D\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u67E5\u770B\u53CD\u9988\u8BE6\u60C5 \u2192 \u2605\u56DE\u590D\u53CD\u9988\u2605 \u2192 \u2696\u662F\u5426\u7ED3\u675F\u53CD\u9988\uFF1F \u2192 \u8BC4\u4EF7\u53CD\u9988 \u2192 \u7ED3\u675F\uFF08\u5426\u5219\u7EE7\u7EED\u56DE\u590D\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95EE\u9898\u53CD\u9988(\u7ECF\u9500\u5546\u7AEF)</text><rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">MBO\u53CD\u9988\u8868</text><rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u53CD\u9988\u56DE\u590D\u8868</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="222" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="222" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="249" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u67E5\u770B\u53CD\u9988\u8BE6\u60C5</text><line x1="600" y1="266" x2="600" y2="294" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="294" width="170" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="318" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u56DE\u590D\u53CD\u9988\u2605</text><text x="600" y="338" text-anchor="middle" fill="#DCFCE7" font-size="10">\u586B\u56DE\u590D\u5185\u5BB9\xB7\u63D0\u4EA4(\u53EF\u591A\u6B21)</text><line x1="600" y1="348" x2="600" y2="376" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,376 670,406 600,436 530,406" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="410" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u662F\u5426\u7ED3\u675F\u53CD\u9988\uFF1F</text><line x1="530" y1="406" x2="440" y2="406" stroke="#16A34A" stroke-width="2"></line><rect x="350" y="391" width="100" height="28" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="1"></rect><text x="400" y="410" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5426\xB7\u7EE7\u7EED\u56DE\u590D</text><line x1="440" y1="406" x2="440" y2="330" stroke="#16A34A" stroke-width="2"></line><line x1="440" y1="330" x2="515" y2="330" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><line x1="600" y1="436" x2="600" y2="464" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="520" y="464" width="160" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="491" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u8BC4\u4EF7\u53CD\u9988</text><line x1="600" y1="508" x2="600" y2="536" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="536" width="110" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="563" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="580" x2="600" y2="600" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="600" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="622" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="440" y="634" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="657" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7ECF\u9500\u5546\u7AEF\u67E5\u770B\u56DE\u590D</text><rect x="610" y="634" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="657" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8BC4\u4EF7\u7ED3\u679C\u56DE\u5199</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u53D6\u6D88/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u4E8B\u4E1A\u90E8\u4E0E\u7ECF\u9500\u5546\u89C6\u89D2\u5DEE\u5F02"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E8B\u4E1A\u90E8\u548C\u7ECF\u9500\u5546\u67E5\u770B\u540C\u4E00\u6279\u53CD\u9988\u5355\uFF0C\u4F46\u64CD\u4F5C\u6743\u9650\u548C API \u63A5\u53E3\u4E0D\u540C\uFF0C\u786E\u4FDD\u804C\u8D23\u5206\u79BB\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u4E8B\u4E1A\u90E8\u4F7F\u7528 <code${_scopeId}>POST feedback/division/page</code> \u63A5\u53E3\u67E5\u8BE2\uFF08\u7ECF\u9500\u5546\u4F7F\u7528 <code${_scopeId}>POST feedback/distributor/page</code>\uFF09\uFF0C\u4E8B\u4E1A\u90E8\u53EF\u6267\u884C\uFF1A\u67E5\u770B\u8BE6\u60C5\u3001\u56DE\u7B54\u3001\u8FFD\u8BC4\u3001\u5B8C\u6210\u3001\u8BC4\u4EF7\u3001\u5BFC\u51FA\uFF1B\u65E0\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u6309\u94AE\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E8B\u4E1A\u90E8\u548C\u7ECF\u9500\u5546\u67E5\u770B\u540C\u4E00\u6279\u53CD\u9988\u5355\uFF0C\u4F46\u64CD\u4F5C\u6743\u9650\u548C API \u63A5\u53E3\u4E0D\u540C\uFF0C\u786E\u4FDD\u804C\u8D23\u5206\u79BB\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u4E8B\u4E1A\u90E8\u4F7F\u7528 "),
              createVNode("code", null, "POST feedback/division/page"),
              createTextVNode(" \u63A5\u53E3\u67E5\u8BE2\uFF08\u7ECF\u9500\u5546\u4F7F\u7528 "),
              createVNode("code", null, "POST feedback/distributor/page"),
              createTextVNode("\uFF09\uFF0C\u4E8B\u4E1A\u90E8\u53EF\u6267\u884C\uFF1A\u67E5\u770B\u8BE6\u60C5\u3001\u56DE\u7B54\u3001\u8FFD\u8BC4\u3001\u5B8C\u6210\u3001\u8BC4\u4EF7\u3001\u5BFC\u51FA\uFF1B\u65E0\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u6309\u94AE\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u56DE\u7B54\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E8B\u4E1A\u90E8\u5BF9\u7ECF\u9500\u5546\u63D0\u4EA4\u7684\u95EE\u9898\u8FDB\u884C\u56DE\u590D\uFF0C\u63A8\u52A8\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u9009\u62E9\u4E00\u6761\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u586B\u5199\u56DE\u7B54\u5185\u5BB9\uFF08\u5FC5\u586B\uFF09\uFF0C\u63D0\u4EA4 <code${_scopeId}>POST feedback/answer</code> \u63A5\u53E3\uFF0C\u56DE\u7B54\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u56DE\u7B54\uFF0C\u8BB0\u5F55\u5904\u7406\u4EBA\u548C\u5904\u7406\u65F6\u95F4\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E8B\u4E1A\u90E8\u5BF9\u7ECF\u9500\u5546\u63D0\u4EA4\u7684\u95EE\u9898\u8FDB\u884C\u56DE\u590D\uFF0C\u63A8\u52A8\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u9009\u62E9\u4E00\u6761\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u586B\u5199\u56DE\u7B54\u5185\u5BB9\uFF08\u5FC5\u586B\uFF09\uFF0C\u63D0\u4EA4 "),
              createVNode("code", null, "POST feedback/answer"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u56DE\u7B54\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u56DE\u7B54\uFF0C\u8BB0\u5F55\u5904\u7406\u4EBA\u548C\u5904\u7406\u65F6\u95F4\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u8FFD\u8BC4\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u5DF2\u56DE\u7B54\u7684\u95EE\u9898\u8FDB\u884C\u8FFD\u52A0\u53CD\u9988\uFF0C\u652F\u6301\u591A\u8F6E\u6C9F\u901A\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u5BF9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u4E8B\u4E1A\u90E8\u6216\u7ECF\u9500\u5546\u53EF\u8FDB\u884C\u8FFD\u52A0\u53CD\u9988\uFF0C\u8C03\u7528 <code${_scopeId}>POST feedback/comment</code> \u63A5\u53E3\uFF0C\u8FFD\u8BC4\u540E\u72B6\u6001\u53D8\u4E3A\u5904\u7406\u4E2D\uFF0C\u7B49\u5F85\u5BF9\u65B9\u518D\u6B21\u56DE\u590D\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u5DF2\u56DE\u7B54\u7684\u95EE\u9898\u8FDB\u884C\u8FFD\u52A0\u53CD\u9988\uFF0C\u652F\u6301\u591A\u8F6E\u6C9F\u901A\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u5BF9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u4E8B\u4E1A\u90E8\u6216\u7ECF\u9500\u5546\u53EF\u8FDB\u884C\u8FFD\u52A0\u53CD\u9988\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "POST feedback/comment"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u8FFD\u8BC4\u540E\u72B6\u6001\u53D8\u4E3A\u5904\u7406\u4E2D\uFF0C\u7B49\u5F85\u5BF9\u65B9\u518D\u6B21\u56DE\u590D\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u5B8C\u6210\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u95EE\u9898\u5904\u7406\u5B8C\u6BD5\u540E\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u5173\u95ED\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u9009\u62E9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/end/\${id}</code> \u63A5\u53E3\uFF0C\u5B8C\u6210\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u53CD\u9988\u5355\u4E0D\u53EF\u518D\u64CD\u4F5C\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u95EE\u9898\u5904\u7406\u5B8C\u6BD5\u540E\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u5173\u95ED\u95EE\u9898\u5904\u7406\u6D41\u7A0B\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u9009\u62E9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u95EE\u9898\uFF0C\u786E\u8BA4\u540E\u8C03\u7528 "),
              createVNode("code", null, "POST feedback/end/${id}"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u5B8C\u6210\u540E\u72B6\u6001\u53D8\u4E3A\u5DF2\u5B8C\u6210\uFF0C\u53CD\u9988\u5355\u4E0D\u53EF\u518D\u64CD\u4F5C\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u8BC4\u4EF7\u903B\u8F91"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7ECF\u9500\u5546\u5BF9\u95EE\u9898\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u8BC4\u4EF7\uFF0C\u5E2E\u52A9\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u95EE\u9898\u5B8C\u6210\u540E\uFF0C\u7ECF\u9500\u5546\u53EF\u5BF9\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u8BC4\u4EF7\uFF0C\u8C03\u7528 <code${_scopeId}>POST feedback/evaluate</code> \u63A5\u53E3\uFF0C\u5199\u5165\u8BC4\u4EF7\u661F\u7EA7\u548C\u8BC4\u4EF7\u5185\u5BB9\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7ECF\u9500\u5546\u5BF9\u95EE\u9898\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u8BC4\u4EF7\uFF0C\u5E2E\u52A9\u6539\u8FDB\u670D\u52A1\u8D28\u91CF\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u95EE\u9898\u5B8C\u6210\u540E\uFF0C\u7ECF\u9500\u5546\u53EF\u5BF9\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u8BC4\u4EF7\uFF0C\u8C03\u7528 "),
              createVNode("code", null, "POST feedback/evaluate"),
              createTextVNode(" \u63A5\u53E3\uFF0C\u5199\u5165\u8BC4\u4EF7\u661F\u7EA7\u548C\u8BC4\u4EF7\u5185\u5BB9\u3002")
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
        _push2(`<p${_scopeId}>\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/brand/list.tsx</code>\uFF0C\u5217\u8868\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/brand/stores/listConfig.tsx</code>\u3002</p><h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_CODE\`</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_SUB_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B\uFF08parentValue=typeCode\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u53CD\u9988\u65F6\u95F4\u8303\u56F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u65E5\u671F\u8303\u56F4\uFF08createTimeStart/createTimeEnd\uFF09\uFF0C\u9ED8\u8BA4\u8FD1\u4E00\u4E2A\u6708</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E8F\u53F7</td><td${_scopeId}>-</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u884C\u5E8F\u53F7</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8DE8\u5206\u9875\u5E8F\u53F7\u6E32\u67D3\uFF08commonLineNum\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>Button(link)</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u8BE6\u60C5</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>TYPE_DETAIL_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u503C\u96C6\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>ANSWER_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>CONTENT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>PHONE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u5206</td><td${_scopeId}>GRADE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>EVALUATE_CONTENT</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7\u65F6\u663E\u793A</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u64CD\u4F5C</td><td${_scopeId}>-</td><td${_scopeId}>ButtonGroup</td><td${_scopeId}>\u884C\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u6709\u7F16\u8F91\u6743\u9650\u65F6\u663E\u793A</td><td${_scopeId}>\u6839\u636E\u72B6\u6001\u52A8\u6001\u663E\u793A</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/brand/list.tsx"),
            createTextVNode("\uFF0C\u5217\u8868\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/brand/stores/listConfig.tsx"),
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
                createVNode("td", null, "\u6709\u7F16\u8F91\u6743\u9650\u65F6\u663E\u793A"),
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
        _push2(`<h4${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F</td><td${_scopeId}>\u5BFC\u51FA\u53CD\u9988\u5355\u5217\u8868\u5230 Excel</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u56DE\u590D</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u586B\u5199\u56DE\u590D\u5185\u5BB9\u5E76\u63D0\u4EA4</td><td${_scopeId}>state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u5B8C\u7ED3</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5B8C\u7ED3\u53CD\u9988\u5355\uFF08\u7EFF\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u53D6\u6D88</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>state \u4E0D\u5728 [6,7,8] \u4E14\u6709\u7F16\u8F91\u6743\u9650</td></tr></tbody></table><blockquote${_scopeId}><strong${_scopeId}>\u8BF4\u660E</strong>\uFF1A\u884C\u64CD\u4F5C\u6309\u94AE\u7684\u663E\u793A\u9700\u8981\u901A\u8FC7\u6743\u9650\u6821\u9A8C\uFF08<code${_scopeId}>_hasEditPer</code>\uFF09\uFF0C\u6743\u9650\u7801\u683C\u5F0F\u4E3A <code${_scopeId}>hzero.feedback.dealer.ps.sub_type.{typeSupCode}.edit</code>\u3002\u70B9\u51FB\u53CD\u9988\u5355\u53F7\u53EF\u8DF3\u8F6C\u8BE6\u60C5\u9875\u67E5\u770B\u8BE6\u60C5\u3002</blockquote><h4${_scopeId}>\u6309\u94AE1\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5BFC\u51FA&quot;\u6309\u94AE</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u6536\u96C6\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6</p><p${_scopeId}>2. \u8C03\u7528 <code${_scopeId}>POST feedback/division/export</code> \u63A5\u53E3\u5BFC\u51FA</p><p${_scopeId}>3. \u6D4F\u89C8\u5668\u4E0B\u8F7D Excel \u6587\u4EF6</p><h4${_scopeId}>\u6309\u94AE2\uFF1A\u56DE\u590D\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u56DE\u590D&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u8C03\u7528 <code${_scopeId}>openTab</code> \u6253\u5F00\u65B0\u6807\u7B7E\u9875</p><p${_scopeId}>2. \u8DEF\u7531\uFF1A<code${_scopeId}>/afterSales/brand/feedback/detail/\${id}</code></p><p${_scopeId}>3. \u8C03\u7528 <code${_scopeId}>GET feedback/detail/\${id}</code> \u52A0\u8F7D\u8BE6\u60C5</p><p${_scopeId}>4. \u5728\u8BE6\u60C5\u9875\u586B\u5199\u56DE\u590D\u5185\u5BB9\uFF08commentContent\uFF0C\u5FC5\u586B\uFF09</p><p${_scopeId}>5. \u8C03\u7528 <code${_scopeId}>POST feedback/answer</code> \u63A5\u53E3\u63D0\u4EA4\u56DE\u590D</p><p${_scopeId}>6. \u63D0\u4EA4\u6570\u636E\uFF1A<code${_scopeId}>{ commentContent, id, fileDTOList: attachmentsRef.current }</code></p><p${_scopeId}>7. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h4${_scopeId}>\u6309\u94AE3\uFF1A\u5B8C\u7ED3\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u5B8C\u7ED3&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846 <code${_scopeId}>Modal.confirm({ title: &#39;\u63D0\u793A&#39;, children: &#39;\u786E\u8BA4\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5417\uFF1F&#39; })</code></p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/end/\${id}</code> \u63A5\u53E3\u5B8C\u7ED3\u53CD\u9988\u5355</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h4${_scopeId}>\u6309\u94AE4\uFF1A\u53D6\u6D88\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9 state \u4E0D\u5728 [6,7,8] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u53D6\u6D88&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846 <code${_scopeId}>Modal.confirm({ title: &#39;\u63D0\u793A&#39;, children: &#39;\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\u5417\uFF1F&#39; })</code></p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/cancel/\${id}</code> \u63A5\u53E3\u53D6\u6D88\u53CD\u9988\u5355</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p>`);
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
                createVNode("td", null, "\u56DE\u590D"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\u586B\u5199\u56DE\u590D\u5185\u5BB9\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u5B8C\u7ED3"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5B8C\u7ED3\u53CD\u9988\u5355\uFF08\u7EFF\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u53D6\u6D88"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "state \u4E0D\u5728 [6,7,8] \u4E14\u6709\u7F16\u8F91\u6743\u9650")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createVNode("strong", null, "\u8BF4\u660E"),
            createTextVNode("\uFF1A\u884C\u64CD\u4F5C\u6309\u94AE\u7684\u663E\u793A\u9700\u8981\u901A\u8FC7\u6743\u9650\u6821\u9A8C\uFF08"),
            createVNode("code", null, "_hasEditPer"),
            createTextVNode("\uFF09\uFF0C\u6743\u9650\u7801\u683C\u5F0F\u4E3A "),
            createVNode("code", null, "hzero.feedback.dealer.ps.sub_type.{typeSupCode}.edit"),
            createTextVNode("\u3002\u70B9\u51FB\u53CD\u9988\u5355\u53F7\u53EF\u8DF3\u8F6C\u8BE6\u60C5\u9875\u67E5\u770B\u8BE6\u60C5\u3002")
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09"),
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
            createVNode("code", null, "POST feedback/division/export"),
            createTextVNode(" \u63A5\u53E3\u5BFC\u51FA")
          ]),
          createVNode("p", null, "3. \u6D4F\u89C8\u5668\u4E0B\u8F7D Excel \u6587\u4EF6"),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u56DE\u590D\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u56DE\u590D"')
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
            createVNode("code", null, "/afterSales/brand/feedback/detail/${id}")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u8C03\u7528 "),
            createVNode("code", null, "GET feedback/detail/${id}"),
            createTextVNode(" \u52A0\u8F7D\u8BE6\u60C5")
          ]),
          createVNode("p", null, "4. \u5728\u8BE6\u60C5\u9875\u586B\u5199\u56DE\u590D\u5185\u5BB9\uFF08commentContent\uFF0C\u5FC5\u586B\uFF09"),
          createVNode("p", null, [
            createTextVNode("5. \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/answer"),
            createTextVNode(" \u63A5\u53E3\u63D0\u4EA4\u56DE\u590D")
          ]),
          createVNode("p", null, [
            createTextVNode("6. \u63D0\u4EA4\u6570\u636E\uFF1A"),
            createVNode("code", null, "{ commentContent, id, fileDTOList: attachmentsRef.current }")
          ]),
          createVNode("p", null, [
            createTextVNode("7. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u5B8C\u7ED3\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state \u5728 [4,5] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u5B8C\u7ED3"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5F39\u51FA\u786E\u8BA4\u6846 "),
            createVNode("code", null, "Modal.confirm({ title: '\u63D0\u793A', children: '\u786E\u8BA4\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5417\uFF1F' })")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/end/${id}"),
            createTextVNode(" \u63A5\u53E3\u5B8C\u7ED3\u53CD\u9988\u5355")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u53D6\u6D88\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9 state \u4E0D\u5728 [6,7,8] \u4E14\u6709\u7F16\u8F91\u6743\u9650\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u53D6\u6D88"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5F39\u51FA\u786E\u8BA4\u6846 "),
            createVNode("code", null, "Modal.confirm({ title: '\u63D0\u793A', children: '\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\u5417\uFF1F' })")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/cancel/${id}"),
            createTextVNode(" \u63A5\u53E3\u53D6\u6D88\u53CD\u9988\u5355")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u8BE6\u60C5\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u8BE6\u60C5\u9875\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/brand/detail.tsx</code>\uFF0C\u8BE6\u60C5\u9875\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E <code${_scopeId}>arrow-mbo/src/pages/afterSales/feedback/common/stores/detailConfig.tsx</code>\uFF08\u4E0E\u7ECF\u9500\u5546\u7AEF\u5171\u7528\uFF09\u3002</p><h4${_scopeId}>\u8BE6\u60C5\u9875\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u4EBA</td><td${_scopeId}>CONTACTS_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u4EBA\u59D3\u540D</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>PHONE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6B63\u5219\u6821\u9A8C\uFF08\u56FA\u8BDD/\u624B\u673A\u53F7\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u8054\u7CFB\u5730\u5740</td><td${_scopeId}>ADDRESS</td><td${_scopeId}>TextField</td><td${_scopeId}>\u8054\u7CFB\u5730\u5740</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u7C7B\u578B</td><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5927\u7C7B</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_CODE\`\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5B50\u7C7B\u578B</td><td${_scopeId}>TYPE_SUP_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u95EE\u9898\u5B50\u7C7B</td><td${_scopeId}>\u53CD\u9988\u7C7B\u578B\u4E0D\u4E3A\u7A7A\u4E14\u4E0D\u4E3A&#39;10&#39;\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_SUB_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>TYPE_DETAIL_CODE</td><td${_scopeId}>Select</td><td${_scopeId}>\u4EA7\u54C1\u7EC6\u5206</td><td${_scopeId}>\u53CD\u9988\u7C7B\u578B=&#39;1&#39;\u4E14\u5B50\u7C7B\u578B\u4E0D\u4E3A&#39;1-7&#39;\u65F6\u663E\u793A</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_TYPE_DETAIL_CODE\`\uFF0C\u7EA7\u8054\u53CD\u9988\u5B50\u7C7B\u578B</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>CONTENT</td><td${_scopeId}>TextArea</td><td${_scopeId}>\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF08isAdd/isEdit\uFF09\uFF0CmaxLength=2000</td></tr><tr${_scopeId}><td${_scopeId}>\u518D\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>COMMENT_CONTENT</td><td${_scopeId}>TextArea</td><td${_scopeId}>\u518D\u53CD\u9988\u5185\u5BB9</td><td${_scopeId}>\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A</td><td${_scopeId}>\u5FC5\u586B\uFF0CmaxLength=2000</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u9644\u4EF6</td><td${_scopeId}>ATTACHMENT</td><td${_scopeId}>Attachment</td><td${_scopeId}>\u53CD\u9988\u9644\u4EF6</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91/\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A</td><td${_scopeId}>\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u6587\u4EF6\uFF0C\u5355\u6587\u4EF6\u6700\u592730M</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u5355\u53F7</td><td${_scopeId}>QUESTIONID</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u5355\u7F16\u53F7</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>STATE</td><td${_scopeId}>Select</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB\uFF0C\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DateTimePicker</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u53CD\u9988\u4EBA</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>DISTRIBUTOR_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u6240\u5C5E\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6240\u5C5E\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u8BE6\u60C5\u65F6\u663E\u793A</td><td${_scopeId}>\u53EA\u8BFB</td></tr></tbody></table><h4${_scopeId}>\u8BE6\u60C5\u9875\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u53D6\u6D88</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>isDetail \u4E14 state \u4E0D\u5728 [6,7,8]</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u5B8C\u7ED3</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u5B8C\u7ED3\u53CD\u9988\u5355\uFF08\u7EFF\u8272\u6309\u94AE\uFF09</td><td${_scopeId}>isDetail \u4E14 state \u5728 [4,5]</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u56DE\u590D</td><td${_scopeId}>\u8BE6\u60C5\u9875\u5934\u90E8</td><td${_scopeId}>\u586B\u5199\u56DE\u590D\u5185\u5BB9\u5E76\u63D0\u4EA4</td><td${_scopeId}>isDetail \u4E14 state \u5728 [4,5]</td></tr></tbody></table><blockquote${_scopeId}><strong${_scopeId}>\u8BF4\u660E</strong>\uFF1A\u8BE6\u60C5\u9875\u6309\u94AE\u7684\u663E\u793A\u9700\u8981\u901A\u8FC7\u6743\u9650\u6821\u9A8C\uFF08<code${_scopeId}>_hasEditPer</code>\uFF09\uFF0C\u65E0\u7F16\u8F91\u6743\u9650\u65F6\u4E0D\u663E\u793A\u4EFB\u4F55\u6309\u94AE\u3002</blockquote><h4${_scopeId}>\u8BE6\u60C5\u9875\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91</h4><h5${_scopeId}>\u6309\u94AE1\uFF1A\u53D6\u6D88\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u53D6\u6D88&quot;\u6309\u94AE\uFF08isDetail \u4E14 state \u4E0D\u5728 [6,7,8]\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846 <code${_scopeId}>Modal.confirm({ title: &#39;\u63D0\u793A&#39;, children: &#39;\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\u5417\uFF1F&#39; })</code></p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/cancel/\${id}</code> \u63A5\u53E3\u53D6\u6D88\u53CD\u9988\u5355</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h5${_scopeId}>\u6309\u94AE2\uFF1A\u5B8C\u7ED3\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5B8C\u7ED3&quot;\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846 <code${_scopeId}>Modal.confirm({ title: &#39;\u63D0\u793A&#39;, children: &#39;\u786E\u8BA4\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5417\uFF1F&#39; })</code></p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/end/\${id}</code> \u63A5\u53E3\u5B8C\u7ED3\u53CD\u9988\u5355</p><p${_scopeId}>3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h5${_scopeId}>\u6309\u94AE3\uFF1A\u56DE\u590D\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09</h5><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u56DE\u590D&quot;\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5148\u6821\u9A8C\u8868\u5355 <code${_scopeId}>baseFormDS.validate()</code></p><p${_scopeId}>2. \u63D0\u53D6\u56DE\u590D\u5185\u5BB9\uFF1A<code${_scopeId}>{ commentContent, id, fileDTOList: attachmentsRef.current }</code></p><p${_scopeId}>3. \u8C03\u7528 <code${_scopeId}>POST feedback/answer</code> \u63A5\u53E3\u63D0\u4EA4\u56DE\u590D</p><p${_scopeId}>4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 <code${_scopeId}>handleCloseTab()</code></p><h4${_scopeId}>\u8BE6\u60C5\u9875\u7EC4\u4EF6</h4><h5${_scopeId}>\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF08FeedbackChat\uFF09</h5><p${_scopeId}>\u8BE6\u60C5\u9875\u5E95\u90E8\u5C55\u793A\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF0C\u4EE5\u804A\u5929\u6C14\u6CE1\u5F62\u5F0F\u5C55\u793A\u53CD\u9988\u548C\u56DE\u590D\u7684\u5386\u53F2\u8BB0\u5F55\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u6BCF\u6761\u8BB0\u5F55\u663E\u793A\u64CD\u4F5C\u4EBA\uFF08operationUserName\uFF09\u3001\u6240\u5C5E\u95E8\u5E97\uFF08dept\uFF09\u3001\u64CD\u4F5C\u65F6\u95F4\uFF08operationTime\uFF09</li><li${_scopeId}>\u4E8B\u4E1A\u90E8\u6D88\u606F\u5728\u5DE6\u4FA7\uFF0C\u7ECF\u9500\u5546\u6D88\u606F\u5728\u53F3\u4FA7\uFF08\u6839\u636E <code${_scopeId}>from=&#39;brand&#39;</code> \u5224\u65AD\uFF09</li><li${_scopeId}>\u652F\u6301\u56FE\u7247\u9884\u89C8\uFF08Picture \u7EC4\u4EF6\uFF09\u3001\u89C6\u9891\u64AD\u653E\uFF08video \u6807\u7B7E\uFF09\u3001\u6587\u4EF6\u4E0B\u8F7D\uFF08a \u6807\u7B7E\uFF09</li><li${_scopeId}>\u9644\u4EF6\u6309 tab \u5206\u7EC4\u5C55\u793A</li></ul><h5${_scopeId}>\u8BC4\u4EF7\u7EC4\u4EF6\uFF08Evaluation\uFF09</h5><p${_scopeId}>\u5F53\u8BE6\u60C5\u9875 state=7\uFF08\u5DF2\u8BC4\u4EF7\uFF09\u65F6\uFF0C\u5C55\u793A\u8BC4\u4EF7\u7EC4\u4EF6\uFF1A</p><ul${_scopeId}><li${_scopeId}>\u663E\u793A\u8BC4\u4EF7\u661F\u7EA7\uFF08Rate \u7EC4\u4EF6\uFF0CallowHalf\uFF0CallowClear\uFF0Cdisabled\uFF09</li><li${_scopeId}>\u663E\u793A\u8BC4\u4EF7\u5185\u5BB9\uFF08TextArea\uFF0Cdisabled\uFF09</li><li${_scopeId}>\u6570\u636E\u901A\u8FC7 <code${_scopeId}>evaluationRef.current?.loadData()</code> \u52A0\u8F7D</li></ul>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u8BE6\u60C5\u9875\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/brand/detail.tsx"),
            createTextVNode("\uFF0C\u8BE6\u60C5\u9875\u5B57\u6BB5\u914D\u7F6E\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-mbo/src/pages/afterSales/feedback/common/stores/detailConfig.tsx"),
            createTextVNode("\uFF08\u4E0E\u7ECF\u9500\u5546\u7AEF\u5171\u7528\uFF09\u3002")
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
                createVNode("td", null, "\u503C\u96C6 `MBO.FEEDBACK_TYPE_SUB_CODE`\uFF0C\u7EA7\u8054\u53CD\u9988\u7C7B\u578B")
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
                createVNode("td", null, "\u5FC5\u586B\uFF08isAdd/isEdit\uFF09\uFF0CmaxLength=2000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u518D\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "COMMENT_CONTENT"),
                createVNode("td", null, "TextArea"),
                createVNode("td", null, "\u518D\u53CD\u9988\u5185\u5BB9"),
                createVNode("td", null, "\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A"),
                createVNode("td", null, "\u5FC5\u586B\uFF0CmaxLength=2000")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u9644\u4EF6"),
                createVNode("td", null, "ATTACHMENT"),
                createVNode("td", null, "Attachment"),
                createVNode("td", null, "\u53CD\u9988\u9644\u4EF6"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91/\u8BE6\u60C5\u4E14 state \u5728 [4,5] \u65F6\u663E\u793A"),
                createVNode("td", null, "\u652F\u6301\u56FE\u7247\u3001\u89C6\u9891\u3001\u6587\u4EF6\uFF0C\u5355\u6587\u4EF6\u6700\u592730M")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u9988\u5355\u53F7"),
                createVNode("td", null, "QUESTIONID"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u53CD\u9988\u5355\u7F16\u53F7"),
                createVNode("td", null, "\u8BE6\u60C5\u65F6\u663E\u793A"),
                createVNode("td", null, "\u53EA\u8BFB")
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
                createVNode("td", null, "\u53D6\u6D88"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u53D6\u6D88\u53CD\u9988\u5355\uFF08\u7EA2\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "isDetail \u4E14 state \u4E0D\u5728 [6,7,8]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u5B8C\u7ED3"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u5B8C\u7ED3\u53CD\u9988\u5355\uFF08\u7EFF\u8272\u6309\u94AE\uFF09"),
                createVNode("td", null, "isDetail \u4E14 state \u5728 [4,5]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u56DE\u590D"),
                createVNode("td", null, "\u8BE6\u60C5\u9875\u5934\u90E8"),
                createVNode("td", null, "\u586B\u5199\u56DE\u590D\u5185\u5BB9\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "isDetail \u4E14 state \u5728 [4,5]")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createVNode("strong", null, "\u8BF4\u660E"),
            createTextVNode("\uFF1A\u8BE6\u60C5\u9875\u6309\u94AE\u7684\u663E\u793A\u9700\u8981\u901A\u8FC7\u6743\u9650\u6821\u9A8C\uFF08"),
            createVNode("code", null, "_hasEditPer"),
            createTextVNode("\uFF09\uFF0C\u65E0\u7F16\u8F91\u6743\u9650\u65F6\u4E0D\u663E\u793A\u4EFB\u4F55\u6309\u94AE\u3002")
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u6309\u94AE\u8BE6\u7EC6\u903B\u8F91"),
          createVNode("h5", null, "\u6309\u94AE1\uFF1A\u53D6\u6D88\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u53D6\u6D88"\u6309\u94AE\uFF08isDetail \u4E14 state \u4E0D\u5728 [6,7,8]\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5F39\u51FA\u786E\u8BA4\u6846 "),
            createVNode("code", null, "Modal.confirm({ title: '\u63D0\u793A', children: '\u786E\u8BA4\u53D6\u6D88\u8BE5\u53CD\u9988\u5417\uFF1F' })")
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
          createVNode("h5", null, "\u6309\u94AE2\uFF1A\u5B8C\u7ED3\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u5B8C\u7ED3"\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5F39\u51FA\u786E\u8BA4\u6846 "),
            createVNode("code", null, "Modal.confirm({ title: '\u63D0\u793A', children: '\u786E\u8BA4\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5417\uFF1F' })")
          ]),
          createVNode("p", null, [
            createTextVNode("2. \u786E\u8BA4\u540E\u8C03\u7528 "),
            createVNode("code", null, "POST feedback/end/${id}"),
            createTextVNode(" \u63A5\u53E3\u5B8C\u7ED3\u53CD\u9988\u5355")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h5", null, "\u6309\u94AE3\uFF1A\u56DE\u590D\uFF08\u8BE6\u60C5\u9875\u5934\u90E8\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u56DE\u590D"\u6309\u94AE\uFF08isDetail \u4E14 state \u5728 [4,5]\uFF09')
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
            createTextVNode("2. \u63D0\u53D6\u56DE\u590D\u5185\u5BB9\uFF1A"),
            createVNode("code", null, "{ commentContent, id, fileDTOList: attachmentsRef.current }")
          ]),
          createVNode("p", null, [
            createTextVNode("3. \u8C03\u7528 "),
            createVNode("code", null, "POST feedback/answer"),
            createTextVNode(" \u63A5\u53E3\u63D0\u4EA4\u56DE\u590D")
          ]),
          createVNode("p", null, [
            createTextVNode("4. \u6210\u529F\u540E\u5173\u95ED\u6807\u7B7E\u9875 "),
            createVNode("code", null, "handleCloseTab()")
          ]),
          createVNode("h4", null, "\u8BE6\u60C5\u9875\u7EC4\u4EF6"),
          createVNode("h5", null, "\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF08FeedbackChat\uFF09"),
          createVNode("p", null, "\u8BE6\u60C5\u9875\u5E95\u90E8\u5C55\u793A\u53CD\u9988\u56DE\u590D\u8BB0\u5F55\u7EC4\u4EF6\uFF0C\u4EE5\u804A\u5929\u6C14\u6CE1\u5F62\u5F0F\u5C55\u793A\u53CD\u9988\u548C\u56DE\u590D\u7684\u5386\u53F2\u8BB0\u5F55\uFF1A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u6BCF\u6761\u8BB0\u5F55\u663E\u793A\u64CD\u4F5C\u4EBA\uFF08operationUserName\uFF09\u3001\u6240\u5C5E\u95E8\u5E97\uFF08dept\uFF09\u3001\u64CD\u4F5C\u65F6\u95F4\uFF08operationTime\uFF09"),
            createVNode("li", null, [
              createTextVNode("\u4E8B\u4E1A\u90E8\u6D88\u606F\u5728\u5DE6\u4FA7\uFF0C\u7ECF\u9500\u5546\u6D88\u606F\u5728\u53F3\u4FA7\uFF08\u6839\u636E "),
              createVNode("code", null, "from='brand'"),
              createTextVNode(" \u5224\u65AD\uFF09")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u65E0\u9009\u62E9\u5F39\u7A97\u3002\u8BC4\u4EF7\u529F\u80FD\u5728\u8BE6\u60C5\u9875\u901A\u8FC7\u8BC4\u4EF7\u7EC4\u4EF6\u5C55\u793A\uFF0C\u4E0D\u5355\u72EC\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u65E0\u9009\u62E9\u5F39\u7A97\u3002\u8BC4\u4EF7\u529F\u80FD\u5728\u8BE6\u60C5\u9875\u901A\u8FC7\u8BC4\u4EF7\u7EC4\u4EF6\u5C55\u793A\uFF0C\u4E0D\u5355\u72EC\u5F39\u51FA\u8BC4\u4EF7\u5F39\u7A97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u56DE\u7B54\u5185\u5BB9\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u56DE\u7B54\u5185\u5BB9\u5B8C\u6574\uFF0C\u4FBF\u4E8E\u7ECF\u9500\u5546\u7406\u89E3\u5904\u7406\u7ED3\u679C</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u56DE\u7B54\u5185\u5BB9\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u56DE\u7B54\u5185\u5BB9\u5B8C\u6574\uFF0C\u4FBF\u4E8E\u7ECF\u9500\u5546\u7406\u89E3\u5904\u7406\u7ED3\u679C")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u56DE\u7B54\u5185\u5BB9\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u56DE\u7B54\u5185\u5BB9\u5B8C\u6574</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u53CD\u9988\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u4EC5\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u56DE\u7B54\uFF0C\u5DF2\u56DE\u7B54\u72B6\u6001\u53EF\u8FFD\u8BC4</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u56DE\u7B54\u5185\u5BB9\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u56DE\u7B54\u5185\u5BB9\u5B8C\u6574"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u53CD\u9988\u5355\u72B6\u6001\u6821\u9A8C \u2014\u2014 \u4EC5\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\u72B6\u6001\u7684\u53CD\u9988\u5355\u53EF\u56DE\u7B54\uFF0C\u5DF2\u56DE\u7B54\u72B6\u6001\u53EF\u8FFD\u8BC4")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5DF2\u63D0\u4EA4] \u2500\u2500\u4E8B\u4E1A\u90E8\u53D7\u7406\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54] \u2500\u2500\u5B8C\u6210\u2500\u2500\u2192 [\u5DF2\u5B8C\u6210]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                              |</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                              \u2514\u2500\u2500\u7ECF\u9500\u5546\u8FFD\u8BC4\u2500\u2500\u2192 [\u5904\u7406\u4E2D]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u5DF2\u56DE\u7B54] \u2500\u2500\u4E8B\u4E1A\u90E8\u8FFD\u8BC4\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54]</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5DF2\u63D0\u4EA4</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u53D7\u7406</td><td${_scopeId}>\u5904\u7406\u4E2D</td></tr><tr${_scopeId}><td${_scopeId}>\u5904\u7406\u4E2D</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54</td><td${_scopeId}>\u5DF2\u56DE\u7B54</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u56DE\u7B54</td><td${_scopeId}>\u7ECF\u9500\u5546\u8FFD\u8BC4</td><td${_scopeId}>\u5904\u7406\u4E2D</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u56DE\u7B54</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8FFD\u8BC4</td><td${_scopeId}>\u5904\u7406\u4E2D</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u56DE\u7B54</td><td${_scopeId}>\u5B8C\u6210</td><td${_scopeId}>\u5DF2\u5B8C\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u5B8C\u6210</td><td${_scopeId}>\u8BC4\u4EF7</td><td${_scopeId}>\u5DF2\u8BC4\u4EF7</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5DF2\u63D0\u4EA4] \u2500\u2500\u4E8B\u4E1A\u90E8\u53D7\u7406\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54] \u2500\u2500\u5B8C\u6210\u2500\u2500\u2192 [\u5DF2\u5B8C\u6210]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                              |")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                              \u2514\u2500\u2500\u7ECF\u9500\u5546\u8FFD\u8BC4\u2500\u2500\u2192 [\u5904\u7406\u4E2D]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u5DF2\u56DE\u7B54] \u2500\u2500\u4E8B\u4E1A\u90E8\u8FFD\u8BC4\u2500\u2500\u2192 [\u5904\u7406\u4E2D] \u2500\u2500\u4E8B\u4E1A\u90E8\u56DE\u7B54\u2500\u2500\u2192 [\u5DF2\u56DE\u7B54]")
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
                createVNode("td", null, "\u5DF2\u63D0\u4EA4"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u53D7\u7406"),
                createVNode("td", null, "\u5904\u7406\u4E2D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5904\u7406\u4E2D"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u56DE\u7B54"),
                createVNode("td", null, "\u5DF2\u56DE\u7B54")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u56DE\u7B54"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u8FFD\u8BC4"),
                createVNode("td", null, "\u5904\u7406\u4E2D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u56DE\u7B54"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8FFD\u8BC4"),
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>QUESTIONID</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>TITLE</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u6807\u9898</td><td${_scopeId}>\u95EE\u9898\u6807\u9898</td><td${_scopeId}>\u7ECF\u9500\u5546\u8F93\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>TYPE_CODE</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u7C7B\u578B\u7F16\u7801</td><td${_scopeId}>\u95EE\u9898\u7C7B\u578B</td><td${_scopeId}>\u503C\u96C6\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>CONTENT</td><td${_scopeId}>String</td><td${_scopeId}>\u95EE\u9898\u63CF\u8FF0</td><td${_scopeId}>\u95EE\u9898\u63CF\u8FF0</td><td${_scopeId}>\u7ECF\u9500\u5546\u8F93\u5165\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>STATE</td><td${_scopeId}>Long</td><td${_scopeId}>\u95EE\u9898\u72B6\u6001</td><td${_scopeId}>\u95EE\u9898\u72B6\u6001</td><td${_scopeId}>\u503C\u96C6 \`MBO.FEEDBACK_STATE\`</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u95F4</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>ANSWER_TIME</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u65B0\u56DE\u590D\u65F6\u95F4</td><td${_scopeId}>\u5904\u7406\u65F6\u95F4</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u63D0\u4EA4\u4EBA</td><td${_scopeId}>\u7ECF\u9500\u5546\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>ANSWER_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u5904\u7406\u4EBA</td><td${_scopeId}>\u5904\u7406\u4EBA</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>ANSWER_CONTENT</td><td${_scopeId}>String</td><td${_scopeId}>\u56DE\u7B54\u5185\u5BB9</td><td${_scopeId}>\u56DE\u7B54\u5185\u5BB9</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>GRADE</td><td${_scopeId}>Long</td><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7(1-5)</td><td${_scopeId}>\u8BC4\u4EF7</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>EVALUATE_CONTENT</td><td${_scopeId}>String</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9</td><td${_scopeId}>\u8BC4\u4EF7\u65F6\u5199\u5165</td></tr><tr${_scopeId}><td${_scopeId}>DISTRIBUTOR_NAME</td><td${_scopeId}>String</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u53CD\u9988\u5355\u5173\u8054</td></tr><tr${_scopeId}><td${_scopeId}>ATTACHMENT</td><td${_scopeId}>String</td><td${_scopeId}>\u9644\u4EF6</td><td${_scopeId}>\u9644\u4EF6</td><td${_scopeId}>\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u8F93\u5165\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TYPE_CODE"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u7C7B\u578B\u7F16\u7801"),
                createVNode("td", null, "\u95EE\u9898\u7C7B\u578B"),
                createVNode("td", null, "\u503C\u96C6\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u95EE\u9898\u63CF\u8FF0"),
                createVNode("td", null, "\u95EE\u9898\u63CF\u8FF0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u8F93\u5165\uFF0C\u53EA\u8BFB")
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ANSWER_NAME"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u5904\u7406\u4EBA"),
                createVNode("td", null, "\u5904\u7406\u4EBA"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u56DE\u7B54\u65F6\u5199\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ANSWER_CONTENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u56DE\u7B54\u5185\u5BB9"),
                createVNode("td", null, "\u56DE\u7B54\u5185\u5BB9"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8F93\u5165\uFF0C\u5FC5\u586B")
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
                createVNode("td", null, "\u53CD\u9988\u5355\u5173\u8054")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ATTACHMENT"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u9644\u4EF6"),
                createVNode("td", null, "\u9644\u4EF6"),
                createVNode("td", null, "\u53EA\u8BFB")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u67E5\u8BE2/\u64CD\u4F5C\u65F6</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\uFF1B\u67E5\u770B\u63A5\u53E3\u8FD4\u56DE\u6D88\u606F</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63A5\u53E3\u8C03\u7528\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</td><td${_scopeId}>\u884C\u64CD\u4F5C\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u6570\u636E\u884C\uFF1B\u9009\u62E9\u4E00\u6761\u6570\u636E\u540E\u64CD\u4F5C</td><td${_scopeId}>\u8B66\u544A</td><td${_scopeId}>\u884C\u64CD\u4F5C\u524D\u6821\u9A8C\u9009\u4E2D\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u56DE\u7B54\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u56DE\u7B54/\u8FFD\u8BC4\u65F6</td><td${_scopeId}>\`ANSWER_CONTENT\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u56DE\u7B54\u5185\u5BB9</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u786E\u5B9A\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</td><td${_scopeId}>\u5B8C\u6210\u65F6</td><td${_scopeId}>\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u6267\u884C\u5B8C\u7ED3</td><td${_scopeId}>\u63D0\u793A</td><td${_scopeId}>\u5B8C\u7ED3\u524D\u786E\u8BA4</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u56DE\u7B54</td><td${_scopeId}>\u56DE\u7B54\u65F6</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001\u975E\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\uFF1B\u786E\u8BA4\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u72B6\u6001\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u5B8C\u7ED3</td><td${_scopeId}>\u5B8C\u6210\u65F6</td><td${_scopeId}>\u53CD\u9988\u5355\u72B6\u6001\u975E\u5DF2\u56DE\u7B54\uFF1B\u786E\u8BA4\u53CD\u9988\u5355\u72B6\u6001</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u72B6\u6001\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA\u65E0\u6570\u636E</td><td${_scopeId}>\u5BFC\u51FA\u65F6</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\uFF1B\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6</td><td${_scopeId}>\u8B66\u544A</td><td${_scopeId}>\u5BFC\u51FA\u524D\u6821\u9A8C\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u56DE\u7B54/\u5B8C\u7ED3/\u8BC4\u4EF7</td><td${_scopeId}>\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</td><td${_scopeId}>\u4E0B\u62C9\u9009\u9879</td><td${_scopeId}>\u503C\u96C6 MBO.FEEDBACK_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>warning</td><td${_scopeId}>lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4\u8BC4\u4EF7</td><td${_scopeId}>\u672A\u9009\u62E9\u8BC4\u4EF7\u661F\u7EA7\uFF0C\u9009\u62E9\u540E\u63D0\u4EA4</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C STAR_LEVEL \u975E\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u63D0\u4EA4\u8BC4\u4EF7</td><td${_scopeId}>\u672A\u586B\u5199\u8BC4\u4EF7\u5185\u5BB9\uFF0C\u586B\u5199\u540E\u63D0\u4EA4</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C EVALUATE_CONTENT \u975E\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8C03\u7528 <code${_scopeId}>feedback/*</code> \u7CFB\u5217\u63A5\u53E3\uFF08\u67E5\u8BE2/\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7/\u5BFC\u51FA\uFF09\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\u6216\u7F51\u7EDC\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6355\u83B7\u5230\u6210\u529F\u54CD\u5E94\uFF0C\u53EF\u80FD\u539F\u56E0\uFF1A\u2460mbo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u4E0D\u53EF\u7528\uFF1B\u2461\u5F53\u524D\u7528\u6237\u767B\u5F55\u6001\u8FC7\u671F\uFF08TOKEN \u5931\u6548\uFF09\uFF1B\u2462\u63A5\u53E3\u5165\u53C2\u683C\u5F0F\u9519\u8BEF\uFF08\u5982 id \u4E3A null\u3001\u56DE\u7B54\u5185\u5BB9\u8D85\u957F\uFF09\uFF1B\u2463\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u5BFC\u81F4\u670D\u52A1\u7AEF 500\u3002\u9700\u67E5\u770B\u6D4F\u89C8\u5668 Network \u9762\u677F\u4E2D\u5BF9\u5E94\u8BF7\u6C42\u7684 Response Body \u83B7\u53D6\u5177\u4F53\u9519\u8BEF\u6D88\u606F\uFF0C\u518D\u9488\u5BF9\u6027\u6392\u67E5\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u8FD1\u671F\u88AB\u64CD\u4F5C\u4F46\u56DE\u7B54\u5185\u5BB9\u5F02\u5E38\uFF08\u8D85\u957F\u6216\u4E3A\u7A7A\uFF09\u7684\u53CD\u9988\u5355\uFF0C\u5B9A\u4F4D\u5165\u53C2\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.TITLE         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_NAME   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5904\u7406\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.ANSWER_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LENGTH</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(\u53CD\u9988\u5355.ANSWER_CONTENT) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2000</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u8BF7\u9009\u62E9\u4E00\u6761\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5728\u5217\u8868\u672A\u9009\u4E2D\u4EFB\u4F55\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u70B9\u51FB&quot;\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7&quot;\u7B49\u884C\u64CD\u4F5C\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u884C\u64CD\u4F5C\u524D\u6821\u9A8C\u5F53\u524D\u9009\u4E2D\u884C\u96C6\u5408\uFF0C\u82E5 <code${_scopeId}>selectedRows</code> \u4E3A\u7A7A\u6570\u7EC4\u5219\u5F39\u51FA\u8BE5\u8B66\u544A\uFF0C\u5C5E\u4E8E\u524D\u7AEF\u7EAF\u6821\u9A8C\uFF0C\u4E0D\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5148\u70B9\u51FB\u5217\u8868\u67D0\u4E00\u884C\u9009\u4E2D\u540E\u518D\u6267\u884C\u5BF9\u5E94\u64CD\u4F5C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u65E0\uFF08\u7EAF\u524D\u7AEF\u9009\u4E2D\u884C\u6821\u9A8C\uFF0C\u4E0D\u6D89\u53CA\u6570\u636E\u5E93\u64CD\u4F5C\uFF09</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u56DE\u7B54\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u56DE\u7B54&quot;\u6216&quot;\u8FFD\u8BC4&quot;\u63D0\u4EA4\u65F6\uFF0C<code${_scopeId}>ANSWER_CONTENT</code> \u5B57\u6BB5\u4E3A\u7A7A\u6216\u4EC5\u542B\u7A7A\u767D\u5B57\u7B26</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C <code${_scopeId}>evaluateFormDs.validate()</code> / answerForm \u6821\u9A8C <code${_scopeId}>ANSWER_CONTENT</code> \u5FC5\u586B\uFF0Ctrim \u540E\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\uFF1B\u540E\u7AEF <code${_scopeId}>feedback/answer</code>\u3001<code${_scopeId}>feedback/comment</code> \u63A5\u53E3\u540C\u6837\u5BF9 <code${_scopeId}>ANSWER_CONTENT</code> \u505A <code${_scopeId}>@NotBlank</code> \u6821\u9A8C\uFF0C\u53CC\u91CD\u4FDD\u969C\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u586B\u5199\u56DE\u7B54\u5185\u5BB9\u540E\u91CD\u65B0\u63D0\u4EA4\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5386\u53F2\u56DE\u7B54\u5185\u5BB9\u4E3A\u7A7A\u4F46\u72B6\u6001\u5DF2\u53D8\u66F4\u4E3A\u5DF2\u56DE\u7B54\u7684\u5F02\u5E38\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.TITLE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5904\u7406\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_TIME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56DE\u7B54\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (\u53CD\u9988\u5355.ANSWER_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>TRIM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(\u53CD\u9988\u5355.ANSWER_CONTENT) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u786E\u5B9A\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5355\u5417\uFF1F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u5B8C\u6210&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u6B64\u4E3A\u4E8C\u6B21\u786E\u8BA4\u63D0\u793A\u800C\u975E\u62A5\u9519\u3002\u524D\u7AEF\u5F39\u51FA <code${_scopeId}>Modal.confirm</code> \u786E\u8BA4\u6846\uFF0C\u7528\u6237\u70B9\u51FB&quot;\u786E\u5B9A&quot;\u540E\u8C03\u7528 <code${_scopeId}>POST feedback/end/\${id}</code> \u63A5\u53E3\u5C06\u72B6\u6001\u7F6E\u4E3A\u5DF2\u5B8C\u6210(4)\uFF0C\u70B9\u51FB&quot;\u53D6\u6D88&quot;\u5219\u4E0D\u6267\u884C\u3002\u76EE\u7684\u662F\u9632\u6B62\u8BEF\u64CD\u4F5C\u5B8C\u7ED3\u53CD\u9988\u5355\u5BFC\u81F4\u6D41\u7A0B\u4E0D\u53EF\u9006\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u786E\u8BA4\u65E0\u8BEF\u540E\u70B9\u51FB&quot;\u786E\u5B9A&quot;\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5F53\u524D\u53EF\u5B8C\u7ED3\uFF08\u5DF2\u56DE\u7B54\uFF09\u7684\u53CD\u9988\u5355\uFF0C\u786E\u8BA4\u5B8C\u7ED3\u524D\u72B6\u6001\u6B63\u786E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.TITLE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5904\u7406\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_TIME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u56DE\u7B54\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u56DE\u7B54</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BF9\u72B6\u6001\u975E&quot;\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D&quot;\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u56DE\u7B54&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF <code${_scopeId}>feedback/answer</code> \u63A5\u53E3\u6821\u9A8C <code${_scopeId}>FEEDBACK.STATE</code> \u5FC5\u987B\u4E3A\u5DF2\u63D0\u4EA4(1)\u6216\u5904\u7406\u4E2D(2)\uFF0C\u82E5\u4E3A\u5DF2\u56DE\u7B54(3)/\u5DF2\u5B8C\u6210(4)\u5219\u629B\u51FA\u8BE5\u9519\u8BEF\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u5217\u8868\u6570\u636E\u672A\u5237\u65B0\uFF0C\u53CD\u9988\u5355\u5DF2\u88AB\u4ED6\u4EBA\u56DE\u7B54\uFF1B\u2461\u5E76\u53D1\u64CD\u4F5C\uFF0C\u4E24\u4E2A\u4E8B\u4E1A\u90E8\u7528\u6237\u540C\u65F6\u56DE\u7B54\u540C\u4E00\u53CD\u9988\u5355\uFF1B\u2462\u7ECF\u9500\u5546\u5DF2\u8FFD\u8BC4\u5C06\u72B6\u6001\u6539\u4E3A\u5904\u7406\u4E2D\u540E\u53C8\u518D\u6B21\u8FFD\u8BC4\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5237\u65B0\u5217\u8868\u786E\u8BA4\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\u540E\u518D\u64CD\u4F5C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\uFF0C\u786E\u8BA4\u662F\u5426\u5904\u4E8E\u53EF\u56DE\u7B54\u72B6\u6001\uFF08\u5DF2\u63D0\u4EA4=1 / \u5904\u7406\u4E2D=2\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.TITLE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u8FD1\u5904\u7406\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u95EE\u9898\u7F16\u53F7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u5B8C\u7ED3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5BF9\u72B6\u6001\u975E&quot;\u5DF2\u56DE\u7B54&quot;\u7684\u53CD\u9988\u5355\u70B9\u51FB&quot;\u5B8C\u6210&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF <code${_scopeId}>feedback/end/\${id}</code> \u63A5\u53E3\u6821\u9A8C <code${_scopeId}>FEEDBACK.STATE</code> \u5FC5\u987B\u4E3A\u5DF2\u56DE\u7B54(3)\uFF0C\u82E5\u4E3A\u5DF2\u63D0\u4EA4(1)/\u5904\u7406\u4E2D(2)/\u5DF2\u5B8C\u6210(4)\u5219\u629B\u51FA\u8BE5\u9519\u8BEF\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u53CD\u9988\u5355\u5C1A\u5728\u5904\u7406\u4E2D\u672A\u56DE\u7B54\uFF1B\u2461\u5DF2\u88AB\u4ED6\u4EBA\u5B8C\u7ED3\uFF1B\u2462\u5217\u8868\u672A\u5237\u65B0\u5BFC\u81F4\u72B6\u6001\u663E\u793A\u6EDE\u540E\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5237\u65B0\u5217\u8868\u786E\u8BA4\u72B6\u6001\u4E3A\u5DF2\u56DE\u7B54\u540E\u518D\u5B8C\u7ED3\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\uFF0C\u786E\u8BA4\u662F\u5426\u5904\u4E8E\u53EF\u5B8C\u7ED3\u72B6\u6001\uFF08\u5DF2\u56DE\u7B54=3\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.TITLE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.ANSWER_NAME     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u8FD1\u5904\u7406\u4EBA,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u95EE\u9898\u7F16\u53F7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u5BFC\u51FA\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5BFC\u51FA&quot;\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u5217\u8868\u7ED3\u679C\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u5148\u8C03\u7528 <code${_scopeId}>POST feedback/division/page</code> \u67E5\u8BE2\u603B\u6570\uFF0C\u82E5 total=0 \u5219\u5F39\u51FA\u8BE5\u8B66\u544A\uFF0C\u4E0D\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3\uFF1B\u6216\u540E\u7AEF\u5BFC\u51FA\u63A5\u53E3\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\u8FD4\u56DE\u7A7A\u6587\u4EF6\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u65F6\u95F4\u8303\u56F4/\u95EE\u9898\u7C7B\u578B/\u95EE\u9898\u72B6\u6001\u7EC4\u5408\u65E0\u6570\u636E\uFF09\uFF1B\u2461\u4E8B\u4E1A\u90E8\u89C6\u89D2\u4E0B\u65E0\u53EF\u89C1\u53CD\u9988\u5355\uFF1B\u2462\u63D0\u4EA4\u65F6\u95F4\u8303\u56F4\u9ED8\u8BA4\u8FD1\u4E00\u4E2A\u6708\u4F46\u8BE5\u65F6\u6BB5\u65E0\u6570\u636E\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u653E\u5BBD\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u6269\u5927\u65F6\u95F4\u8303\u56F4\u3001\u6E05\u7A7A\u95EE\u9898\u7C7B\u578B\u7B5B\u9009\uFF09\u540E\u91CD\u8BD5\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u67E5\u8BE2\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u53CD\u9988\u5355\u6570\u91CF\uFF0C\u786E\u8BA4\u662F\u5426\u771F\u7684\u65E0\u6570\u636E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355\u603B\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u63D0\u4EA4\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5904\u7406\u4E2D\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>3</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u56DE\u7B54\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u5B8C\u6210\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>BETWEEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u5F00\u59CB\u65F6\u95F4 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u7ED3\u675F\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:\u95EE\u9898\u7C7B\u578B </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.TYPE_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u95EE\u9898\u7C7B\u578B)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:\u95EE\u9898\u72B6\u6001 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u95EE\u9898\u72B6\u6001)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (:\u63D0\u4EA4\u4EBA   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.CREATE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :\u63D0\u4EA4\u4EBA </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(\u53CD\u9988\u5355.LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u56DE\u7B54\u3001\u8FFD\u8BC4\u3001\u5B8C\u6210\u3001\u8BC4\u4EF7\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%feedback_answer%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u56DE\u7B54\u3001\u5B8C\u7ED3\u3001\u8BC4\u4EF7\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 questionId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 FEEDBACK \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u95EE\u9898\u7F16\u53F7\u9519\u8BEF\u3001\u53CD\u9988\u5355\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.DELETE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u95EE\u9898\u7C7B\u578B\u3001\u95EE\u9898\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lookupCode \u67E5\u8BE2\u503C\u96C6 MBO.FEEDBACK_TYPE\u3001MBO.FEEDBACK_STATE \u7B49\uFF0C\u503C\u96C6\u672A\u914D\u7F6E\u6216\u672A\u542F\u7528\u5219\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A\u3002\u9700\u5728\u503C\u96C6\u7BA1\u7406\u9875\u9762\u914D\u7F6E\u5BF9\u5E94\u503C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u96C6\u7F16\u7801, LOOKUP_VALUE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOOKUP_VALUE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u542F\u7528\u6807\u8BB0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_LOOKUP_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.FEEDBACK_TYPE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>MBO.FEEDBACK_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>N</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOOKUP_CODE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BC4\u4EF7\u65F6\uFF0CSTAR_LEVEL \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8BC4\u4EF7\u5F39\u7A97\u5BF9 starLevel \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BC4\u4EF7\u661F\u7EA7\u662F\u5426\u9009\u62E9\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BC4\u4EF7\u661F\u7EA7\u7528\u4E8E\u91CF\u5316\u53CD\u9988\u5904\u7406\u8D28\u91CF\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.STAR_LEVEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u661F\u7EA7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.EVALUATE_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u5185\u5BB9</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STAR_LEVEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u63D0\u4EA4\u8BC4\u4EF7\u65F6\uFF0CEVALUATE_CONTENT \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8BC4\u4EF7\u5F39\u7A97\u5BF9 evaluateContent \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BC4\u4EF7\u5185\u5BB9\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u8BC4\u4EF7\u5185\u5BB9\u7528\u4E8E\u8BB0\u5F55\u53CD\u9988\u5904\u7406\u6EE1\u610F\u5EA6\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.QUESTIONID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u6807\u9898,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.STAR_LEVEL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u661F\u7EA7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         \u53CD\u9988\u5355.EVALUATE_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BC4\u4EF7\u5185\u5BB9</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK \u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u53CD\u9988\u5355.STATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (\u53CD\u9988\u5355.EVALUATE_CONTENT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>TRIM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(\u53CD\u9988\u5355.EVALUATE_CONTENT) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
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
                createVNode("td", null, "\u56DE\u7B54\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u56DE\u7B54/\u8FFD\u8BC4\u65F6"),
                createVNode("td", null, "`ANSWER_CONTENT` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u56DE\u7B54\u5185\u5BB9"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u786E\u5B9A\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
                createVNode("td", null, "\u5B8C\u6210\u65F6"),
                createVNode("td", null, "\u4E8C\u6B21\u786E\u8BA4\uFF1B\u786E\u8BA4\u540E\u6267\u884C\u5B8C\u7ED3"),
                createVNode("td", null, "\u63D0\u793A"),
                createVNode("td", null, "\u5B8C\u7ED3\u524D\u786E\u8BA4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u56DE\u7B54"),
                createVNode("td", null, "\u56DE\u7B54\u65F6"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001\u975E\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D\uFF1B\u786E\u8BA4\u53CD\u9988\u5355\u72B6\u6001"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u72B6\u6001\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u5B8C\u7ED3"),
                createVNode("td", null, "\u5B8C\u6210\u65F6"),
                createVNode("td", null, "\u53CD\u9988\u5355\u72B6\u6001\u975E\u5DF2\u56DE\u7B54\uFF1B\u786E\u8BA4\u53CD\u9988\u5355\u72B6\u6001"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u72B6\u6001\u6821\u9A8C")
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
                createVNode("td", null, "\u56DE\u7B54/\u5B8C\u7ED3/\u8BC4\u4EF7"),
                createVNode("td", null, "\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 QUESTIONID \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u9879"),
                createVNode("td", null, "\u503C\u96C6 MBO.FEEDBACK_TYPE \u7B49\u672A\u914D\u7F6E\uFF0C\u68C0\u67E5\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "warning"),
                createVNode("td", null, "lookupCode \u67E5\u8BE2\u8FD4\u56DE\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4\u8BC4\u4EF7"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8BC4\u4EF7\u661F\u7EA7\uFF0C\u9009\u62E9\u540E\u63D0\u4EA4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C STAR_LEVEL \u975E\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u63D0\u4EA4\u8BC4\u4EF7"),
                createVNode("td", null, "\u672A\u586B\u5199\u8BC4\u4EF7\u5185\u5BB9\uFF0C\u586B\u5199\u540E\u63D0\u4EA4"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C EVALUATE_CONTENT \u975E\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8C03\u7528 "),
              createVNode("code", null, "feedback/*"),
              createTextVNode(" \u7CFB\u5217\u63A5\u53E3\uFF08\u67E5\u8BE2/\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7/\u5BFC\u51FA\uFF09\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u975E\u6210\u529F\u72B6\u6001\u6216\u7F51\u7EDC\u5F02\u5E38")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6355\u83B7\u5230\u6210\u529F\u54CD\u5E94\uFF0C\u53EF\u80FD\u539F\u56E0\uFF1A\u2460mbo-business \u5FAE\u670D\u52A1\u672A\u542F\u52A8\u6216\u4E0D\u53EF\u7528\uFF1B\u2461\u5F53\u524D\u7528\u6237\u767B\u5F55\u6001\u8FC7\u671F\uFF08TOKEN \u5931\u6548\uFF09\uFF1B\u2462\u63A5\u53E3\u5165\u53C2\u683C\u5F0F\u9519\u8BEF\uFF08\u5982 id \u4E3A null\u3001\u56DE\u7B54\u5185\u5BB9\u8D85\u957F\uFF09\uFF1B\u2463\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u5BFC\u81F4\u670D\u52A1\u7AEF 500\u3002\u9700\u67E5\u770B\u6D4F\u89C8\u5668 Network \u9762\u677F\u4E2D\u5BF9\u5E94\u8BF7\u6C42\u7684 Response Body \u83B7\u53D6\u5177\u4F53\u9519\u8BEF\u6D88\u606F\uFF0C\u518D\u9488\u5BF9\u6027\u6392\u67E5\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u8FD1\u671F\u88AB\u64CD\u4F5C\u4F46\u56DE\u7B54\u5185\u5BB9\u5F02\u5E38\uFF08\u8D85\u957F\u6216\u4E3A\u7A7A\uFF09\u7684\u53CD\u9988\u5355\uFF0C\u5B9A\u4F4D\u5165\u53C2\u95EE\u9898")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.TITLE         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_NAME   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5904\u7406\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.ANSWER_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LENGTH"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(\u53CD\u9988\u5355.ANSWER_CONTENT) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2000")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
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
              createTextVNode('\uFF1A\u5728\u5217\u8868\u672A\u9009\u4E2D\u4EFB\u4F55\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u70B9\u51FB"\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7"\u7B49\u884C\u64CD\u4F5C\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u5728\u6267\u884C\u884C\u64CD\u4F5C\u524D\u6821\u9A8C\u5F53\u524D\u9009\u4E2D\u884C\u96C6\u5408\uFF0C\u82E5 "),
              createVNode("code", null, "selectedRows"),
              createTextVNode(" \u4E3A\u7A7A\u6570\u7EC4\u5219\u5F39\u51FA\u8BE5\u8B66\u544A\uFF0C\u5C5E\u4E8E\u524D\u7AEF\u7EAF\u6821\u9A8C\uFF0C\u4E0D\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5148\u70B9\u51FB\u5217\u8868\u67D0\u4E00\u884C\u9009\u4E2D\u540E\u518D\u6267\u884C\u5BF9\u5E94\u64CD\u4F5C\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u65E0\uFF08\u7EAF\u524D\u7AEF\u9009\u4E2D\u884C\u6821\u9A8C\uFF0C\u4E0D\u6D89\u53CA\u6570\u636E\u5E93\u64CD\u4F5C\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u56DE\u7B54\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u56DE\u7B54"\u6216"\u8FFD\u8BC4"\u63D0\u4EA4\u65F6\uFF0C'),
              createVNode("code", null, "ANSWER_CONTENT"),
              createTextVNode(" \u5B57\u6BB5\u4E3A\u7A7A\u6216\u4EC5\u542B\u7A7A\u767D\u5B57\u7B26")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8868\u5355\u6821\u9A8C "),
              createVNode("code", null, "evaluateFormDs.validate()"),
              createTextVNode(" / answerForm \u6821\u9A8C "),
              createVNode("code", null, "ANSWER_CONTENT"),
              createTextVNode(" \u5FC5\u586B\uFF0Ctrim \u540E\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\uFF1B\u540E\u7AEF "),
              createVNode("code", null, "feedback/answer"),
              createTextVNode("\u3001"),
              createVNode("code", null, "feedback/comment"),
              createTextVNode(" \u63A5\u53E3\u540C\u6837\u5BF9 "),
              createVNode("code", null, "ANSWER_CONTENT"),
              createTextVNode(" \u505A "),
              createVNode("code", null, "@NotBlank"),
              createTextVNode(" \u6821\u9A8C\uFF0C\u53CC\u91CD\u4FDD\u969C\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u586B\u5199\u56DE\u7B54\u5185\u5BB9\u540E\u91CD\u65B0\u63D0\u4EA4\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5386\u53F2\u56DE\u7B54\u5185\u5BB9\u4E3A\u7A7A\u4F46\u72B6\u6001\u5DF2\u53D8\u66F4\u4E3A\u5DF2\u56DE\u7B54\u7684\u5F02\u5E38\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.TITLE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5904\u7406\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_TIME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56DE\u7B54\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (\u53CD\u9988\u5355.ANSWER_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "TRIM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(\u53CD\u9988\u5355.ANSWER_CONTENT) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.ANSWER_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u786E\u5B9A\u5B8C\u7ED3\u8BE5\u53CD\u9988\u5355\u5417\uFF1F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u9009\u62E9\u5DF2\u56DE\u7B54\u72B6\u6001\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u5B8C\u6210"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u6B64\u4E3A\u4E8C\u6B21\u786E\u8BA4\u63D0\u793A\u800C\u975E\u62A5\u9519\u3002\u524D\u7AEF\u5F39\u51FA "),
              createVNode("code", null, "Modal.confirm"),
              createTextVNode(' \u786E\u8BA4\u6846\uFF0C\u7528\u6237\u70B9\u51FB"\u786E\u5B9A"\u540E\u8C03\u7528 '),
              createVNode("code", null, "POST feedback/end/${id}"),
              createTextVNode(' \u63A5\u53E3\u5C06\u72B6\u6001\u7F6E\u4E3A\u5DF2\u5B8C\u6210(4)\uFF0C\u70B9\u51FB"\u53D6\u6D88"\u5219\u4E0D\u6267\u884C\u3002\u76EE\u7684\u662F\u9632\u6B62\u8BEF\u64CD\u4F5C\u5B8C\u7ED3\u53CD\u9988\u5355\u5BFC\u81F4\u6D41\u7A0B\u4E0D\u53EF\u9006\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u786E\u8BA4\u65E0\u8BEF\u540E\u70B9\u51FB"\u786E\u5B9A"\u3002')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5F53\u524D\u53EF\u5B8C\u7ED3\uFF08\u5DF2\u56DE\u7B54\uFF09\u7684\u53CD\u9988\u5355\uFF0C\u786E\u8BA4\u5B8C\u7ED3\u524D\u72B6\u6001\u6B63\u786E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.TITLE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5904\u7406\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_TIME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u56DE\u7B54\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.ANSWER_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u56DE\u7B54"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u5BF9\u72B6\u6001\u975E"\u5DF2\u63D0\u4EA4/\u5904\u7406\u4E2D"\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u56DE\u7B54"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF "),
              createVNode("code", null, "feedback/answer"),
              createTextVNode(" \u63A5\u53E3\u6821\u9A8C "),
              createVNode("code", null, "FEEDBACK.STATE"),
              createTextVNode(" \u5FC5\u987B\u4E3A\u5DF2\u63D0\u4EA4(1)\u6216\u5904\u7406\u4E2D(2)\uFF0C\u82E5\u4E3A\u5DF2\u56DE\u7B54(3)/\u5DF2\u5B8C\u6210(4)\u5219\u629B\u51FA\u8BE5\u9519\u8BEF\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u5217\u8868\u6570\u636E\u672A\u5237\u65B0\uFF0C\u53CD\u9988\u5355\u5DF2\u88AB\u4ED6\u4EBA\u56DE\u7B54\uFF1B\u2461\u5E76\u53D1\u64CD\u4F5C\uFF0C\u4E24\u4E2A\u4E8B\u4E1A\u90E8\u7528\u6237\u540C\u65F6\u56DE\u7B54\u540C\u4E00\u53CD\u9988\u5355\uFF1B\u2462\u7ECF\u9500\u5546\u5DF2\u8FFD\u8BC4\u5C06\u72B6\u6001\u6539\u4E3A\u5904\u7406\u4E2D\u540E\u53C8\u518D\u6B21\u8FFD\u8BC4\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5237\u65B0\u5217\u8868\u786E\u8BA4\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\u540E\u518D\u64CD\u4F5C\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\uFF0C\u786E\u8BA4\u662F\u5426\u5904\u4E8E\u53EF\u56DE\u7B54\u72B6\u6001\uFF08\u5DF2\u63D0\u4EA4=1 / \u5904\u7406\u4E2D=2\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.TITLE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u8FD1\u5904\u7406\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u95EE\u9898\u7F16\u53F7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u8BE5\u53CD\u9988\u5355\u4E0D\u53EF\u5B8C\u7ED3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u5BF9\u72B6\u6001\u975E"\u5DF2\u56DE\u7B54"\u7684\u53CD\u9988\u5355\u70B9\u51FB"\u5B8C\u6210"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF "),
              createVNode("code", null, "feedback/end/${id}"),
              createTextVNode(" \u63A5\u53E3\u6821\u9A8C "),
              createVNode("code", null, "FEEDBACK.STATE"),
              createTextVNode(" \u5FC5\u987B\u4E3A\u5DF2\u56DE\u7B54(3)\uFF0C\u82E5\u4E3A\u5DF2\u63D0\u4EA4(1)/\u5904\u7406\u4E2D(2)/\u5DF2\u5B8C\u6210(4)\u5219\u629B\u51FA\u8BE5\u9519\u8BEF\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u53CD\u9988\u5355\u5C1A\u5728\u5904\u7406\u4E2D\u672A\u56DE\u7B54\uFF1B\u2461\u5DF2\u88AB\u4ED6\u4EBA\u5B8C\u7ED3\uFF1B\u2462\u5217\u8868\u672A\u5237\u65B0\u5BFC\u81F4\u72B6\u6001\u663E\u793A\u6EDE\u540E\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5237\u65B0\u5217\u8868\u786E\u8BA4\u72B6\u6001\u4E3A\u5DF2\u56DE\u7B54\u540E\u518D\u5B8C\u7ED3\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u53CD\u9988\u5355\u5F53\u524D\u72B6\u6001\uFF0C\u786E\u8BA4\u662F\u5426\u5904\u4E8E\u53EF\u5B8C\u7ED3\u72B6\u6001\uFF08\u5DF2\u56DE\u7B54=3\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.TITLE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.ANSWER_NAME     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u8FD1\u5904\u7406\u4EBA,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u95EE\u9898\u7F16\u53F7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u5BFC\u51FA\u65E0\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u5BFC\u51FA"\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u5217\u8868\u7ED3\u679C\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u5148\u8C03\u7528 "),
              createVNode("code", null, "POST feedback/division/page"),
              createTextVNode(" \u67E5\u8BE2\u603B\u6570\uFF0C\u82E5 total=0 \u5219\u5F39\u51FA\u8BE5\u8B66\u544A\uFF0C\u4E0D\u8C03\u7528\u5BFC\u51FA\u63A5\u53E3\uFF1B\u6216\u540E\u7AEF\u5BFC\u51FA\u63A5\u53E3\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\u8FD4\u56DE\u7A7A\u6587\u4EF6\u3002\u5E38\u89C1\u573A\u666F\uFF1A\u2460\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u65F6\u95F4\u8303\u56F4/\u95EE\u9898\u7C7B\u578B/\u95EE\u9898\u72B6\u6001\u7EC4\u5408\u65E0\u6570\u636E\uFF09\uFF1B\u2461\u4E8B\u4E1A\u90E8\u89C6\u89D2\u4E0B\u65E0\u53EF\u89C1\u53CD\u9988\u5355\uFF1B\u2462\u63D0\u4EA4\u65F6\u95F4\u8303\u56F4\u9ED8\u8BA4\u8FD1\u4E00\u4E2A\u6708\u4F46\u8BE5\u65F6\u6BB5\u65E0\u6570\u636E\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u653E\u5BBD\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u6269\u5927\u65F6\u95F4\u8303\u56F4\u3001\u6E05\u7A7A\u95EE\u9898\u7C7B\u578B\u7B5B\u9009\uFF09\u540E\u91CD\u8BD5\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u67E5\u8BE2\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u53CD\u9988\u5355\u6570\u91CF\uFF0C\u786E\u8BA4\u662F\u5426\u771F\u7684\u65E0\u6570\u636E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355\u603B\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u63D0\u4EA4\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5904\u7406\u4E2D\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u56DE\u7B54\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u5B8C\u6210\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "BETWEEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u5F00\u59CB\u65F6\u95F4 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u7ED3\u675F\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:\u95EE\u9898\u7C7B\u578B "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.TYPE_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u95EE\u9898\u7C7B\u578B)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:\u95EE\u9898\u72B6\u6001 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u95EE\u9898\u72B6\u6001)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (:\u63D0\u4EA4\u4EBA   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.CREATE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :\u63D0\u4EA4\u4EBA "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001mbo-business \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(\u53CD\u9988\u5355.LAST_UPDATE_DATE,"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.LAST_UPDATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u56DE\u7B54\u3001\u8FFD\u8BC4\u3001\u5B8C\u6210\u3001\u8BC4\u4EF7\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%feedback_answer%"),
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u56DE\u7B54\u3001\u5B8C\u7ED3\u3001\u8BC4\u4EF7\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u95EE\u9898\u7F16\u53F7\u4E0D\u5B58\u5728")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u6807\u8BB0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.DELETE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u503C\u96C6\u6570\u636E\u4E0D\u663E\u793A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u6216\u5217\u8868\u4E2D\u95EE\u9898\u7C7B\u578B\u3001\u95EE\u9898\u72B6\u6001\u7B49\u4E0B\u62C9\u9009\u9879\u4E3A\u7A7A")
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
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u8BC4\u4EF7\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.STAR_LEVEL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u661F\u7EA7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.EVALUATE_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u5185\u5BB9")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STAR_LEVEL "),
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
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u8BC4\u4EF7\u65F6\uFF0CEVALUATE_CONTENT \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8BC4\u4EF7\u5F39\u7A97\u5BF9 evaluateContent \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u8BC4\u4EF7\u5185\u5BB9\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u8BC4\u4EF7\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u8BC4\u4EF7\u5185\u5BB9\u7528\u4E8E\u8BB0\u5F55\u53CD\u9988\u5904\u7406\u6EE1\u610F\u5EA6\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.QUESTIONID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u7F16\u53F7, \u53CD\u9988\u5355.TITLE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u6807\u9898,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95EE\u9898\u72B6\u6001, \u53CD\u9988\u5355.STAR_LEVEL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u661F\u7EA7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         \u53CD\u9988\u5355.EVALUATE_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BC4\u4EF7\u5185\u5BB9")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK \u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u53CD\u9988\u5355.STATE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (\u53CD\u9988\u5355.EVALUATE_CONTENT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "TRIM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(\u53CD\u9988\u5355.EVALUATE_CONTENT) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
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
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 1. \u67E5\u8BE2\u5F85\u56DE\u590D\u7684\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, TYPE_CODE, CONTENT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       CREATE_TIME, CREATE_NAME, DISTRIBUTOR_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :submittedState</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ASC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 2. \u67E5\u8BE2\u5DF2\u56DE\u7B54\u5F85\u5B8C\u7ED3\u7684\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, CONTENT, ANSWER_CONTENT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       ANSWER_TIME, ANSWER_NAME, CREATE_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :answeredState</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 3. \u67E5\u8BE2\u67D0\u4E8B\u4E1A\u90E8\u7684\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, CREATE_TIME, ANSWER_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ANSWER_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :divisionUser</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 4. \u67E5\u8BE2\u5DF2\u5B8C\u7ED3\u5F85\u8BC4\u4EF7\u7684\u53CD\u9988\u5355</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> QUESTIONID, TITLE, ANSWER_CONTENT, ANSWER_TIME, CREATE_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FEEDBACK</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :completedState</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ANSWER_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 1. \u67E5\u8BE2\u5F85\u56DE\u590D\u7684\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, TYPE_CODE, CONTENT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       CREATE_TIME, CREATE_NAME, DISTRIBUTOR_NAME")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :submittedState")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_TIME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ASC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 2. \u67E5\u8BE2\u5DF2\u56DE\u7B54\u5F85\u5B8C\u7ED3\u7684\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, CONTENT, ANSWER_CONTENT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       ANSWER_TIME, ANSWER_NAME, CREATE_NAME")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :answeredState")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 3. \u67E5\u8BE2\u67D0\u4E8B\u4E1A\u90E8\u7684\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", CREATE_TIME, ANSWER_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FEEDBACK")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ANSWER_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :divisionUser")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 4. \u67E5\u8BE2\u5DF2\u5B8C\u7ED3\u5F85\u8BC4\u4EF7\u7684\u53CD\u9988\u5355")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " QUESTIONID, TITLE, ANSWER_CONTENT, ANSWER_TIME, CREATE_NAME")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u54C1\u724C\u65B9\u56DE\u590D\u903B\u8F91\u3001\u5B8C\u7ED3\u529F\u80FD\u3001\u72B6\u6001\u673A\u3001\u6392\u67E5 SQL</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8865\u5145 API \u63A5\u53E3\u3001\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7\u903B\u8F91\u3001\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u54C1\u724C\u65B9\u56DE\u590D\u903B\u8F91\u3001\u5B8C\u7ED3\u529F\u80FD\u3001\u72B6\u6001\u673A\u3001\u6392\u67E5 SQL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u8865\u5145 API \u63A5\u53E3\u3001\u56DE\u7B54/\u8FFD\u8BC4/\u5B8C\u6210/\u8BC4\u4EF7\u903B\u8F91\u3001\u4FDD\u5B58/\u63D0\u4EA4\u6821\u9A8C")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95EE\u9898\u53CD\u9988/\u95EE\u9898\u56DE\u590D/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
