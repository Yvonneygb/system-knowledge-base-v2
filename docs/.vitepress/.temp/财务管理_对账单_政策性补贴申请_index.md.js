import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u67E5\u4EC0\u4E48</span><h2>\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u67E5\u8BE2\u67E5\u4EC0\u4E48</h2><p>\u67E5\u8BE2\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u8BB0\u5F55\uFF0C\u638C\u63E1\u5176\u5904\u7406\u72B6\u6001</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u67E5\u8BE2\u8303\u56F4</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u68C0\u7D22\u653F\u7B56\u6027\u8865\u8D34\u7684\u5151\u73B0\u62A5\u9500\u8BB0\u5F55\uFF0C\u8986\u76D6\u5DF2\u7533\u8BF7\u8865\u8D34\u7684\u5151\u73B0\u60C5\u51B5\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u72B6\u6001\u6765\u6E90</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5151\u73B0\u62A5\u9500\u72B6\u6001\u7531\u4E0A\u6E38\u7533\u8BF7\u4E0E\u5DE5\u4F5C\u6D41\u56DE\u8C03\u66F4\u65B0\uFF0C\u67E5\u8BE2\u9875\u53EA\u8BFB\u5C55\u793A\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u4E1A\u52A1\u7528\u9014</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8DDF\u8E2A\u8865\u8D34\u5151\u73B0\u62A5\u9500\u8FDB\u5C55\uFF0C\u652F\u6491\u8D22\u52A1\u5BF9\u8D26\u4E0E\u8865\u8D34\u6838\u7B97\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u600E\u4E48\u7528</span><h2>\u5982\u4F55\u4F7F\u7528\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u67E5\u8BE2</h2><p>\u7EAF\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u5BA1\u6279\uFF0C\u72B6\u6001\u7531\u5DE5\u4F5C\u6D41\u56DE\u8C03\u9A71\u52A8\u66F4\u65B0</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 5V8L10 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u9009\u62E9\u6761\u4EF6</h5><small>\u7B5B\u9009\u5151\u73B0\u62A5\u9500<br>\u8BB0\u5F55\u8303\u56F4</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u6267\u884C\u67E5\u8BE2</h5><small>\u68C0\u7D22\u5151\u73B0<br>\u62A5\u9500\u8BB0\u5F55</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u770B\u5217\u8868</h5><small>\u67E5\u770B\u5151\u73B0\u62A5\u9500<br>\u72B6\u6001\u4E0E\u7ED3\u679C</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u4E1A\u52A1\u8FB9\u754C\uFF1A</strong>\u672C\u9875\u4E3A\u5151\u73B0\u62A5\u9500\u67E5\u8BE2\uFF0C\u4E0D\u53D1\u8D77\u65B0\u8865\u8D34\u7533\u8BF7\uFF1B\u8865\u8D34\u7533\u8BF7\u4E0E\u5BA1\u6279\u7531\u4E0A\u6E38\u6D41\u7A0B\u5904\u7406\uFF0C\u72B6\u6001\u5728\u6B64\u53EA\u8BFB\u5448\u73B0\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u3010\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u67E5\u8BE2\u3011 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u9009\u62E9\u67E5\u8BE2\u6761\u4EF6 \u2192 \u2605\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u67E5\u8BE2\u2605 \u2192 \u5C55\u793A\u5151\u73B0\u62A5\u9500\u5217\u8868 \u2192 \u7ED3\u675F\uFF08\u7EAF\u67E5\u8BE2\uFF0C\u72B6\u6001\u7531\u5DE5\u4F5C\u6D41\u56DE\u8C03\u66F4\u65B0\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 660" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="430" y="56" width="160" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="510" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7</text><rect x="610" y="56" width="160" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="690" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u56DE\u8C03</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="226" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="515" y="226" width="170" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="253" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u9009\u62E9\u67E5\u8BE2\u6761\u4EF6</text><line x1="600" y1="270" x2="600" y2="302" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="302" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="327" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u62A5\u9500\u67E5\u8BE2\u2605</text><text x="600" y="346" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5SPECIAL_ALLOW_BX_CASH\xB7\u5C55\u5151\u73B0\u62A5\u9500</text><line x1="600" y1="356" x2="600" y2="388" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="510" y="388" width="180" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="413" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u5C55\u793A\u5151\u73B0\u62A5\u9500\u5217\u8868</text><line x1="600" y1="428" x2="600" y2="460" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="460" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="485" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="500" x2="600" y2="532" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="532" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="554" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="420" y="568" width="360" height="34" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="590" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u65E0\uFF08\u7EAF\u67E5\u8BE2\uFF0C\u4E0D\u5199\u56DE\u4E0B\u6E38\u6570\u636E\uFF09</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1AOA\u5BA1\u6279\u6D41\u7A0B {\u5BA1\u6279\u6D41\u8F6C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9700\u7ECFOA\u5BA1\u6279\uFF0C\u786E\u4FDD\u8865\u8D34\u53D1\u653E\u5408\u89C4</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1AOA\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7doProcessOA\u56DE\u8C03\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AAPPROVED</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1AOA\u5BA1\u6279\u62D2\u7EDD\u540E\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AREJECTED</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u5BA1\u6279\u72B6\u6001\u6D41\u8F6C\uFF1ANEW\u2192RUN\u2192APPROVED/REJECTED</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9700\u7ECFOA\u5BA1\u6279\uFF0C\u786E\u4FDD\u8865\u8D34\u53D1\u653E\u5408\u89C4")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1AOA\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7doProcessOA\u56DE\u8C03\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AAPPROVED")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1AOA\u5BA1\u6279\u62D2\u7EDD\u540E\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AREJECTED")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u5BA1\u6279\u72B6\u6001\u6D41\u8F6C\uFF1ANEW\u2192RUN\u2192APPROVED/REJECTED")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u8D44\u91D1\u6C60\u5173\u8054 {\u4F59\u989D\u6821\u9A8C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7533\u8BF7\u91D1\u989D\u9700\u5173\u8054\u8D44\u91D1\u6C60\u4F59\u989D\uFF0C\u786E\u4FDD\u8865\u8D34\u6709\u5145\u8DB3\u8D44\u91D1\u6765\u6E90</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u8D44\u91D1\u6C60\u4F59\u989D</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2\u4F59\u989D\u8D26\u6237\u4FE1\u606F</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u7533\u8BF7\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7533\u8BF7\u91D1\u989D\u9700\u5173\u8054\u8D44\u91D1\u6C60\u4F59\u989D\uFF0C\u786E\u4FDD\u8865\u8D34\u6709\u5145\u8DB3\u8D44\u91D1\u6765\u6E90")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u8D44\u91D1\u6C60\u4F59\u989D")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2\u4F59\u989D\u8D26\u6237\u4FE1\u606F")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u7533\u8BF7\u91D1\u989D\u4E0D\u80FD\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u591A\u5E01\u79CD\u652F\u6301 {\u5E01\u79CD\u5904\u7406}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u4E0D\u540C\u5E01\u79CD\u7684\u8865\u8D34\u7533\u8BF7\uFF0C\u5339\u914D\u56FD\u9645\u5316\u4E1A\u52A1\u9700\u6C42</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2\u53EF\u7528\u5E01\u79CD</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4E0D\u540C\u5E01\u79CD\u7684\u7533\u8BF7\u91D1\u989D\u72EC\u7ACB\u6838\u7B97</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u4E0D\u540C\u5E01\u79CD\u7684\u8865\u8D34\u7533\u8BF7\uFF0C\u5339\u914D\u56FD\u9645\u5316\u4E1A\u52A1\u9700\u6C42")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2\u53EF\u7528\u5E01\u79CD")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4E0D\u540C\u5E01\u79CD\u7684\u7533\u8BF7\u91D1\u989D\u72EC\u7ACB\u6838\u7B97")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5217\u8868\u9875\uFF08arrow-ae\u6807\u51C6React\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>packages/arrow-ae/src/pages/contractPolicy/saPolicySpecial/</code>\uFF0C\u8DEF\u7531\uFF1A<code${_scopeId}>/sa-policy-special/list</code></blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.POLICY_SPECIAL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CREATOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CREATE_TIME</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.LEGAL_ENTITY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.APPLY_AMT</td><td${_scopeId}>\u6570\u5B57\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.AMOUNT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5BA1\u6838\u901A\u8FC7\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6838\u540E\u663E\u793A</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.AUDIT_STAT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.NOTE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "packages/arrow-ae/src/pages/contractPolicy/saPolicySpecial/"),
            createTextVNode("\uFF0C\u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/sa-policy-special/list")
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
                createVNode("td", null, "\u8865\u8D34\u5355\u53F7"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.POLICY_SPECIAL_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.CREATOR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.CREATE_TIME"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.CUST_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.LEGAL_ENTITY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.APPLY_AMT"),
                createVNode("td", null, "\u6570\u5B57\u8F93\u5165\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u91D1\u989D"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.AMOUNT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5BA1\u6838\u901A\u8FC7\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6838\u540E\u663E\u793A"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.AUDIT_STAT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.NOTE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u65B0\u5EFA/\u7F16\u8F91\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u8BE6\u60C5\u9875\u8DEF\u7531\uFF1A<code${_scopeId}>/sa-policy-special/detail</code>\uFF0C\u5305\u542B\u5934\u90E8\u8868\u5355\u548C\u660E\u7EC6\u884C\u8868\u683C\u3002\u5934\u90E8\u5B57\u6BB5\u901A\u8FC7Form\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u660E\u7EC6\u884C\u901A\u8FC7Table\u7EC4\u4EF6\u5448\u73B0\u3002</blockquote><h4${_scopeId}>\u5934\u90E8\u4FE1\u606F\u533A</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>POLICY_SPECIAL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>CREATED_BY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>CAPITAL_TYPE</td><td${_scopeId}>Select(AE.CAPITAL_TYPE)</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>SOURCE_BILL_TYPE</td><td${_scopeId}>Select(AE.FIN_FEE_BILL_TYPE)</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u53F7</td><td${_scopeId}>SOURCE_BILL_NO_OBJ</td><td${_scopeId}>Lov(AE.FEE_CHECK_BX_SEARCH)</td><td${_scopeId}>\u6765\u6E90\u5355\u53F7LOV</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6709\u6765\u6E90\u5355\u636E\u7C7B\u578B\u65F6\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u539F\u56E0</td><td${_scopeId}>NOTE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>CUST_CODE/CUST_NAME</td><td${_scopeId}>Lov(BASIC_CUSTOM_ORG_LOV_2)</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u6E90\u7ECF\u9500\u5546LOV(\u660E\u7EC6\u884C)\uFF0C\u5E26\u51FA\u7F16\u7801\u548C\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>Lov(TRADING_LEGAL_SQL_V)</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA</td><td${_scopeId}>LEGAL_ENTITY_ID</td><td${_scopeId}>Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)</td><td${_scopeId}>\u6CD5\u4EBA\u4FE1\u606F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5E26\u51FA\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>ACCOUNT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u9009\u62E9\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>CAPITAL_POOL</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>APPLY_AMT</td><td${_scopeId}>\u6570\u5B57\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u9700&gt;0\u4E14&lt;=\u8D44\u91D1\u6C60\u4F59\u989D(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>APPROVED_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6279\u540E\u663E\u793A</td><td${_scopeId}>\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D(\u660E\u7EC6\u884C)</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>CURRENCY</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)</td></tr></tbody></table><h4${_scopeId}>\u660E\u7EC6\u884C\u8868\u683C\uFF08SA_POLICY_SPECIAL_LINE\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5E26\u51FA\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>CUSTOMER_OBJ</td><td${_scopeId}>Lov(BASIC_CUSTOM_ORG_LOV_2)</td><td${_scopeId}>\u7ECF\u9500\u5546LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0CsearchFlag=146\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u7ECF\u9500\u5546\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7ECF\u9500\u5546LOV\u5E26\u51FA\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_OBJ</td><td${_scopeId}>Lov(TRADING_LEGAL_SQL_V)</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4(tradingScope=1\u9500\u552E\u4E3B\u4F53)</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>LEGAL_ENTITY_OBJ</td><td${_scopeId}>Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4(flag=9)</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u6CD5\u4EBALOV\u5E26\u51FA\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u8D26\u6237</td><td${_scopeId}>ACCOUNT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-account\u67E5\u8BE2\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>CAPITAL_POOL</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-capital\u67E5\u8BE2\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>CAPITAL_TYPE</td><td${_scopeId}>Select(AE.CAPITAL_TYPE)</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5934\u90E8\u4FE1\u606F\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>APPLY_AMT</td><td${_scopeId}>\u6570\u5B57\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>APPROVED_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6279\u540E\u663E\u793A</td><td${_scopeId}>\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>CURRENCY</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7get-currency\u67E5\u8BE2\u5E26\u51FA</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u8BE6\u60C5\u9875\u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/sa-policy-special/detail"),
            createTextVNode("\uFF0C\u5305\u542B\u5934\u90E8\u8868\u5355\u548C\u660E\u7EC6\u884C\u8868\u683C\u3002\u5934\u90E8\u5B57\u6BB5\u901A\u8FC7Form\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u660E\u7EC6\u884C\u901A\u8FC7Table\u7EC4\u4EF6\u5448\u73B0\u3002")
          ]),
          createVNode("h4", null, "\u5934\u90E8\u4FE1\u606F\u533A"),
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
                createVNode("td", null, "\u8865\u8D34\u5355\u53F7"),
                createVNode("td", null, "POLICY_SPECIAL_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8865\u8D34\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "CREATED_BY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "CREATION_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "HZ_APPROVE_STATUS"),
                createVNode("td", null, "Select(HWKF.APPROVE_STATUS)"),
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "CAPITAL_TYPE"),
                createVNode("td", null, "Select(AE.CAPITAL_TYPE)"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "SOURCE_BILL_TYPE"),
                createVNode("td", null, "Select(AE.FIN_FEE_BILL_TYPE)"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5355\u53F7"),
                createVNode("td", null, "SOURCE_BILL_NO_OBJ"),
                createVNode("td", null, "Lov(AE.FEE_CHECK_BX_SEARCH)"),
                createVNode("td", null, "\u6765\u6E90\u5355\u53F7LOV"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6709\u6765\u6E90\u5355\u636E\u7C7B\u578B\u65F6\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0"),
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "CUST_CODE/CUST_NAME"),
                createVNode("td", null, "Lov(BASIC_CUSTOM_ORG_LOV_2)"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u6E90\u7ECF\u9500\u5546LOV(\u660E\u7EC6\u884C)\uFF0C\u5E26\u51FA\u7F16\u7801\u548C\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "Lov(TRADING_LEGAL_SQL_V)"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA"),
                createVNode("td", null, "LEGAL_ENTITY_ID"),
                createVNode("td", null, "Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)"),
                createVNode("td", null, "\u6CD5\u4EBA\u4FE1\u606F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6839\u636E\u4EA4\u6613\u516C\u53F8\u81EA\u52A8\u5E26\u51FA(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5E26\u51FA\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237"),
                createVNode("td", null, "ACCOUNT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u9009\u62E9\u4F59\u989D\u8D26\u6237"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "CAPITAL_POOL"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "APPLY_AMT"),
                createVNode("td", null, "\u6570\u5B57\u8F93\u5165\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u9700>0\u4E14<=\u8D44\u91D1\u6C60\u4F59\u989D(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "APPROVED_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6279\u540E\u663E\u793A"),
                createVNode("td", null, "\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D(\u660E\u7EC6\u884C)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "CURRENCY"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2(\u660E\u7EC6\u884C)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u660E\u7EC6\u884C\u8868\u683C\uFF08SA_POLICY_SPECIAL_LINE\uFF09"),
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
                createVNode("td", null, "DIVISION_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9ED8\u8BA4\u5E26\u51FA\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "CUSTOMER_OBJ"),
                createVNode("td", null, "Lov(BASIC_CUSTOM_ORG_LOV_2)"),
                createVNode("td", null, "\u7ECF\u9500\u5546LOV\u9009\u62E9"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0CsearchFlag=146\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u7ECF\u9500\u5546\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7ECF\u9500\u5546LOV\u5E26\u51FA\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_OBJ"),
                createVNode("td", null, "Lov(TRADING_LEGAL_SQL_V)"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8LOV\u9009\u62E9"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4(tradingScope=1\u9500\u552E\u4E3B\u4F53)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "LEGAL_ENTITY_OBJ"),
                createVNode("td", null, "Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801LOV\u9009\u62E9"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4(flag=9)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u6CD5\u4EBALOV\u5E26\u51FA\uFF0C\u53EA\u8BFB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u8D26\u6237"),
                createVNode("td", null, "ACCOUNT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7select-account\u67E5\u8BE2\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "CAPITAL_POOL"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7select-capital\u67E5\u8BE2\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "CAPITAL_TYPE"),
                createVNode("td", null, "Select(AE.CAPITAL_TYPE)"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u5934\u90E8\u4FE1\u606F\u5E26\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "APPLY_AMT"),
                createVNode("td", null, "\u6570\u5B57\u8F93\u5165\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u8865\u8D34\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "APPROVED_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6279\u540E\u663E\u793A"),
                createVNode("td", null, "\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "CURRENCY"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7get-currency\u67E5\u8BE2\u5E26\u51FA")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u7ECF\u9500\u5546\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>custCode</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>&quot;C001&quot;</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u7ECF\u9500\u5546</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID, CUST_CODE, CUST_NAME, SHORT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ORG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A972\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>2001</td><td${_scopeId}>\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\u7684\u4EA4\u6613\u516C\u53F8</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_ID, TRADING_COMPANY_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_ID, LEGAL_ENTITY_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_TRADING_COMPANY </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{custId}</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A973\uFF1A\u4F59\u989D\u8D26\u6237\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>2001</td><td${_scopeId}>\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u4F59\u989D\u8D26\u6237</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3select-account\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ACCOUNT_ID, ACCOUNT_NAME, CAPITAL_POOL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAPITAL_ACCOUNT </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A973\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>1001</td><td${_scopeId}>\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\u7684\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>tradingScope</td><td${_scopeId}>\u4EA4\u6613\u8303\u56F4</td><td${_scopeId}>\u4EA4\u6613\u8303\u56F4</td><td${_scopeId}>1(\u9500\u552E\u4E3B\u4F53)</td><td${_scopeId}>\u4EC5\u9500\u552E\u4E3B\u4F53\u7C7B\u578B\u7684\u4EA4\u6613\u516C\u53F8</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2LOV\u7F16\u7801\uFF1A<code${_scopeId}>TRADING_LEGAL_SQL_V</code>\uFF08\u67E5\u627E\u6807\u5FD7searchFlag=4\uFF09\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u4EA4\u6613\u516C\u53F8\u7F16\u7801/\u540D\u79F0</blockquote><h4${_scopeId}>\u5F39\u7A974\uFF1A\u6CD5\u4EBA\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>1001</td><td${_scopeId}>\u8BE5\u7ECF\u9500\u5546\u4E0B\u7684\u6CD5\u4EBA</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>2001</td><td${_scopeId}>\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u6CD5\u4EBA</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2LOV\u7F16\u7801\uFF1A<code${_scopeId}>MBO.DISTRIBUTOR_COMPANY_LEGAL_VO</code>\uFF08\u67E5\u627E\u6807\u5FD7flag=9\uFF09</blockquote>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u7ECF\u9500\u5546\u9009\u62E9\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "custCode"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, '"C001"'),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u7ECF\u9500\u5546")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_ID, CUST_CODE, CUST_NAME, SHORT_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_ORG "),
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
          ]),
          createVNode("h4", null, "\u5F39\u7A972\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "tradingCompanyId"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "2001"),
                createVNode("td", null, "\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\u7684\u4EA4\u6613\u516C\u53F8")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_ID, TRADING_COMPANY_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_ID, LEGAL_ENTITY_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_TRADING_COMPANY "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{custId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u5F39\u7A973\uFF1A\u4F59\u989D\u8D26\u6237\u9009\u62E9\uFF08\u5355\u9009\uFF09"),
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
                createVNode("td", null, "tradingCompanyId"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "2001"),
                createVNode("td", null, "\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u4F59\u989D\u8D26\u6237")
              ])
            ])
          ]),
          createVNode("blockquote", null, "\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3select-account\uFF09\uFF1A"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ACCOUNT_ID, ACCOUNT_NAME, CAPITAL_POOL "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAPITAL_ACCOUNT ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
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
          ]),
          createVNode("h4", null, "\u5F39\u7A973\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09"),
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
                createVNode("td", null, "customerId"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "1001"),
                createVNode("td", null, "\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\u7684\u4EA4\u6613\u516C\u53F8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingScope"),
                createVNode("td", null, "\u4EA4\u6613\u8303\u56F4"),
                createVNode("td", null, "\u4EA4\u6613\u8303\u56F4"),
                createVNode("td", null, "1(\u9500\u552E\u4E3B\u4F53)"),
                createVNode("td", null, "\u4EC5\u9500\u552E\u4E3B\u4F53\u7C7B\u578B\u7684\u4EA4\u6613\u516C\u53F8")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createTextVNode("\u67E5\u8BE2LOV\u7F16\u7801\uFF1A"),
            createVNode("code", null, "TRADING_LEGAL_SQL_V"),
            createTextVNode("\uFF08\u67E5\u627E\u6807\u5FD7searchFlag=4\uFF09\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u4EA4\u6613\u516C\u53F8\u7F16\u7801/\u540D\u79F0")
          ]),
          createVNode("h4", null, "\u5F39\u7A974\uFF1A\u6CD5\u4EBA\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09"),
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
                createVNode("td", null, "customerId"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "1001"),
                createVNode("td", null, "\u8BE5\u7ECF\u9500\u5546\u4E0B\u7684\u6CD5\u4EBA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "tradingCompanyId"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "2001"),
                createVNode("td", null, "\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u6CD5\u4EBA")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createTextVNode("\u67E5\u8BE2LOV\u7F16\u7801\uFF1A"),
            createVNode("code", null, "MBO.DISTRIBUTOR_COMPANY_LEGAL_VO"),
            createTextVNode("\uFF08\u67E5\u627E\u6807\u5FD7flag=9\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u652F\u6301\u660E\u7EC6\u5BFC\u5165\uFF08FrontImport\u7EC4\u4EF6\uFF09\uFF0C\u901A\u8FC7&quot;\u660E\u7EC6\u5BFC\u5165&quot;\u6309\u94AE\u5BFC\u5165\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u884C\u3002\u5BFC\u5165\u524D\u7F6E\u6821\u9A8C\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08capitalType\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002\u5BFC\u5165\u65F6\u81EA\u52A8\u53BB\u91CD\uFF08\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801\u7EC4\u5408\u5224\u65AD\uFF09\uFF0C\u5DF2\u5B58\u5728\u6570\u636E\u8DF3\u8FC7\u4E0D\u5BFC\u5165\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, '\u672C\u9875\u9762\u652F\u6301\u660E\u7EC6\u5BFC\u5165\uFF08FrontImport\u7EC4\u4EF6\uFF09\uFF0C\u901A\u8FC7"\u660E\u7EC6\u5BFC\u5165"\u6309\u94AE\u5BFC\u5165\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u884C\u3002\u5BFC\u5165\u524D\u7F6E\u6821\u9A8C\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08capitalType\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002\u5BFC\u5165\u65F6\u81EA\u52A8\u53BB\u91CD\uFF08\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801\u7EC4\u5408\u5224\u65AD\uFF09\uFF0C\u5DF2\u5B58\u5728\u6570\u636E\u8DF3\u8FC7\u4E0D\u5BFC\u5165\u3002')
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u589E</td><td${_scopeId}>\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u6253\u5F00\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u7533\u8BF7\u4FE1\u606F</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save\u63A5\u53E3\u4FDD\u5B58\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u53D1\u8D77OA\u5BA1\u6279</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save-and-submit\u63A5\u53E3\u53D1\u8D77\u5BA1\u6279</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u7533\u8BF7\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u672A\u63D0\u4EA4\u7684\u8BB0\u5F55(AUDIT_STAT=NEW/\u7A7A)</td><td${_scopeId}>\u8C03\u7528remove\u63A5\u53E3\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u7533\u8BF7\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528search\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5217\u8868\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528export\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u770B</td><td${_scopeId}>\u67E5\u770B\u7533\u8BF7\u5355\u8BE6\u60C5</td><td${_scopeId}>\u5217\u8868\u9875\u884C</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u53EA\u8BFB\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u7F16\u8F91\u7533\u8BF7\u5355</td><td${_scopeId}>\u5217\u8868\u9875\u884C</td><td${_scopeId}>RUN/APPROVED/SUSPEND/RETURN\u72B6\u6001\u5916\u53EF\u7528</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u660E\u7EC6\u5BFC\u5165</td><td${_scopeId}>\u6279\u91CF\u5BFC\u5165\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528import-lines\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u6A21\u677F\u4E0B\u8F7D</td><td${_scopeId}>\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u4E0B\u8F7D\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u5BFC\u5165\u6A21\u677F</td></tr><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA(\u660E\u7EC6\u884C)</td><td${_scopeId}>\u65B0\u589E\u7A7A\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u5728\u8868\u683C\u672B\u5C3E\u65B0\u589E\u4E00\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664(\u660E\u7EC6\u884C)</td><td${_scopeId}>\u5220\u9664\u9009\u4E2D\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001\u4E14\u9009\u4E2D\u884C</td><td${_scopeId}>\u5220\u9664\u9009\u4E2D\u7684\u660E\u7EC6\u884C</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u589E\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6253\u5F00\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9875\u9762</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3A\u7533\u8BF7\u4EBA\uFF0C\u5F53\u524D\u65F6\u95F4\u4E3A\u7533\u8BF7\u65F6\u95F4</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1A\u65E0\uFF0C\u4EC5\u524D\u7AEF\u64CD\u4F5C</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u7F16\u8F91\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5934\u4FE1\u606F\u548C\u884C\u4FE1\u606F</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4FDD\u5B58\u5230SA_POLICY_SPECIAL_HEADER\u548CSA_POLICY_SPECIAL_LINE</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/sa-policy-special-headers/save</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_LINE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE3\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u7F16\u8F91\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5148\u6267\u884C\u4FDD\u5B58\u6821\u9A8C</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4FDD\u5B58\u6570\u636E\u5230SA_POLICY_SPECIAL_HEADER</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3ARUN</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/sa-policy-special-headers/save-and-submit</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE4\uFF1A\u5220\u9664\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u672A\u63D0\u4EA4\u7684\u8BB0\u5F55\uFF08AUDIT_STAT\u4E3ANEW\u6216null\uFF09</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5355\u636E\u72B6\u6001\u4E3A\u672A\u63D0\u4EA4</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5220\u9664SA_POLICY_SPECIAL_HEADER\u548CSA_POLICY_SPECIAL_LINE\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/sa-policy-special-headers/remove</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
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
                createVNode("td", null, "\u65B0\u589E"),
                createVNode("td", null, "\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u6253\u5F00\u65B0\u5EFA\u9875\u9762")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u7533\u8BF7\u4FE1\u606F"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528save\u63A5\u53E3\u4FDD\u5B58\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u53D1\u8D77OA\u5BA1\u6279"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528save-and-submit\u63A5\u53E3\u53D1\u8D77\u5BA1\u6279")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u7533\u8BF7\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u672A\u63D0\u4EA4\u7684\u8BB0\u5F55(AUDIT_STAT=NEW/\u7A7A)"),
                createVNode("td", null, "\u8C03\u7528remove\u63A5\u53E3\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2"),
                createVNode("td", null, "\u67E5\u8BE2\u7533\u8BF7\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528search\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u5217\u8868\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528export\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u770B"),
                createVNode("td", null, "\u67E5\u770B\u7533\u8BF7\u5355\u8BE6\u60C5"),
                createVNode("td", null, "\u5217\u8868\u9875\u884C"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\u53EA\u8BFB\u6A21\u5F0F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u7F16\u8F91\u7533\u8BF7\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875\u884C"),
                createVNode("td", null, "RUN/APPROVED/SUSPEND/RETURN\u72B6\u6001\u5916\u53EF\u7528"),
                createVNode("td", null, "\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91\u6A21\u5F0F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u660E\u7EC6\u5BFC\u5165"),
                createVNode("td", null, "\u6279\u91CF\u5BFC\u5165\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528import-lines\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6A21\u677F\u4E0B\u8F7D"),
                createVNode("td", null, "\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u4E0B\u8F7D\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u5BFC\u5165\u6A21\u677F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65B0\u5EFA(\u660E\u7EC6\u884C)"),
                createVNode("td", null, "\u65B0\u589E\u7A7A\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u5728\u8868\u683C\u672B\u5C3E\u65B0\u589E\u4E00\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664(\u660E\u7EC6\u884C)"),
                createVNode("td", null, "\u5220\u9664\u9009\u4E2D\u660E\u7EC6\u884C"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001\u4E14\u9009\u4E2D\u884C"),
                createVNode("td", null, "\u5220\u9664\u9009\u4E2D\u7684\u660E\u7EC6\u884C")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u65B0\u589E\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6253\u5F00\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9875\u9762"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3A\u7533\u8BF7\u4EBA\uFF0C\u5F53\u524D\u65F6\u95F4\u4E3A\u7533\u8BF7\u65F6\u95F4"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1A\u65E0\uFF0C\u4EC5\u524D\u7AEF\u64CD\u4F5C")
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u7F16\u8F91\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7F16\u8F91\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5934\u4FE1\u606F\u548C\u884C\u4FE1\u606F"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4FDD\u5B58\u5230SA_POLICY_SPECIAL_HEADER\u548CSA_POLICY_SPECIAL_LINE"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/sa-policy-special-headers/save")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_LINE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u7F16\u8F91\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7F16\u8F91\u72B6\u6001")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5148\u6267\u884C\u4FDD\u5B58\u6821\u9A8C"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4FDD\u5B58\u6570\u636E\u5230SA_POLICY_SPECIAL_HEADER"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B"),
            createVNode("li", null, "\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3ARUN"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/sa-policy-special-headers/save-and-submit")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u5220\u9664\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u672A\u63D0\u4EA4\u7684\u8BB0\u5F55\uFF08AUDIT_STAT\u4E3ANEW\u6216null\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6821\u9A8C\u5355\u636E\u72B6\u6001\u4E3A\u672A\u63D0\u4EA4"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5220\u9664SA_POLICY_SPECIAL_HEADER\u548CSA_POLICY_SPECIAL_LINE\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/sa-policy-special-headers/remove")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{id} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u5173\u8054\u660E\u786E\u7ECF\u9500\u5546</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7ECF\u9500\u5546ID\u4E0D\u4E3A\u7A7A</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C2\uFF1A\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0 \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u91D1\u989D\u6709\u6548</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u5927\u4E8E0</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u6821\u9A8C3\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u5173\u8054\u660E\u786E\u4EA4\u6613\u516C\u53F8</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u4EA4\u6613\u516C\u53F8ID\u4E0D\u4E3A\u7A7A</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u5173\u8054\u660E\u786E\u7ECF\u9500\u5546")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7ECF\u9500\u5546ID\u4E0D\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_ID "),
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
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0 \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u91D1\u989D\u6709\u6548")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A \u2014\u2014 \u786E\u4FDD\u7533\u8BF7\u5173\u8054\u660E\u786E\u4EA4\u6613\u516C\u53F8")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u65F6\u6821\u9A8C\u4EA4\u6613\u516C\u53F8ID\u4E0D\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1Atoast\u63D0\u9192")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_ID "),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u4FDD\u5B58\u6821\u9A8C\u5168\u90E8\u901A\u8FC7 \u2014\u2014 \u786E\u4FDD\u63D0\u4EA4\u524D\u6570\u636E\u5B8C\u6574\u6709\u6548</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u524D\u5148\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\u5168\u90E8\u89C4\u5219</p><p${_scopeId}>- \u7B2C2\u70B9\uFF1A\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.APPLY_AMT, C.CAPITAL_POOL </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H, CAPITAL_ACCOUNT C</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.EXT_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u4FDD\u5B58\u6821\u9A8C\u5168\u90E8\u901A\u8FC7 \u2014\u2014 \u786E\u4FDD\u63D0\u4EA4\u524D\u6570\u636E\u5B8C\u6574\u6709\u6548")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u524D\u5148\u6267\u884C\u4FDD\u5B58\u6821\u9A8C\u5168\u90E8\u89C4\u5219"),
          createVNode("p", null, "- \u7B2C2\u70B9\uFF1A\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, "\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID, H.APPLY_AMT, C.CAPITAL_POOL ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER H, CAPITAL_ACCOUNT C")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.EXT_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.APPLY_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CAPITAL_POOL;")
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
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u65B0\u5EFA \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 \u5DF2\u4FDD\u5B58(NEW) \u2500\u2500\u4FDD\u5B58\u5E76\u63D0\u4EA4\u2500\u2500\u2192 \u5BA1\u6279\u4E2D(RUN) \u2500\u2500OA\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 \u5DF2\u5BA1\u6838(APPROVED)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                              \u2502</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                              \u2514\u2500\u2500OA\u5BA1\u6279\u62D2\u7EDD\u2500\u2500\u2192 \u5DF2\u62D2\u7EDD(REJECTED)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>NEW</td><td${_scopeId}>\u65B0\u5EFA/\u5DF2\u4FDD\u5B58\u672A\u63D0\u4EA4</td><td${_scopeId}>\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\u3001\u5220\u9664</td></tr><tr${_scopeId}><td${_scopeId}>RUN</td><td${_scopeId}>\u5DF2\u63D0\u4EA4OA\u5BA1\u6279\u4E2D</td><td${_scopeId}>\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>APPROVED</td><td${_scopeId}>OA\u5BA1\u6279\u901A\u8FC7</td><td${_scopeId}>\u67E5\u770B</td></tr><tr${_scopeId}><td${_scopeId}>REJECTED</td><td${_scopeId}>OA\u5BA1\u6279\u62D2\u7EDD</td><td${_scopeId}>\u4FEE\u6539\u3001\u91CD\u65B0\u63D0\u4EA4</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u65B0\u5EFA \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 \u5DF2\u4FDD\u5B58(NEW) \u2500\u2500\u4FDD\u5B58\u5E76\u63D0\u4EA4\u2500\u2500\u2192 \u5BA1\u6279\u4E2D(RUN) \u2500\u2500OA\u5BA1\u6279\u901A\u8FC7\u2500\u2500\u2192 \u5DF2\u5BA1\u6838(APPROVED)")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                              \u2502")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                              \u2514\u2500\u2500OA\u5BA1\u6279\u62D2\u7EDD\u2500\u2500\u2192 \u5DF2\u62D2\u7EDD(REJECTED)")
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
                createVNode("td", null, "NEW"),
                createVNode("td", null, "\u65B0\u5EFA/\u5DF2\u4FDD\u5B58\u672A\u63D0\u4EA4"),
                createVNode("td", null, "\u7F16\u8F91\u3001\u4FDD\u5B58\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\u3001\u5220\u9664")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RUN"),
                createVNode("td", null, "\u5DF2\u63D0\u4EA4OA\u5BA1\u6279\u4E2D"),
                createVNode("td", null, "\u65E0\uFF08\u7B49\u5F85\u5BA1\u6279\u7ED3\u679C\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPROVED"),
                createVNode("td", null, "OA\u5BA1\u6279\u901A\u8FC7"),
                createVNode("td", null, "\u67E5\u770B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "REJECTED"),
                createVNode("td", null, "OA\u5BA1\u6279\u62D2\u7EDD"),
                createVNode("td", null, "\u4FEE\u6539\u3001\u91CD\u65B0\u63D0\u4EA4")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ASA_POLICY_SPECIAL_HEADER\uFF08\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5934\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DATETIME</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>UPDATOR</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u66F4\u65B0\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u4FEE\u6539\u65F6\u81EA\u52A8\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>UPDATE_TIME</td><td${_scopeId}>DATETIME</td><td${_scopeId}>\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u4FEE\u6539\u65F6\u81EA\u52A8\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>CHECKER</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5BA1\u6838\u4EBA</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CHECK_TIME</td><td${_scopeId}>DATETIME</td><td${_scopeId}>\u5BA1\u6838\u65F6\u95F4</td><td${_scopeId}>-</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u65F6\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>STAT</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u5DF2\u5F03\u7528\uFF0C\u4F7F\u7528AUDIT_STAT</td></tr><tr${_scopeId}><td${_scopeId}>WFID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u6D41\u7A0BID</td><td${_scopeId}>-</td><td${_scopeId}>\u63D0\u4EA4\u65F6\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>WFFLAG</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u6D41\u7A0B\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>CUST_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_AMT</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>AMOUNT</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7EC4\u7EC7ID/\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>DOCID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5173\u8054\u9644\u4EF6ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4E0A\u4F20\u9644\u4EF6\u65F6\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>CUST_FULL_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801+\u540D\u79F0\u62FC\u63A5</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u62FC\u63A5</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ACCOUNT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>\u9009\u62E9\u4F59\u989D\u8D26\u6237\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>EXT_ACCOUNT_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237ID</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u4F59\u989D\u8D26\u6237\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CAPITAL_POOL</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>CAPITAL_TYPE</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>SHORT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u7B80\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C</td><td${_scopeId}>-</td><td${_scopeId}>\u8BCD\u6C47epm.division</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u6CD5\u4EBAID</td><td${_scopeId}>-</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>SOURCE_BILL_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u6765\u6E90\u5355\u636EID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u6765\u6E90\u5355\u636E</td></tr><tr${_scopeId}><td${_scopeId}>SOURCE_BILL_TYPE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u5B57\u5178fin_fee_bill_type</td></tr><tr${_scopeId}><td${_scopeId}>CALLBACK_SOURCE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5916\u90E8\u5BA1\u6279\u56DE\u8C03\u6765\u6E90</td><td${_scopeId}>-</td><td${_scopeId}>\u679A\u4E3ECallbackSourceEnum</td></tr></tbody></table>`);
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
                createVNode("td", null, "POLICY_SPECIAL_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POLICY_SPECIAL_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u8865\u8D34\u5355\u53F7"),
                createVNode("td", null, "\u8865\u8D34\u5355\u53F7"),
                createVNode("td", null, "\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u7533\u8BF7\u4EBA"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "DATETIME"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u7533\u8BF7\u65F6\u95F4"),
                createVNode("td", null, "\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATOR"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4FEE\u6539\u65F6\u81EA\u52A8\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "UPDATE_TIME"),
                createVNode("td", null, "DATETIME"),
                createVNode("td", null, "\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4FEE\u6539\u65F6\u81EA\u52A8\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECKER"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5BA1\u6838\u4EBA"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CHECK_TIME"),
                createVNode("td", null, "DATETIME"),
                createVNode("td", null, "\u5BA1\u6838\u65F6\u95F4"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u65F6\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STAT"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5DF2\u5F03\u7528\uFF0C\u4F7F\u7528AUDIT_STAT")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u6D41\u7A0BID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WFFLAG"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u6D41\u7A0B\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "APPLY_AMT"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AMOUNT"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5BA1\u6838\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6838\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u7EC4\u7EC7ID/\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u9009\u62E9\u4E8B\u4E1A\u90E8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DOCID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5173\u8054\u9644\u4EF6ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4E0A\u4F20\u9644\u4EF6\u65F6\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_FULL_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801+\u540D\u79F0\u62FC\u63A5"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u62FC\u63A5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8ID"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ACCOUNT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237"),
                createVNode("td", null, "\u9009\u62E9\u4F59\u989D\u8D26\u6237\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "EXT_ACCOUNT_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u4F59\u989D\u8D26\u6237\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAPITAL_POOL"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CAPITAL_TYPE"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SHORT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7B80\u79F0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u8BCD\u6C47epm.division")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LEGAL_ENTITY_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u6CD5\u4EBAID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LEGAL_ENTITY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LEGAL_ENTITY_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u6CD5\u4EBA"),
                createVNode("td", null, "\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AUDIT_STAT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "OA\u5BA1\u6838\u72B6\u6001"),
                createVNode("td", null, "\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SOURCE_BILL_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u6765\u6E90\u5355\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SOURCE_BILL_TYPE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5B57\u5178fin_fee_bill_type")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CALLBACK_SOURCE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5916\u90E8\u5BA1\u6279\u56DE\u8C03\u6765\u6E90"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u679A\u4E3ECallbackSourceEnum")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1ASA_POLICY_SPECIAL_LINE\uFF08\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u660E\u7EC6\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_LINE_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u660E\u7EC6\u884C\u4E3B\u952E</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5173\u8054\u5934\u8868ID</td><td${_scopeId}>-</td><td${_scopeId}>FK \u2192 SA_POLICY_SPECIAL_HEADER</td></tr></tbody></table>`);
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
                createVNode("td", null, "POLICY_SPECIAL_LINE_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u660E\u7EC6\u884C\u4E3B\u952E"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POLICY_SPECIAL_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u5173\u8054\u5934\u8868ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "FK \u2192 SA_POLICY_SPECIAL_HEADER")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF0C\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u586B\u5199\u4E860\u6216\u8D1F\u6570\uFF0C\u8F93\u5165\u6B63\u786E\u91D1\u989D</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\uFF0C\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u5927\u4E8E\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF0C\u8C03\u6574\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9OA\u5BA1\u6279\u6D41\u7A0B\uFF0C\u9009\u62E9\u6D41\u7A0B\u540E\u91CD\u65B0\u63D0\u4EA4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E</td><td${_scopeId}>\u5220\u9664\u65F6</td><td${_scopeId}>\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\u5C31\u70B9\u51FB\u5220\u9664\uFF0C\u9009\u4E2D\u8BB0\u5F55\u540E\u91CD\u8BD5</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F</td><td${_scopeId}>\u4FDD\u5B58/\u67E5\u8BE2\u8D44\u91D1\u6C60\u65F6</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u672A\u914D\u7F6E\u4E8B\u4E1A\u90E8\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6\u5931\u8D25\uFF0C\u91CD\u65B0\u767B\u5F55\u540E\u91CD\u8BD5</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001\u4E0D\u5141\u8BB8\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u65F6</td><td${_scopeId}>\u9009\u4E2D\u7684\u5355\u636E\u5DF2\u63D0\u4EA4\u5BA1\u6279\uFF08AUDIT_STAT\u4E3ARUN/APPROVED\uFF09\uFF0C\u4E0D\u5141\u8BB8\u5220\u9664</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u8C03\u7528\u63A5\u53E3\u65F6</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u8FD0\u7EF4</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u65B0\u5EFA/\u7F16\u8F91\u9875\u672A\u9009\u62E9\u7ECF\u9500\u5546\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u63A5\u53E3sa-policy-special-headers/save\u5728\u5199\u5165SA_POLICY_SPECIAL_HEADER\u524D\u6821\u9A8CCUST_ID\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u662F\u7533\u8BF7\u5173\u8054\u8D44\u91D1\u6C60\u548C\u6CD5\u4EBA\u7684\u524D\u7F6E\u6761\u4EF6\uFF0C\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u540E\u7EED\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u65E0\u6CD5\u5E26\u51FA\uFF0C\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u4E5F\u65E0\u4ECE\u6267\u884C\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_ID, CUST_NAME, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u7533\u8BF7\u91D1\u989D\u8F93\u5165\u6846\u586B\u51990\u3001\u8D1F\u6570\u6216\u7559\u7A7A\u540E\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u6821\u9A8CAPPLY_AMT &gt; 0\uFF0C\u56E0\u8865\u8D34\u7533\u8BF7\u4EE3\u8868\u5B9E\u9645\u5411\u7ECF\u9500\u5546\u53D1\u653E\u7684\u8865\u8D34\u91D1\u989D\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u30020\u6216\u8D1F\u6570\u65E0\u4E1A\u52A1\u610F\u4E49\uFF0C\u4E14\u4F1A\u5BFC\u81F4\u540E\u7EED\u8D44\u91D1\u6C60\u6263\u51CF\u5F02\u5E38\uFF08\u6263\u51CF0\u6216\u53CD\u5411\u589E\u52A0\u4F59\u989D\uFF09\u3002\u6821\u9A8C\u5728Service\u5C42\u6267\u884C\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u62E9\u4E86\u7ECF\u9500\u5546\u4F46\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4EA4\u6613\u516C\u53F8\u662F\u5173\u8054\u6CD5\u4EBA\uFF08LEGAL_ENTITY_ID\uFF09\u548C\u4F59\u989D\u8D26\u6237\uFF08EXT_ACCOUNT_ID\uFF09\u7684\u6865\u6881\uFF0C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5C06\u5BFC\u81F4\u6CD5\u4EBA\u4FE1\u606F\u65E0\u6CD5\u5E26\u51FA\u3001select-account\u63A5\u53E3\u65E0\u6CD5\u67E5\u8BE2\u4F59\u989D\u8D26\u6237\u3001\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u65E0\u6CD5\u6267\u884C\u3002\u6821\u9A8CTRADING_COMPANY_ID\u975E\u7A7A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, TRADING_COMPANY_ID, TRADING_COMPANY_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\uFF0C\u63D0\u4EA4\u6821\u9A8C\u53D1\u73B0APPLY_AMT &gt; \u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF08CAPITAL_POOL\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u65F6\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u7684CAPITAL_POOL\u5F53\u524D\u4F59\u989D\uFF0C\u6821\u9A8CAPPLY_AMT &lt;= CAPITAL_POOL\u3002\u8D85\u51FA\u4F59\u989D\u610F\u5473\u7740\u8865\u8D34\u65E0\u5145\u8DB3\u8D44\u91D1\u6765\u6E90\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u8D1F\u6570\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u53D1\u8D77\uFF0C\u9700\u7528\u6237\u8C03\u51CF\u7533\u8BF7\u91D1\u989D\u6216\u5148\u8865\u5145\u8D44\u91D1\u6C60</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, H.CUST_NAME, H.APPLY_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         C.ACCOUNT_NAME, C.CAPITAL_POOL, (H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8D85\u989D\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAPITAL_ACCOUNT C </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.EXT_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.ACCOUNT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\u4F46\u672A\u9009\u62E9OA\u5BA1\u6279\u6D41\u7A0B\uFF08flowCode\u4E3A\u7A7A\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u63A5\u53E3saveAndSubmit\uFF08SaPolicySpecialHeaderServiceImpl.java:226\uFF09\u5728\u6267\u884C\u4FDD\u5B58\u524D\u6821\u9A8CflowCode\u975E\u7A7A\uFF0C\u82E5StringUtils.isEmpty(dto.getFlowCode())\u5219\u629B\u51FACommonException(&quot;\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01&quot;)\u3002flowCode\u662F\u53D1\u8D77OA\u5DE5\u4F5C\u6D41\uFF08workFlowStart\uFF09\u7684\u5FC5\u8981\u53C2\u6570\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4WorkflowClient\u65E0\u6CD5\u542F\u52A8\u6D41\u7A0B\u5B9E\u4F8B\u3002\u6821\u9A8C\u5728Service\u5C42\u524D\u7F6E\u62E6\u622A\uFF0C\u963B\u65ADOA\u6D41\u7A0B\u53D1\u8D77\u3002\u9700\u7528\u6237\u5728\u63D0\u4EA4\u524D\u9009\u62E9\u5BF9\u5E94\u7684\u5BA1\u6279\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u53EF\u7528\u7684OA\u6D41\u7A0B\u914D\u7F6E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WORKFLOW_CODE, WORKFLOW_NAME, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_WORKFLOW_DEF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> WORKFLOW_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>SA_POLICY_SPECIAL%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u5217\u8868\u9875\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\u76F4\u63A5\u70B9\u51FB\u5220\u9664\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5220\u9664\u63A5\u53E3remove\uFF08SaPolicySpecialHeaderServiceImpl.java:252\uFF09\u6821\u9A8C\u5165\u53C2\u5217\u8868\u975E\u7A7A\uFF0C\u82E5CollectionUtils.isEmpty(cmContractPaymentApplyList)\u5219\u629B\u51FACommonException(&quot;\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01&quot;)\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u524D\u7AEF\u672A\u9009\u4E2D\u884C\u5C31\u8C03\u7528\u5220\u9664\u63A5\u53E3\uFF0C\u8BF7\u6C42\u4F53\u4E3A\u7A7A\u5217\u8868\uFF1B(2)\u524D\u7AEF\u9009\u4E2D\u884C\u4F46policySpecialId\u672A\u6B63\u786E\u4F20\u9012\u5230\u8BF7\u6C42\u53C2\u6570\u3002\u6821\u9A8C\u5728Service\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u5220\u9664\u64CD\u4F5C\u3002\u9700\u9009\u4E2D\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55\u540E\u518D\u70B9\u51FB\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u65B0\u5EFA\u6216\u4FDD\u5B58\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u65F6\uFF0CepmDivisionService.getCurrentDivision()\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u751F\u6210\u5355\u636E\u7F16\u53F7generateCode\uFF08SaPolicySpecialHeaderServiceImpl.java:177\uFF09\u548C\u67E5\u8BE2\u8D44\u91D1\u6C60selectCapital\uFF08SaPolicySpecialHeaderServiceImpl.java:279\uFF09\u5747\u8C03\u7528epmDivisionService.getCurrentDivision()\u83B7\u53D6\u5F53\u524D\u4E8B\u4E1A\u90E8\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FACommonException(&quot;\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F&quot;)\u3002\u6839\u56E0\u6709\u4E09\uFF1A(1)\u5F53\u524D\u7528\u6237\u672A\u914D\u7F6E\u9ED8\u8BA4\u4E8B\u4E1A\u90E8\uFF08HPFM_DIVISION_USER\u5173\u8054\u7F3A\u5931\uFF09\uFF1B(2)\u7528\u6237\u4E0A\u4E0B\u6587\u4E2DdivisionId\u672A\u6B63\u786E\u8BBE\u7F6E\uFF08\u767B\u5F55\u6001\u5F02\u5E38\uFF09\uFF1B(3)\u4E8B\u4E1A\u90E8\u914D\u7F6E\u5DF2\u7981\u7528\u6216\u5220\u9664\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u4E3A\u5F53\u524D\u7528\u6237\u914D\u7F6E\u4E8B\u4E1A\u90E8</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8\u914D\u7F6E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DU.USER_ID, DU.DIVISION_ID, D.ENT_NAME, D.ENABLED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_DIVISION_USER DU</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_DIVISION D </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DU.DIVISION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> D.ENT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DU.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{userId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> D.ENABLED </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u751F\u6210\u5355\u636E\u7F16\u53F7\u65F6\uFF0CDetailsHelper.getUserDetails()\u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u751F\u6210\u5355\u636E\u7F16\u53F7generateCode\uFF08SaPolicySpecialHeaderServiceImpl.java:180\uFF09\u8C03\u7528DetailsHelper.getUserDetails()\u83B7\u53D6\u7528\u6237\u4E0A\u4E0B\u6587\uFF0C\u82E5ObjectUtils.isEmpty(customUserDetails)\u5219\u629B\u51FACommonException(&quot;\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F&quot;)\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u767B\u5F55\u6001\u8FC7\u671F\u6216Token\u5931\u6548\uFF0C\u4E0A\u4E0B\u6587\u672A\u6B63\u786E\u6CE8\u5165\uFF1B(2)\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u672A\u4F20\u9012\uFF08\u5F02\u6B65\u7EBF\u7A0B\u6216Feign\u8C03\u7528\u573A\u666F\u4E22\u5931UserDetails\uFF09\u3002\u9700\u7528\u6237\u91CD\u65B0\u767B\u5F55\u540E\u91CD\u8BD5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7528\u6237\u8D26\u53F7\u72B6\u6001\uFF08\u8868\u540D\u4EE5HZERO IAM\u5B9E\u9645\u8868\u4E3A\u51C6\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, LOGIN_NAME, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, LAST_LOGIN_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IAM_USER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{userId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u5355\u636E\u72B6\u6001\u4E0D\u5141\u8BB8\u5220\u9664</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u4E2D\u5DF2\u63D0\u4EA4\u5BA1\u6279\uFF08AUDIT_STAT\u4E3ARUN\uFF09\u6216\u5DF2\u5BA1\u6279\u901A\u8FC7\uFF08AUDIT_STAT\u4E3AAPPROVED\uFF09\u7684\u5355\u636E\u70B9\u51FB\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5220\u9664\u63A5\u53E3remove\uFF08SaPolicySpecialHeaderServiceImpl.java:250\uFF09\u5F53\u524D\u5B9E\u73B0\u76F4\u63A5\u6309POLICY_SPECIAL_ID\u6279\u91CF\u5220\u9664\u5934\u8868\u548C\u884C\u8868\uFF0C\u672A\u663E\u5F0F\u6821\u9A8C\u5355\u636E\u72B6\u6001\u3002\u4F46\u6839\u636E\u4E1A\u52A1\u89C4\u5219\uFF0C\u4EC5AUDIT_STAT\u4E3ANEW\u6216null\u7684\u672A\u63D0\u4EA4\u5355\u636E\u5141\u8BB8\u5220\u9664\uFF0C\u5DF2\u63D0\u4EA4OA\u5BA1\u6279\u7684\u5355\u636E\u5220\u9664\u5C06\u5BFC\u81F4OA\u6D41\u7A0B\u5B9E\u4F8B\u6B8B\u7559\uFF08WFID/HZ_INSTANCE_ID\u6307\u5411\u4E0D\u5B58\u5728\u7684\u4E1A\u52A1\u5355\u636E\uFF09\u3002\u524D\u7AEF\u5E94\u9650\u5236\u4EC5\u672A\u63D0\u4EA4\u5355\u636E\u53EF\u52FE\u9009\u5220\u9664\uFF0C\u82E5\u7ED5\u8FC7\u524D\u7AEF\u76F4\u63A5\u8C03\u7528\u63A5\u53E3\u9700\u540E\u7AEF\u8865\u5145\u72B6\u6001\u6821\u9A8C\u3002\u9700\u5148\u64A4\u56DEOA\u5BA1\u6279\u518D\u5220\u9664</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, AUDIT_STAT, WFID, HZ_INSTANCE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>CASE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>THEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5DF2\u63D0\u4EA4/\u5DF2\u5BA1\u6279-\u4E0D\u5141\u8BB8\u5220\u9664</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ELSE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u5141\u8BB8\u5220\u9664</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>END</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5220\u9664\u5224\u65AD</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{id1}, #{id2});</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u4FDD\u5B58\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\u3001\u5220\u9664\u6216\u67E5\u8BE2\uFF0C\u524D\u7AEFaxios\u8BF7\u6C42\u629B\u51FA\u7F51\u7EDC\u5F02\u5E38\u6216\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8C03\u7528/v1/{organizationId}/sa-policy-special-headers/*\u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u56E0\u540E\u7AEFae-business\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u5173\u8DEF\u7531\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u6216\u8BF7\u6C42\u8D85\u65F6\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u6839\u56E0\u6709\u56DB\uFF1A(1)ae-business\u5FAE\u670D\u52A1\u672A\u6CE8\u518C\u5230Nacos\u6216\u5DF2\u5B95\u673A\uFF1B(2)OA\u5BA1\u6279\u7CFB\u7EDF\uFF08workFlowStart\uFF09\u8C03\u7528\u8D85\u65F6\u5BFC\u81F4\u4FDD\u5B58\u5E76\u63D0\u4EA4\u63A5\u53E3\u6574\u4F53\u8D85\u65F6\uFF1B(3)EBS\u8D44\u91D1\u6C60\u67E5\u8BE2\uFF08select-capital\uFF09\u63A5\u53E3\u8D85\u65F6\uFF1B(4)\u7F51\u7EDC\u4E2D\u65AD\u6216\u9632\u706B\u5899\u62E6\u622A\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u786E\u8BA4ae-business\u3001OA\u3001EBS\u670D\u52A1\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5355\u636E\u91CF\u53CAOA\u6D41\u7A0B\u72B6\u6001\u5206\u5E03</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5355\u636E\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT;</span></span>
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF0C\u9009\u62E9\u7ECF\u9500\u5546\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u586B\u5199\u4E860\u6216\u8D1F\u6570\uFF0C\u8F93\u5165\u6B63\u786E\u91D1\u989D"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\uFF0C\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u5927\u4E8E\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF0C\u8C03\u6574\u7533\u8BF7\u91D1\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9OA\u5BA1\u6279\u6D41\u7A0B\uFF0C\u9009\u62E9\u6D41\u7A0B\u540E\u91CD\u65B0\u63D0\u4EA4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E"),
                createVNode("td", null, "\u5220\u9664\u65F6"),
                createVNode("td", null, "\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\u5C31\u70B9\u51FB\u5220\u9664\uFF0C\u9009\u4E2D\u8BB0\u5F55\u540E\u91CD\u8BD5"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F"),
                createVNode("td", null, "\u4FDD\u5B58/\u67E5\u8BE2\u8D44\u91D1\u6C60\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u672A\u914D\u7F6E\u4E8B\u4E1A\u90E8\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u7528\u6237\u4E0A\u4E0B\u6587\u83B7\u53D6\u5931\u8D25\uFF0C\u91CD\u65B0\u767B\u5F55\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u72B6\u6001\u4E0D\u5141\u8BB8\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u65F6"),
                createVNode("td", null, "\u9009\u4E2D\u7684\u5355\u636E\u5DF2\u63D0\u4EA4\u5BA1\u6279\uFF08AUDIT_STAT\u4E3ARUN/APPROVED\uFF09\uFF0C\u4E0D\u5141\u8BB8\u5220\u9664"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u8C03\u7528\u63A5\u53E3\u65F6"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u7A0D\u540E\u91CD\u8BD5\u6216\u8054\u7CFB\u8FD0\u7EF4"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u65B0\u5EFA/\u7F16\u8F91\u9875\u672A\u9009\u62E9\u7ECF\u9500\u5546\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u63A5\u53E3sa-policy-special-headers/save\u5728\u5199\u5165SA_POLICY_SPECIAL_HEADER\u524D\u6821\u9A8CCUST_ID\u975E\u7A7A\u3002\u7ECF\u9500\u5546\u662F\u7533\u8BF7\u5173\u8054\u8D44\u91D1\u6C60\u548C\u6CD5\u4EBA\u7684\u524D\u7F6E\u6761\u4EF6\uFF0C\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u540E\u7EED\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u65E0\u6CD5\u5E26\u51FA\uFF0C\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u4E5F\u65E0\u4ECE\u6267\u884C\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_ID, CUST_NAME, AUDIT_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_NAME "),
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u7533\u8BF7\u91D1\u989D\u8F93\u5165\u6846\u586B\u51990\u3001\u8D1F\u6570\u6216\u7559\u7A7A\u540E\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u6821\u9A8CAPPLY_AMT > 0\uFF0C\u56E0\u8865\u8D34\u7533\u8BF7\u4EE3\u8868\u5B9E\u9645\u5411\u7ECF\u9500\u5546\u53D1\u653E\u7684\u8865\u8D34\u91D1\u989D\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u30020\u6216\u8D1F\u6570\u65E0\u4E1A\u52A1\u610F\u4E49\uFF0C\u4E14\u4F1A\u5BFC\u81F4\u540E\u7EED\u8D44\u91D1\u6C60\u6263\u51CF\u5F02\u5E38\uFF08\u6263\u51CF0\u6216\u53CD\u5411\u589E\u52A0\u4F59\u989D\uFF09\u3002\u6821\u9A8C\u5728Service\u5C42\u6267\u884C\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT, AUDIT_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_AMT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " APPLY_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u9009\u62E9\u4E86\u7ECF\u9500\u5546\u4F46\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4EA4\u6613\u516C\u53F8\u662F\u5173\u8054\u6CD5\u4EBA\uFF08LEGAL_ENTITY_ID\uFF09\u548C\u4F59\u989D\u8D26\u6237\uFF08EXT_ACCOUNT_ID\uFF09\u7684\u6865\u6881\uFF0C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5C06\u5BFC\u81F4\u6CD5\u4EBA\u4FE1\u606F\u65E0\u6CD5\u5E26\u51FA\u3001select-account\u63A5\u53E3\u65E0\u6CD5\u67E5\u8BE2\u4F59\u989D\u8D26\u6237\u3001\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u65E0\u6CD5\u6267\u884C\u3002\u6821\u9A8CTRADING_COMPANY_ID\u975E\u7A7A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, TRADING_COMPANY_ID, TRADING_COMPANY_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_NAME "),
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
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\uFF0C\u63D0\u4EA4\u6821\u9A8C\u53D1\u73B0APPLY_AMT > \u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF08CAPITAL_POOL\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u7684CAPITAL_POOL\u5F53\u524D\u4F59\u989D\uFF0C\u6821\u9A8CAPPLY_AMT <= CAPITAL_POOL\u3002\u8D85\u51FA\u4F59\u989D\u610F\u5473\u7740\u8865\u8D34\u65E0\u5145\u8DB3\u8D44\u91D1\u6765\u6E90\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u8D1F\u6570\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u53D1\u8D77\uFF0C\u9700\u7528\u6237\u8C03\u51CF\u7533\u8BF7\u91D1\u989D\u6216\u5148\u8865\u5145\u8D44\u91D1\u6C60")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, H.CUST_NAME, H.APPLY_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         C.ACCOUNT_NAME, C.CAPITAL_POOL, (H.APPLY_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CAPITAL_POOL) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8D85\u989D\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER H")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAPITAL_ACCOUNT C "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.EXT_ACCOUNT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.ACCOUNT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.APPLY_AMT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CAPITAL_POOL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\u4F46\u672A\u9009\u62E9OA\u5BA1\u6279\u6D41\u7A0B\uFF08flowCode\u4E3A\u7A7A\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u63A5\u53E3saveAndSubmit\uFF08SaPolicySpecialHeaderServiceImpl.java:226\uFF09\u5728\u6267\u884C\u4FDD\u5B58\u524D\u6821\u9A8CflowCode\u975E\u7A7A\uFF0C\u82E5StringUtils.isEmpty(dto.getFlowCode())\u5219\u629B\u51FACommonException("\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01")\u3002flowCode\u662F\u53D1\u8D77OA\u5DE5\u4F5C\u6D41\uFF08workFlowStart\uFF09\u7684\u5FC5\u8981\u53C2\u6570\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4WorkflowClient\u65E0\u6CD5\u542F\u52A8\u6D41\u7A0B\u5B9E\u4F8B\u3002\u6821\u9A8C\u5728Service\u5C42\u524D\u7F6E\u62E6\u622A\uFF0C\u963B\u65ADOA\u6D41\u7A0B\u53D1\u8D77\u3002\u9700\u7528\u6237\u5728\u63D0\u4EA4\u524D\u9009\u62E9\u5BF9\u5E94\u7684\u5BA1\u6279\u6D41\u7A0B')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u53EF\u7528\u7684OA\u6D41\u7A0B\u914D\u7F6E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WORKFLOW_CODE, WORKFLOW_NAME, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_WORKFLOW_DEF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " WORKFLOW_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "SA_POLICY_SPECIAL%"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u5217\u8868\u9875\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\u76F4\u63A5\u70B9\u51FB\u5220\u9664\u6309\u94AE")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u5220\u9664\u63A5\u53E3remove\uFF08SaPolicySpecialHeaderServiceImpl.java:252\uFF09\u6821\u9A8C\u5165\u53C2\u5217\u8868\u975E\u7A7A\uFF0C\u82E5CollectionUtils.isEmpty(cmContractPaymentApplyList)\u5219\u629B\u51FACommonException("\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01")\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u524D\u7AEF\u672A\u9009\u4E2D\u884C\u5C31\u8C03\u7528\u5220\u9664\u63A5\u53E3\uFF0C\u8BF7\u6C42\u4F53\u4E3A\u7A7A\u5217\u8868\uFF1B(2)\u524D\u7AEF\u9009\u4E2D\u884C\u4F46policySpecialId\u672A\u6B63\u786E\u4F20\u9012\u5230\u8BF7\u6C42\u53C2\u6570\u3002\u6821\u9A8C\u5728Service\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u5220\u9664\u64CD\u4F5C\u3002\u9700\u9009\u4E2D\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55\u540E\u518D\u70B9\u51FB\u5220\u9664')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT, AUDIT_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u65B0\u5EFA\u6216\u4FDD\u5B58\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u65F6\uFF0CepmDivisionService.getCurrentDivision()\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u751F\u6210\u5355\u636E\u7F16\u53F7generateCode\uFF08SaPolicySpecialHeaderServiceImpl.java:177\uFF09\u548C\u67E5\u8BE2\u8D44\u91D1\u6C60selectCapital\uFF08SaPolicySpecialHeaderServiceImpl.java:279\uFF09\u5747\u8C03\u7528epmDivisionService.getCurrentDivision()\u83B7\u53D6\u5F53\u524D\u4E8B\u4E1A\u90E8\uFF0C\u82E5\u8FD4\u56DEnull\u5219\u629B\u51FACommonException("\u65E0\u6CD5\u83B7\u4E8B\u4E1A\u90E8\u4FE1\u606F")\u3002\u6839\u56E0\u6709\u4E09\uFF1A(1)\u5F53\u524D\u7528\u6237\u672A\u914D\u7F6E\u9ED8\u8BA4\u4E8B\u4E1A\u90E8\uFF08HPFM_DIVISION_USER\u5173\u8054\u7F3A\u5931\uFF09\uFF1B(2)\u7528\u6237\u4E0A\u4E0B\u6587\u4E2DdivisionId\u672A\u6B63\u786E\u8BBE\u7F6E\uFF08\u767B\u5F55\u6001\u5F02\u5E38\uFF09\uFF1B(3)\u4E8B\u4E1A\u90E8\u914D\u7F6E\u5DF2\u7981\u7528\u6216\u5220\u9664\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u4E3A\u5F53\u524D\u7528\u6237\u914D\u7F6E\u4E8B\u4E1A\u90E8')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8\u914D\u7F6E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DU.USER_ID, DU.DIVISION_ID, D.ENT_NAME, D.ENABLED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_DIVISION_USER DU")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_DIVISION D "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DU.DIVISION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " D.ENT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DU.USER_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{userId} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " D.ENABLED "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u751F\u6210\u5355\u636E\u7F16\u53F7\u65F6\uFF0CDetailsHelper.getUserDetails()\u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u751F\u6210\u5355\u636E\u7F16\u53F7generateCode\uFF08SaPolicySpecialHeaderServiceImpl.java:180\uFF09\u8C03\u7528DetailsHelper.getUserDetails()\u83B7\u53D6\u7528\u6237\u4E0A\u4E0B\u6587\uFF0C\u82E5ObjectUtils.isEmpty(customUserDetails)\u5219\u629B\u51FACommonException("\u65E0\u6CD5\u83B7\u4E0A\u7EBF\u6587\u4FE1\u606F")\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u767B\u5F55\u6001\u8FC7\u671F\u6216Token\u5931\u6548\uFF0C\u4E0A\u4E0B\u6587\u672A\u6B63\u786E\u6CE8\u5165\uFF1B(2)\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u672A\u4F20\u9012\uFF08\u5F02\u6B65\u7EBF\u7A0B\u6216Feign\u8C03\u7528\u573A\u666F\u4E22\u5931UserDetails\uFF09\u3002\u9700\u7528\u6237\u91CD\u65B0\u767B\u5F55\u540E\u91CD\u8BD5')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7528\u6237\u8D26\u53F7\u72B6\u6001\uFF08\u8868\u540D\u4EE5HZERO IAM\u5B9E\u9645\u8868\u4E3A\u51C6\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", LOGIN_NAME, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", LAST_LOGIN_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IAM_USER")
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
          ]),
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u5355\u636E\u72B6\u6001\u4E0D\u5141\u8BB8\u5220\u9664"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u9009\u4E2D\u5DF2\u63D0\u4EA4\u5BA1\u6279\uFF08AUDIT_STAT\u4E3ARUN\uFF09\u6216\u5DF2\u5BA1\u6279\u901A\u8FC7\uFF08AUDIT_STAT\u4E3AAPPROVED\uFF09\u7684\u5355\u636E\u70B9\u51FB\u5220\u9664")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5220\u9664\u63A5\u53E3remove\uFF08SaPolicySpecialHeaderServiceImpl.java:250\uFF09\u5F53\u524D\u5B9E\u73B0\u76F4\u63A5\u6309POLICY_SPECIAL_ID\u6279\u91CF\u5220\u9664\u5934\u8868\u548C\u884C\u8868\uFF0C\u672A\u663E\u5F0F\u6821\u9A8C\u5355\u636E\u72B6\u6001\u3002\u4F46\u6839\u636E\u4E1A\u52A1\u89C4\u5219\uFF0C\u4EC5AUDIT_STAT\u4E3ANEW\u6216null\u7684\u672A\u63D0\u4EA4\u5355\u636E\u5141\u8BB8\u5220\u9664\uFF0C\u5DF2\u63D0\u4EA4OA\u5BA1\u6279\u7684\u5355\u636E\u5220\u9664\u5C06\u5BFC\u81F4OA\u6D41\u7A0B\u5B9E\u4F8B\u6B8B\u7559\uFF08WFID/HZ_INSTANCE_ID\u6307\u5411\u4E0D\u5B58\u5728\u7684\u4E1A\u52A1\u5355\u636E\uFF09\u3002\u524D\u7AEF\u5E94\u9650\u5236\u4EC5\u672A\u63D0\u4EA4\u5355\u636E\u53EF\u52FE\u9009\u5220\u9664\uFF0C\u82E5\u7ED5\u8FC7\u524D\u7AEF\u76F4\u63A5\u8C03\u7528\u63A5\u53E3\u9700\u540E\u7AEF\u8865\u5145\u72B6\u6001\u6821\u9A8C\u3002\u9700\u5148\u64A4\u56DEOA\u5BA1\u6279\u518D\u5220\u9664")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, AUDIT_STAT, WFID, HZ_INSTANCE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "CASE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "RUN"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "THEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5DF2\u63D0\u4EA4/\u5DF2\u5BA1\u6279-\u4E0D\u5141\u8BB8\u5220\u9664"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ELSE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u5141\u8BB8\u5220\u9664"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "END"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5220\u9664\u5224\u65AD")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{id1}, #{id2});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u4FDD\u5B58\u3001\u4FDD\u5B58\u5E76\u63D0\u4EA4\u3001\u5220\u9664\u6216\u67E5\u8BE2\uFF0C\u524D\u7AEFaxios\u8BF7\u6C42\u629B\u51FA\u7F51\u7EDC\u5F02\u5E38\u6216\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8C03\u7528/v1/{organizationId}/sa-policy-special-headers/*\u7CFB\u5217\u63A5\u53E3\u65F6\uFF0C\u56E0\u540E\u7AEFae-business\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u7F51\u5173\u8DEF\u7531\u5F02\u5E38\u3001\u7F51\u7EDC\u4E2D\u65AD\u6216\u8BF7\u6C42\u8D85\u65F6\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u6839\u56E0\u6709\u56DB\uFF1A(1)ae-business\u5FAE\u670D\u52A1\u672A\u6CE8\u518C\u5230Nacos\u6216\u5DF2\u5B95\u673A\uFF1B(2)OA\u5BA1\u6279\u7CFB\u7EDF\uFF08workFlowStart\uFF09\u8C03\u7528\u8D85\u65F6\u5BFC\u81F4\u4FDD\u5B58\u5E76\u63D0\u4EA4\u63A5\u53E3\u6574\u4F53\u8D85\u65F6\uFF1B(3)EBS\u8D44\u91D1\u6C60\u67E5\u8BE2\uFF08select-capital\uFF09\u63A5\u53E3\u8D85\u65F6\uFF1B(4)\u7F51\u7EDC\u4E2D\u65AD\u6216\u9632\u706B\u5899\u62E6\u622A\u3002\u9700\u8054\u7CFB\u8FD0\u7EF4\u786E\u8BA4ae-business\u3001OA\u3001EBS\u670D\u52A1\u72B6\u6001")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5355\u636E\u91CF\u53CAOA\u6D41\u7A0B\u72B6\u6001\u5206\u5E03")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5355\u636E\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT;")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1AOA\u5BA1\u6279\u6D41\u7A0B\u672A\u53D1\u8D77</li><li${_scopeId}>\u539F\u56E0\uFF1AOA\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216workFlowStart\u8C03\u7528\u5931\u8D25</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5OA\u7CFB\u7EDF\u8FDE\u63A5\u72B6\u6001\uFF0C\u67E5\u770BSA_POLICY_SPECIAL_HEADER.AUDIT_STAT\u662F\u5426\u4E3ARUN</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u8D44\u91D1\u6C60\u4F59\u989D\u672A\u6263\u51CF</li><li${_scopeId}>\u539F\u56E0\uFF1AdoProcessOA\u56DE\u8C03\u672A\u6B63\u786E\u6267\u884C\u6216\u8D44\u91D1\u6C60\u540C\u6B65\u5931\u8D25</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u5BA1\u6279\u56DE\u8C03\u65E5\u5FD7\uFF0C\u786E\u8BA4CAPITAL_POOL\u662F\u5426\u66F4\u65B0</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1AOA\u5BA1\u6279\u6D41\u7A0B\u672A\u53D1\u8D77"),
            createVNode("li", null, "\u539F\u56E0\uFF1AOA\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216workFlowStart\u8C03\u7528\u5931\u8D25"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5OA\u7CFB\u7EDF\u8FDE\u63A5\u72B6\u6001\uFF0C\u67E5\u770BSA_POLICY_SPECIAL_HEADER.AUDIT_STAT\u662F\u5426\u4E3ARUN")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1A\u5BA1\u6279\u901A\u8FC7\u540E\u8D44\u91D1\u6C60\u4F59\u989D\u672A\u6263\u51CF"),
            createVNode("li", null, "\u539F\u56E0\uFF1AdoProcessOA\u56DE\u8C03\u672A\u6B63\u786E\u6267\u884C\u6216\u8D44\u91D1\u6C60\u540C\u6B65\u5931\u8D25"),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u5BA1\u6279\u56DE\u8C03\u65E5\u5FD7\uFF0C\u786E\u8BA4CAPITAL_POOL\u662F\u5426\u66F4\u65B0")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u9009\u62E9\u5F39\u7A97\u3001\u4FDD\u5B58\u6821\u9A8C\u3001\u63D0\u4EA4\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-09-17</td><td${_scopeId}>-</td><td${_scopeId}>jiaqiang.fu01</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFASaPolicySpecialHeader\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u9009\u62E9\u5F39\u7A97\u3001\u4FDD\u5B58\u6821\u9A8C\u3001\u63D0\u4EA4\u6821\u9A8C\u3001\u72B6\u6001\u673A\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2025-09-17"),
                createVNode("td", null, "-"),
                createVNode("td", null, "jiaqiang.fu01"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFASaPolicySpecialHeader\u5B9E\u4F53")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u5BF9\u8D26\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
