import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5BF9\u4EC0\u4E48\u8D26</span><h2>\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u5BF9\u4EC0\u4E48\u8D26</h2><p>\u6309\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u8D26\u6237\u751F\u6210\u4E0E\u67E5\u8BE2\u5BF9\u8D26\u5355</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5BF9\u8D26\u5BF9\u8C61</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u9488\u5BF9\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u8D26\u6237\uFF0C\u6C47\u603B\u751F\u6210\u5BF9\u8D26\u5355\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u6765\u6E90</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u4EE5\u5E7F\u544A\u8D39\u4F59\u989D\u4E0E\u8425\u9500\u4E2D\u53F0\u6570\u636E\u4E3A\u652F\u6491\uFF0C\u751F\u6210\u989D\u5EA6\u5185\u670D\u52A1\u8D39\u5BF9\u8D26\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u4E0B\u6E38\u52A8\u4F5C</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5BF9\u8D26\u5355\u652F\u6301\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF\u53CA\u91CD\u751F\u6210\uFF0C\u4FDD\u6301\u8D26\u5355\u4E0E\u8D26\u6237\u4E00\u81F4\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u600E\u4E48\u7528</span><h2>\u5982\u4F55\u4F7F\u7528\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355</h2><p>\u67E5\u8BE2\u540E\u652F\u6301\u91CD\u751F\u6210\u5BF9\u8D26\u5355\u4E0E\u66F4\u65B0\u63A8\u9001\u72B6\u6001</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u9009\u62E9\u6761\u4EF6</h5><small>\u7B5B\u9009\u8D26\u6237\u8303\u56F4<br>\u5B9A\u4F4D\u5BF9\u8D26\u5355</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u8BE2\u5217\u8868</h5><small>\u5C55\u793A\u670D\u52A1\u8D39<br>\u5BF9\u8D26\u5355\u5217\u8868</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u91CD\u751F\u6210/\u63A8\u9001</h5><small>\u91CD\u751F\u6210\u5BF9\u8D26\u5355<br>\u66F4\u65B0\u63A8\u9001\u72B6\u6001</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u5BF9\u8D26\u53E3\u5F84\uFF1A</strong>\u5BF9\u8D26\u5355\u4EE5\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u8D26\u6237\u4F59\u989D\u4E3A\u4F9D\u636E\u751F\u6210\uFF0C\u91CD\u751F\u6210\u7528\u4E8E\u6570\u636E\u6709\u8BEF\u65F6\u91CD\u65B0\u51FA\u8D26\uFF0C\u63A8\u9001\u72B6\u6001\u4F9B\u5916\u90E8\u5BF9\u8D26\u8DDF\u8E2A\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u9009\u62E9\u67E5\u8BE2\u6761\u4EF6 \u2192 \u2605\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u2605 \u2192 \u5C55\u793A\u5BF9\u8D26\u5355\u5217\u8868 \u2192 \u7ED3\u675F\uFF08\u53EF\u91CD\u751F\u6210/\u66F4\u65B0\u63A8\u9001\u72B6\u6001\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 660" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="430" y="56" width="160" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="510" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5E7F\u544A\u8D39\u4F59\u989D</text><rect x="610" y="56" width="160" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="690" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u8425\u9500\u4E2D\u53F0</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="226" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="226" width="170" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="253" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u9009\u62E9\u67E5\u8BE2\u6761\u4EF6</text><line x1="600" y1="270" x2="600" y2="302" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="302" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="327" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u2605</text><text x="600" y="346" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5BUD_INLIMIT_BALANCE_ACCOUNT</text><line x1="600" y1="356" x2="600" y2="388" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="510" y="388" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="413" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5C55\u793A\u5BF9\u8D26\u5355\u5217\u8868</text><line x1="600" y1="428" x2="600" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="460" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="485" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="500" x2="600" y2="532" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="532" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="554" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="360" y="568" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="460" y="590" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5BF9\u8D26\u5355\u63A8\u9001(\u5916\u90E8\u7CFB\u7EDF)</text><rect x="590" y="568" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="690" y="590" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5BF9\u8D26\u5355\u91CD\u751F\u6210</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u5BF9\u8D26\u5355\u91CD\u65B0\u751F\u6210 {\u6570\u636E\u91CD\u751F\u6210}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5F53\u6570\u636E\u6709\u8BEF\u6216\u9700\u8981\u66F4\u65B0\u65F6\uFF0C\u652F\u6301\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\uFF0C\u786E\u4FDD\u8D26\u5355\u4E0E\u8D26\u6237\u4E00\u81F4</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7regenerate\u63A5\u53E3\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6C47\u603B\u660E\u7EC6\u884C\u603B\u989D\uFF0C\u8BA1\u7B97\u671F\u521D\u4F59\u989D\u3001\u6263\u51CF\u91D1\u989D\u3001\u5230\u671F\u8C03\u6574\u3001\u5176\u4ED6\u8C03\u6574\u3001\u989D\u5EA6\u5185\u5151\u73B0\u3001\u671F\u672B\u4F59\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u63D2\u5165\u6216\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u548CBUD_INLIMIT_ACCOUNT_LINE\u884C\u8868</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5F53\u6570\u636E\u6709\u8BEF\u6216\u9700\u8981\u66F4\u65B0\u65F6\uFF0C\u652F\u6301\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\uFF0C\u786E\u4FDD\u8D26\u5355\u4E0E\u8D26\u6237\u4E00\u81F4")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7regenerate\u63A5\u53E3\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6C47\u603B\u660E\u7EC6\u884C\u603B\u989D\uFF0C\u8BA1\u7B97\u671F\u521D\u4F59\u989D\u3001\u6263\u51CF\u91D1\u989D\u3001\u5230\u671F\u8C03\u6574\u3001\u5176\u4ED6\u8C03\u6574\u3001\u989D\u5EA6\u5185\u5151\u73B0\u3001\u671F\u672B\u4F59\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u63D2\u5165\u6216\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u548CBUD_INLIMIT_ACCOUNT_LINE\u884C\u8868")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u63A8\u9001\u72B6\u6001\u7BA1\u7406 {\u63A8\u9001\u63A7\u5236}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5BF9\u8D26\u5355\u652F\u6301\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF\uFF0C\u63A8\u9001\u72B6\u6001\u4F9B\u5916\u90E8\u5BF9\u8D26\u8DDF\u8E2A</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7update-status\u63A5\u53E3\u6279\u91CF\u66F4\u65B0\u63A8\u9001\u72B6\u6001</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u63A8\u9001\u72B6\u6001\u6807\u8BB0\u5BF9\u8D26\u5355\u662F\u5426\u5DF2\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5BF9\u8D26\u5355\u652F\u6301\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF\uFF0C\u63A8\u9001\u72B6\u6001\u4F9B\u5916\u90E8\u5BF9\u8D26\u8DDF\u8E2A")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7update-status\u63A5\u53E3\u6279\u91CF\u66F4\u65B0\u63A8\u9001\u72B6\u6001")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u63A8\u9001\u72B6\u6001\u6807\u8BB0\u5BF9\u8D26\u5355\u662F\u5426\u5DF2\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u5217\u8868\u9875\uFF08hlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E\u540E\u7AEFEntity\u548CAPI\u68B3\u7406\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.ENTNAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.TRADING_COMPANY_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u5F00\u7968\u5355\u4F4D\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.YEARMONTH</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BF9\u8D26\u5E74\u6708</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.BEGINNING_BALANCE</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u51FA\u5E93\u9884\u63D0</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.CHECKOUT_ORDER_PROVISION</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51FA\u5E93\u5355\u9884\u63D0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.DEDUCTION_AMOUNT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u672C\u671F\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u671F\u8C03\u6574</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.EXPIRE_ADJUST_QUOTA</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5230\u671F\u8C03\u6574\u989D\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5176\u4ED6\u8C03\u6574</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.OTHER_ADJUST_QUOTA</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5176\u4ED6\u8C03\u6574\u989D\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.INLIMIT_CASHOUT_QUOTA</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.ACTUAL_ENDING_BALANCE</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97=\u671F\u521D+\u51FA\u5E93\u9884\u63D0-\u6263\u51CF+\u5230\u671F\u8C03\u6574+\u5176\u4ED6\u8C03\u6574-\u989D\u5EA6\u5185\u5151\u73B0</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u72B6\u6001</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.SEND_STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>BUD_INLIMIT_BALANCE_ACCOUNT.S_STAT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5BF9\u8D26\u5355\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E\u540E\u7AEFEntity\u548CAPI\u68B3\u7406\u3002"),
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
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.ENTNAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.TRADING_COMPANY_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u5F00\u7968\u5355\u4F4D\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.YEARMONTH"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BF9\u8D26\u5E74\u6708"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.BEGINNING_BALANCE"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FA\u5E93\u9884\u63D0"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.CHECKOUT_ORDER_PROVISION"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u9884\u63D0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.DEDUCTION_AMOUNT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u672C\u671F\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u671F\u8C03\u6574"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.EXPIRE_ADJUST_QUOTA"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5230\u671F\u8C03\u6574\u989D\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5176\u4ED6\u8C03\u6574"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.OTHER_ADJUST_QUOTA"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5176\u4ED6\u8C03\u6574\u989D\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.INLIMIT_CASHOUT_QUOTA"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.ACTUAL_ENDING_BALANCE"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97=\u671F\u521D+\u51FA\u5E93\u9884\u63D0-\u6263\u51CF+\u5230\u671F\u8C03\u6574+\u5176\u4ED6\u8C03\u6574-\u989D\u5EA6\u5185\u5151\u73B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u72B6\u6001"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.SEND_STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "BUD_INLIMIT_BALANCE_ACCOUNT.S_STAT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u72B6\u6001"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u9009\u62E9\u5F39\u7A97" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u4E8B\u4E1A\u90E8\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>entname</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>&quot;\u74F7\u7816\u4E8B\u4E1A\u90E8&quot;</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u4E8B\u4E1A\u90E8</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u4E8B\u4E1A\u90E8LOV\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENT_ID, ENT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_DIVISION </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u4E8B\u4E1A\u90E8\u9009\u62E9\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "entname"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, '"\u74F7\u7816\u4E8B\u4E1A\u90E8"'),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u4E8B\u4E1A\u90E8")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u4E8B\u4E1A\u90E8LOV\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENT_ID, ENT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_DIVISION "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u6309\u6761\u4EF6\u67E5\u8BE2\u5BF9\u8D26\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528selectList\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u770B\u660E\u7EC6</td><td${_scopeId}>\u67E5\u770B\u5BF9\u8D26\u5355\u660E\u7EC6\u884C</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528selectLineDetails\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u91CD\u65B0\u751F\u6210</td><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528regenerate\u63A5\u53E3\u91CD\u65B0\u6C47\u603B\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u63A8\u9001\u72B6\u6001</td><td${_scopeId}>\u6279\u91CF\u66F4\u65B0\u63A8\u9001\u72B6\u6001</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528update-status\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5F00\u7968\u5355\u4F4D\u3001\u5E74\u6708\u7B49\u6761\u4EF6\u67E5\u8BE2\u5BF9\u8D26\u5355</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u8FD4\u56DE\u5BF9\u8D26\u5355\u5934\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET <code${_scopeId}>/v1/{organizationId}/inlimit-balance-account/selectList</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (TRADING_COMPANY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u67E5\u770B\u660E\u7EC6\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u660E\u7EC6\u884C\u6570\u636E</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5C55\u793A\u5404\u6765\u6E90\u7684\u4F59\u989D\u53D8\u52A8\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1AGET <code${_scopeId}>/v1/{organizationId}/inlimit-balance-account/selectLineDetails</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_ACCOUNT_LINE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE3\uFF1A\u91CD\u65B0\u751F\u6210\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6309\u5165\u53C2\u6761\u4EF6\uFF08\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5F00\u7968\u5355\u4F4D\u3001\u8D77\u59CB\u65F6\u95F4\uFF09\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u6C47\u603B\u660E\u7EC6\u884C\u603B\u989D\uFF0C\u8BA1\u7B97\u5404\u9879\u91D1\u989D</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u63D2\u5165\u6216\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u548CBUD_INLIMIT_ACCOUNT_LINE\u884C\u8868</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/inlimit-balance-account/regenerate</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u91CD\u65B0\u751F\u6210\u540E\u67E5\u8BE2\u7ED3\u679C</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE4\uFF1A\u66F4\u65B0\u63A8\u9001\u72B6\u6001\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6279\u91CF\u66F4\u65B0\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u63A8\u9001\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/inlimit-balance-account/update-status</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>UPDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SET</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SEND_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{sendStatus} </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{ids});</span></span>
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
                createVNode("td", null, "\u6309\u6761\u4EF6\u67E5\u8BE2\u5BF9\u8D26\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528selectList\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u770B\u660E\u7EC6"),
                createVNode("td", null, "\u67E5\u770B\u5BF9\u8D26\u5355\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u4E00\u6761\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528selectLineDetails\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210"),
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528regenerate\u63A5\u53E3\u91CD\u65B0\u6C47\u603B\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u63A8\u9001\u72B6\u6001"),
                createVNode("td", null, "\u6279\u91CF\u66F4\u65B0\u63A8\u9001\u72B6\u6001"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528update-status\u63A5\u53E3")
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
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5F00\u7968\u5355\u4F4D\u3001\u5E74\u6708\u7B49\u6761\u4EF6\u67E5\u8BE2\u5BF9\u8D26\u5355"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u8FD4\u56DE\u5BF9\u8D26\u5355\u5934\u5217\u8868"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET "),
              createVNode("code", null, "/v1/{organizationId}/inlimit-balance-account/selectList")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (TRADING_COMPANY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC")
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
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u660E\u7EC6\u884C\u6570\u636E"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5C55\u793A\u5404\u6765\u6E90\u7684\u4F59\u989D\u53D8\u52A8\u660E\u7EC6"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1AGET "),
              createVNode("code", null, "/v1/{organizationId}/inlimit-balance-account/selectLineDetails")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_ACCOUNT_LINE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u91CD\u65B0\u751F\u6210\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6309\u5165\u53C2\u6761\u4EF6\uFF08\u4E8B\u4E1A\u90E8\u3001\u4EA4\u6613\u516C\u53F8\u3001\u5F00\u7968\u5355\u4F4D\u3001\u8D77\u59CB\u65F6\u95F4\uFF09\u91CD\u65B0\u751F\u6210\u5BF9\u8D26\u5355"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u6C47\u603B\u660E\u7EC6\u884C\u603B\u989D\uFF0C\u8BA1\u7B97\u5404\u9879\u91D1\u989D"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u63D2\u5165\u6216\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u548CBUD_INLIMIT_ACCOUNT_LINE\u884C\u8868"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/inlimit-balance-account/regenerate")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u91CD\u65B0\u751F\u6210\u540E\u67E5\u8BE2\u7ED3\u679C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u66F4\u65B0\u63A8\u9001\u72B6\u6001\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6279\u91CF\u66F4\u65B0\u9009\u4E2D\u5BF9\u8D26\u5355\u7684\u63A8\u9001\u72B6\u6001"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/inlimit-balance-account/update-status")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "UPDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SET"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SEND_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{sendStatus} ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{ids});")
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
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u751F\u6210 \u2500\u2500\u91CD\u65B0\u751F\u6210\u2500\u2500\u2192 \u66F4\u65B0\u6570\u636E \u2500\u2500\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u2500\u2500\u2192 \u5DF2\u63A8\u9001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u672A\u63A8\u9001</td><td${_scopeId}>\u5BF9\u8D26\u5355\u5DF2\u751F\u6210\u672A\u63A8\u9001</td><td${_scopeId}>\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u91CD\u65B0\u751F\u6210\u3001\u66F4\u65B0\u63A8\u9001\u72B6\u6001</td></tr><tr${_scopeId}><td${_scopeId}>\u5DF2\u63A8\u9001</td><td${_scopeId}>\u5DF2\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF</td><td${_scopeId}>\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u91CD\u65B0\u751F\u6210</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u751F\u6210 \u2500\u2500\u91CD\u65B0\u751F\u6210\u2500\u2500\u2192 \u66F4\u65B0\u6570\u636E \u2500\u2500\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u2500\u2500\u2192 \u5DF2\u63A8\u9001")
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
                createVNode("td", null, "\u672A\u63A8\u9001"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u5DF2\u751F\u6210\u672A\u63A8\u9001"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u91CD\u65B0\u751F\u6210\u3001\u66F4\u65B0\u63A8\u9001\u72B6\u6001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u63A8\u9001"),
                createVNode("td", null, "\u5DF2\u63A8\u9001\u5916\u90E8\u7CFB\u7EDF"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u67E5\u770B\u660E\u7EC6\u3001\u91CD\u65B0\u751F\u6210")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ABUD_INLIMIT_BALANCE_ACCOUNT\uFF08\u5E7F\u544A\u8D39\u5BF9\u8D26\u5355\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>INLIMIT_BALANCE_ACCOUNT_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>ENTNAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D\u7F16\u7801</td><td${_scopeId}>\u5F00\u7968\u5355\u4F4D</td><td${_scopeId}>\u9009\u62E9\u5F00\u7968\u5355\u4F4D\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>YEARMONTH</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BF9\u8D26\u5E74\u6708</td><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>\u624B\u52A8\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>START_TIME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u8D77\u59CB\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165</td></tr><tr${_scopeId}><td${_scopeId}>END_TIME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ED3\u675F\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165</td></tr><tr${_scopeId}><td${_scopeId}>SEND_STATUS</td><td${_scopeId}>INTEGER</td><td${_scopeId}>\u63A8\u9001\u72B6\u6001</td><td${_scopeId}>\u63A8\u9001\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>S_STAT</td><td${_scopeId}>INTEGER</td><td${_scopeId}>\u5BF9\u8D26\u5355\u72B6\u6001</td><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>BEGINNING_BALANCE</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>\u671F\u521D\u4F59\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>CHECKOUT_ORDER_PROVISION</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51FA\u5E93\u5355\u9884\u63D0</td><td${_scopeId}>\u51FA\u5E93\u9884\u63D0</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>DEDUCTION_AMOUNT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u6263\u51CF\u91D1\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>EXPIRE_ADJUST_QUOTA</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u5230\u671F\u8C03\u6574\u989D\u5EA6</td><td${_scopeId}>\u5230\u671F\u8C03\u6574</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>OTHER_ADJUST_QUOTA</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u5176\u4ED6\u8C03\u6574\u989D\u5EA6</td><td${_scopeId}>\u5176\u4ED6\u8C03\u6574</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>INLIMIT_CASHOUT_QUOTA</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0\u91D1\u989D</td><td${_scopeId}>\u989D\u5EA6\u5185\u5151\u73B0</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>ACTUAL_ENDING_BALANCE</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>\u671F\u672B\u4F59\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr></tbody></table>`);
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
                createVNode("td", null, "INLIMIT_BALANCE_ACCOUNT_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTNAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D\u7F16\u7801"),
                createVNode("td", null, "\u5F00\u7968\u5355\u4F4D"),
                createVNode("td", null, "\u9009\u62E9\u5F00\u7968\u5355\u4F4D\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "YEARMONTH"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BF9\u8D26\u5E74\u6708"),
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "\u624B\u52A8\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "START_TIME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u8D77\u59CB\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_TIME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ED3\u675F\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SEND_STATUS"),
                createVNode("td", null, "INTEGER"),
                createVNode("td", null, "\u63A8\u9001\u72B6\u6001"),
                createVNode("td", null, "\u63A8\u9001\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "S_STAT"),
                createVNode("td", null, "INTEGER"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u72B6\u6001"),
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BEGINNING_BALANCE"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "\u671F\u521D\u4F59\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECKOUT_ORDER_PROVISION"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51FA\u5E93\u5355\u9884\u63D0"),
                createVNode("td", null, "\u51FA\u5E93\u9884\u63D0"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEDUCTION_AMOUNT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u6263\u51CF\u91D1\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EXPIRE_ADJUST_QUOTA"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u5230\u671F\u8C03\u6574\u989D\u5EA6"),
                createVNode("td", null, "\u5230\u671F\u8C03\u6574"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OTHER_ADJUST_QUOTA"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u5176\u4ED6\u8C03\u6574\u989D\u5EA6"),
                createVNode("td", null, "\u5176\u4ED6\u8C03\u6574"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INLIMIT_CASHOUT_QUOTA"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0\u91D1\u989D"),
                createVNode("td", null, "\u989D\u5EA6\u5185\u5151\u73B0"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ACTUAL_ENDING_BALANCE"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "\u671F\u672B\u4F59\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1ABUD_INLIMIT_ACCOUNT_LINE\uFF08\u5E7F\u544A\u8D39\u5BF9\u8D26\u5355\u884C\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>INLIMIT_ACCOUNT_LINE_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u884C\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>INLIMIT_BALANCE_ACCOUNT_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5173\u8054\u5934\u8868ID</td><td${_scopeId}>-</td><td${_scopeId}>FK \u2192 BUD_INLIMIT_BALANCE_ACCOUNT</td></tr></tbody></table>`);
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
                createVNode("td", null, "INLIMIT_ACCOUNT_LINE_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u884C\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "INLIMIT_BALANCE_ACCOUNT_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5173\u8054\u5934\u8868ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "FK \u2192 BUD_INLIMIT_BALANCE_ACCOUNT")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u5931\u8D25</td><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u65F6</td><td${_scopeId}>\u660E\u7EC6\u6570\u636E\u672A\u5C31\u7EEA\u6216\u6C47\u603B\u8BA1\u7B97\u5F02\u5E38\uFF0C\u786E\u8BA4\u660E\u7EC6\u6570\u636E\u5DF2\u751F\u6210</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u65E0\u6570\u636E</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u5BF9\u8D26\u5355\u672A\u751F\u6210\uFF0C\u5148\u6267\u884C\u91CD\u65B0\u751F\u6210</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708</td><td${_scopeId}>\u91CD\u65B0\u751F\u6210\u65F6</td><td${_scopeId}>\u67E5\u8BE2\u5E74\u6708\u8D85\u8FC7\u5F53\u524D\u5E74\u6708\uFF0C\u8C03\u6574\u4E3A\u524D\u4E00\u4E2A\u6708\u6216\u66F4\u65E9</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u5931\u8D25</td><td${_scopeId}>\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u65F6</td><td${_scopeId}>\u672A\u9009\u4E2D\u8BB0\u5F55\u6216\u63A5\u53E3\u5F02\u5E38\uFF0C\u9009\u4E2D\u8BB0\u5F55\u540E\u91CD\u8BD5</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u67E5\u8BE2/\u91CD\u65B0\u751F\u6210\u65F6</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u786E\u8BA4ae-business\u670D\u52A1\u6B63\u5E38</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u8FDB\u5165\u9875\u9762\u65F6</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u4E8B\u4E1A\u90E8\u6570\u636E\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u91CD\u65B0\u751F\u6210\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u91CD\u65B0\u751F\u6210&quot;\u6309\u94AE\uFF0Cregenerate\u63A5\u53E3\u6267\u884C\u6C47\u603B\u8BA1\u7B97\u65F6\u629B\u51FA\u5F02\u5E38</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u91CD\u65B0\u751F\u6210\u63A5\u53E3\u6309\u5165\u53C2\uFF08\u4E8B\u4E1A\u90E8+\u4EA4\u6613\u516C\u53F8+\u5F00\u7968\u5355\u4F4D+\u8D77\u59CB\u65F6\u95F4\uFF09\u6C47\u603B\u660E\u7EC6\u884C\uFF08BUD_INLIMIT_ACCOUNT_LINE\uFF09\u603B\u989D\uFF0C\u8BA1\u7B97\u671F\u521D\u4F59\u989D\u3001\u6263\u51CF\u91D1\u989D\u3001\u5230\u671F\u8C03\u6574\u3001\u5176\u4ED6\u8C03\u6574\u3001\u989D\u5EA6\u5185\u5151\u73B0\u3001\u671F\u672B\u4F59\u989D\uFF0C\u63D2\u5165/\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u660E\u7EC6\u6570\u636E\u672A\u5C31\u7EEA\uFF0C\u4E0A\u6E38MKT_INLIMIT_BALANCE_DETAILS\u660E\u7EC6\u884C\u6570\u636E\u672A\u751F\u6210\u6216\u672A\u540C\u6B65\uFF1B(2)\u6C47\u603B\u8BA1\u7B97\u5F02\u5E38\uFF0C\u5982\u9664\u96F6\u9519\u8BEF\uFF08\u7A0E\u7387\u4E3A0\u65F6\u8BA1\u7B97\u4E0D\u542B\u7A0E\u91D1\u989D\uFF09\u6216\u91D1\u989D\u6EA2\u51FA\uFF1B(3)\u5934\u8868\u552F\u4E00\u7EA6\u675F\u51B2\u7A81\uFF08\u540C\u4E8B\u4E1A\u90E8+\u4EA4\u6613\u516C\u53F8+\u5E74\u6708\u91CD\u590D\u751F\u6210\uFF09\u3002\u9700\u6838\u67E5\u660E\u7EC6\u884C\u6570\u636E\u53CA\u6C47\u603B\u65E5\u5FD7</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u660E\u7EC6\u884C\u6570\u636E\u662F\u5426\u5C31\u7EEA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u660E\u7EC6\u884C\u6570, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(AMOUNT) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u660E\u7EC6\u91D1\u989D\u5408\u8BA1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_ACCOUNT_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  );</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u5934\u8868\u662F\u5426\u5DF2\u5B58\u5728\uFF08\u552F\u4E00\u7EA6\u675F\u51B2\u7A81\u6392\u67E5\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, TRADING_COMPANY_CODE, YEARMONTH, S_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u67E5\u8BE2\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u6309\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8/\u5E74\u6708\u67E5\u8BE2\u5BF9\u8D26\u5355\uFF0CBUD_INLIMIT_BALANCE_ACCOUNT\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BF9\u8D26\u5355\u5934\u8868\u6570\u636E\u7531&quot;\u91CD\u65B0\u751F\u6210&quot;\u64CD\u4F5C\u5199\u5165\uFF0C\u975E\u81EA\u52A8\u751F\u6210\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u4ECE\u672A\u6267\u884C\u8FC7\u91CD\u65B0\u751F\u6210\uFF0C\u5934\u8868\u4E3A\u7A7A\uFF1B(2)\u67E5\u8BE2\u6761\u4EF6\uFF08ENTNAME+TRADING_COMPANY_CODE+YEARMONTH\uFF09\u4E0E\u5934\u8868\u8BB0\u5F55\u4E0D\u5339\u914D\u3002\u9700\u5148\u6267\u884C\u91CD\u65B0\u751F\u6210\uFF0C\u518D\u67E5\u8BE2\u786E\u8BA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, TRADING_COMPANY_CODE, BILLING_UNIT_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         YEARMONTH, BEGINNING_BALANCE, ACTUAL_ENDING_BALANCE, SEND_STATUS, S_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (TRADING_COMPANY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165\u7684\u67E5\u8BE2\u5E74\u6708\uFF08yearmonth\uFF09\u8D85\u8FC7\u5F53\u524D\u5E74\u6708</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEFBudInlimitBalanceAccountServiceImpl.regenerate\u65B9\u6CD5\u4E2D\uFF0C\u5C06\u5F53\u524D\u5E74\u6708\uFF08cal.get(Calendar.YEAR)+&quot;/&quot;+cal.get(Calendar.MONTH)\uFF09\u4F5C\u4E3A\u53EF\u67E5\u8BE2\u4E0A\u9650\uFF0C\u6821\u9A8Cformat1.parse(newYearMonth).getTime() &lt; format1.parse(yearmonth).getTime()\u65F6\u629B\u51FAIllegalArgumentException(&quot;\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708&quot;)\u3002\u8BE5\u6821\u9A8C\u9632\u6B62\u751F\u6210\u672A\u6765\u6708\u4EFD\u7684\u5BF9\u8D26\u5355\uFF0C\u56E0\u4E3A\u672A\u6765\u6708\u4EFD\u7684\u660E\u7EC6\u6570\u636E\u5C1A\u672A\u4EA7\u751F\u3002\u9700\u5C06\u67E5\u8BE2\u5E74\u6708\u8C03\u6574\u4E3A\u5F53\u524D\u6708\u6216\u66F4\u65E9</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u5F53\u524D\u5DF2\u6709\u7684\u6700\u5927\u5E74\u6708</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MAX</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(YEARMONTH) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u5927\u5E74\u6708, TO_CHAR(</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY/MM</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F53\u524D\u5E74\u6708</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENTNAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entname};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u66F4\u65B0\u63A8\u9001\u72B6\u6001&quot;\u6309\u94AE\uFF0CPOST /v1/{organizationId}/inlimit-balance-account/update-status\u63A5\u53E3\u6267\u884C\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AupdateStatus\u65B9\u6CD5\u63A5\u6536BalanceAccountBatchSendDTO\uFF0C\u4ECE\u4E2D\u83B7\u53D6inlimitBalanceAccountIds\u5217\u8868\u3002\u82E5ids\u4E3A\u7A7A\uFF08CollectionUtils.isEmpty(ids)\uFF09\u5219\u76F4\u63A5return\u4E0D\u5904\u7406\uFF0C\u4E0D\u629B\u5F02\u5E38\u4F46\u524D\u7AEF\u65E0\u6548\u679C\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u672A\u9009\u4E2D\u8BB0\u5F55\uFF0Cids\u4E3A\u7A7A\uFF1B(2)\u9009\u4E2D\u8BB0\u5F55\u7684SEND_STATUS\u5DF2\u4E3A2\uFF08\u5DF2\u63A8\u9001\uFF09\uFF0C\u4E0D\u53EF\u91CD\u590D\u63A8\u9001\uFF1B(3)\u6570\u636E\u5E93\u66F4\u65B0\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u9009\u4E2D\u8BB0\u5F55\u4E14SEND_STATUS\u4E0D\u4E3A2\u540E\u91CD\u8BD5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u9009\u4E2D\u8BB0\u5F55\u7684\u5F53\u524D\u63A8\u9001\u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, YEARMONTH, SEND_STATUS, S_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> INLIMIT_BALANCE_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{ids});</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2/\u91CD\u65B0\u751F\u6210/\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u6309\u94AE\uFF0C\u524D\u7AEF\u8C03\u7528\u5BF9\u5E94\u63A5\u53E3\u8FD4\u56DE\u975E2xx\u72B6\u6001\u7801\u6216\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u6570\u636E\u901A\u8FC7\u540E\u7AEFBudInlimitBalanceAccountController\u63D0\u4F9B\u3002\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u6839\u56E0\u6709\u56DB\u7C7B\uFF1A(1)ae-business\u670D\u52A1\u672A\u542F\u52A8\u6216\u5B95\u673A\uFF1B(2)\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\uFF1B(3)\u91CD\u65B0\u751F\u6210\u65F6\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5206\u9875\u5FAA\u73AF\uFF08\u6BCF\u6B21200\u6761\uFF09\u6267\u884C\u8D85\u65F6\uFF1B(4)\u7F51\u5173\u6216\u7F51\u7EDC\u5C42\u6545\u969C\u3002\u9700\u5148\u786E\u8BA4ae-business\u670D\u52A1\u5065\u5EB7\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u5934\u8868\u6570\u636E\u91CF\u662F\u5426\u5F02\u5E38</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u603B\u5BF9\u8D26\u5355\u6570, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DISTINCT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E74\u6708\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BUD_INLIMIT_BALANCE_ACCOUNT;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u767B\u5F55\u540E\u8FDB\u5165\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u9875\u9762\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u7684\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u6309\u4E8B\u4E1A\u90E8\u7EF4\u5EA6\u67E5\u8BE2\uFF0C\u6570\u636E\u6743\u9650\u901A\u8FC7\u7528\u6237\u4E0A\u4E0B\u6587\u63A7\u5236\u53EF\u89C1\u4E8B\u4E1A\u90E8\u8303\u56F4\u3002\u6743\u9650\u4E0D\u8DB3\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u7684\u6570\u636E\u6743\u9650\uFF0C\u67E5\u8BE2\u65F6\u81EA\u52A8\u8FC7\u6EE4\u5BFC\u81F4\u7A7A\u7ED3\u679C\uFF1B(2)\u7528\u6237\u672A\u5206\u914D\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u9875\u9762\u5165\u53E3\u4E0D\u53EF\u89C1\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u6743\u9650\u7CFB\u7EDF\u4E2D\u5206\u914D\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7528\u6237\u53EF\u8BBF\u95EE\u7684\u4E8B\u4E1A\u90E8</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, DIVISION_ID, DIVISION_NAME, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> USER_DIVISION_AUTH</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{userId};</span></span>
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
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u5931\u8D25"),
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u65F6"),
                createVNode("td", null, "\u660E\u7EC6\u6570\u636E\u672A\u5C31\u7EEA\u6216\u6C47\u603B\u8BA1\u7B97\u5F02\u5E38\uFF0C\u786E\u8BA4\u660E\u7EC6\u6570\u636E\u5DF2\u751F\u6210"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u65E0\u6570\u636E"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u5BF9\u8D26\u5355\u672A\u751F\u6210\uFF0C\u5148\u6267\u884C\u91CD\u65B0\u751F\u6210"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708"),
                createVNode("td", null, "\u91CD\u65B0\u751F\u6210\u65F6"),
                createVNode("td", null, "\u67E5\u8BE2\u5E74\u6708\u8D85\u8FC7\u5F53\u524D\u5E74\u6708\uFF0C\u8C03\u6574\u4E3A\u524D\u4E00\u4E2A\u6708\u6216\u66F4\u65E9"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u5931\u8D25"),
                createVNode("td", null, "\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u65F6"),
                createVNode("td", null, "\u672A\u9009\u4E2D\u8BB0\u5F55\u6216\u63A5\u53E3\u5F02\u5E38\uFF0C\u9009\u4E2D\u8BB0\u5F55\u540E\u91CD\u8BD5"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u67E5\u8BE2/\u91CD\u65B0\u751F\u6210\u65F6"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u786E\u8BA4ae-business\u670D\u52A1\u6B63\u5E38"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3"),
                createVNode("td", null, "\u8FDB\u5165\u9875\u9762\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u4E8B\u4E1A\u90E8\u6570\u636E\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u91CD\u65B0\u751F\u6210\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u91CD\u65B0\u751F\u6210"\u6309\u94AE\uFF0Cregenerate\u63A5\u53E3\u6267\u884C\u6C47\u603B\u8BA1\u7B97\u65F6\u629B\u51FA\u5F02\u5E38')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u91CD\u65B0\u751F\u6210\u63A5\u53E3\u6309\u5165\u53C2\uFF08\u4E8B\u4E1A\u90E8+\u4EA4\u6613\u516C\u53F8+\u5F00\u7968\u5355\u4F4D+\u8D77\u59CB\u65F6\u95F4\uFF09\u6C47\u603B\u660E\u7EC6\u884C\uFF08BUD_INLIMIT_ACCOUNT_LINE\uFF09\u603B\u989D\uFF0C\u8BA1\u7B97\u671F\u521D\u4F59\u989D\u3001\u6263\u51CF\u91D1\u989D\u3001\u5230\u671F\u8C03\u6574\u3001\u5176\u4ED6\u8C03\u6574\u3001\u989D\u5EA6\u5185\u5151\u73B0\u3001\u671F\u672B\u4F59\u989D\uFF0C\u63D2\u5165/\u66F4\u65B0BUD_INLIMIT_BALANCE_ACCOUNT\u5934\u8868\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u660E\u7EC6\u6570\u636E\u672A\u5C31\u7EEA\uFF0C\u4E0A\u6E38MKT_INLIMIT_BALANCE_DETAILS\u660E\u7EC6\u884C\u6570\u636E\u672A\u751F\u6210\u6216\u672A\u540C\u6B65\uFF1B(2)\u6C47\u603B\u8BA1\u7B97\u5F02\u5E38\uFF0C\u5982\u9664\u96F6\u9519\u8BEF\uFF08\u7A0E\u7387\u4E3A0\u65F6\u8BA1\u7B97\u4E0D\u542B\u7A0E\u91D1\u989D\uFF09\u6216\u91D1\u989D\u6EA2\u51FA\uFF1B(3)\u5934\u8868\u552F\u4E00\u7EA6\u675F\u51B2\u7A81\uFF08\u540C\u4E8B\u4E1A\u90E8+\u4EA4\u6613\u516C\u53F8+\u5E74\u6708\u91CD\u590D\u751F\u6210\uFF09\u3002\u9700\u6838\u67E5\u660E\u7EC6\u884C\u6570\u636E\u53CA\u6C47\u603B\u65E5\u5FD7")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u660E\u7EC6\u884C\u6570\u636E\u662F\u5426\u5C31\u7EEA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u660E\u7EC6\u884C\u6570, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(AMOUNT) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u660E\u7EC6\u91D1\u989D\u5408\u8BA1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_ACCOUNT_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u5934\u8868\u662F\u5426\u5DF2\u5B58\u5728\uFF08\u552F\u4E00\u7EA6\u675F\u51B2\u7A81\u6392\u67E5\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, TRADING_COMPANY_CODE, YEARMONTH, S_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth};")
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
              createTextVNode("\uFF1A\u7528\u6237\u6309\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8/\u5E74\u6708\u67E5\u8BE2\u5BF9\u8D26\u5355\uFF0CBUD_INLIMIT_BALANCE_ACCOUNT\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5BF9\u8D26\u5355\u5934\u8868\u6570\u636E\u7531"\u91CD\u65B0\u751F\u6210"\u64CD\u4F5C\u5199\u5165\uFF0C\u975E\u81EA\u52A8\u751F\u6210\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u4ECE\u672A\u6267\u884C\u8FC7\u91CD\u65B0\u751F\u6210\uFF0C\u5934\u8868\u4E3A\u7A7A\uFF1B(2)\u67E5\u8BE2\u6761\u4EF6\uFF08ENTNAME+TRADING_COMPANY_CODE+YEARMONTH\uFF09\u4E0E\u5934\u8868\u8BB0\u5F55\u4E0D\u5339\u914D\u3002\u9700\u5148\u6267\u884C\u91CD\u65B0\u751F\u6210\uFF0C\u518D\u67E5\u8BE2\u786E\u8BA4')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, TRADING_COMPANY_CODE, BILLING_UNIT_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         YEARMONTH, BEGINNING_BALANCE, ACTUAL_ENDING_BALANCE, SEND_STATUS, S_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (TRADING_COMPANY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u91CD\u65B0\u751F\u6210\u65F6\u4F20\u5165\u7684\u67E5\u8BE2\u5E74\u6708\uFF08yearmonth\uFF09\u8D85\u8FC7\u5F53\u524D\u5E74\u6708")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEFBudInlimitBalanceAccountServiceImpl.regenerate\u65B9\u6CD5\u4E2D\uFF0C\u5C06\u5F53\u524D\u5E74\u6708\uFF08cal.get(Calendar.YEAR)+"/"+cal.get(Calendar.MONTH)\uFF09\u4F5C\u4E3A\u53EF\u67E5\u8BE2\u4E0A\u9650\uFF0C\u6821\u9A8Cformat1.parse(newYearMonth).getTime() < format1.parse(yearmonth).getTime()\u65F6\u629B\u51FAIllegalArgumentException("\u751F\u6210\u51FA\u5E93\u5355\u7684\u65E5\u671F\u6700\u8FDF\u4E3A\u524D\u4E00\u4E2A\u6708")\u3002\u8BE5\u6821\u9A8C\u9632\u6B62\u751F\u6210\u672A\u6765\u6708\u4EFD\u7684\u5BF9\u8D26\u5355\uFF0C\u56E0\u4E3A\u672A\u6765\u6708\u4EFD\u7684\u660E\u7EC6\u6570\u636E\u5C1A\u672A\u4EA7\u751F\u3002\u9700\u5C06\u67E5\u8BE2\u5E74\u6708\u8C03\u6574\u4E3A\u5F53\u524D\u6708\u6216\u66F4\u65E9')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u5F53\u524D\u5DF2\u6709\u7684\u6700\u5927\u5E74\u6708")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "MAX"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(YEARMONTH) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u5927\u5E74\u6708, TO_CHAR("),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY/MM"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F53\u524D\u5E74\u6708")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENTNAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entname};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u66F4\u65B0\u63A8\u9001\u72B6\u6001"\u6309\u94AE\uFF0CPOST /v1/{organizationId}/inlimit-balance-account/update-status\u63A5\u53E3\u6267\u884C\u5931\u8D25')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AupdateStatus\u65B9\u6CD5\u63A5\u6536BalanceAccountBatchSendDTO\uFF0C\u4ECE\u4E2D\u83B7\u53D6inlimitBalanceAccountIds\u5217\u8868\u3002\u82E5ids\u4E3A\u7A7A\uFF08CollectionUtils.isEmpty(ids)\uFF09\u5219\u76F4\u63A5return\u4E0D\u5904\u7406\uFF0C\u4E0D\u629B\u5F02\u5E38\u4F46\u524D\u7AEF\u65E0\u6548\u679C\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u672A\u9009\u4E2D\u8BB0\u5F55\uFF0Cids\u4E3A\u7A7A\uFF1B(2)\u9009\u4E2D\u8BB0\u5F55\u7684SEND_STATUS\u5DF2\u4E3A2\uFF08\u5DF2\u63A8\u9001\uFF09\uFF0C\u4E0D\u53EF\u91CD\u590D\u63A8\u9001\uFF1B(3)\u6570\u636E\u5E93\u66F4\u65B0\u5F02\u5E38\u3002\u9700\u786E\u8BA4\u9009\u4E2D\u8BB0\u5F55\u4E14SEND_STATUS\u4E0D\u4E3A2\u540E\u91CD\u8BD5")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u9009\u4E2D\u8BB0\u5F55\u7684\u5F53\u524D\u63A8\u9001\u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID, ENTNAME, YEARMONTH, SEND_STATUS, S_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " INLIMIT_BALANCE_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{ids});")
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
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u67E5\u8BE2/\u91CD\u65B0\u751F\u6210/\u66F4\u65B0\u63A8\u9001\u72B6\u6001\u6309\u94AE\uFF0C\u524D\u7AEF\u8C03\u7528\u5BF9\u5E94\u63A5\u53E3\u8FD4\u56DE\u975E2xx\u72B6\u6001\u7801\u6216\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u9875\u9762\uFF0C\u6570\u636E\u901A\u8FC7\u540E\u7AEFBudInlimitBalanceAccountController\u63D0\u4F9B\u3002\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u6839\u56E0\u6709\u56DB\u7C7B\uFF1A(1)ae-business\u670D\u52A1\u672A\u542F\u52A8\u6216\u5B95\u673A\uFF1B(2)\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\uFF1B(3)\u91CD\u65B0\u751F\u6210\u65F6\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5206\u9875\u5FAA\u73AF\uFF08\u6BCF\u6B21200\u6761\uFF09\u6267\u884C\u8D85\u65F6\uFF1B(4)\u7F51\u5173\u6216\u7F51\u7EDC\u5C42\u6545\u969C\u3002\u9700\u5148\u786E\u8BA4ae-business\u670D\u52A1\u5065\u5EB7\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u5934\u8868\u6570\u636E\u91CF\u662F\u5426\u5F02\u5E38")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u603B\u5BF9\u8D26\u5355\u6570, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DISTINCT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E74\u6708\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BUD_INLIMIT_BALANCE_ACCOUNT;")
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
              createTextVNode("\uFF1A\u7528\u6237\u767B\u5F55\u540E\u8FDB\u5165\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355\u9875\u9762\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u7684\u6570\u636E\u6743\u9650")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u6309\u4E8B\u4E1A\u90E8\u7EF4\u5EA6\u67E5\u8BE2\uFF0C\u6570\u636E\u6743\u9650\u901A\u8FC7\u7528\u6237\u4E0A\u4E0B\u6587\u63A7\u5236\u53EF\u89C1\u4E8B\u4E1A\u90E8\u8303\u56F4\u3002\u6743\u9650\u4E0D\u8DB3\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u7684\u6570\u636E\u6743\u9650\uFF0C\u67E5\u8BE2\u65F6\u81EA\u52A8\u8FC7\u6EE4\u5BFC\u81F4\u7A7A\u7ED3\u679C\uFF1B(2)\u7528\u6237\u672A\u5206\u914D\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u9875\u9762\u5165\u53E3\u4E0D\u53EF\u89C1\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u6743\u9650\u7CFB\u7EDF\u4E2D\u5206\u914D\u5BF9\u5E94\u4E8B\u4E1A\u90E8\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7528\u6237\u53EF\u8BBF\u95EE\u7684\u4E8B\u4E1A\u90E8")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", DIVISION_ID, DIVISION_NAME, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " USER_DIVISION_AUTH")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{userId};")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u5BF9\u8D26\u5355\u6570\u636E\u4E0D\u6B63\u786E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u660E\u7EC6\u6570\u636E\u672A\u53CA\u65F6\u66F4\u65B0\u6216\u6C47\u603B\u8BA1\u7B97\u6709\u8BEF</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u6267\u884C\u91CD\u65B0\u751F\u6210\u64CD\u4F5C\uFF0C\u68C0\u67E5SQL <code${_scopeId}>SELECT * FROM BUD_INLIMIT_BALANCE_ACCOUNT WHERE YEARMONTH = #{yearmonth}</code></li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1A\u63A8\u9001\u72B6\u6001\u672A\u66F4\u65B0</li><li${_scopeId}>\u539F\u56E0\uFF1Aupdate-status\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u6216\u53C2\u6570\u9519\u8BEF</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u65E5\u5FD7\uFF0C\u786E\u8BA4SEND_STATUS\u5B57\u6BB5\u662F\u5426\u66F4\u65B0</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u5BF9\u8D26\u5355\u6570\u636E\u4E0D\u6B63\u786E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u660E\u7EC6\u6570\u636E\u672A\u53CA\u65F6\u66F4\u65B0\u6216\u6C47\u603B\u8BA1\u7B97\u6709\u8BEF"),
            createVNode("li", null, [
              createTextVNode("\u89E3\u51B3\u601D\u8DEF\uFF1A\u6267\u884C\u91CD\u65B0\u751F\u6210\u64CD\u4F5C\uFF0C\u68C0\u67E5SQL "),
              createVNode("code", null, "SELECT * FROM BUD_INLIMIT_BALANCE_ACCOUNT WHERE YEARMONTH = #{yearmonth}")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1A\u63A8\u9001\u72B6\u6001\u672A\u66F4\u65B0"),
            createVNode("li", null, "\u539F\u56E0\uFF1Aupdate-status\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u6216\u53C2\u6570\u9519\u8BEF"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u63A8\u9001\u72B6\u6001\u66F4\u65B0\u65E5\u5FD7\uFF0C\u786E\u8BA4SEND_STATUS\u5B57\u6BB5\u662F\u5426\u66F4\u65B0")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u9009\u62E9\u5F39\u7A97\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-08-29</td><td${_scopeId}>-</td><td${_scopeId}>YangDa</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFABudInlimitBalanceAccount\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u9009\u62E9\u5F39\u7A97\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-08-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "YangDa"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFABudInlimitBalanceAccount\u5B9E\u4F53")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u989D\u5EA6\u5185\u5E02\u573A\u63A8\u5E7F\u670D\u52A1\u8D39\u5BF9\u8D26\u5355/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
