import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u6CD5\u4EBA\u5BF9\u8D26\u5355/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u6CD5\u4EBA\u5BF9\u8D26\u5355/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5BF9\u4EC0\u4E48\u8D26</span><h2>\u6CD5\u4EBA\u5BF9\u8D26\u5355\u5BF9\u4EC0\u4E48\u8D26</h2><p>\u6309\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA\u68C0\u7D22\u6CD5\u4EBA\u5BF9\u8D26\u8BB0\u5F55\u5E76\u6838\u5BF9\u5F80\u6765\u6570\u636E</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u67E5\u8BE2\u7EF4\u5EA6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u7EF4\u5EA6\u68C0\u7D22\uFF0C\u5B9A\u4F4D\u5BF9\u5E94\u7684\u6CD5\u4EBA\u5BF9\u8D26\u8BB0\u5F55\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 8H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u6765\u6E90</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BA2\u6237\u4E3B\u6570\u636E\u3001\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E\u4E0E CRM \u57FA\u7840\u6570\u636E\u5171\u540C\u652F\u6491\u5BF9\u8D26\u751F\u6210\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u4E1A\u52A1\u7528\u9014</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6838\u5BF9\u6CD5\u4EBA\u7EF4\u5EA6\u7684\u5F80\u6765\u91D1\u989D\uFF0C\u652F\u6491\u8D22\u52A1\u5BF9\u8D26\u4E0E\u8D26\u6B3E\u6838\u5BF9\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u600E\u4E48\u7528</span><h2>\u5982\u4F55\u4F7F\u7528\u6CD5\u4EBA\u5BF9\u8D26\u5355</h2><p>\u67E5\u8BE2\u540E\u652F\u6301\u67E5\u770B\u5BF9\u8D26\u660E\u7EC6\u4E0E\u6253\u5370\u5BF9\u8D26\u5355</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u9009\u62E9\u6761\u4EF6</h5><small>\u9009\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA<br>\u5B9A\u4F4D\u5BF9\u8D26\u8BB0\u5F55</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u8BE2\u5217\u8868</h5><small>\u5C55\u793A\u6CD5\u4EBA<br>\u5BF9\u8D26\u5217\u8868</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 10H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 13H10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B/\u6253\u5370</h5><small>\u67E5\u770B\u5BF9\u8D26\u660E\u7EC6<br>\u5E76\u6253\u5370\u5BF9\u8D26\u5355</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u5BF9\u8D26\u53E3\u5F84\uFF1A</strong>\u672C\u9875\u4EC5\u4F5C\u6CD5\u4EBA\u5BF9\u8D26\u67E5\u8BE2\u5C55\u793A\uFF0C\u4E0D\u5BF9\u5F80\u6765\u6570\u636E\u505A\u4EFB\u4F55\u5199\u5165\uFF0C\u5BF9\u8D26\u6570\u636E\u7531\u4E3B\u6570\u636E\u4E0E\u5F80\u6765\u6D41\u6C34\u6C47\u603B\u800C\u6765\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u6CD5\u4EBA\u5BF9\u8D26\u5355\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u9009\u62E9\u67E5\u8BE2\u6761\u4EF6 \u2192 \u2605\u6CD5\u4EBA\u5BF9\u8D26\u5355\u67E5\u8BE2\u2605 \u2192 \u5C55\u793A\u6CD5\u4EBA\u5BF9\u8D26\u5217\u8868 \u2192 \u7ED3\u675F\uFF08\u53EF\u67E5\u770B\u8BE6\u60C5/\u6253\u5370\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 660" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="370" y="56" width="140" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="440" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5BA2\u6237\u4E3B\u6570\u636E</text><rect x="530" y="56" width="140" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4EA4\u6613\u516C\u53F8\u4E3B\u6570\u636E</text><rect x="690" y="56" width="140" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="760" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM\u57FA\u7840\u6570\u636E</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="226" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="226" width="170" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="253" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u9009\u62E9\u67E5\u8BE2\u6761\u4EF6</text><line x1="600" y1="270" x2="600" y2="302" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="302" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="327" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u6CD5\u4EBA\u5BF9\u8D26\u5355\u67E5\u8BE2\u2605</text><text x="600" y="346" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA\xB7\u67E5CUSTOMER_LEGAL_ENTITY</text><line x1="600" y1="356" x2="600" y2="388" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="510" y="388" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="413" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5C55\u793A\u6CD5\u4EBA\u5BF9\u8D26\u5217\u8868</text><line x1="600" y1="428" x2="600" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="460" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="485" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="500" x2="600" y2="532" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="532" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="554" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="360" y="568" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="460" y="590" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5BF9\u8D26\u5355\u67E5\u8BE2(\u7EAF\u67E5\u8BE2)</text><rect x="590" y="568" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="690" y="590" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5BF9\u8D26\u5355\u6253\u5370(\u62A5\u8868)</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1AEBS\u5B9E\u65F6\u6570\u636E\u83B7\u53D6 {\u6570\u636E\u6765\u6E90}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u6570\u636E\u5B58\u50A8\u5728EBS\u7CFB\u7EDF\u4E2D\uFF0C\u901A\u8FC7\u5B9E\u65F6\u63A5\u53E3\u83B7\u53D6\u786E\u4FDD\u6570\u636E\u51C6\u786E\u6027</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5BF9\u8D26\u5355\u5217\u8868\u548C\u660E\u7EC6\u6570\u636E\u901A\u8FC7EBS SDK\u63A5\u53E3\u4ECEEBS\u7CFB\u7EDF\u5B9E\u65F6\u83B7\u53D6</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4E0D\u5B58\u50A8\u5728DMS\u672C\u5730\u6570\u636E\u5E93\uFF0C\u6BCF\u6B21\u67E5\u8BE2\u5B9E\u65F6\u8C03\u7528EBS\u63A5\u53E3</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u6570\u636E\u5305\u542B\u671F\u521D\u4F59\u989D\u3001\u672C\u671F\u589E\u52A0\uFF08\u501F\u65B9\uFF09\u3001\u672C\u671F\u51CF\u5C11\uFF08\u8D37\u65B9\uFF09\u3001\u671F\u672B\u4F59\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u6570\u636E\u5B58\u50A8\u5728EBS\u7CFB\u7EDF\u4E2D\uFF0C\u901A\u8FC7\u5B9E\u65F6\u63A5\u53E3\u83B7\u53D6\u786E\u4FDD\u6570\u636E\u51C6\u786E\u6027")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5BF9\u8D26\u5355\u5217\u8868\u548C\u660E\u7EC6\u6570\u636E\u901A\u8FC7EBS SDK\u63A5\u53E3\u4ECEEBS\u7CFB\u7EDF\u5B9E\u65F6\u83B7\u53D6")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4E0D\u5B58\u50A8\u5728DMS\u672C\u5730\u6570\u636E\u5E93\uFF0C\u6BCF\u6B21\u67E5\u8BE2\u5B9E\u65F6\u8C03\u7528EBS\u63A5\u53E3")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u6570\u636E\u5305\u542B\u671F\u521D\u4F59\u989D\u3001\u672C\u671F\u589E\u52A0\uFF08\u501F\u65B9\uFF09\u3001\u672C\u671F\u51CF\u5C11\uFF08\u8D37\u65B9\uFF09\u3001\u671F\u672B\u4F59\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u56DB\u7C7B\u5BF9\u8D26\u660E\u7EC6 {\u5206\u7C7B\u5C55\u793A}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6309\u4E1A\u52A1\u7C7B\u578B\u5206\u7C7B\u5C55\u793A\u5BF9\u8D26\u660E\u7EC6\uFF0C\u6E05\u6670\u5448\u73B0\u4E0D\u540C\u7C7B\u578B\u5F80\u6765\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u8D27\u6B3E\uFF08stateType=1\uFF09\uFF1A\u5C55\u793A\u8D27\u6B3E\u7C7B\u5F80\u6765\u660E\u7EC6</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u672A\u7ED3\u7B97\u8BA2\u5355/\u53D1\u51FA\u5546\u54C1\uFF08stateType=2\uFF09\uFF1A\u5C55\u793A\u672A\u7ED3\u7B97\u8BA2\u5355\u660E\u7EC6</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u8D27\u6B3E\uFF08stateType=3\uFF09\uFF1A\u5C55\u793A\u8D27\u6B3E\u7C7B\u8C03\u6574\u660E\u7EC6</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u4FDD\u8BC1\u91D1\uFF08stateType=4\uFF09\uFF1A\u5C55\u793A\u4FDD\u8BC1\u91D1\u7C7B\u5F80\u6765\u660E\u7EC6</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u6309\u4E1A\u52A1\u7C7B\u578B\u5206\u7C7B\u5C55\u793A\u5BF9\u8D26\u660E\u7EC6\uFF0C\u6E05\u6670\u5448\u73B0\u4E0D\u540C\u7C7B\u578B\u5F80\u6765\u6570\u636E")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u8D27\u6B3E\uFF08stateType=1\uFF09\uFF1A\u5C55\u793A\u8D27\u6B3E\u7C7B\u5F80\u6765\u660E\u7EC6")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u672A\u7ED3\u7B97\u8BA2\u5355/\u53D1\u51FA\u5546\u54C1\uFF08stateType=2\uFF09\uFF1A\u5C55\u793A\u672A\u7ED3\u7B97\u8BA2\u5355\u660E\u7EC6")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u8D27\u6B3E\uFF08stateType=3\uFF09\uFF1A\u5C55\u793A\u8D27\u6B3E\u7C7B\u8C03\u6574\u660E\u7EC6")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u4FDD\u8BC1\u91D1\uFF08stateType=4\uFF09\uFF1A\u5C55\u793A\u4FDD\u8BC1\u91D1\u7C7B\u5F80\u6765\u660E\u7EC6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u591A\u7EF4\u5EA6\u67E5\u8BE2 {\u67E5\u8BE2\u68C0\u7D22}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u6309\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u671F\u95F4\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\u7B49\u591A\u7EF4\u5EA6\u67E5\u8BE2</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u652F\u6301\u6309\u671F\u95F4\uFF08periodName\uFF09\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\uFF08stateType\uFF09\u3001OU\u540D\u79F0\uFF08orgName\uFF09\u67E5\u8BE2</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u652F\u6301\u6309\u5BA2\u6237\u7F16\u53F7\uFF08partyNumber\uFF09\u3001\u4E8B\u4E1A\u90E8\uFF08businessDept\uFF09\u7B5B\u9009</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u652F\u6301\u6309\u5E01\u79CD\uFF08currencyCode\uFF09\u533A\u5206\u67E5\u8BE2</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u6309\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u671F\u95F4\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\u7B49\u591A\u7EF4\u5EA6\u67E5\u8BE2")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u652F\u6301\u6309\u671F\u95F4\uFF08periodName\uFF09\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\uFF08stateType\uFF09\u3001OU\u540D\u79F0\uFF08orgName\uFF09\u67E5\u8BE2")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u652F\u6301\u6309\u5BA2\u6237\u7F16\u53F7\uFF08partyNumber\uFF09\u3001\u4E8B\u4E1A\u90E8\uFF08businessDept\uFF09\u7B5B\u9009")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u652F\u6301\u6309\u5E01\u79CD\uFF08currencyCode\uFF09\u533A\u5206\u67E5\u8BE2")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u5355\u5217\u8868\u9875\uFF08hlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E\u540E\u7AEFEntity\u548CAPI\u68B3\u7406\u3002\u6570\u636E\u901A\u8FC7EBS SDK\u63A5\u53E3\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u671F\u95F4</td><td${_scopeId}>CuxCustomerStateHeader.periodName</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F1A\u8BA1\u671F\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u5BF9\u8D26\u5355\u7C7B\u578B</td><td${_scopeId}>CuxCustomerStateHeader.stateType</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u5BF9\u8D26\u5355\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u5FEB\u7801</td></tr><tr${_scopeId}><td${_scopeId}>OU\u540D\u79F0</td><td${_scopeId}>CuxCustomerStateHeader.orgName</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>OU\u7EC4\u7EC7\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9\u6216\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u7F16\u53F7</td><td${_scopeId}>CuxCustomerStateHeader.partyNumber</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>CuxCustomerStateHeader.businessDept</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>CuxCustomerStateHeader.currencyCode</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>CuxCustomerStateHeader.beginBalance</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u671F\u589E\u52A0(\u501F\u65B9)</td><td${_scopeId}>CuxCustomerStateHeader.debitAmount</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u672C\u671F\u589E\u52A0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u672C\u671F\u51CF\u5C11(\u8D37\u65B9)</td><td${_scopeId}>CuxCustomerStateHeader.creditAmount</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>CuxCustomerStateHeader.endBalance</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u53D1\u9001\u72B6\u6001</td><td${_scopeId}>CuxCustomerStateHeader.sendFlag</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E\u540E\u7AEFEntity\u548CAPI\u68B3\u7406\u3002\u6570\u636E\u901A\u8FC7EBS SDK\u63A5\u53E3\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\u3002"),
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
                createVNode("td", null, "\u671F\u95F4"),
                createVNode("td", null, "CuxCustomerStateHeader.periodName"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4F1A\u8BA1\u671F\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BF9\u8D26\u5355\u7C7B\u578B"),
                createVNode("td", null, "CuxCustomerStateHeader.stateType"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u5FEB\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OU\u540D\u79F0"),
                createVNode("td", null, "CuxCustomerStateHeader.orgName"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "OU\u7EC4\u7EC7\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9\u6216\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u7F16\u53F7"),
                createVNode("td", null, "CuxCustomerStateHeader.partyNumber"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "CuxCustomerStateHeader.businessDept"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "CuxCustomerStateHeader.currencyCode"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "CuxCustomerStateHeader.beginBalance"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u671F\u589E\u52A0(\u501F\u65B9)"),
                createVNode("td", null, "CuxCustomerStateHeader.debitAmount"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11(\u8D37\u65B9)"),
                createVNode("td", null, "CuxCustomerStateHeader.creditAmount"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "CuxCustomerStateHeader.endBalance"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53D1\u9001\u72B6\u6001"),
                createVNode("td", null, "CuxCustomerStateHeader.sendFlag"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u5355\u660E\u7EC6\u9875\uFF08\u81EA\u5B9A\u4E49React\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5BF9\u8D26\u4E3B\u4F53</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BF9\u8D26\u4E3B\u4F53\u4FE1\u606F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5217\u8868\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5217\u8868\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4F1A\u8BA1\u671F</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F1A\u8BA1\u671F\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5217\u8868\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD\u4FE1\u606F</td><td${_scopeId}>-</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5217\u8868\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D27\u6B3E\u660E\u7EC6(stateType=1)</td><td${_scopeId}>-</td><td${_scopeId}>\u8868\u683C</td><td${_scopeId}>\u8D27\u6B3E\u7C7B\u5F80\u6765\u660E\u7EC6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u7ED3\u7B97\u8BA2\u5355\u660E\u7EC6(stateType=2)</td><td${_scopeId}>-</td><td${_scopeId}>\u8868\u683C</td><td${_scopeId}>\u672A\u7ED3\u7B97\u8BA2\u5355/\u53D1\u51FA\u5546\u54C1\u660E\u7EC6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u8D27\u6B3E\u660E\u7EC6(stateType=3)</td><td${_scopeId}>-</td><td${_scopeId}>\u8868\u683C</td><td${_scopeId}>\u8D27\u6B3E\u7C7B\u8C03\u6574\u660E\u7EC6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u8BC1\u91D1\u660E\u7EC6(stateType=4)</td><td${_scopeId}>-</td><td${_scopeId}>\u8868\u683C</td><td${_scopeId}>\u4FDD\u8BC1\u91D1\u7C7B\u5F80\u6765\u660E\u7EC6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5BF9\u8D26\u4E3B\u4F53"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BF9\u8D26\u4E3B\u4F53\u4FE1\u606F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5217\u8868\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5217\u8868\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F1A\u8BA1\u671F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4F1A\u8BA1\u671F\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5217\u8868\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD\u4FE1\u606F"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5217\u8868\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D27\u6B3E\u660E\u7EC6(stateType=1)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8868\u683C"),
                createVNode("td", null, "\u8D27\u6B3E\u7C7B\u5F80\u6765\u660E\u7EC6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u7ED3\u7B97\u8BA2\u5355\u660E\u7EC6(stateType=2)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8868\u683C"),
                createVNode("td", null, "\u672A\u7ED3\u7B97\u8BA2\u5355/\u53D1\u51FA\u5546\u54C1\u660E\u7EC6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D27\u6B3E\u660E\u7EC6(stateType=3)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8868\u683C"),
                createVNode("td", null, "\u8D27\u6B3E\u7C7B\u8C03\u6574\u660E\u7EC6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u8BC1\u91D1\u660E\u7EC6(stateType=4)"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8868\u683C"),
                createVNode("td", null, "\u4FDD\u8BC1\u91D1\u7C7B\u5F80\u6765\u660E\u7EC6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4E3B\u8981\u4F7F\u7528\u6587\u672C\u8F93\u5165\u548C\u4E0B\u62C9\u9009\u62E9\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4E3B\u8981\u4F7F\u7528\u6587\u672C\u8F93\u5165\u548C\u4E0B\u62C9\u9009\u62E9\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u5BFC\u5165\u529F\u80FD\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u5BFC\u5165\u529F\u80FD\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u6309\u6761\u4EF6\u67E5\u8BE2\u6CD5\u4EBA\u5BF9\u8D26\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528EBS\u63A5\u53E3\u83B7\u53D6\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u770B\u660E\u7EC6</td><td${_scopeId}>\u67E5\u770B\u5BF9\u8D26\u5355\u56DB\u7C7B\u660E\u7EC6</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55</td><td${_scopeId}>\u6253\u5F00\u660E\u7EC6\u9875\u5C55\u793A\u56DB\u7C7B\u5BF9\u8D26\u660E\u7EC6</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u66F4\u65B0</td><td${_scopeId}>\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528\u72B6\u6001\u66F4\u65B0\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5BF9\u8D26\u5355\u660E\u7EC6</td><td${_scopeId}>\u5217\u8868\u9875/\u660E\u7EC6\u9875</td><td${_scopeId}>\u6709\u6570\u636E\u65F6</td><td${_scopeId}>\u5BFC\u51FAExcel</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u671F\u95F4\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\u3001OU\u3001\u5BA2\u6237\u7F16\u53F7\u3001\u4E8B\u4E1A\u90E8\u7B49\u6761\u4EF6\u67E5\u8BE2</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u901A\u8FC7EBS SDK\u63A5\u53E3\u5B9E\u65F6\u83B7\u53D6\u5BF9\u8D26\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET <code${_scopeId}>/v1/{organizationId}/cuxCustomerStateHeader/queryCuxCustomerStateHeaderPage</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6570\u636E\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\uFF0C\u975E\u672C\u5730SQL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- EBS\u63A5\u53E3\u67E5\u8BE2\u53C2\u6570: periodName, stateType, orgName, partyNumber, businessDept</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u67E5\u770B\u660E\u7EC6\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u56DB\u7C7B\u660E\u7EC6\u6570\u636E</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5206\u522B\u5C55\u793A\u8D27\u6B3E\u3001\u672A\u7ED3\u7B97\u8BA2\u5355\u3001\u8D27\u6B3E\u8C03\u6574\u3001\u4FDD\u8BC1\u91D1\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET <code${_scopeId}>/v1/{organizationId}/cuxCustomerStateHeader/queryCuxCustomerStateHeaderDetail</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u660E\u7EC6\u6570\u636E\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\uFF0C\u6309stateType\u5206\u7C7B\u67E5\u8BE2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- stateType=1: \u8D27\u6B3E, stateType=2: \u672A\u7ED3\u7B97\u8BA2\u5355, stateType=3: \u8D27\u6B3E\u8C03\u6574, stateType=4: \u4FDD\u8BC1\u91D1</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE3\uFF1A\u72B6\u6001\u66F4\u65B0\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/cuxCustomerStateHeader/cuxCustomerStateHeaderStatusUpd</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u66F4\u65B0EBS\u7CFB\u7EDF\u4E2D\u7684\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE4\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875/\u660E\u7EC6\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6709\u6570\u636E\u65F6\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5C06\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/cuxCustomerStateHeader/cuxCustomerStateHeaderDetailExport</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A\u540C\u67E5\u8BE2SQL</li></ul>`);
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
                createVNode("td", null, "\u6309\u6761\u4EF6\u67E5\u8BE2\u6CD5\u4EBA\u5BF9\u8D26\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528EBS\u63A5\u53E3\u83B7\u53D6\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u770B\u660E\u7EC6"),
                createVNode("td", null, "\u67E5\u770B\u5BF9\u8D26\u5355\u56DB\u7C7B\u660E\u7EC6"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55"),
                createVNode("td", null, "\u6253\u5F00\u660E\u7EC6\u9875\u5C55\u793A\u56DB\u7C7B\u5BF9\u8D26\u660E\u7EC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u66F4\u65B0"),
                createVNode("td", null, "\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528\u72B6\u6001\u66F4\u65B0\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u5BF9\u8D26\u5355\u660E\u7EC6"),
                createVNode("td", null, "\u5217\u8868\u9875/\u660E\u7EC6\u9875"),
                createVNode("td", null, "\u6709\u6570\u636E\u65F6"),
                createVNode("td", null, "\u5BFC\u51FAExcel")
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
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u671F\u95F4\u3001\u5BF9\u8D26\u5355\u7C7B\u578B\u3001OU\u3001\u5BA2\u6237\u7F16\u53F7\u3001\u4E8B\u4E1A\u90E8\u7B49\u6761\u4EF6\u67E5\u8BE2"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u901A\u8FC7EBS SDK\u63A5\u53E3\u5B9E\u65F6\u83B7\u53D6\u5BF9\u8D26\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET "),
              createVNode("code", null, "/v1/{organizationId}/cuxCustomerStateHeader/queryCuxCustomerStateHeaderPage")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6570\u636E\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\uFF0C\u975E\u672C\u5730SQL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- EBS\u63A5\u53E3\u67E5\u8BE2\u53C2\u6570: periodName, stateType, orgName, partyNumber, businessDept")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u67E5\u770B\u660E\u7EC6\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u56DB\u7C7B\u660E\u7EC6\u6570\u636E"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5206\u522B\u5C55\u793A\u8D27\u6B3E\u3001\u672A\u7ED3\u7B97\u8BA2\u5355\u3001\u8D27\u6B3E\u8C03\u6574\u3001\u4FDD\u8BC1\u91D1\u660E\u7EC6"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET "),
              createVNode("code", null, "/v1/{organizationId}/cuxCustomerStateHeader/queryCuxCustomerStateHeaderDetail")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u660E\u7EC6\u6570\u636E\u4ECEEBS\u7CFB\u7EDF\u83B7\u53D6\uFF0C\u6309stateType\u5206\u7C7B\u67E5\u8BE2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- stateType=1: \u8D27\u6B3E, stateType=2: \u672A\u7ED3\u7B97\u8BA2\u5355, stateType=3: \u8D27\u6B3E\u8C03\u6574, stateType=4: \u4FDD\u8BC1\u91D1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u72B6\u6001\u66F4\u65B0\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/cuxCustomerStateHeader/cuxCustomerStateHeaderStatusUpd")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u66F4\u65B0EBS\u7CFB\u7EDF\u4E2D\u7684\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875/\u660E\u7EC6\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6709\u6570\u636E\u65F6\u53EF\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5C06\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/cuxCustomerStateHeader/cuxCustomerStateHeaderDetailExport")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6392\u67E5SQL"),
              createTextVNode("\uFF1A\u540C\u67E5\u8BE2SQL")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001\u7531\u72B6\u6001\u66F4\u65B0\u6309\u94AE\u63A7\u5236\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001\u7531\u72B6\u6001\u66F4\u65B0\u6309\u94AE\u63A7\u5236\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ACuxCustomerStateHeader\uFF08\u6CD5\u4EBA\u5BF9\u8D26\u5355\u5934 - EBS\u6570\u636E\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>STATE_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BF9\u8D26\u5355ID</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>PERIOD_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4F1A\u8BA1\u671F\u95F4</td><td${_scopeId}>\u671F\u95F4</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>STATE_TYPE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BF9\u8D26\u5355\u7C7B\u578B</td><td${_scopeId}>\u5BF9\u8D26\u5355\u7C7B\u578B</td><td${_scopeId}>\u6765\u6E90\u5FEB\u7801</td></tr><tr${_scopeId}><td${_scopeId}>ORG_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>OU\u540D\u79F0</td><td${_scopeId}>OU\u540D\u79F0</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>PARTY_NUMBER</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BA2\u6237\u7F16\u53F7</td><td${_scopeId}>\u5BA2\u6237\u7F16\u53F7</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>BUSINESS_DEPT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>CURRENCY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>BEGIN_BALANCE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>DEBIT_AMOUNT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u589E\u52A0(\u501F\u65B9)</td><td${_scopeId}>\u672C\u671F\u589E\u52A0</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>CREDIT_AMOUNT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11(\u8D37\u65B9)</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>END_BALANCE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>SEND_FLAG</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u53D1\u9001\u72B6\u6001</td><td${_scopeId}>\u53D1\u9001\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>ADD_FEE_TRANSFER</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u589E\u52A0-\u8D39\u7528\u8F6C\u8D27\u6B3E</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>ADD_RECEIPT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u589E\u52A0-\u6536\u6B3E</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>REDUCEAMT_REFUND</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11-\u9000\u6B3E</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>REDUCEAMT_OTHERS</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11-\u5176\u4ED6\u6263\u9879</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>REDUCEAMT_DELIVERY</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u51CF\u5C11-\u51FA\u8D27</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>ADD_DEPOSIT_TRANSFER</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u589E\u52A0-\u4FDD\u8BC1\u91D1\u8F6C\u8D27\u6B3E</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>ADD_ADJUST_TRANSFER</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u672C\u671F\u589E\u52A0-\u8C03\u6574\u6536\u6B3E</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>STATE_ACCOUNT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4F1A\u8BA1\u79D1\u76EE</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr><tr${_scopeId}><td${_scopeId}>ORG_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>OU\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE</td></tr></tbody></table>`);
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
                createVNode("td", null, "STATE_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BF9\u8D26\u5355ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PERIOD_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4F1A\u8BA1\u671F\u95F4"),
                createVNode("td", null, "\u671F\u95F4"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATE_TYPE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u6765\u6E90\u5FEB\u7801")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORG_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "OU\u540D\u79F0"),
                createVNode("td", null, "OU\u540D\u79F0"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PARTY_NUMBER"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u53F7"),
                createVNode("td", null, "\u5BA2\u6237\u7F16\u53F7"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BUSINESS_DEPT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CURRENCY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BEGIN_BALANCE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEBIT_AMOUNT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0(\u501F\u65B9)"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREDIT_AMOUNT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11(\u8D37\u65B9)"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_BALANCE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SEND_FLAG"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u53D1\u9001\u72B6\u6001"),
                createVNode("td", null, "\u53D1\u9001\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADD_FEE_TRANSFER"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0-\u8D39\u7528\u8F6C\u8D27\u6B3E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADD_RECEIPT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0-\u6536\u6B3E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REDUCEAMT_REFUND"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11-\u9000\u6B3E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REDUCEAMT_OTHERS"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11-\u5176\u4ED6\u6263\u9879"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REDUCEAMT_DELIVERY"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u51CF\u5C11-\u51FA\u8D27"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADD_DEPOSIT_TRANSFER"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0-\u4FDD\u8BC1\u91D1\u8F6C\u8D27\u6B3E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADD_ADJUST_TRANSFER"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u672C\u671F\u589E\u52A0-\u8C03\u6574\u6536\u6B3E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATE_ACCOUNT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4F1A\u8BA1\u79D1\u76EE"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORG_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "OU\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>EBS\u63A5\u53E3\u8C03\u7528\u5931\u8D25</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>EBS\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u5F02\u5E38\uFF0C\u68C0\u67E5EBS\u7CFB\u7EDF\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u65E0\u6570\u636E</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u67E5\u8BE2\u6761\u4EF6\u4E0D\u5339\u914D\u6216EBS\u4E2D\u65E0\u5BF9\u5E94\u671F\u95F4\u6570\u636E\uFF0C\u653E\u5BBD\u6761\u4EF6</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B</td><td${_scopeId}>\u5BFC\u51FA\u65F6</td><td${_scopeId}>\u5BFC\u51FA\u672A\u4F20\u5165stateType\u53C2\u6570\uFF0C\u524D\u7AEF\u8865\u5145\u5BF9\u8D26\u5355\u7C7B\u578B\u540E\u91CD\u8BD5</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u66F4\u65B0\u5931\u8D25</td><td${_scopeId}>\u72B6\u6001\u66F4\u65B0\u65F6</td><td${_scopeId}>EBS\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u6216\u5BF9\u8D26\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u66F4\u65B0\uFF0C\u786E\u8BA4\u72B6\u6001\u540E\u91CD\u8BD5</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u8C03\u7528\u63A5\u53E3\u65F6</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u8FD0\u7EF4</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u67E5\u8BE2/\u5BFC\u51FA/\u72B6\u6001\u66F4\u65B0\u65F6</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u8BE5\u7EC4\u7EC7\u6216\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1AEBS\u63A5\u53E3\u8C03\u7528\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2\u6216\u67E5\u770B\u660E\u7EC6\uFF0C\u540E\u7AEF\u901A\u8FC7EBS SDK\u63A5\u53E3\u5B9E\u65F6\u83B7\u53D6\u6570\u636E\u65F6\u629B\u51FA\u8FDE\u63A5\u5F02\u5E38\u6216\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u5355\u6570\u636E\u4E0D\u5B58\u50A8\u5728DMS\u672C\u5730\u6570\u636E\u5E93\uFF0C\u6BCF\u6B21\u67E5\u8BE2\u5B9E\u65F6\u8C03\u7528EBS SDK\u63A5\u53E3\uFF08queryCuxCustomerStateHeaderPage/queryCuxCustomerStateHeaderDetail\uFF09\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)EBS\u7CFB\u7EDF\u5B95\u673A\u6216\u670D\u52A1\u4E0D\u53EF\u7528\uFF1B(2)DMS\u4E0EEBS\u7F51\u7EDC\u4E2D\u65AD\u6216SDK\u914D\u7F6E\u9519\u8BEF\uFF08\u5730\u5740/\u8D26\u53F7/\u5BC6\u94A5\uFF09\uFF1B(3)EBS\u63A5\u53E3\u5165\u53C2\u5F02\u5E38\uFF08periodName/stateType/orgName\u683C\u5F0F\u4E0D\u7B26EBS\u8981\u6C42\u4F46DMS\u672A\u505A\u8F6C\u6362\uFF09\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFBEBS\u8FD0\u7EF4\u786E\u8BA4\u7CFB\u7EDF\u72B6\u6001\u53CASDK\u8FDE\u63A5\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- EBS\u6570\u636E\u975E\u672C\u5730\u5B58\u50A8\uFF0C\u4EE5\u4E0B\u4E3ADMS\u4FA7EBS\u63A5\u53E3\u8C03\u7528\u914D\u7F6E\u6838\u67E5\uFF08\u5177\u4F53\u8868\u540D\u4EE5EBS\u9002\u914D\u5C42\u4E3A\u51C6\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5EBS\u63A5\u53E3\u914D\u7F6E\u662F\u5426\u5B58\u5728\u53CA\u542F\u7528\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, LAST_SYNC_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EBS_INTERFACE_CONFIG</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_STATE_HEADER</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_STATE_DETAIL</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u67E5\u8BE2\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AEBS\u63A5\u53E3\u8C03\u7528\u6210\u529F\u4F46\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AEBS\u63A5\u53E3\u6309periodName\uFF08\u4F1A\u8BA1\u671F\u95F4\uFF09\u3001stateType\uFF08\u5BF9\u8D26\u5355\u7C7B\u578B1-4\uFF09\u3001orgName\uFF08OU\u540D\u79F0\uFF09\u3001partyNumber\uFF08\u5BA2\u6237\u7F16\u53F7\uFF09\u3001businessDept\uFF08\u4E8B\u4E1A\u90E8\uFF09\u7EC4\u5408\u8FC7\u6EE4\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u67E5\u8BE2\u6761\u4EF6\u8FC7\u7A84\uFF0C\u5982\u9009\u4E86\u7279\u5B9A\u671F\u95F4+\u7279\u5B9A\u5BA2\u6237\u4F46EBS\u4E2D\u8BE5\u5BA2\u6237\u5728\u8BE5\u671F\u95F4\u65E0\u5F80\u6765\uFF1B(2)EBS\u4E2D\u8BE5\u671F\u95F4\u5C1A\u672A\u7ED3\u8D26\u6216\u6570\u636E\u672A\u5F55\u5165\u3002\u9700\u653E\u5BBD\u6761\u4EF6\uFF08\u5982\u53BB\u6389\u5BA2\u6237\u7F16\u53F7\u53EA\u6309\u671F\u95F4+OU\u67E5\u8BE2\uFF09\u786E\u8BA4\u662F\u6570\u636E\u7F3A\u5931\u8FD8\u662F\u6761\u4EF6\u8FC7\u6EE4\u95EE\u9898</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u901A\u8FC7EBS\u63A5\u53E3\u6838\u67E5\u6307\u5B9A\u671F\u95F4+OU\u4E0B\u662F\u5426\u6709\u4EFB\u610F\u5F80\u6765\u6570\u636E\uFF08stateType=1\u8D27\u6B3E\u4E3A\u4F8B\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u4EE5\u4E0B\u4E3AEBS\u4FA7\u6838\u67E5SQL\uFF08\u5728EBS\u5E93\u6267\u884C\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PERIOD_NAME, ORG_NAME, PARTY_NUMBER, BEGIN_BALANCE, DEBIT_AMOUNT, CREDIT_AMOUNT, END_BALANCE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUX_CUSTOMER_STATE_HEADER_V</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PERIOD_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{periodName}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ORG_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{orgName} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{orgName} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (STATE_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{stateType} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{stateType} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PARTY_NUMBER;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\u4F46\u672A\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B\uFF08stateType\uFF09\u53C2\u6570</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BFC\u51FA\u63A5\u53E3cuxCustomerStateHeaderDetailExport\u4F7F\u7528@ExcelExport\u52A8\u6001\u5BFC\u51FA\uFF0CCuxCustomerStateHeader\u5B9E\u4F53\u5B9E\u73B0DynamicExportEntity\u63A5\u53E3\u7684columns\u65B9\u6CD5\uFF08CuxCustomerStateHeader.java:140\uFF09\u6821\u9A8CcustomData\u975E\u7A7A\uFF0C\u82E5StringUtils.isBlank(customData)\u5219\u629B\u51FACommonException(&quot;\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B&quot;)\u3002customData\u4E2D\u5305\u542BstateType\u5B57\u6BB5\u7528\u4E8E\u533A\u5206\u56DB\u7C7B\u5BFC\u51FA\u5217\uFF081=\u8D27\u6B3E\u30012=\u672A\u7ED3\u7B97\u8BA2\u5355\u30013=\u8D27\u6B3E\u8C03\u6574\u30014=\u4FDD\u8BC1\u91D1\uFF09\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u524D\u7AEF\u5BFC\u51FA\u65F6\u672A\u5C06stateType\u62FC\u88C5\u5230customData\u53C2\u6570\u4E2D\uFF1B(2)customData JSON\u683C\u5F0F\u9519\u8BEF\u65E0\u6CD5\u89E3\u6790\u3002\u9700\u524D\u7AEF\u5728\u5BFC\u51FA\u8BF7\u6C42\u4E2D\u8865\u5145stateType\u53C2\u6570</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5EBS\u4FA7\u56DB\u7C7B\u5BF9\u8D26\u5355\u7C7B\u578B\u662F\u5426\u6709\u6570\u636E\uFF08\u5728EBS\u5E93\u6267\u884C\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> STATE_TYPE, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB0\u5F55\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUX_CUSTOMER_STATE_HEADER_V</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PERIOD_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{periodName}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> STATE_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> STATE_TYPE;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u72B6\u6001\u66F4\u65B0\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u72B6\u6001\u66F4\u65B0&quot;\u6309\u94AE\uFF0CEBS\u63A5\u53E3cuxCustomerStateHeaderStatusUpd\u8FD4\u56DE\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u72B6\u6001\u66F4\u65B0\u8C03\u7528ArrowEbsSdkServiceImpl.cuxCustomerStateHeaderStatusUpd\uFF08ArrowEbsSdkServiceImpl.java:94\uFF09\uFF0C\u901A\u8FC7interfaceInvokeSdk.invoke\u8C03\u7528EBS\u7684CUX_CUSTOMER_UPDATE_STATE\u63A5\u53E3\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001\uFF08SEND_FLAG\uFF09\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\uFF1A(1)EBS\u63A5\u53E3\u8FD4\u56DEreturnStatus\u975ES\uFF08\u4E1A\u52A1\u6821\u9A8C\u5931\u8D25\uFF0C\u5982\u5BF9\u8D26\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u66F4\u65B0\uFF09\uFF1B(2)EBS\u63A5\u53E3\u5165\u53C2List&lt;CuxCustomerStateHeaderDto&gt;\u683C\u5F0F\u4E0D\u7B26EBS\u8981\u6C42\uFF1B(3)EBS\u7CFB\u7EDF\u5185\u90E8\u5F02\u5E38\uFF08\u5982\u6570\u636E\u5E93\u9501\u3001\u7EA6\u675F\u51B2\u7A81\uFF09\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFBEBS\u8FD0\u7EF4\u786E\u8BA4\u63A5\u53E3\u8FD4\u56DE\u7684msgData\u9519\u8BEF\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5DMS\u4FA7EBS\u72B6\u6001\u66F4\u65B0\u63A5\u53E3\u914D\u7F6E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, LAST_SYNC_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EBS_INTERFACE_CONFIG</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_UPDATE_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u72B6\u6001\u66F4\u65B0\u6216\u5BFC\u51FA\uFF0C\u524D\u7AEFaxios\u8BF7\u6C42\u629B\u51FA\u7F51\u7EDC\u5F02\u5E38\u6216\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8C03\u7528/v1/{organizationId}/cuxCustomerStateHeader/*\u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u56E0\u540E\u7AEFcrm-business\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u5173\u8DEF\u7531\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u6216\u8BF7\u6C42\u8D85\u65F6\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u6839\u56E0\u6709\u56DB\uFF1A(1)crm-business\u5FAE\u670D\u52A1\u672A\u6CE8\u518C\u5230Nacos\u6216\u5DF2\u5B95\u673A\uFF1B(2)EBS SDK\u8C03\u7528\u8D85\u65F6\uFF08EBS\u7CFB\u7EDF\u54CD\u5E94\u6162\u6216\u7F51\u7EDC\u5EF6\u8FDF\uFF09\u5BFC\u81F4\u6574\u4F53\u8BF7\u6C42\u8D85\u65F6\uFF1B(3)\u7F51\u7EDC\u4E2D\u65AD\u6216\u9632\u706B\u5899\u62E6\u622ADMS\u4E0EEBS\u7684\u8FDE\u63A5\uFF1B(4)\u5BFC\u51FA\u6570\u636E\u91CF\u5927\u5BFC\u81F4Excel\u751F\u6210\u8D85\u65F6\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u786E\u8BA4crm-business\u548CEBS\u7CFB\u7EDF\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5DMS\u4FA7EBS\u63A5\u53E3\u914D\u7F6E\u53CA\u542F\u7528\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, LAST_SYNC_TIME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> EBS_INTERFACE_CONFIG</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INTERFACE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_STATE_LIST_PAGE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_STATE_DETAIL</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CUX_CUSTOMER_UPDATE_STATE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u8BBF\u95EE\u6CD5\u4EBA\u5BF9\u8D26\u5355\u9875\u9762\u6216\u8C03\u7528\u63A5\u53E3\u65F6\uFF0C\u8FD4\u56DE403\u6216&quot;\u65E0\u6743\u9650\u8BBF\u95EE&quot;\u63D0\u793A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEFController\u4F7F\u7528@Permission(level = ResourceLevel.ORGANIZATION, permissionLogin = true)\u63A7\u5236\u8BBF\u95EE\u6743\u9650\uFF0C\u8981\u6C42\u7528\u6237\u767B\u5F55\u4E14\u62E5\u6709\u5F53\u524D\u7EC4\u7EC7\uFF08organizationId\uFF09\u7684\u8BBF\u95EE\u6743\u9650\u3002\u6839\u56E0\u6709\u4E09\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u8BE5\u83DC\u5355\uFF08hlod\u9875\u9762+\u81EA\u5B9A\u4E49React\u8BE6\u60C5\u9875\uFF09\u7684\u8BBF\u95EE\u89D2\u8272\uFF1B(2)\u7528\u6237\u5F53\u524D\u5207\u6362\u7684\u7EC4\u7EC7\u4E0D\u5728\u5176\u6388\u6743\u7EC4\u7EC7\u8303\u56F4\u5185\uFF1B(3)\u7528\u6237\u6570\u636E\u6743\u9650\u672A\u8986\u76D6\u67E5\u8BE2\u7684\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA/\u4E8B\u4E1A\u90E8\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u83DC\u5355\u89D2\u8272\u548C\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7528\u6237\u5728\u5F53\u524D\u7EC4\u7EC7\u4E0B\u7684\u89D2\u8272\u5206\u914D\uFF08\u8868\u540D\u4EE5HZERO IAM\u5B9E\u9645\u8868\u4E3A\u51C6\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, ROLE_ID, ORGANIZATION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IAM_USER_ROLE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{userId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORGANIZATION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{organizationId};</span></span>
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
                createVNode("td", null, "EBS\u63A5\u53E3\u8C03\u7528\u5931\u8D25"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "EBS\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u5F02\u5E38\uFF0C\u68C0\u67E5EBS\u7CFB\u7EDF\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u65E0\u6570\u636E"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u67E5\u8BE2\u6761\u4EF6\u4E0D\u5339\u914D\u6216EBS\u4E2D\u65E0\u5BF9\u5E94\u671F\u95F4\u6570\u636E\uFF0C\u653E\u5BBD\u6761\u4EF6"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B"),
                createVNode("td", null, "\u5BFC\u51FA\u65F6"),
                createVNode("td", null, "\u5BFC\u51FA\u672A\u4F20\u5165stateType\u53C2\u6570\uFF0C\u524D\u7AEF\u8865\u5145\u5BF9\u8D26\u5355\u7C7B\u578B\u540E\u91CD\u8BD5"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u66F4\u65B0\u5931\u8D25"),
                createVNode("td", null, "\u72B6\u6001\u66F4\u65B0\u65F6"),
                createVNode("td", null, "EBS\u63A5\u53E3\u8FD4\u56DE\u5931\u8D25\u6216\u5BF9\u8D26\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u66F4\u65B0\uFF0C\u786E\u8BA4\u72B6\u6001\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u8C03\u7528\u63A5\u53E3\u65F6"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u8FD0\u7EF4"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3"),
                createVNode("td", null, "\u67E5\u8BE2/\u5BFC\u51FA/\u72B6\u6001\u66F4\u65B0\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u8BE5\u7EC4\u7EC7\u6216\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1AEBS\u63A5\u53E3\u8C03\u7528\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2\u6216\u67E5\u770B\u660E\u7EC6\uFF0C\u540E\u7AEF\u901A\u8FC7EBS SDK\u63A5\u53E3\u5B9E\u65F6\u83B7\u53D6\u6570\u636E\u65F6\u629B\u51FA\u8FDE\u63A5\u5F02\u5E38\u6216\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u6CD5\u4EBA\u5BF9\u8D26\u5355\u6570\u636E\u4E0D\u5B58\u50A8\u5728DMS\u672C\u5730\u6570\u636E\u5E93\uFF0C\u6BCF\u6B21\u67E5\u8BE2\u5B9E\u65F6\u8C03\u7528EBS SDK\u63A5\u53E3\uFF08queryCuxCustomerStateHeaderPage/queryCuxCustomerStateHeaderDetail\uFF09\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)EBS\u7CFB\u7EDF\u5B95\u673A\u6216\u670D\u52A1\u4E0D\u53EF\u7528\uFF1B(2)DMS\u4E0EEBS\u7F51\u7EDC\u4E2D\u65AD\u6216SDK\u914D\u7F6E\u9519\u8BEF\uFF08\u5730\u5740/\u8D26\u53F7/\u5BC6\u94A5\uFF09\uFF1B(3)EBS\u63A5\u53E3\u5165\u53C2\u5F02\u5E38\uFF08periodName/stateType/orgName\u683C\u5F0F\u4E0D\u7B26EBS\u8981\u6C42\u4F46DMS\u672A\u505A\u8F6C\u6362\uFF09\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFBEBS\u8FD0\u7EF4\u786E\u8BA4\u7CFB\u7EDF\u72B6\u6001\u53CASDK\u8FDE\u63A5\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- EBS\u6570\u636E\u975E\u672C\u5730\u5B58\u50A8\uFF0C\u4EE5\u4E0B\u4E3ADMS\u4FA7EBS\u63A5\u53E3\u8C03\u7528\u914D\u7F6E\u6838\u67E5\uFF08\u5177\u4F53\u8868\u540D\u4EE5EBS\u9002\u914D\u5C42\u4E3A\u51C6\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5EBS\u63A5\u53E3\u914D\u7F6E\u662F\u5426\u5B58\u5728\u53CA\u542F\u7528\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", LAST_SYNC_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EBS_INTERFACE_CONFIG")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_STATE_HEADER"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_STATE_DETAIL"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u67E5\u8BE2\u65E0\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AEBS\u63A5\u53E3\u8C03\u7528\u6210\u529F\u4F46\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AEBS\u63A5\u53E3\u6309periodName\uFF08\u4F1A\u8BA1\u671F\u95F4\uFF09\u3001stateType\uFF08\u5BF9\u8D26\u5355\u7C7B\u578B1-4\uFF09\u3001orgName\uFF08OU\u540D\u79F0\uFF09\u3001partyNumber\uFF08\u5BA2\u6237\u7F16\u53F7\uFF09\u3001businessDept\uFF08\u4E8B\u4E1A\u90E8\uFF09\u7EC4\u5408\u8FC7\u6EE4\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u67E5\u8BE2\u6761\u4EF6\u8FC7\u7A84\uFF0C\u5982\u9009\u4E86\u7279\u5B9A\u671F\u95F4+\u7279\u5B9A\u5BA2\u6237\u4F46EBS\u4E2D\u8BE5\u5BA2\u6237\u5728\u8BE5\u671F\u95F4\u65E0\u5F80\u6765\uFF1B(2)EBS\u4E2D\u8BE5\u671F\u95F4\u5C1A\u672A\u7ED3\u8D26\u6216\u6570\u636E\u672A\u5F55\u5165\u3002\u9700\u653E\u5BBD\u6761\u4EF6\uFF08\u5982\u53BB\u6389\u5BA2\u6237\u7F16\u53F7\u53EA\u6309\u671F\u95F4+OU\u67E5\u8BE2\uFF09\u786E\u8BA4\u662F\u6570\u636E\u7F3A\u5931\u8FD8\u662F\u6761\u4EF6\u8FC7\u6EE4\u95EE\u9898")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u901A\u8FC7EBS\u63A5\u53E3\u6838\u67E5\u6307\u5B9A\u671F\u95F4+OU\u4E0B\u662F\u5426\u6709\u4EFB\u610F\u5F80\u6765\u6570\u636E\uFF08stateType=1\u8D27\u6B3E\u4E3A\u4F8B\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u4EE5\u4E0B\u4E3AEBS\u4FA7\u6838\u67E5SQL\uFF08\u5728EBS\u5E93\u6267\u884C\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PERIOD_NAME, ORG_NAME, PARTY_NUMBER, BEGIN_BALANCE, DEBIT_AMOUNT, CREDIT_AMOUNT, END_BALANCE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUX_CUSTOMER_STATE_HEADER_V")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PERIOD_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{periodName}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ORG_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{orgName} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{orgName} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (STATE_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{stateType} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{stateType} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PARTY_NUMBER;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\u4F46\u672A\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B\uFF08stateType\uFF09\u53C2\u6570")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5BFC\u51FA\u63A5\u53E3cuxCustomerStateHeaderDetailExport\u4F7F\u7528@ExcelExport\u52A8\u6001\u5BFC\u51FA\uFF0CCuxCustomerStateHeader\u5B9E\u4F53\u5B9E\u73B0DynamicExportEntity\u63A5\u53E3\u7684columns\u65B9\u6CD5\uFF08CuxCustomerStateHeader.java:140\uFF09\u6821\u9A8CcustomData\u975E\u7A7A\uFF0C\u82E5StringUtils.isBlank(customData)\u5219\u629B\u51FACommonException("\u8BF7\u4F20\u5165\u5BF9\u8D26\u5355\u7C7B\u578B")\u3002customData\u4E2D\u5305\u542BstateType\u5B57\u6BB5\u7528\u4E8E\u533A\u5206\u56DB\u7C7B\u5BFC\u51FA\u5217\uFF081=\u8D27\u6B3E\u30012=\u672A\u7ED3\u7B97\u8BA2\u5355\u30013=\u8D27\u6B3E\u8C03\u6574\u30014=\u4FDD\u8BC1\u91D1\uFF09\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u524D\u7AEF\u5BFC\u51FA\u65F6\u672A\u5C06stateType\u62FC\u88C5\u5230customData\u53C2\u6570\u4E2D\uFF1B(2)customData JSON\u683C\u5F0F\u9519\u8BEF\u65E0\u6CD5\u89E3\u6790\u3002\u9700\u524D\u7AEF\u5728\u5BFC\u51FA\u8BF7\u6C42\u4E2D\u8865\u5145stateType\u53C2\u6570')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5EBS\u4FA7\u56DB\u7C7B\u5BF9\u8D26\u5355\u7C7B\u578B\u662F\u5426\u6709\u6570\u636E\uFF08\u5728EBS\u5E93\u6267\u884C\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " STATE_TYPE, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB0\u5F55\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUX_CUSTOMER_STATE_HEADER_V")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PERIOD_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{periodName}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " STATE_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " STATE_TYPE;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u72B6\u6001\u66F4\u65B0\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u72B6\u6001\u66F4\u65B0"\u6309\u94AE\uFF0CEBS\u63A5\u53E3cuxCustomerStateHeaderStatusUpd\u8FD4\u56DE\u5931\u8D25')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u72B6\u6001\u66F4\u65B0\u8C03\u7528ArrowEbsSdkServiceImpl.cuxCustomerStateHeaderStatusUpd\uFF08ArrowEbsSdkServiceImpl.java:94\uFF09\uFF0C\u901A\u8FC7interfaceInvokeSdk.invoke\u8C03\u7528EBS\u7684CUX_CUSTOMER_UPDATE_STATE\u63A5\u53E3\u66F4\u65B0\u5BF9\u8D26\u5355\u53D1\u9001\u72B6\u6001\uFF08SEND_FLAG\uFF09\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\uFF1A(1)EBS\u63A5\u53E3\u8FD4\u56DEreturnStatus\u975ES\uFF08\u4E1A\u52A1\u6821\u9A8C\u5931\u8D25\uFF0C\u5982\u5BF9\u8D26\u5355\u72B6\u6001\u4E0D\u5141\u8BB8\u66F4\u65B0\uFF09\uFF1B(2)EBS\u63A5\u53E3\u5165\u53C2List<CuxCustomerStateHeaderDto>\u683C\u5F0F\u4E0D\u7B26EBS\u8981\u6C42\uFF1B(3)EBS\u7CFB\u7EDF\u5185\u90E8\u5F02\u5E38\uFF08\u5982\u6570\u636E\u5E93\u9501\u3001\u7EA6\u675F\u51B2\u7A81\uFF09\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u9700\u8054\u7CFBEBS\u8FD0\u7EF4\u786E\u8BA4\u63A5\u53E3\u8FD4\u56DE\u7684msgData\u9519\u8BEF\u4FE1\u606F")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5DMS\u4FA7EBS\u72B6\u6001\u66F4\u65B0\u63A5\u53E3\u914D\u7F6E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", LAST_SYNC_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EBS_INTERFACE_CONFIG")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_UPDATE_STATE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u72B6\u6001\u66F4\u65B0\u6216\u5BFC\u51FA\uFF0C\u524D\u7AEFaxios\u8BF7\u6C42\u629B\u51FA\u7F51\u7EDC\u5F02\u5E38\u6216\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8C03\u7528/v1/{organizationId}/cuxCustomerStateHeader/*\u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u56E0\u540E\u7AEFcrm-business\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u5173\u8DEF\u7531\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u6216\u8BF7\u6C42\u8D85\u65F6\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u6839\u56E0\u6709\u56DB\uFF1A(1)crm-business\u5FAE\u670D\u52A1\u672A\u6CE8\u518C\u5230Nacos\u6216\u5DF2\u5B95\u673A\uFF1B(2)EBS SDK\u8C03\u7528\u8D85\u65F6\uFF08EBS\u7CFB\u7EDF\u54CD\u5E94\u6162\u6216\u7F51\u7EDC\u5EF6\u8FDF\uFF09\u5BFC\u81F4\u6574\u4F53\u8BF7\u6C42\u8D85\u65F6\uFF1B(3)\u7F51\u7EDC\u4E2D\u65AD\u6216\u9632\u706B\u5899\u62E6\u622ADMS\u4E0EEBS\u7684\u8FDE\u63A5\uFF1B(4)\u5BFC\u51FA\u6570\u636E\u91CF\u5927\u5BFC\u81F4Excel\u751F\u6210\u8D85\u65F6\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u786E\u8BA4crm-business\u548CEBS\u7CFB\u7EDF\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5DMS\u4FA7EBS\u63A5\u53E3\u914D\u7F6E\u53CA\u542F\u7528\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE, INTERFACE_NAME, TARGET_URL, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", LAST_SYNC_TIME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " EBS_INTERFACE_CONFIG")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INTERFACE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_STATE_LIST_PAGE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_STATE_DETAIL"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CUX_CUSTOMER_UPDATE_STATE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u8BBF\u95EE\u6CD5\u4EBA\u5BF9\u8D26\u5355\u9875\u9762\u6216\u8C03\u7528\u63A5\u53E3\u65F6\uFF0C\u8FD4\u56DE403\u6216"\u65E0\u6743\u9650\u8BBF\u95EE"\u63D0\u793A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEFController\u4F7F\u7528@Permission(level = ResourceLevel.ORGANIZATION, permissionLogin = true)\u63A7\u5236\u8BBF\u95EE\u6743\u9650\uFF0C\u8981\u6C42\u7528\u6237\u767B\u5F55\u4E14\u62E5\u6709\u5F53\u524D\u7EC4\u7EC7\uFF08organizationId\uFF09\u7684\u8BBF\u95EE\u6743\u9650\u3002\u6839\u56E0\u6709\u4E09\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u8BE5\u83DC\u5355\uFF08hlod\u9875\u9762+\u81EA\u5B9A\u4E49React\u8BE6\u60C5\u9875\uFF09\u7684\u8BBF\u95EE\u89D2\u8272\uFF1B(2)\u7528\u6237\u5F53\u524D\u5207\u6362\u7684\u7EC4\u7EC7\u4E0D\u5728\u5176\u6388\u6743\u7EC4\u7EC7\u8303\u56F4\u5185\uFF1B(3)\u7528\u6237\u6570\u636E\u6743\u9650\u672A\u8986\u76D6\u67E5\u8BE2\u7684\u4EA4\u6613\u516C\u53F8/\u6CD5\u4EBA/\u4E8B\u4E1A\u90E8\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u83DC\u5355\u89D2\u8272\u548C\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7528\u6237\u5728\u5F53\u524D\u7EC4\u7EC7\u4E0B\u7684\u89D2\u8272\u5206\u914D\uFF08\u8868\u540D\u4EE5HZERO IAM\u5B9E\u9645\u8868\u4E3A\u51C6\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", ROLE_ID, ORGANIZATION_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IAM_USER_ROLE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{userId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORGANIZATION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{organizationId};")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u5BF9\u8D26\u6570\u636E\u4E0EEBS\u4E0D\u4E00\u81F4</li><li${_scopeId}>\u539F\u56E0\uFF1AEBS\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u6709\u5EF6\u8FDF\u6216\u7F13\u5B58\u95EE\u9898</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u786E\u8BA4EBS\u7CFB\u7EDF\u6570\u636E\u5DF2\u66F4\u65B0\uFF0C\u91CD\u65B0\u67E5\u8BE2\u5237\u65B0</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1A\u56DB\u7C7B\u660E\u7EC6\u4E2D\u67D0\u7C7B\u65E0\u6570\u636E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u8BE5\u6CD5\u4EBA\u5728\u8BE5\u671F\u95F4\u5185\u65E0\u5BF9\u5E94\u7C7B\u578B\u5F80\u6765\u6570\u636E</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5EBS\u4E2D\u8BE5\u671F\u95F4\u8BE5\u6CD5\u4EBA\u7684\u5F80\u6765\u6570\u636E\uFF0C\u786E\u8BA4stateType\u5BF9\u5E94\u7C7B\u578B\u662F\u5426\u6709\u6570\u636E</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u5BF9\u8D26\u6570\u636E\u4E0EEBS\u4E0D\u4E00\u81F4"),
            createVNode("li", null, "\u539F\u56E0\uFF1AEBS\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u6709\u5EF6\u8FDF\u6216\u7F13\u5B58\u95EE\u9898"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u786E\u8BA4EBS\u7CFB\u7EDF\u6570\u636E\u5DF2\u66F4\u65B0\uFF0C\u91CD\u65B0\u67E5\u8BE2\u5237\u65B0")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1A\u56DB\u7C7B\u660E\u7EC6\u4E2D\u67D0\u7C7B\u65E0\u6570\u636E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u8BE5\u6CD5\u4EBA\u5728\u8BE5\u671F\u95F4\u5185\u65E0\u5BF9\u5E94\u7C7B\u578B\u5F80\u6765\u6570\u636E"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5EBS\u4E2D\u8BE5\u671F\u95F4\u8BE5\u6CD5\u4EBA\u7684\u5F80\u6765\u6570\u636E\uFF0C\u786E\u8BA4stateType\u5BF9\u5E94\u7C7B\u578B\u662F\u5426\u6709\u6570\u636E")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-10-28</td><td${_scopeId}>-</td><td${_scopeId}>tzx</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFACuxCustomerStateHeader\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-10-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "tzx"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFACuxCustomerStateHeader\u5B9E\u4F53")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u6CD5\u4EBA\u5BF9\u8D26\u5355/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
