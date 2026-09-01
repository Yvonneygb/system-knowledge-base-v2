import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u62A5\u8868/\u95E8\u5E97\u533A\u57DF\u5206\u5E03/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u62A5\u8868/\u95E8\u5E97\u533A\u57DF\u5206\u5E03/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u67E5\u4EC0\u4E48</h2><p>\u95E8\u5E97\u5728\u7701-\u5E02-\u533A\u53BF\u4E09\u7EA7\u533A\u57DF\u7684\u6570\u91CF\u5206\u5E03</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u4EE5\u533A\u57DF\u5C42\u7EA7\u4E3A\u9AA8\u67B6\uFF0C\u6309\u7701\u3001\u5E02\u3001\u533A\u53BF\u9010\u7EA7\u7EDF\u8BA1\u95E8\u5E97\u6570\u91CF\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.5"></circle><path d="M8 4V8L10.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u8986\u76D6\u89C6\u89D2</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u540C\u6837\u5C55\u793A\uFF08\u6570\u91CF\u4E3A 0\uFF09\uFF0C\u53CD\u6620\u5404\u533A\u57DF\u95E8\u5E97\u8986\u76D6\u5BC6\u5EA6\u4E0E\u7A7A\u767D\u533A\u57DF\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#10B981,#34D399)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="12" height="10" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M2 8H14" stroke="white" stroke-width="1.5"></path><path d="M8 5V8" stroke="white" stroke-width="1.5"></path><path d="M5 3H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u53EA\u8BFB\u67E5\u8BE2</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u7EAF\u67E5\u8BE2\u62A5\u8868\uFF0C\u65E0\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\uFF0C\u4EC5\u67E5\u770B\u533A\u57DF\u5206\u5E03\u3002</p></div></div></div></div></div><div class="kl-card" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4F7F\u7528</span><h2>\u600E\u4E48\u7528</h2><p>\u4E09\u6B65\u5B8C\u6210\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u67E5\u770B\u4E0E\u5206\u6790</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 8H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 12H13" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><circle cx="2.5" cy="4" r="1" fill="white"></circle><circle cx="2.5" cy="8" r="1" fill="white"></circle><circle cx="2.5" cy="12" r="1" fill="white"></circle></svg></div><h5>\u8BBE\u5B9A\u6761\u4EF6</h5><small>\u6309\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u533A\u53BF\u3001<br>\u95E8\u5E97\u6570\u91CF\u9608\u503C\u7B49\u6761\u4EF6\u7B5B\u9009</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#10b981,#059669)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L6 8L10 10L14 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 4H14V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u67E5\u8BE2\u67E5\u770B</h5><small>\u6309\u4E09\u7EA7\u533A\u57DF\u5C42\u7EA7\u5C55\u793A\u95E8\u5E97\u6570\u91CF<br>\u638C\u63E1\u5404\u533A\u57DF\u8986\u76D6\u5BC6\u5EA6</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#f59e0b,#d97706)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5L6 2L9 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 2V14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 8L9 11L6 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u5206\u6790\u5E94\u7528</h5><small>\u7528\u4E8E\u533A\u57DF\u8986\u76D6\u5206\u6790\u3001\u5E03\u5C40\u5408\u7406\u6027\u8BC4\u4F30<br>\u4E0E\u95E8\u5E97\u62D3\u5C55\u89C4\u5212</small></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u95E8\u5E97\u533A\u57DF\u5206\u5E03 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u67E5\u8BE2\u2605 \u2192 \u7ED3\u675F\uFF08\u4E0A\u6E38\u53D6\u95E8\u5E97\u6863\u6848/\u533A\u57DF\u57FA\u7840\u8868\uFF0C\u4E0B\u6E38\u652F\u6491\u533A\u57DF\u8986\u76D6\u4E0E\u62D3\u5C55\u89C4\u5212\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="280" y="56" width="300" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="430" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u6863\u6848(MKT_TERMINAL)</text><rect x="620" y="56" width="300" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="770" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u533A\u57DF\u57FA\u7840\u8868(SCPAREA)</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="545" y="150" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="175" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="190" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="470" y="220" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="244" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u2605</text><text x="600" y="263" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u6761\u4EF6\xB7\u67E5\u8BE2\xB7\u67E5\u770B\u533A\u57DF\u5206\u5E03</text><line x1="600" y1="274" x2="600" y2="304" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="304" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="329" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="344" x2="600" y2="384" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="384" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="406" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="280" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="380" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u533A\u57DF\u8986\u76D6\u5206\u6790</text><rect x="500" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5E03\u5C40\u5408\u7406\u6027\u8BC4\u4F30</text><rect x="720" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="820" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u62D3\u5C55\u89C4\u5212</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u7EAF\u62A5\u8868\u67E5\u8BE2\u9875\u9762\u3010\u53EA\u8BFB\u67E5\u8BE2\u3011"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4F9B\u5185\u90E8\u4EBA\u5458\u67E5\u8BE2\u95E8\u5E97\u5728\u5404\u533A\u57DF\u7684\u5206\u5E03\u60C5\u51B5\uFF0C\u4E86\u89E3\u95E8\u5E97\u7684\u533A\u57DF\u8986\u76D6\u5BC6\u5EA6</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801</li><li${_scopeId}>\u4EC5\u63D0\u4F9B\u67E5\u8BE2\u548C\u5BFC\u51FA\u529F\u80FD\uFF0C\u4E0D\u652F\u6301\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u64CD\u4F5C</li><li${_scopeId}>\u6570\u636E\u6765\u6E90\u4E8E\u533A\u57DF\u8868\u548C\u95E8\u5E97\u8868\u7684\u5173\u8054\u67E5\u8BE2</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4F9B\u5185\u90E8\u4EBA\u5458\u67E5\u8BE2\u95E8\u5E97\u5728\u5404\u533A\u57DF\u7684\u5206\u5E03\u60C5\u51B5\uFF0C\u4E86\u89E3\u95E8\u5E97\u7684\u533A\u57DF\u8986\u76D6\u5BC6\u5EA6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801"),
            createVNode("li", null, "\u4EC5\u63D0\u4F9B\u67E5\u8BE2\u548C\u5BFC\u51FA\u529F\u80FD\uFF0C\u4E0D\u652F\u6301\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u64CD\u4F5C"),
            createVNode("li", null, "\u6570\u636E\u6765\u6E90\u4E8E\u533A\u57DF\u8868\u548C\u95E8\u5E97\u8868\u7684\u5173\u8054\u67E5\u8BE2")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u7701\u5E02\u533A\u4E09\u7EA7\u5173\u8054"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u901A\u8FC7\u533A\u57DF\u8868\u7684areatype\u548Csuperid\u5B9E\u73B0\u7701\u2192\u5E02\u2192\u533A\u4E09\u7EA7\u5173\u8054</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u7701\u7EA7\uFF08sa1\uFF09\uFF1A<code${_scopeId}>SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 4</code></li><li${_scopeId}>\u5E02\u7EA7\uFF08sa2\uFF09\uFF1A<code${_scopeId}>SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 5</code>\uFF0C\u5173\u8054\u6761\u4EF6 <code${_scopeId}>sa1.areaid = sa2.superid</code></li><li${_scopeId}>\u533A\u53BF\u7EA7\uFF08sa3\uFF09\uFF1A<code${_scopeId}>SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 6</code>\uFF0C\u5173\u8054\u6761\u4EF6 <code${_scopeId}>sa2.areaid = sa3.superid</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u901A\u8FC7\u533A\u57DF\u8868\u7684areatype\u548Csuperid\u5B9E\u73B0\u7701\u2192\u5E02\u2192\u533A\u4E09\u7EA7\u5173\u8054")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u7701\u7EA7\uFF08sa1\uFF09\uFF1A"),
              createVNode("code", null, "SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 4")
            ]),
            createVNode("li", null, [
              createTextVNode("\u5E02\u7EA7\uFF08sa2\uFF09\uFF1A"),
              createVNode("code", null, "SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 5"),
              createTextVNode("\uFF0C\u5173\u8054\u6761\u4EF6 "),
              createVNode("code", null, "sa1.areaid = sa2.superid")
            ]),
            createVNode("li", null, [
              createTextVNode("\u533A\u53BF\u7EA7\uFF08sa3\uFF09\uFF1A"),
              createVNode("code", null, "SELECT areaname, areaid, superid FROM epms.scparea WHERE areatype = 6"),
              createTextVNode("\uFF0C\u5173\u8054\u6761\u4EF6 "),
              createVNode("code", null, "sa2.areaid = sa3.superid")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u95E8\u5E97\u6570\u91CF\u7EDF\u8BA1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5B50\u67E5\u8BE2mt\uFF1A<code${_scopeId}>SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid</code></li><li${_scopeId}>\u901A\u8FC7 <code${_scopeId}>sa3.areaid = mt.county_areaid</code> \u5173\u8054\u5230\u533A\u53BF\u7EA7</li><li${_scopeId}>\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\uFF1A<code${_scopeId}>NVL(mt.terminal_num, 0)</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u5B50\u67E5\u8BE2mt\uFF1A"),
              createVNode("code", null, "SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid")
            ]),
            createVNode("li", null, [
              createTextVNode("\u901A\u8FC7 "),
              createVNode("code", null, "sa3.areaid = mt.county_areaid"),
              createTextVNode(" \u5173\u8054\u5230\u533A\u53BF\u7EA7")
            ]),
            createVNode("li", null, [
              createTextVNode("\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\uFF1A"),
              createVNode("code", null, "NVL(mt.terminal_num, 0)")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u6309\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009\uFF0C\u67E5\u627E\u95E8\u5E97\u6570\u91CF\u4E0D\u8DB3\u7684\u533A\u57DF</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u5F53terminalNumLow\u4E0D\u4E3A\u7A7A\u4E14&gt;=0\u65F6\uFF0C\u7B5B\u9009 <code${_scopeId}>terminal_num &lt; #{terminalNumLow}</code></li><li${_scopeId}>\u7528\u4E8E\u67E5\u627E\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u4E0B\u9650\u7684\u533A\u57DF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u6309\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009\uFF0C\u67E5\u627E\u95E8\u5E97\u6570\u91CF\u4E0D\u8DB3\u7684\u533A\u57DF")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u5F53terminalNumLow\u4E0D\u4E3A\u7A7A\u4E14>=0\u65F6\uFF0C\u7B5B\u9009 "),
              createVNode("code", null, "terminal_num < #{terminalNumLow}")
            ]),
            createVNode("li", null, "\u7528\u4E8E\u67E5\u627E\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u4E0B\u9650\u7684\u533A\u57DF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56")
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
        _push2(`<h4${_scopeId}>\u67E5\u8BE2\u6761\u4EF6\u533A\u57DF</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>ORG_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u83B7\u53D6\uFF0C\u5FC5\u586B\uFF0C\u7528\u4E8E\u7B5B\u9009\u95E8\u5E97entid</td></tr><tr${_scopeId}><td${_scopeId}>\u7701\u4EFDID</td><td${_scopeId}>PROVINCE_ID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6309\u7701\u4EFD\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u57CE\u5E02ID</td><td${_scopeId}>CITY_ID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6309\u57CE\u5E02\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u53BFID</td><td${_scopeId}>COUNTY_ID</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u6309\u533A\u53BF\u7B5B\u9009</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u6570\u91CF\u4E0B\u9650</td><td${_scopeId}>TERMINAL_NUM_LOW</td><td${_scopeId}>\u6570\u503C\u8F93\u5165\u6846</td><td${_scopeId}>\u7B5B\u9009\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u6B64\u503C\u7684\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF0C\u7B5B\u9009terminal_num &lt; \u6B64\u503C</td></tr></tbody></table><h4${_scopeId}>\u62A5\u8868\u6570\u636E\u533A\u57DF</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7701\u4EFD\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>PROVINCE_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7701\u4EFD\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=4)</td></tr><tr${_scopeId}><td${_scopeId}>\u7701\u4EFDID</td><td${_scopeId}>PROVINCE_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u7701\u4EFDID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=4)</td></tr><tr${_scopeId}><td${_scopeId}>\u57CE\u5E02\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>CITY_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u57CE\u5E02\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=5)</td></tr><tr${_scopeId}><td${_scopeId}>\u57CE\u5E02ID</td><td${_scopeId}>CITY_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u57CE\u5E02ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=5)</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u53BF\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>COUNTY_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u533A\u53BF\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=6)</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u53BFID</td><td${_scopeId}>COUNTY_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u533A\u53BFID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6765\u81EAscparea(areatype=6)</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u6570\u91CF</td><td${_scopeId}>TERMINAL_NUM</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u8BE5\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>COUNT(mkt_terminal WHERE county_areaid=\u533A\u53BFID AND entid=orgId)\uFF0C\u65E0\u95E8\u5E97\u663E\u793A0</td></tr></tbody></table><h4${_scopeId}>\u5176\u4ED6\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528POST /mkt-store-areal-distribution/search\u63A5\u53E3\uFF0C\u5206\u9875\u8FD4\u56DE\u533A\u57DF\u5206\u5E03\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4E3AExcel</td><td${_scopeId}>\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5BFC\u51FA\u5F53\u524D\u67E5\u8BE2\u7ED3\u679C\u4E3AExcel\u6587\u4EF6</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u6839\u636E\u67E5\u8BE2\u6761\u4EF6\u641C\u7D22\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\uFF0C\u89E6\u53D1POST <code${_scopeId}>/v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search</code> \u63A5\u53E3</li><li${_scopeId}>\u8BF7\u6C42\u53C2\u6570\u4E3AMktTerminalArealDistributionSearchDTO\uFF0C\u5305\u542BorgId\u3001provinceId\u3001cityId\u3001countyId\u3001terminalNumLow</li><li${_scopeId}>\u540E\u7AEF\u901A\u8FC7PageHelper.doPageAndSort\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2</li><li${_scopeId}>\u67E5\u8BE2scparea\u8868\u7701\u5E02\u533A\u4E09\u7EA7\u5173\u8054\uFF0C\u7EDF\u8BA1mkt_terminal\u95E8\u5E97\u6570\u91CF</li><li${_scopeId}>\u8FD4\u56DEMktTerminalArealDistributionSearchVO\u5206\u9875\u7ED3\u679C</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\uFF0C\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u62A5\u8868\u6570\u636E\u5BFC\u51FA\u4E3AExcel</li></ul>`);
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
                createVNode("td", null, "ORG_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u81EA\u52A8\u83B7\u53D6\uFF0C\u5FC5\u586B\uFF0C\u7528\u4E8E\u7B5B\u9009\u95E8\u5E97entid")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7701\u4EFDID"),
                createVNode("td", null, "PROVINCE_ID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6309\u7701\u4EFD\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u57CE\u5E02ID"),
                createVNode("td", null, "CITY_ID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6309\u57CE\u5E02\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u53BFID"),
                createVNode("td", null, "COUNTY_ID"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6309\u533A\u53BF\u7B5B\u9009"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0C\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u6570\u91CF\u4E0B\u9650"),
                createVNode("td", null, "TERMINAL_NUM_LOW"),
                createVNode("td", null, "\u6570\u503C\u8F93\u5165\u6846"),
                createVNode("td", null, "\u7B5B\u9009\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u6B64\u503C\u7684\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF0C\u7B5B\u9009terminal_num < \u6B64\u503C")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u8868\u6570\u636E\u533A\u57DF"),
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
                createVNode("td", null, "\u7701\u4EFD\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "PROVINCE_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7701\u4EFD\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=4)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7701\u4EFDID"),
                createVNode("td", null, "PROVINCE_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u7701\u4EFDID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=4)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u57CE\u5E02\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "CITY_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u57CE\u5E02\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u57CE\u5E02ID"),
                createVNode("td", null, "CITY_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u57CE\u5E02ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=5)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u53BF\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "COUNTY_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u533A\u53BF\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u53BFID"),
                createVNode("td", null, "COUNTY_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u533A\u53BFID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6765\u81EAscparea(areatype=6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u6570\u91CF"),
                createVNode("td", null, "TERMINAL_NUM"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u8BE5\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "COUNT(mkt_terminal WHERE county_areaid=\u533A\u53BFID AND entid=orgId)\uFF0C\u65E0\u95E8\u5E97\u663E\u793A0")
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
                createVNode("td", null, "\u67E5\u8BE2\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528POST /mkt-store-areal-distribution/search\u63A5\u53E3\uFF0C\u5206\u9875\u8FD4\u56DE\u533A\u57DF\u5206\u5E03\u6570\u636E")
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
              createTextVNode("\uFF1A\u6839\u636E\u67E5\u8BE2\u6761\u4EF6\u641C\u7D22\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\uFF0C\u89E6\u53D1POST "),
              createVNode("code", null, "/v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search"),
              createTextVNode(" \u63A5\u53E3")
            ]),
            createVNode("li", null, "\u8BF7\u6C42\u53C2\u6570\u4E3AMktTerminalArealDistributionSearchDTO\uFF0C\u5305\u542BorgId\u3001provinceId\u3001cityId\u3001countyId\u3001terminalNumLow"),
            createVNode("li", null, "\u540E\u7AEF\u901A\u8FC7PageHelper.doPageAndSort\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2"),
            createVNode("li", null, "\u67E5\u8BE2scparea\u8868\u7701\u5E02\u533A\u4E09\u7EA7\u5173\u8054\uFF0C\u7EDF\u8BA1mkt_terminal\u95E8\u5E97\u6570\u91CF"),
            createVNode("li", null, "\u8FD4\u56DEMktTerminalArealDistributionSearchVO\u5206\u9875\u7ED3\u679C")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u5BFC\u51FA\uFF08\u5217\u8868\u9875\u67E5\u8BE2\u533A\u57DF\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u5BFC\u51FA\u4E3AExcel\u6587\u4EF6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u70B9\u51FB\u5BFC\u51FA\u6309\u94AE\uFF0C\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u62A5\u8868\u6570\u636E\u5BFC\u51FA\u4E3AExcel")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u540E\u7AEF\u63A5\u53E3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u540D\u79F0</th><th${_scopeId}>\u8BF7\u6C42\u65B9\u5F0F</th><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u6743\u9650</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search\`</td><td${_scopeId}>\u7EC4\u7EC7\u7EA7\u6743\u9650</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E</td></tr></tbody></table><p${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u5165\u53C2\uFF08MktTerminalArealDistributionSearchDTO\uFF09\uFF1A</strong></p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u5FC5\u586B</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>orgId</td><td${_scopeId}>Long</td><td${_scopeId}>\u662F</td><td${_scopeId}>\u7EC4\u7EC7ID\uFF0C\u7528\u4E8E\u7B5B\u9009\u95E8\u5E97entid</td></tr><tr${_scopeId}><td${_scopeId}>provinceId</td><td${_scopeId}>Long</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u7701\u4EFDID\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>cityId</td><td${_scopeId}>Long</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u57CE\u5E02ID\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>countyId</td><td${_scopeId}>Long</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u533A\u53BFID\uFF08\u7CBE\u786E\u5339\u914D\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>searchFlag</td><td${_scopeId}>Integer</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u641C\u7D22\u6807\u5FD7</td></tr><tr${_scopeId}><td${_scopeId}>terminalNumLow</td><td${_scopeId}>Integer</td><td${_scopeId}>\u5426</td><td${_scopeId}>\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\uFF0C\u7B5B\u9009terminal_num &lt; \u6B64\u503C</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search`"),
                createVNode("td", null, "\u7EC4\u7EC7\u7EA7\u6743\u9650"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E")
              ])
            ])
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u63A5\u53E3\u5165\u53C2\uFF08MktTerminalArealDistributionSearchDTO\uFF09\uFF1A")
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
                createVNode("td", null, "orgId"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u662F"),
                createVNode("td", null, "\u7EC4\u7EC7ID\uFF0C\u7528\u4E8E\u7B5B\u9009\u95E8\u5E97entid")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "provinceId"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u7701\u4EFDID\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "cityId"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u57CE\u5E02ID\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "countyId"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u533A\u53BFID\uFF08\u7CBE\u786E\u5339\u914D\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "searchFlag"),
                createVNode("td", null, "Integer"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u641C\u7D22\u6807\u5FD7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "terminalNumLow"),
                createVNode("td", null, "Integer"),
                createVNode("td", null, "\u5426"),
                createVNode("td", null, "\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\uFF0C\u7B5B\u9009terminal_num < \u6B64\u503C")
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
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa1.areaname </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> province_areaname,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa1.areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> province_id,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa2.areaname </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> city_areaname,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa2.areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> city_id,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa3.areaname </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_areaname,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        sa3.areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_id,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        NVL(mt.terminal_num, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_num</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaname, areaid, superid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epms.scparea </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ASC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    ) sa1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaname, areaid, superid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epms.scparea </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ASC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    ) sa2 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa1.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa2.superid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaname, areaid, superid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epms.scparea </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> areaid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ASC</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    ) sa3 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa2.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.superid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_areaid, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(county_areaid) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_num</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> epms.mkt_terminal</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> entid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{orgId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_areaid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    ) mt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> mt.county_areaid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> province_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{provinceId}          </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u7701\u4EFDID\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> city_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{cityId}                  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u57CE\u5E02ID\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{countyId}              </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u533A\u53BFID\uFF08\u7CBE\u786E\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_num </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{terminalNumLow}     </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa1.areaname "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " province_areaname,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa1.areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " province_id,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa2.areaname "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " city_areaname,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa2.areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " city_id,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa3.areaname "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_areaname,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        sa3.areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_id,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        NVL(mt.terminal_num, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_num")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaname, areaid, superid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epms.scparea "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ASC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    ) sa1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaname, areaid, superid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epms.scparea "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ASC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    ) sa2 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa1.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa2.superid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaname, areaid, superid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epms.scparea "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "6"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " areaid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ASC")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    ) sa3 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa2.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.superid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_areaid, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(county_areaid) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_num")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " epms.mkt_terminal")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " entid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{orgId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_areaid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    ) mt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " mt.county_areaid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " province_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{provinceId}          "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u7701\u4EFDID\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " city_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{cityId}                  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u57CE\u5E02ID\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{countyId}              "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u533A\u53BFID\uFF08\u7CBE\u786E\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_num "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{terminalNumLow}     "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u4E0A\u6E38\u6A21\u5757</th><th${_scopeId}>\u4F9D\u8D56\u7C7B\u578B</th><th${_scopeId}>\u4F9D\u8D56\u8BF4\u660E</th><th${_scopeId}>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u533A\u57DF\u8868</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u63D0\u4F9B\u7701\u5E02\u533A\u4E09\u7EA7\u533A\u57DF\u6570\u636E\uFF08areatype=4/5/6\uFF09</td><td${_scopeId}>\u533A\u57DF\u6570\u636E\u5DF2\u7EF4\u62A4</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u8868</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF</td><td${_scopeId}>\u95E8\u5E97\u6863\u6848\u5DF2\u521B\u5EFA</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u533A\u57DF\u8868"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u63D0\u4F9B\u7701\u5E02\u533A\u4E09\u7EA7\u533A\u57DF\u6570\u636E\uFF08areatype=4/5/6\uFF09"),
                createVNode("td", null, "\u533A\u57DF\u6570\u636E\u5DF2\u7EF4\u62A4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u8868"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF"),
                createVNode("td", null, "\u95E8\u5E97\u6863\u6848\u5DF2\u521B\u5EFA")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u5206\u6790\uFF1A\u7BA1\u7406\u5C42\u901A\u8FC7\u62A5\u8868\u4E86\u89E3\u95E8\u5E97\u5728\u5404\u7701\u5E02\u533A\u53BF\u7684\u5206\u5E03\u60C5\u51B5</li><li${_scopeId}>\u95E8\u5E97\u6570\u91CF\u7EDF\u8BA1\uFF1A\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u57DF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56</li><li${_scopeId}>Excel\u5BFC\u51FA\u5F52\u6863\uFF1A\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u5206\u6790\uFF1A\u7BA1\u7406\u5C42\u901A\u8FC7\u62A5\u8868\u4E86\u89E3\u95E8\u5E97\u5728\u5404\u7701\u5E02\u533A\u53BF\u7684\u5206\u5E03\u60C5\u51B5"),
            createVNode("li", null, "\u95E8\u5E97\u6570\u91CF\u7EDF\u8BA1\uFF1A\u7EDF\u8BA1\u6BCF\u4E2A\u533A\u57DF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56"),
            createVNode("li", null, "Excel\u5BFC\u51FA\u5F52\u6863\uFF1A\u5BFC\u51FA\u62A5\u8868\u6570\u636E\u4F9B\u5185\u90E8\u7BA1\u7406\u51B3\u7B56\u4E0E\u5F52\u6863\u4F7F\u7528")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "SCPAREA\uFF08\u533A\u57DF\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>AREAID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u533A\u57DFID(\u4E3B\u952E)</td><td${_scopeId}>\u7701\u4EFDID/\u57CE\u5E02ID/\u533A\u53BFID</td><td${_scopeId}>\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>AREANAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u533A\u57DF\u540D\u79F0</td><td${_scopeId}>\u7701\u4EFD\u540D\u79F0/\u57CE\u5E02\u540D\u79F0/\u533A\u53BF\u540D\u79F0</td><td${_scopeId}>\u533A\u57DF\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>AREATYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u533A\u57DF\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>4=\u7701, 5=\u5E02, 6=\u533A\u53BF</td></tr><tr${_scopeId}><td${_scopeId}>SUPERID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E0A\u7EA7\u533A\u57DFID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054\u4E0A\u7EA7\u533A\u57DF\uFF0C\u7701superid\u4E3A\u7A7A</td></tr></tbody></table>`);
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
                createVNode("td", null, "AREAID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u533A\u57DFID(\u4E3B\u952E)"),
                createVNode("td", null, "\u7701\u4EFDID/\u57CE\u5E02ID/\u533A\u53BFID"),
                createVNode("td", null, "\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AREANAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u533A\u57DF\u540D\u79F0"),
                createVNode("td", null, "\u7701\u4EFD\u540D\u79F0/\u57CE\u5E02\u540D\u79F0/\u533A\u53BF\u540D\u79F0"),
                createVNode("td", null, "\u533A\u57DF\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "AREATYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u533A\u57DF\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "4=\u7701, 5=\u5E02, 6=\u533A\u53BF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SUPERID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E0A\u7EA7\u533A\u57DFID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054\u4E0A\u7EA7\u533A\u57DF\uFF0C\u7701superid\u4E3A\u7A7A")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "MKT_TERMINAL\uFF08\u95E8\u5E97\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>COUNTY_AREAID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u533A\u53BF\u533A\u57DFID</td><td${_scopeId}>-</td><td${_scopeId}>\u5173\u8054SCPAREA(AREATYPE=6)</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4F01\u4E1AID</td><td${_scopeId}>-</td><td${_scopeId}>\u7528\u4E8E\u6309\u7EC4\u7EC7ID\u7B5B\u9009\u95E8\u5E97</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_STAT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97\u72B6\u6001</td><td${_scopeId}>-</td><td${_scopeId}>1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97</td></tr></tbody></table>`);
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
                createVNode("td", null, "COUNTY_AREAID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u533A\u53BF\u533A\u57DFID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u5173\u8054SCPAREA(AREATYPE=6)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4F01\u4E1AID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7528\u4E8E\u6309\u7EC4\u7EC7ID\u7B5B\u9009\u95E8\u5E97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_STAT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97\u72B6\u6001"),
                createVNode("td", null, "-"),
                createVNode("td", null, "1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2\u6309\u94AE\u70B9\u51FB\u65F6</td><td${_scopeId}>\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u65E0\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E\uFF0C\u8BF7\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u540E\u91CD\u8BD5</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A)</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</td><td${_scopeId}>\u67E5\u8BE2/\u5BFC\u51FA</td><td${_scopeId}>\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</td><td${_scopeId}>\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38</td><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u63A5\u53E3\u8C03\u7528\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u6216\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\uFF0C\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u8303\u56F4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u5BFC\u51FA\u5931\u8D25\u7F51\u7EDC\u5F02\u5E38)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6309\u94AE\uFF0C\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\uFF08\u7EC4\u7EC7ID\u3001\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u533A\u53BF\u3001\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B49\uFF09\u67E5\u8BE2SCPAREA\u5173\u8054MKT_TERMINAL\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u62A5\u8868\u901A\u8FC7SCPAREA\u8868\u7684areatype=4(\u7701)/5(\u5E02)/6(\u533A\u53BF)\u4E09\u7EA7\u5173\u8054\u5C55\u793A\u533A\u57DF\uFF0C\u901A\u8FC7\u5B50\u67E5\u8BE2 <code${_scopeId}>SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid</code> \u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\u3002\u82E5\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u5982\u9009\u62E9\u7684\u7701\u4EFD/\u57CE\u5E02/\u533A\u53BF\u4E0B\u65E0SCPAREA\u8BB0\u5F55\uFF09\u3001\u6216\u7EC4\u7EC7ID\uFF08entid\uFF09\u4E0B\u65E0\u4EFB\u4F55\u95E8\u5E97\u3001\u6216\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u8BBE\u7F6E\u8FC7\u9AD8\u7B5B\u6389\u6240\u6709\u533A\u57DF\uFF0C\u5747\u4F1A\u8FD4\u56DE\u7A7A\u7ED3\u679C\u3002\u6CE8\u610F\uFF1A\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u4F1A\u663E\u793A0\u4F46\u4ECD\u8FD4\u56DE\u884C\uFF0C\u53EA\u6709\u5F53SCPAREA\u672C\u8EAB\u65E0\u5339\u914D\u533A\u57DF\u65F6\u624D\u5B8C\u5168\u4E3A\u7A7A\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.areaid          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u533A\u53BFID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         sa3.areaname        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u533A\u53BF\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         NVL(mt.terminal_num, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   scparea sa3</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT   JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_areaid, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(county_areaid) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> terminal_num</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   mkt_terminal</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  entid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> county_areaid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ) mt </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> mt.county_areaid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  sa3.areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.areaid;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u67E5\u8BE2&quot;\u6216&quot;\u5BFC\u51FA&quot;\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u67E5\u8BE2\u4F9D\u8D56\u540E\u7AEFTerminalReportController.mktTerminalArealDistributionSearch\u63A5\u53E3\u5206\u9875\u67E5\u8BE2SCPAREA\u7701\u5E02\u533A\u4E09\u7EA7\u5173\u8054\u5E76\u7EDF\u8BA1MKT_TERMINAL\u95E8\u5E97\u6570\u91CF\u3002\u82E5\u540E\u7AEFae-report\u670D\u52A1\u672A\u542F\u52A8\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001SCPAREA\u4E09\u7EA7\u5173\u8054LEFT JOIN\u5BFC\u81F4\u6162SQL\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u7F51\u5173\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)            </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u533A\u53BF\u603B\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   scparea</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>6</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u70B9\u51FB&quot;\u67E5\u8BE2&quot;/&quot;\u5BFC\u51FA&quot;\u6309\u94AE\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE401\u672A\u6388\u6743\u6216403\u7981\u6B62\u8BBF\u95EE\uFF0C\u6216\u524D\u7AEF\u8DEF\u7531\u5B88\u536B\u62E6\u622A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u62A5\u8868\u63A5\u53E3\u58F0\u660E@Permission(level = ResourceLevel.ORGANIZATION)\uFF0C\u8981\u6C42\u7528\u6237\u5177\u5907\u7EC4\u7EC7\u7EA7\u6743\u9650\u3002\u82E5\u7528\u6237\u672A\u767B\u5F55\uFF08token\u8FC7\u671F/\u4E22\u5931\uFF09\u3001\u6216\u5F53\u524D\u89D2\u8272\u672A\u5206\u914D\u8BE5\u62A5\u8868\u83DC\u5355\u6743\u9650\u3001\u6216organizationId\u8DEF\u5F84\u53C2\u6570\u4E0E\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7\u4E0D\u5339\u914D\uFF0C\u5747\u4F1A\u89E6\u53D1\u6743\u9650\u6821\u9A8C\u5931\u8D25\u3002hlod\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7\u8DEF\u7531\u914D\u7F6E\u548C\u63A5\u53E3\u6743\u9650\u53CC\u91CD\u6821\u9A8C\uFF0C\u4EFB\u4E00\u73AF\u8282\u5931\u8D25\u5747\u963B\u65AD\u8BBF\u95EE\u3002\u9700\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u62A5\u8868\u67E5\u770B\u6743\u9650\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6743\u9650\u6821\u9A8C\u4E3A\u5E94\u7528\u5C42\u903B\u8F91\uFF0C\u65E0\u5BF9\u5E94\u6570\u636E\u8868</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   dual;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u5BFC\u51FA&quot;\u6309\u94AE\uFF0C\u5BFC\u51FAExcel\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u3001\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\u6216Excel\u6587\u4EF6\u6D41\u4F20\u8F93\u4E2D\u65AD</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5BFC\u51FA\u63A5\u53E3\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E\u5168\u91CF\u67E5\u8BE2\u540E\u751F\u6210Excel\u6587\u4EF6\u6D41\u8FD4\u56DE\u3002\u82E5\u67E5\u8BE2\u6570\u636E\u91CF\u8F83\u5927\uFF08\u5982\u672A\u9650\u5B9A\u7701\u5E02\u533A\u5BFC\u81F4\u5168\u56FD\u533A\u53BF\u6570\u636E\uFF09\u5BFC\u81F4\u54CD\u5E94\u8D85\u65F6\u3001\u6216\u751F\u6210Excel\u8FC7\u7A0B\u4E2D\u5185\u5B58\u6EA2\u51FA\u3001\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u5BFC\u81F4\u6587\u4EF6\u6D41\u4E2D\u65AD\u3001\u6216\u6D4F\u89C8\u5668\u4E0B\u8F7D\u88AB\u62E6\u622A\uFF0C\u5747\u4F1A\u89E6\u53D1\u5BFC\u51FA\u5931\u8D25\u3002\u9700\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u9650\u5B9A\u7701\u4EFD\u3001\u57CE\u5E02\uFF09\u51CF\u5C11\u6570\u636E\u91CF\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa1.areaname        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7701\u4EFD\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(sa3.areaid)   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u533A\u53BF\u6570\u91CF</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   scparea sa1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT   JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> scparea sa2 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa1.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa2.superid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa2.areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT   JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> scparea sa3 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa2.areaid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.superid </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa3.areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  sa1.areatype </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> sa1.areaname</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u533A\u53BF\u6570\u91CF </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u65E0\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E\uFF0C\u8BF7\u8C03\u6574\u67E5\u8BE2\u6761\u4EF6\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
                createVNode("td", null, "\u67E5\u8BE2/\u5BFC\u51FA"),
                createVNode("td", null, "\u540E\u7AEF\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u6216\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u63A5\u53E3\u8C03\u7528\u5F02\u5E38)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
                createVNode("td", null, "\u9875\u9762\u52A0\u8F7D/\u67E5\u8BE2"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7\u7EA7\u6743\u9650\u6216\u767B\u5F55\u6001\u5931\u6548\uFF0C\u91CD\u65B0\u767B\u5F55\u6216\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u6743\u9650\u4E0D\u8DB3\u672A\u767B\u5F55)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38"),
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u63A5\u53E3\u8C03\u7528\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u6216\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\uFF0C\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u8303\u56F4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u5BFC\u51FA\u5931\u8D25\u7F51\u7EDC\u5F02\u5E38)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6309\u94AE\uFF0C\u6309\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\uFF08\u7EC4\u7EC7ID\u3001\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u533A\u53BF\u3001\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B49\uFF09\u67E5\u8BE2SCPAREA\u5173\u8054MKT_TERMINAL\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u62A5\u8868\u901A\u8FC7SCPAREA\u8868\u7684areatype=4(\u7701)/5(\u5E02)/6(\u533A\u53BF)\u4E09\u7EA7\u5173\u8054\u5C55\u793A\u533A\u57DF\uFF0C\u901A\u8FC7\u5B50\u67E5\u8BE2 "),
              createVNode("code", null, "SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid"),
              createTextVNode(" \u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\u3002\u82E5\u67E5\u8BE2\u6761\u4EF6\u8FC7\u4E25\uFF08\u5982\u9009\u62E9\u7684\u7701\u4EFD/\u57CE\u5E02/\u533A\u53BF\u4E0B\u65E0SCPAREA\u8BB0\u5F55\uFF09\u3001\u6216\u7EC4\u7EC7ID\uFF08entid\uFF09\u4E0B\u65E0\u4EFB\u4F55\u95E8\u5E97\u3001\u6216\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u8BBE\u7F6E\u8FC7\u9AD8\u7B5B\u6389\u6240\u6709\u533A\u57DF\uFF0C\u5747\u4F1A\u8FD4\u56DE\u7A7A\u7ED3\u679C\u3002\u6CE8\u610F\uFF1A\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u4F1A\u663E\u793A0\u4F46\u4ECD\u8FD4\u56DE\u884C\uFF0C\u53EA\u6709\u5F53SCPAREA\u672C\u8EAB\u65E0\u5339\u914D\u533A\u57DF\u65F6\u624D\u5B8C\u5168\u4E3A\u7A7A\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.areaid          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u533A\u53BFID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         sa3.areaname        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u533A\u53BF\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         NVL(mt.terminal_num, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   scparea sa3")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT   JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_areaid, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(county_areaid) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " terminal_num")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   mkt_terminal")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  entid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " county_areaid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ) mt "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " mt.county_areaid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  sa3.areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.areaid;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25/\u63A5\u53E3\u8C03\u7528\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u67E5\u8BE2"\u6216"\u5BFC\u51FA"\u6309\u94AE\uFF0C\u8C03\u7528POST /v1/{organizationId}/terminalReport/mkt-store-areal-distribution/search\u63A5\u53E3\u65F6\uFF0C\u524D\u7AEF\u672A\u6536\u5230\u54CD\u5E94\u6216\u6536\u5230\u975E2xx\u72B6\u6001\u7801\uFF08\u5982500\u3001502\u3001504\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u4E3Ahlod\u4F4E\u4EE3\u7801\u62A5\u8868\u9875\u9762\uFF0C\u67E5\u8BE2\u4F9D\u8D56\u540E\u7AEFTerminalReportController.mktTerminalArealDistributionSearch\u63A5\u53E3\u5206\u9875\u67E5\u8BE2SCPAREA\u7701\u5E02\u533A\u4E09\u7EA7\u5173\u8054\u5E76\u7EDF\u8BA1MKT_TERMINAL\u95E8\u5E97\u6570\u91CF\u3002\u82E5\u540E\u7AEFae-report\u670D\u52A1\u672A\u542F\u52A8\u3001Oracle\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\u3001SCPAREA\u4E09\u7EA7\u5173\u8054LEFT JOIN\u5BFC\u81F4\u6162SQL\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u6216\u7F51\u5173\u8F6C\u53D1\u5931\u8D25\uFF0C\u5747\u4F1A\u5BFC\u81F4\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u533A\u53BF\u603B\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   scparea")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "6"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6743\u9650\u4E0D\u8DB3/\u672A\u767B\u5F55"),
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
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5BFC\u51FA\u5931\u8D25\uFF1A\u7F51\u7EDC\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u5BFC\u51FA"\u6309\u94AE\uFF0C\u5BFC\u51FAExcel\u8FC7\u7A0B\u4E2D\u7F51\u7EDC\u4E2D\u65AD\u3001\u540E\u7AEF\u54CD\u5E94\u8D85\u65F6\u6216Excel\u6587\u4EF6\u6D41\u4F20\u8F93\u4E2D\u65AD')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5BFC\u51FA\u63A5\u53E3\u5C06\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u4E0B\u7684\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u6570\u636E\u5168\u91CF\u67E5\u8BE2\u540E\u751F\u6210Excel\u6587\u4EF6\u6D41\u8FD4\u56DE\u3002\u82E5\u67E5\u8BE2\u6570\u636E\u91CF\u8F83\u5927\uFF08\u5982\u672A\u9650\u5B9A\u7701\u5E02\u533A\u5BFC\u81F4\u5168\u56FD\u533A\u53BF\u6570\u636E\uFF09\u5BFC\u81F4\u54CD\u5E94\u8D85\u65F6\u3001\u6216\u751F\u6210Excel\u8FC7\u7A0B\u4E2D\u5185\u5B58\u6EA2\u51FA\u3001\u6216\u7F51\u7EDC\u4E0D\u7A33\u5B9A\u5BFC\u81F4\u6587\u4EF6\u6D41\u4E2D\u65AD\u3001\u6216\u6D4F\u89C8\u5668\u4E0B\u8F7D\u88AB\u62E6\u622A\uFF0C\u5747\u4F1A\u89E6\u53D1\u5BFC\u51FA\u5931\u8D25\u3002\u9700\u91CD\u8BD5\u5BFC\u51FA\u6216\u7F29\u5C0F\u67E5\u8BE2\u6761\u4EF6\uFF08\u5982\u9650\u5B9A\u7701\u4EFD\u3001\u57CE\u5E02\uFF09\u51CF\u5C11\u6570\u636E\u91CF\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa1.areaname        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7701\u4EFD\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(sa3.areaid)   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u533A\u53BF\u6570\u91CF")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   scparea sa1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT   JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " scparea sa2 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa1.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa2.superid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa2.areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "5")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT   JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " scparea sa3 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa2.areaid "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.superid "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa3.areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  sa1.areatype "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " sa1.areaname")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u533A\u53BF\u6570\u91CF "),
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u95E8\u5E97\u6570\u91CF\u5982\u4F55\u7EDF\u8BA1\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u901A\u8FC7\u5B50\u67E5\u8BE2 <code${_scopeId}>SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid</code> \u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u7701\u5E02\u533A\u4E09\u7EA7\u5982\u4F55\u5173\u8054\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u901A\u8FC7SCPAREA\u8868\u7684areatype\u548Csuperid\u5173\u8054\uFF1A\u7701(areatype=4) \u2192 \u5E02(areatype=5, superid=\u7701areaid) \u2192 \u533A\u53BF(areatype=6, superid=\u5E02areaid)\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009\u7684\u4F5C\u7528\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u7B5B\u9009\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u6307\u5B9A\u503C\u7684\u533A\u57DF\uFF0C\u7528\u4E8E\u67E5\u627E\u95E8\u5E97\u8986\u76D6\u4E0D\u8DB3\u7684\u533A\u57DF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1A\u62A5\u8868\u662F\u5426\u652F\u6301\u5BFC\u51FA\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u662F\uFF0C\u652F\u6301\u5BFC\u51FAExcel\u3002</p><p${_scopeId}><strong${_scopeId}>Q5\uFF1A\u62A5\u8868\u662F\u5426\u652F\u6301\u65B0\u589E/\u4FEE\u6539/\u5220\u9664\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u4E0D\u652F\u6301\uFF0C\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u62A5\u8868\uFF0C\u4EC5\u652F\u6301\u67E5\u770B\u548C\u5BFC\u51FA\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u95E8\u5E97\u6570\u91CF\u5982\u4F55\u7EDF\u8BA1\uFF1F")
          ]),
          createVNode("p", null, [
            createTextVNode("A\uFF1A\u901A\u8FC7\u5B50\u67E5\u8BE2 "),
            createVNode("code", null, "SELECT county_areaid, COUNT(county_areaid) AS terminal_num FROM epms.mkt_terminal WHERE entid = #{orgId} GROUP BY county_areaid"),
            createTextVNode(" \u7EDF\u8BA1\u6BCF\u4E2A\u533A\u53BF\u7684\u95E8\u5E97\u6570\u91CF\uFF0C\u65E0\u95E8\u5E97\u7684\u533A\u57DF\u663E\u793A0\u3002")
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u7701\u5E02\u533A\u4E09\u7EA7\u5982\u4F55\u5173\u8054\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u901A\u8FC7SCPAREA\u8868\u7684areatype\u548Csuperid\u5173\u8054\uFF1A\u7701(areatype=4) \u2192 \u5E02(areatype=5, superid=\u7701areaid) \u2192 \u533A\u53BF(areatype=6, superid=\u5E02areaid)\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u95E8\u5E97\u6570\u91CF\u4E0B\u9650\u7B5B\u9009\u7684\u4F5C\u7528\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u7B5B\u9009\u95E8\u5E97\u6570\u91CF\u4F4E\u4E8E\u6307\u5B9A\u503C\u7684\u533A\u57DF\uFF0C\u7528\u4E8E\u67E5\u627E\u95E8\u5E97\u8986\u76D6\u4E0D\u8DB3\u7684\u533A\u57DF\uFF0C\u8F85\u52A9\u95E8\u5E97\u62D3\u5C55\u51B3\u7B56\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1A\u62A5\u8868\u662F\u5426\u652F\u6301\u5BFC\u51FA\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u662F\uFF0C\u652F\u6301\u5BFC\u51FAExcel\u3002"),
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-12-15</td><td${_scopeId}>-</td><td${_scopeId}>HZERO</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-12-10</td><td${_scopeId}>-</td><td${_scopeId}>HZERO</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFATerminalReportController</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-12-15"),
                createVNode("td", null, "-"),
                createVNode("td", null, "HZERO"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u95E8\u5E97\u533A\u57DF\u5206\u5E03\u62A5\u8868\u67E5\u8BE2\u63A5\u53E3")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u62A5\u8868/\u95E8\u5E97\u533A\u57DF\u5206\u5E03/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
