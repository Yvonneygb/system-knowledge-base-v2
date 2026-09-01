import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u6863\u6848/\u95E8\u5E97\u6863\u6848/index.md"}');
const _sfc_main = { name: "\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u6863\u6848/\u95E8\u5E97\u6863\u6848/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u7EF4\u62A4\u4EC0\u4E48</h2><p>\u95E8\u5E97\u6863\u6848\u662F\u95E8\u5E97\u7684\u57FA\u7840\u4E3B\u6570\u636E\uFF0C\u4F9B\u5404\u4E0B\u6E38\u6A21\u5757\u7EDF\u4E00\u5F15\u7528</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5H13V13.5H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M5.5 5.5H10.5M5.5 8H10.5M5.5 10.5H8.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u6863\u6848\u6765\u6E90</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u95E8\u5E97\u6863\u6848\u5982\u4F55\u751F\u6210</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u65B0\u5EFA\u7533\u8BF7</strong> \u2014 \u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u5EFA\u6863</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53D8\u66F4\u7533\u8BF7</strong> \u2014 \u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u6863\u6848</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6279\u91CF\u5BFC\u5165</strong> \u2014 \u901A\u8FC7\u5BFC\u5165\u65B9\u5F0F\u751F\u6210\u95E8\u5E97\u6863\u6848</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L12 5V11L8 14L4 11V5Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 7.5L7.5 9L10 6" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u5C40\u90E8\u7EF4\u62A4</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u76F4\u63A5\u53EF\u7EF4\u62A4\u7684\u8303\u56F4</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</strong> \u2014 \u8865\u5145\u95E8\u5E97\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u9762\u79EF\u53D8\u52A8\u8BF4\u660E</strong> \u2014 \u8BB0\u5F55\u95E8\u5E97\u9762\u79EF\u53D8\u52A8\u60C5\u51B5</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6838\u5FC3\u5C5E\u6027</strong> \u2014 \u7F16\u7801\u3001\u540D\u79F0\u3001\u7ECF\u9500\u5546\u7B49\u53D8\u66F4\u987B\u8D70\u53D8\u66F4\u7533\u8BF7\u6D41\u7A0B</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5F71\u54CD</span><h2>\u5F71\u54CD\u8303\u56F4</h2><p>\u95E8\u5E97\u6863\u6848\u88AB\u54EA\u4E9B\u4E0B\u6E38\u6A21\u5757\u5F15\u7528</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M6 2.5V5.5M10 2.5V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u53D8\u66F4\u4E0E\u88C5\u4FEE</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u3001\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6\u66F4\u65B0\u7B49\u6A21\u5757\u5F15\u7528\u95E8\u5E97\u6863\u6848\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5" fill="none" stroke="white" stroke-width="1.5"></rect><path d="M5.5 8L7.5 10L11 5.5" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u9A8C\u6536\u4E0E\u62A5\u9500</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u6D41\u7A0B\u5F15\u7528\u95E8\u5E97\u6863\u6848\u4FE1\u606F\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F97316,#FB923C)" })}"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H13V11H3Z" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path><path d="M5 7H11" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u95E8\u5934\u5C55\u677F</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u7B49\u6A21\u5757\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\u4FE1\u606F\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u6570\u636E\u539F\u5219\uFF1A</strong>\u95E8\u5E97\u6863\u6848\u662F\u4E0B\u6E38\u4E1A\u52A1\u5F15\u7528\u7684\u7EDF\u4E00\u57FA\u51C6\uFF0C\u6838\u5FC3\u5C5E\u6027\u4E00\u7ECF\u5EFA\u6863\u987B\u901A\u8FC7\u5BA1\u6279\u53D8\u66F4\uFF0C\u76F4\u63A5\u7EF4\u62A4\u4EC5\u9650\u8BF4\u660E\u7C7B\u4FE1\u606F\uFF0C\u786E\u4FDD\u6570\u636E\u4E00\u81F4\u4E0E\u53EF\u8FFD\u6EAF\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u95E8\u5E97\u6863\u6848 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u95E8\u5E97\u6863\u6848\u7EF4\u62A4\u2605 \u2192 \u7ED3\u675F\uFF08\u4E0A\u6E38\u7531\u65B0\u5EFA/\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u53CA\u5BFC\u5165\u751F\u6210\uFF0C\u4E0B\u6E38\u4F9B\u53D8\u66F4/\u88C5\u4FEE/\u62A5\u9500\u7B49\u6A21\u5757\u5F15\u7528\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="210" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="330" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7(\u5BA1\u6279\u901A\u8FC7)</text><rect x="480" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7(\u5BA1\u6279\u901A\u8FC7)</text><rect x="750" y="56" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="870" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u6863\u6848\u5BFC\u5165</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="545" y="150" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="175" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="190" x2="600" y2="220" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="470" y="220" width="260" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="244" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u95E8\u5E97\u6863\u6848\u7EF4\u62A4\u2605</text><text x="600" y="263" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u8BE2\xB7\u7EF4\u62A4\u8BF4\u660E/\u9762\u79EF\u53D8\u52A8</text><line x1="600" y1="274" x2="600" y2="304" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="304" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="329" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="344" x2="600" y2="384" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="384" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="406" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="280" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="380" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7</text><rect x="500" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6</text><rect x="720" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="820" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500</text><rect x="940" y="422" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="1040" y="445" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u4E3B\u6570\u636E\u8868\u65E0\u5BA1\u6279\u6D41\u7A0B"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u95E8\u5E97\u6863\u6848\u662F\u57FA\u7840\u4E3B\u6570\u636E\uFF0C\u4E0D\u6D89\u53CA\u5BA1\u6279\u6D41\u7A0B\uFF0C\u7531\u4E0A\u6E38\u7533\u8BF7\u5355\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210/\u66F4\u65B0</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u95E8\u5E97\u6863\u6848\u7531&quot;\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7&quot;\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7syncMktTerminal\u65B9\u6CD5\u81EA\u52A8\u751F\u6210</li><li${_scopeId}>\u95E8\u5E97\u6863\u6848\u7531&quot;\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7&quot;\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7onWfComplete\u65B9\u6CD5\u81EA\u52A8\u66F4\u65B0</li><li${_scopeId}>\u672C\u9875\u9762\u4EC5\u652F\u6301\u67E5\u8BE2\u548C\u8865\u5145\u4FE1\u606F\u7F16\u8F91\uFF0C\u4E0D\u652F\u6301\u65B0\u589E/\u5220\u9664</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u95E8\u5E97\u6863\u6848\u662F\u57FA\u7840\u4E3B\u6570\u636E\uFF0C\u4E0D\u6D89\u53CA\u5BA1\u6279\u6D41\u7A0B\uFF0C\u7531\u4E0A\u6E38\u7533\u8BF7\u5355\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210/\u66F4\u65B0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, '\u95E8\u5E97\u6863\u6848\u7531"\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7"\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7syncMktTerminal\u65B9\u6CD5\u81EA\u52A8\u751F\u6210'),
            createVNode("li", null, '\u95E8\u5E97\u6863\u6848\u7531"\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7"\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7onWfComplete\u65B9\u6CD5\u81EA\u52A8\u66F4\u65B0'),
            createVNode("li", null, "\u672C\u9875\u9762\u4EC5\u652F\u6301\u67E5\u8BE2\u548C\u8865\u5145\u4FE1\u606F\u7F16\u8F91\uFF0C\u4E0D\u652F\u6301\u65B0\u589E/\u5220\u9664")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u6570\u636E\u6743\u9650\u6309\u7EC4\u7EC7+\u7ECF\u9500\u5546\u9694\u79BB"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u67E5\u8BE2\u65F6\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\u548C\u7ECF\u9500\u5546\u7F16\u7801\u8FC7\u6EE4\uFF0C\u786E\u4FDD\u6570\u636E\u9694\u79BB</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>selectList\u65B9\u6CD5\uFF1Aentid\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7EC4\u7EC7ID\uFF0CcustCode\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801</li><li${_scopeId}>finFeeApplyLov\u65B9\u6CD5\uFF1A\u540C\u6837\u81EA\u52A8\u586B\u5145\u7EC4\u7EC7ID\u3001\u7ECF\u9500\u5546\u7F16\u7801\uFF0C\u5E76\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570</li><li${_scopeId}>\u9ED8\u8BA4\u6309terminalId\u964D\u5E8F\u6392\u5217</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u65F6\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\u548C\u7ECF\u9500\u5546\u7F16\u7801\u8FC7\u6EE4\uFF0C\u786E\u4FDD\u6570\u636E\u9694\u79BB")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "selectList\u65B9\u6CD5\uFF1Aentid\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7EC4\u7EC7ID\uFF0CcustCode\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801"),
            createVNode("li", null, "finFeeApplyLov\u65B9\u6CD5\uFF1A\u540C\u6837\u81EA\u52A8\u586B\u5145\u7EC4\u7EC7ID\u3001\u7ECF\u9500\u5546\u7F16\u7801\uFF0C\u5E76\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570"),
            createVNode("li", null, "\u9ED8\u8BA4\u6309terminalId\u964D\u5E8F\u6392\u5217")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u4FDD\u5B58\u4EC5\u652F\u6301\u5C40\u90E8\u66F4\u65B0"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u5B58\u63A5\u53E3\u4EC5\u66F4\u65B0\u8865\u5145\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0D\u652F\u6301\u5168\u5B57\u6BB5\u7F16\u8F91</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>save\u65B9\u6CD5\u5148\u6309\u4E3B\u952E\u67E5\u8BE2\uFF0C\u4E0D\u5B58\u5728\u629BCommonException(&quot;\u6570\u636E\u4E0D\u5B58\u5728&quot;)</li><li${_scopeId}>\u4EC5\u66F4\u65B0\u4E24\u4E2A\u5B57\u6BB5\uFF1AotherCondition\uFF08\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E\uFF09\u3001terminalAreaChange\uFF08\u95E8\u5E97\u9762\u79EF\u53D8\u52A8\u8BF4\u660E\uFF09</li><li${_scopeId}>\u4F7F\u7528updateByPrimaryKeySelective\u9009\u62E9\u6027\u66F4\u65B0</li><li${_scopeId}>\u6279\u91CF\u63D2\u5165\u9644\u4EF6\u5173\u7CFB\uFF08ObjAttachRel\uFF09</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u63A5\u53E3\u4EC5\u66F4\u65B0\u8865\u5145\u4FE1\u606F\u5B57\u6BB5\uFF0C\u4E0D\u652F\u6301\u5168\u5B57\u6BB5\u7F16\u8F91")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, 'save\u65B9\u6CD5\u5148\u6309\u4E3B\u952E\u67E5\u8BE2\uFF0C\u4E0D\u5B58\u5728\u629BCommonException("\u6570\u636E\u4E0D\u5B58\u5728")'),
            createVNode("li", null, "\u4EC5\u66F4\u65B0\u4E24\u4E2A\u5B57\u6BB5\uFF1AotherCondition\uFF08\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E\uFF09\u3001terminalAreaChange\uFF08\u95E8\u5E97\u9762\u79EF\u53D8\u52A8\u8BF4\u660E\uFF09"),
            createVNode("li", null, "\u4F7F\u7528updateByPrimaryKeySelective\u9009\u62E9\u6027\u66F4\u65B0"),
            createVNode("li", null, "\u6279\u91CF\u63D2\u5165\u9644\u4EF6\u5173\u7CFB\uFF08ObjAttachRel\uFF09")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1ALOV\u63A5\u53E3\u652F\u6301\u88C5\u4FEE\u7533\u8BF7\u548C\u95E8\u5934\u62A5\u9500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4E3A\u4E0B\u6E38\u6A21\u5757\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9LOV\u63A5\u53E3</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>finFeeApplyLov\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6\u66F4\u65B0\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u6CE8\u5165advancePermissibleTime\uFF08\u88C5\u4FEE\u63D0\u524D\u5929\u6570\uFF09</li><li${_scopeId}>custDhReimburseHead\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u76F4\u63A5\u900F\u4F20\u67E5\u8BE2</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4E3A\u4E0B\u6E38\u6A21\u5757\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9LOV\u63A5\u53E3")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "finFeeApplyLov\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6\u66F4\u65B0\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u6CE8\u5165advancePermissibleTime\uFF08\u88C5\u4FEE\u63D0\u524D\u5929\u6570\uFF09"),
            createVNode("li", null, "custDhReimburseHead\uFF1A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u7533\u8BF7\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u76F4\u63A5\u900F\u4F20\u67E5\u8BE2")
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
        _push2(`<h4${_scopeId}>\u95E8\u5E97\u6863\u6848\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97ID</td><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>\u9690\u85CF</td><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUST_CODE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>TERMINAL_TYPE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u4E13\u5356/2=\u5546\u8D85/3=\u5BB6\u88C5/4=\u793E\u533A/5=\u4E61\u9547</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>TERMINAL_AREA</td><td${_scopeId}>\u6570\u503C</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u72B6\u6001</td><td${_scopeId}>TERMINAL_STAT</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1=\u76F4\u8425\u4E13\u8425/2=\u7ECF\u9500\u4E13\u8425/3=\u5206\u9500</td></tr><tr${_scopeId}><td${_scopeId}>\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>DECORATION_STYLE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E97\u9762\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>FIXUP_GRADE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>LOV\u7FFB\u8BD1(AE.FIXUP_GRADE)</td></tr><tr${_scopeId}><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>USABLE</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>2=\u6709\u6548</td></tr><tr${_scopeId}><td${_scopeId}>\u7701\u4EFD\u540D\u79F0</td><td${_scopeId}>PROVINCE_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u7701\u4EFD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u57CE\u5E02\u540D\u79F0</td><td${_scopeId}>CITY_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u57CE\u5E02</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u533A\u53BF\u540D\u79F0</td><td${_scopeId}>COUNTY_AREANAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u533A\u53BF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>ADDR</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u5E97\u65E5\u671F</td><td${_scopeId}>IN_SHOP_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u5F00\u5E97\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u5E97\u65E5\u671F</td><td${_scopeId}>SHUT_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u64A4\u5E97\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u6700\u65B0\u88C5\u4FEE\u65E5\u671F</td><td${_scopeId}>LATEST_DECORATION_DATE</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u6700\u65B0\u88C5\u4FEE\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u957F\u59D3\u540D</td><td${_scopeId}>SORE_MANAGERS_NAME</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E97\u957F\u59D3\u540D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u957F\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>SORE_MANAGERS_TEL</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u5E97\u957F\u8054\u7CFB\u7535\u8BDD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</td><td${_scopeId}>OTHER_CONDITION</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9762\u79EF\u53D8\u52A8\u8BF4\u660E</td><td${_scopeId}>TERMINAL_AREA_CHANGE</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u9762\u79EF\u53D8\u52A8\u8BF4\u660E</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>NOTE</td><td${_scopeId}>\u6587\u672C\u57DF</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>CREATOR</td><td${_scopeId}>\u6587\u672C</td><td${_scopeId}>\u521B\u5EFA\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C</td></tr><tr${_scopeId}><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>\u65E5\u671F</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C</td></tr></tbody></table><h4${_scopeId}>\u5176\u4ED6\u6309\u94AE</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\u5217\u8868</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528GET /mkt-terminals\uFF0C\u6309\u7EC4\u7EC7+\u7ECF\u9500\u5546\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u8865\u5145\u4FE1\u606F</td><td${_scopeId}>\u8BE6\u60C5\u9875</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u8C03\u7528POST /mkt-terminals\uFF0C\u66F4\u65B0otherCondition\u548CterminalAreaChange+\u9644\u4EF6</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u8C03\u7528GET <code${_scopeId}>/v1/{organizationId}/mkt-terminals</code> \u63A5\u53E3</li><li${_scopeId}>\u81EA\u52A8\u586B\u5145entid\uFF08\u5F53\u524D\u7EC4\u7EC7ID\uFF09\u548CcustCode\uFF08\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801\uFF09</li><li${_scopeId}>\u4F7F\u7528@ProcessLovValue\u7FFB\u8BD1LOV\u5B57\u6BB5</li><li${_scopeId}>\u9ED8\u8BA4\u6309terminalId\u964D\u5E8F\u6392\u5217</li></ul><h4${_scopeId}>\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u4FDD\u5B58\u95E8\u5E97\u8865\u5145\u4FE1\u606F</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A</li><li${_scopeId}>\u8C03\u7528POST <code${_scopeId}>/v1/{organizationId}/mkt-terminals</code> \u63A5\u53E3</li><li${_scopeId}>\u5148\u6309\u4E3B\u952E\u67E5\u8BE2\uFF0C\u4E0D\u5B58\u5728\u629BCommonException(&quot;\u6570\u636E\u4E0D\u5B58\u5728&quot;)</li><li${_scopeId}>\u4EC5\u66F4\u65B0otherCondition\u548CterminalAreaChange\u4E24\u4E2A\u5B57\u6BB5</li><li${_scopeId}>\u6279\u91CF\u63D2\u5165\u9644\u4EF6\u5173\u7CFB</li></ul>`);
      } else {
        return [
          createVNode("h4", null, "\u95E8\u5E97\u6863\u6848\u5217\u8868"),
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
                createVNode("td", null, "\u95E8\u5E97ID"),
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "\u9690\u85CF"),
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "TERMINAL_TYPE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u4E13\u5356/2=\u5546\u8D85/3=\u5BB6\u88C5/4=\u793E\u533A/5=\u4E61\u9547")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "TERMINAL_AREA"),
                createVNode("td", null, "\u6570\u503C"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u72B6\u6001"),
                createVNode("td", null, "TERMINAL_STAT"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1=\u76F4\u8425\u4E13\u8425/2=\u7ECF\u9500\u4E13\u8425/3=\u5206\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "DECORATION_STYLE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E97\u9762\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "FIXUP_GRADE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "LOV\u7FFB\u8BD1(AE.FIXUP_GRADE)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "USABLE"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "2=\u6709\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7701\u4EFD\u540D\u79F0"),
                createVNode("td", null, "PROVINCE_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u7701\u4EFD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u57CE\u5E02\u540D\u79F0"),
                createVNode("td", null, "CITY_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u57CE\u5E02"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u533A\u53BF\u540D\u79F0"),
                createVNode("td", null, "COUNTY_AREANAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u533A\u53BF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "ADDR"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u5E97\u65E5\u671F"),
                createVNode("td", null, "IN_SHOP_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u5F00\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u5E97\u65E5\u671F"),
                createVNode("td", null, "SHUT_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u64A4\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6700\u65B0\u88C5\u4FEE\u65E5\u671F"),
                createVNode("td", null, "LATEST_DECORATION_DATE"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u6700\u65B0\u88C5\u4FEE\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u957F\u59D3\u540D"),
                createVNode("td", null, "SORE_MANAGERS_NAME"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E97\u957F\u59D3\u540D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u957F\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "SORE_MANAGERS_TEL"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u5E97\u957F\u8054\u7CFB\u7535\u8BDD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E"),
                createVNode("td", null, "OTHER_CONDITION"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF\u53D8\u52A8\u8BF4\u660E"),
                createVNode("td", null, "TERMINAL_AREA_CHANGE"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u9762\u79EF\u53D8\u52A8\u8BF4\u660E"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "\u6587\u672C\u57DF"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "CREATOR"),
                createVNode("td", null, "\u6587\u672C"),
                createVNode("td", null, "\u521B\u5EFA\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "CREATE_TIME"),
                createVNode("td", null, "\u65E5\u671F"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8D4B\u503C")
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
                createVNode("td", null, "\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\u5217\u8868"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528GET /mkt-terminals\uFF0C\u6309\u7EC4\u7EC7+\u7ECF\u9500\u5546\u8FC7\u6EE4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u4FDD\u5B58\u8865\u5145\u4FE1\u606F"),
                createVNode("td", null, "\u8BE6\u60C5\u9875"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u8C03\u7528POST /mkt-terminals\uFF0C\u66F4\u65B0otherCondition\u548CterminalAreaChange+\u9644\u4EF6")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u67E5\u8BE2\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\u5217\u8868")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u8C03\u7528GET "),
              createVNode("code", null, "/v1/{organizationId}/mkt-terminals"),
              createTextVNode(" \u63A5\u53E3")
            ]),
            createVNode("li", null, "\u81EA\u52A8\u586B\u5145entid\uFF08\u5F53\u524D\u7EC4\u7EC7ID\uFF09\u548CcustCode\uFF08\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801\uFF09"),
            createVNode("li", null, "\u4F7F\u7528@ProcessLovValue\u7FFB\u8BD1LOV\u5B57\u6BB5"),
            createVNode("li", null, "\u9ED8\u8BA4\u6309terminalId\u964D\u5E8F\u6392\u5217")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u4FDD\u5B58\uFF08\u8BE6\u60C5\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u95E8\u5E97\u8865\u5145\u4FE1\u606F")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, [
              createTextVNode("\u8C03\u7528POST "),
              createVNode("code", null, "/v1/{organizationId}/mkt-terminals"),
              createTextVNode(" \u63A5\u53E3")
            ]),
            createVNode("li", null, '\u5148\u6309\u4E3B\u952E\u67E5\u8BE2\uFF0C\u4E0D\u5B58\u5728\u629BCommonException("\u6570\u636E\u4E0D\u5B58\u5728")'),
            createVNode("li", null, "\u4EC5\u66F4\u65B0otherCondition\u548CterminalAreaChange\u4E24\u4E2A\u5B57\u6BB5"),
            createVNode("li", null, "\u6279\u91CF\u63D2\u5165\u9644\u4EF6\u5173\u7CFB")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u540E\u7AEF\u63A5\u53E3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u63A5\u53E3\u540D\u79F0</th><th${_scopeId}>\u8BF7\u6C42\u65B9\u5F0F</th><th${_scopeId}>\u63A5\u53E3\u8DEF\u5F84</th><th${_scopeId}>\u6743\u9650</th><th${_scopeId}>\u8BF4\u660E</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7F51\u70B9\u8D44\u6599\u5217\u8868</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/mkt-terminals\`</td><td${_scopeId}>permissionLogin=true</td><td${_scopeId}>\u5206\u9875\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\uFF0C\u81EA\u52A8\u6309\u7EC4\u7EC7+\u7ECF\u9500\u5546\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u70B9\u8D44\u6599\u4FDD\u5B58</td><td${_scopeId}>POST</td><td${_scopeId}>\`/v1/{organizationId}/mkt-terminals\`</td><td${_scopeId}>permissionLogin=true</td><td${_scopeId}>\u4FDD\u5B58\u8865\u5145\u4FE1\u606F\uFF08otherCondition+terminalAreaChange+\u9644\u4EF6\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7LOV</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/mkt-terminals/fin-fee-apply-lov\`</td><td${_scopeId}>permissionLogin=true</td><td${_scopeId}>\u88C5\u4FEE\u7533\u8BF7\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5934\u62A5\u9500\u95E8\u5E97LOV</td><td${_scopeId}>GET</td><td${_scopeId}>\`/v1/{organizationId}/mkt-terminals/cust-dh-reimburse\`</td><td${_scopeId}>permissionLogin=true</td><td${_scopeId}>\u95E8\u5934\u5C55\u677F\u62A5\u9500\u65F6\u9009\u62E9\u95E8\u5E97</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u7F51\u70B9\u8D44\u6599\u5217\u8868"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/mkt-terminals`"),
                createVNode("td", null, "permissionLogin=true"),
                createVNode("td", null, "\u5206\u9875\u67E5\u8BE2\u95E8\u5E97\u6863\u6848\uFF0C\u81EA\u52A8\u6309\u7EC4\u7EC7+\u7ECF\u9500\u5546\u8FC7\u6EE4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u70B9\u8D44\u6599\u4FDD\u5B58"),
                createVNode("td", null, "POST"),
                createVNode("td", null, "`/v1/{organizationId}/mkt-terminals`"),
                createVNode("td", null, "permissionLogin=true"),
                createVNode("td", null, "\u4FDD\u5B58\u8865\u5145\u4FE1\u606F\uFF08otherCondition+terminalAreaChange+\u9644\u4EF6\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7LOV"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/mkt-terminals/fin-fee-apply-lov`"),
                createVNode("td", null, "permissionLogin=true"),
                createVNode("td", null, "\u88C5\u4FEE\u7533\u8BF7\u65F6\u9009\u62E9\u95E8\u5E97\uFF0C\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5934\u62A5\u9500\u95E8\u5E97LOV"),
                createVNode("td", null, "GET"),
                createVNode("td", null, "`/v1/{organizationId}/mkt-terminals/cust-dh-reimburse`"),
                createVNode("td", null, "permissionLogin=true"),
                createVNode("td", null, "\u95E8\u5934\u5C55\u677F\u62A5\u9500\u65F6\u9009\u62E9\u95E8\u5E97")
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
        _push2(`<blockquote${_scopeId}>\u95E8\u5E97\u6863\u6848\u4E3A\u4E3B\u6570\u636E\u8868\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002\u95E8\u5E97\u72B6\u6001\uFF08TERMINAL_STAT\uFF09\u7531\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\uFF1A1=\u8FD0\u8425\u4E2D \u2192 2=\u64A4\u5E97\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u95E8\u5E97\u6863\u6848\u4E3A\u4E3B\u6570\u636E\u8868\uFF0C\u65E0\u72B6\u6001\u6D41\u8F6C\u3002\u95E8\u5E97\u72B6\u6001\uFF08TERMINAL_STAT\uFF09\u7531\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\uFF1A1=\u8FD0\u8425\u4E2D \u2192 2=\u64A4\u5E97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4E0A\u6E38\u4F9D\u8D56" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u4E0A\u6E38\u6A21\u5757</th><th${_scopeId}>\u4F9D\u8D56\u7C7B\u578B</th><th${_scopeId}>\u4F9D\u8D56\u8BF4\u660E</th><th${_scopeId}>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7syncMktTerminal\u751F\u6210\u95E8\u5E97\u6863\u6848</td><td${_scopeId}>\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u5DF2\u5BA1\u6279\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u95E8\u5E97\u6863\u6848</td><td${_scopeId}>\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5DF2\u5BA1\u6279\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E3B\u6570\u636E</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u63D0\u4F9B\u7ECF\u9500\u5546\u4FE1\u606F</td><td${_scopeId}>\u7ECF\u9500\u5546\u5DF2\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</td><td${_scopeId}>\u6570\u636E\u6765\u6E90</td><td${_scopeId}>\u63D0\u4F9B\u4E8B\u4E1A\u90E8\u4FE1\u606F</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u5DF2\u914D\u7F6E</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7syncMktTerminal\u751F\u6210\u95E8\u5E97\u6863\u6848"),
                createVNode("td", null, "\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u5DF2\u5BA1\u6279\u901A\u8FC7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u540E\u66F4\u65B0\u95E8\u5E97\u6863\u6848"),
                createVNode("td", null, "\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7\u5DF2\u5BA1\u6279\u901A\u8FC7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546\u4E3B\u6570\u636E"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u63D0\u4F9B\u7ECF\u9500\u5546\u4FE1\u606F"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u5DF2\u521B\u5EFA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E"),
                createVNode("td", null, "\u6570\u636E\u6765\u6E90"),
                createVNode("td", null, "\u63D0\u4F9B\u4E8B\u4E1A\u90E8\u4FE1\u606F"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u5DF2\u914D\u7F6E")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\uFF1A\u901A\u8FC7finFeeApplyLov\u63A5\u53E3\u9009\u62E9\u95E8\u5E97</li><li${_scopeId}>\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\uFF1A\u57FA\u4E8E\u95E8\u5E97\u6863\u6848\u8FDB\u884C\u9A8C\u6536\u62A5\u9500</li><li${_scopeId}>\u95E8\u5934\u5C55\u677F\u62A5\u9500\uFF1A\u901A\u8FC7custDhReimburseHead\u63A5\u53E3\u9009\u62E9\u95E8\u5E97</li><li${_scopeId}>\u95E8\u5E97\u62A5\u8868\uFF1A\u6240\u6709\u95E8\u5E97\u62A5\u8868\u7684\u6570\u636E\u57FA\u7840</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\uFF1A\u901A\u8FC7finFeeApplyLov\u63A5\u53E3\u9009\u62E9\u95E8\u5E97"),
            createVNode("li", null, "\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\uFF1A\u57FA\u4E8E\u95E8\u5E97\u6863\u6848\u8FDB\u884C\u9A8C\u6536\u62A5\u9500"),
            createVNode("li", null, "\u95E8\u5934\u5C55\u677F\u62A5\u9500\uFF1A\u901A\u8FC7custDhReimburseHead\u63A5\u53E3\u9009\u62E9\u95E8\u5E97"),
            createVNode("li", null, "\u95E8\u5E97\u62A5\u8868\uFF1A\u6240\u6709\u95E8\u5E97\u62A5\u8868\u7684\u6570\u636E\u57FA\u7840")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "MKT_TERMINAL\uFF08\u95E8\u5E97\u6863\u6848\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>TERMINAL_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97ID(\u4E3B\u952E)</td><td${_scopeId}>\u95E8\u5E97ID</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>\u95E8\u5E97\u7F16\u7801</td><td${_scopeId}>barCode+divisionCode+5\u4F4DRedis\u6D41\u6C34\u53F7</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u95E8\u5E97\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>CUST_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_TYPE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>\u95E8\u5E97\u7C7B\u578B</td><td${_scopeId}>1=\u4E13\u5356/2=\u5546\u8D85/3=\u5BB6\u88C5/4=\u793E\u533A/5=\u4E61\u9547</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_AREA</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u95E8\u5E97\u9762\u79EF</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_STAT</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97\u72B6\u6001</td><td${_scopeId}>\u95E8\u5E97\u72B6\u6001</td><td${_scopeId}>1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_CLASS</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>\u7ECF\u8425\u5C5E\u6027</td><td${_scopeId}>1=\u76F4\u8425\u4E13\u8425/2=\u7ECF\u9500\u4E13\u8425/3=\u5206\u9500</td></tr><tr${_scopeId}><td${_scopeId}>DECORATION_STYLE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>\u88C5\u4FEE\u98CE\u683C</td><td${_scopeId}>LOV\u7FFB\u8BD1</td></tr><tr${_scopeId}><td${_scopeId}>FIXUP_GRADE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>LOV\u7FFB\u8BD1(AE.FIXUP_GRADE)</td></tr><tr${_scopeId}><td${_scopeId}>USABLE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>\u6709\u6548\u72B6\u6001</td><td${_scopeId}>2=\u6709\u6548</td></tr><tr${_scopeId}><td${_scopeId}>PROVINCE_AREANAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u7701\u4EFD\u540D\u79F0</td><td${_scopeId}>\u7701\u4EFD\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>CITY_AREANAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u57CE\u5E02\u540D\u79F0</td><td${_scopeId}>\u57CE\u5E02\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>COUNTY_AREANAME</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u533A\u53BF\u540D\u79F0</td><td${_scopeId}>\u533A\u53BF\u540D\u79F0</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>ADDR</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>IN_SHOP_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5F00\u5E97\u65E5\u671F</td><td${_scopeId}>\u5F00\u5E97\u65E5\u671F</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr><tr${_scopeId}><td${_scopeId}>SHUT_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u64A4\u5E97\u65E5\u671F</td><td${_scopeId}>\u64A4\u5E97\u65E5\u671F</td><td${_scopeId}>\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>OTHER_CONDITION</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</td><td${_scopeId}>\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>TERMINAL_AREA_CHANGE</td><td${_scopeId}>VARCHAR2</td><td${_scopeId}>\u9762\u79EF\u53D8\u52A8\u8BF4\u660E</td><td${_scopeId}>\u9762\u79EF\u53D8\u52A8\u8BF4\u660E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>ORGANIZATION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>-</td><td${_scopeId}>\u79DF\u6237\u7EC4\u7EC7\u6807\u8BC6</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4F01\u4E1AID</td><td${_scopeId}>-</td><td${_scopeId}>LOV\u7FFB\u8BD1(AE.ITEM_ORGANIZATION)</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u4ECE\u7533\u8BF7\u5355\u540C\u6B65</td></tr></tbody></table>`);
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
                createVNode("td", null, "TERMINAL_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97ID(\u4E3B\u952E)"),
                createVNode("td", null, "\u95E8\u5E97ID"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "\u95E8\u5E97\u7F16\u7801"),
                createVNode("td", null, "barCode+divisionCode+5\u4F4DRedis\u6D41\u6C34\u53F7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u95E8\u5E97\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7ECF\u9500\u5546ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_CODE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUST_NAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_TYPE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "\u95E8\u5E97\u7C7B\u578B"),
                createVNode("td", null, "1=\u4E13\u5356/2=\u5546\u8D85/3=\u5BB6\u88C5/4=\u793E\u533A/5=\u4E61\u9547")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_AREA"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u95E8\u5E97\u9762\u79EF"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_STAT"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97\u72B6\u6001"),
                createVNode("td", null, "\u95E8\u5E97\u72B6\u6001"),
                createVNode("td", null, "1=\u8FD0\u8425\u4E2D, 2=\u64A4\u5E97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_CLASS"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "\u7ECF\u8425\u5C5E\u6027"),
                createVNode("td", null, "1=\u76F4\u8425\u4E13\u8425/2=\u7ECF\u9500\u4E13\u8425/3=\u5206\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DECORATION_STYLE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "\u88C5\u4FEE\u98CE\u683C"),
                createVNode("td", null, "LOV\u7FFB\u8BD1")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "FIXUP_GRADE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "LOV\u7FFB\u8BD1(AE.FIXUP_GRADE)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "USABLE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "\u6709\u6548\u72B6\u6001"),
                createVNode("td", null, "2=\u6709\u6548")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROVINCE_AREANAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u7701\u4EFD\u540D\u79F0"),
                createVNode("td", null, "\u7701\u4EFD\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CITY_AREANAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u57CE\u5E02\u540D\u79F0"),
                createVNode("td", null, "\u57CE\u5E02\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COUNTY_AREANAME"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u533A\u53BF\u540D\u79F0"),
                createVNode("td", null, "\u533A\u53BF\u540D\u79F0"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ADDR"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "\u95E8\u5E97\u8BE6\u7EC6\u5730\u5740"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_SHOP_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5F00\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u5F00\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SHUT_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u64A4\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u64A4\u5E97\u65E5\u671F"),
                createVNode("td", null, "\u53D8\u66F4\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\u65F6\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "OTHER_CONDITION"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E"),
                createVNode("td", null, "\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TERMINAL_AREA_CHANGE"),
                createVNode("td", null, "VARCHAR2"),
                createVNode("td", null, "\u9762\u79EF\u53D8\u52A8\u8BF4\u660E"),
                createVNode("td", null, "\u9762\u79EF\u53D8\u52A8\u8BF4\u660E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF08\u8865\u5145\u4FE1\u606F\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORGANIZATION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u79DF\u6237\u7EC4\u7EC7\u6807\u8BC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4F01\u4E1AID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "LOV\u7FFB\u8BD1(AE.ITEM_ORGANIZATION)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u4ECE\u7533\u8BF7\u5355\u540C\u6B65")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u95E8\u5E97\u6863\u6848\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97ID</td><td${_scopeId}>\u9AD8</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95191\u6570\u636E\u4E0D\u5B58\u5728)</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u4E0E\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95192\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25)</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u95E8\u5E97\u6863\u6848\u64CD\u4F5C\u6743\u9650\u6216\u6570\u636E\u6743\u9650\u9694\u79BB</td><td${_scopeId}>\u4E2D</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95193\u6743\u9650\u4E0D\u8DB3)</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u65E0\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u5F53\u524D\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u65E0\u95E8\u5E97\u6863\u6848\u6570\u636E</td><td${_scopeId}>\u4F4E</td><td${_scopeId}>[\u67E5\u770B](#\u62A5\u95194\u67E5\u8BE2\u65E0\u6570\u636E)</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u4FDD\u5B58&quot;\u6309\u94AE\u8865\u5145\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E/\u9762\u79EF\u53D8\u52A8\u8BF4\u660E\u65F6\uFF0C\u6309terminalId\u8C03\u7528selectByPrimaryKey\u67E5\u8BE2MKT_TERMINAL\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4FDD\u5B58\u63A5\u53E3\u4EC5\u652F\u6301\u5C40\u90E8\u66F4\u65B0otherCondition\u548CterminalAreaChange\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u524D\u7F6E\u9700\u5148\u6821\u9A8C\u95E8\u5E97\u6863\u6848\u5B58\u5728\u3002\u82E5\u95E8\u5E97\u6863\u6848\u5728\u7F16\u8F91\u671F\u95F4\u88AB\u4E0A\u6E38&quot;\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7&quot;\u6D41\u7A0B\u64A4\u5E97\u5220\u9664\uFF08\u5B9E\u9645\u4E3A\u72B6\u6001\u7F6E\u4E3A\u64A4\u5E97\u800C\u975E\u7269\u7406\u5220\u9664\uFF09\u3001terminalId\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u4E86\u5DF2\u5931\u6548ID\uFF09\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u629BCommonException\u4E2D\u65AD\u4FDD\u5B58\u3002\u9700\u6838\u67E5\u95E8\u5E97\u6863\u6848\u662F\u5426\u4ECD\u5904\u4E8E\u6709\u6548\u8FD0\u8425\u72B6\u6001\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_name       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_stat       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.usable              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6709\u6548\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.update_time         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   mkt_terminal t</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  t.terminal_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4F20\u5165\u7684terminalId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    (t.usable </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_stat </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.update_time </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u524D\u7AEF\u8C03\u7528\u95E8\u5E97\u6863\u6848\u63A5\u53E3\uFF08\u67E5\u8BE2\u5217\u8868\u3001\u4FDD\u5B58\u8865\u5145\u4FE1\u606F\u3001LOV\u9009\u62E9\uFF09\u65F6\uFF0C\u8BF7\u6C42\u8D85\u65F6\u6216\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7axios\u8BF7\u6C42\u540E\u7AEFAPI\uFF08/v1/{organizationId}/mkt-terminals\u3001fin-fee-apply-lov\u3001cust-dh-reimburse\u7B49\uFF09\u3002\u82E5\u540E\u7AEFae-business\u670D\u52A1\u672A\u542F\u52A8\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u7F51\u5173\u8D85\u65F6\u3001\u6216\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8017\u5C3D\u5BFC\u81F4\u8BF7\u6C42\u5806\u79EF\uFF0Caxios\u6355\u83B7\u7F51\u7EDC\u5F02\u5E38\uFF0C\u524D\u7AEF\u5C55\u793A\u901A\u7528\u9519\u8BEF\u63D0\u793A\uFF0C\u5217\u8868\u6570\u636E\u65E0\u6CD5\u52A0\u8F7D\u6216\u4FDD\u5B58\u64CD\u4F5C\u5931\u8D25\u3002\u9700\u6838\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E\u53CA\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u670D\u52A1\u8FDE\u901A\u6027\u68C0\u67E5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u68C0\u67E5\u9879,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u6863\u6848\u603B\u8BB0\u5F55\u6570,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>MAX</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(t.update_time) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   mkt_terminal t</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  t.usable </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5F53\u524D\u7528\u6237\u65E0\u95E8\u5E97\u6863\u6848\u76F8\u5173\u64CD\u4F5C\u6743\u9650\uFF08\u67E5\u8BE2/\u4FDD\u5B58/LOV\u9009\u62E9\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7permissionLogin=true\u8FDB\u884C\u767B\u5F55\u6821\u9A8C\uFF0CselectList\u65B9\u6CD5\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF08entid\uFF09\u548C\u7ECF\u9500\u5546\u7F16\u7801\uFF08custCode\uFF09\u8FC7\u6EE4\u6570\u636E\u5B9E\u73B0\u6570\u636E\u6743\u9650\u9694\u79BB\u3002\u82E5\u7528\u6237\u89D2\u8272\u672A\u5206\u914D\u95E8\u5E97\u6863\u6848\u83DC\u5355\u6743\u9650\u3001\u6743\u9650\u7801\u914D\u7F6E\u7F3A\u5931\u3001\u6216\u7EC4\u7EC7ID/\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u5339\u914D\u5BFC\u81F4\u6570\u636E\u6743\u9650\u9694\u79BB\u540E\u65E0\u53EF\u89C1\u6570\u636E\uFF0C\u63A5\u53E3\u8FD4\u56DE403/401\u6216\u7A7A\u5217\u8868\u3002\u9700\u6838\u67E5\u7528\u6237\u89D2\u8272\u6743\u9650\u914D\u7F6E\u53CA\u7EC4\u7EC7\u6570\u636E\u6743\u9650\u3001\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u5173\u8054\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_name       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.cust_code           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.entid               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4F01\u4E1AID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.organization_id     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7EC4\u7EC7ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   mkt_terminal t</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  t.organization_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    t.cust_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u67E5\u8BE2\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8FDB\u5165\u95E8\u5E97\u6863\u6848\u5217\u8868\u9875\u6216\u8C03\u7528LOV\u63A5\u53E3\u67E5\u8BE2\u65F6\uFF0C\u6309\u5F53\u524D\u7EC4\u7EC7ID\u548C\u7ECF\u9500\u5546\u7F16\u7801\u8FC7\u6EE4\u540E\u8FD4\u56DE\u7A7A\u5217\u8868</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AselectList\u65B9\u6CD5\u5728entid\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7EC4\u7EC7ID\u3001custCode\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801\uFF0C\u6309terminalId\u964D\u5E8F\u6392\u5217\u3002\u82E5\u5F53\u524D\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u786E\u5B9E\u65E0\u95E8\u5E97\u6863\u6848\uFF08\u5982\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u672A\u5BA1\u6279\u901A\u8FC7\u3001\u95E8\u5E97\u6863\u6848\u5747\u88AB\u64A4\u5E97terminal_stat=2\u3001\u6216\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u672A\u5173\u8054\u95E8\u5E97\uFF09\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u5217\u8868\uFF0C\u524D\u7AEF\u5C55\u793A\u7A7A\u8868\u683C\u3002\u6B64\u4E3A\u6B63\u5E38\u4E1A\u52A1\u60C5\u51B5\u800C\u975E\u9519\u8BEF\uFF0C\u4F46\u7528\u6237\u53EF\u80FD\u8BEF\u5224\u4E3A\u6545\u969C\u3002\u9700\u6838\u67E5\u8BE5\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u95E8\u5E97\u6863\u6848\u662F\u5426\u5DF2\u5EFA\u7ACB\u53CA\u6709\u6548\u72B6\u6001\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_id         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_code       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_name       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.cust_code           </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7ECF\u9500\u5546\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.terminal_stat       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.usable              </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6709\u6548\u72B6\u6001,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.entid               </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4F01\u4E1AID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         t.organization_id     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7EC4\u7EC7ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   mkt_terminal t</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  t.organization_id </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    t.cust_code </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER  BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> t.terminal_id </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u6570\u636E\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u95E8\u5E97\u6863\u6848\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97ID"),
                createVNode("td", null, "\u9AD8"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95191\u6570\u636E\u4E0D\u5B58\u5728)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u4E0E\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95192\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u95E8\u5E97\u6863\u6848\u64CD\u4F5C\u6743\u9650\u6216\u6570\u636E\u6743\u9650\u9694\u79BB"),
                createVNode("td", null, "\u4E2D"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95193\u6743\u9650\u4E0D\u8DB3)")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u67E5\u8BE2\u65E0\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u65E0\u95E8\u5E97\u6863\u6848\u6570\u636E"),
                createVNode("td", null, "\u4F4E"),
                createVNode("td", null, "[\u67E5\u770B](#\u62A5\u95194\u67E5\u8BE2\u65E0\u6570\u636E)")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u6570\u636E\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u70B9\u51FB"\u4FDD\u5B58"\u6309\u94AE\u8865\u5145\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E/\u9762\u79EF\u53D8\u52A8\u8BF4\u660E\u65F6\uFF0C\u6309terminalId\u8C03\u7528selectByPrimaryKey\u67E5\u8BE2MKT_TERMINAL\u8FD4\u56DEnull')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u4FDD\u5B58\u63A5\u53E3\u4EC5\u652F\u6301\u5C40\u90E8\u66F4\u65B0otherCondition\u548CterminalAreaChange\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u524D\u7F6E\u9700\u5148\u6821\u9A8C\u95E8\u5E97\u6863\u6848\u5B58\u5728\u3002\u82E5\u95E8\u5E97\u6863\u6848\u5728\u7F16\u8F91\u671F\u95F4\u88AB\u4E0A\u6E38"\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7"\u6D41\u7A0B\u64A4\u5E97\u5220\u9664\uFF08\u5B9E\u9645\u4E3A\u72B6\u6001\u7F6E\u4E3A\u64A4\u5E97\u800C\u975E\u7269\u7406\u5220\u9664\uFF09\u3001terminalId\u4F20\u503C\u9519\u8BEF\uFF08\u5982\u524D\u7AEF\u7F13\u5B58\u4E86\u5DF2\u5931\u6548ID\uFF09\u3001\u6216\u5E76\u53D1\u573A\u666F\u4E0B\u88AB\u6E05\u7406\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF0C\u629BCommonException\u4E2D\u65AD\u4FDD\u5B58\u3002\u9700\u6838\u67E5\u95E8\u5E97\u6863\u6848\u662F\u5426\u4ECD\u5904\u4E8E\u6709\u6548\u8FD0\u8425\u72B6\u6001\u3002')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_name       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_stat       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.usable              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6709\u6548\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.update_time         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   mkt_terminal t")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  t.terminal_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4F20\u5165\u7684terminalId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    (t.usable "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_stat "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.update_time "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8C03\u7528\u95E8\u5E97\u6863\u6848\u63A5\u53E3\uFF08\u67E5\u8BE2\u5217\u8868\u3001\u4FDD\u5B58\u8865\u5145\u4FE1\u606F\u3001LOV\u9009\u62E9\uFF09\u65F6\uFF0C\u8BF7\u6C42\u8D85\u65F6\u6216\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7axios\u8BF7\u6C42\u540E\u7AEFAPI\uFF08/v1/{organizationId}/mkt-terminals\u3001fin-fee-apply-lov\u3001cust-dh-reimburse\u7B49\uFF09\u3002\u82E5\u540E\u7AEFae-business\u670D\u52A1\u672A\u542F\u52A8\u3001\u7F51\u7EDC\u4E2D\u65AD\u3001\u7F51\u5173\u8D85\u65F6\u3001\u6216\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u8017\u5C3D\u5BFC\u81F4\u8BF7\u6C42\u5806\u79EF\uFF0Caxios\u6355\u83B7\u7F51\u7EDC\u5F02\u5E38\uFF0C\u524D\u7AEF\u5C55\u793A\u901A\u7528\u9519\u8BEF\u63D0\u793A\uFF0C\u5217\u8868\u6570\u636E\u65E0\u6CD5\u52A0\u8F7D\u6216\u4FDD\u5B58\u64CD\u4F5C\u5931\u8D25\u3002\u9700\u6838\u67E5\u540E\u7AEF\u670D\u52A1\u5065\u5EB7\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E\u53CA\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3002")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u670D\u52A1\u8FDE\u901A\u6027\u68C0\u67E5"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u68C0\u67E5\u9879,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u6863\u6848\u603B\u8BB0\u5F55\u6570,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "MAX"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(t.update_time) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6700\u540E\u66F4\u65B0\u65F6\u95F4")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   mkt_terminal t")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  t.usable "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5F53\u524D\u7528\u6237\u65E0\u95E8\u5E97\u6863\u6848\u76F8\u5173\u64CD\u4F5C\u6743\u9650\uFF08\u67E5\u8BE2/\u4FDD\u5B58/LOV\u9009\u62E9\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4F4E\u4EE3\u7801\u9875\u9762\u901A\u8FC7permissionLogin=true\u8FDB\u884C\u767B\u5F55\u6821\u9A8C\uFF0CselectList\u65B9\u6CD5\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF08entid\uFF09\u548C\u7ECF\u9500\u5546\u7F16\u7801\uFF08custCode\uFF09\u8FC7\u6EE4\u6570\u636E\u5B9E\u73B0\u6570\u636E\u6743\u9650\u9694\u79BB\u3002\u82E5\u7528\u6237\u89D2\u8272\u672A\u5206\u914D\u95E8\u5E97\u6863\u6848\u83DC\u5355\u6743\u9650\u3001\u6743\u9650\u7801\u914D\u7F6E\u7F3A\u5931\u3001\u6216\u7EC4\u7EC7ID/\u7ECF\u9500\u5546\u7F16\u7801\u4E0D\u5339\u914D\u5BFC\u81F4\u6570\u636E\u6743\u9650\u9694\u79BB\u540E\u65E0\u53EF\u89C1\u6570\u636E\uFF0C\u63A5\u53E3\u8FD4\u56DE403/401\u6216\u7A7A\u5217\u8868\u3002\u9700\u6838\u67E5\u7528\u6237\u89D2\u8272\u6743\u9650\u914D\u7F6E\u53CA\u7EC4\u7EC7\u6570\u636E\u6743\u9650\u3001\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u5173\u8054\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_name       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.cust_code           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.entid               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4F01\u4E1AID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.organization_id     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7EC4\u7EC7ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   mkt_terminal t")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  t.organization_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    t.cust_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_id "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u67E5\u8BE2\u65E0\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8FDB\u5165\u95E8\u5E97\u6863\u6848\u5217\u8868\u9875\u6216\u8C03\u7528LOV\u63A5\u53E3\u67E5\u8BE2\u65F6\uFF0C\u6309\u5F53\u524D\u7EC4\u7EC7ID\u548C\u7ECF\u9500\u5546\u7F16\u7801\u8FC7\u6EE4\u540E\u8FD4\u56DE\u7A7A\u5217\u8868")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AselectList\u65B9\u6CD5\u5728entid\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7EC4\u7EC7ID\u3001custCode\u4E3A\u7A7A\u65F6\u81EA\u52A8\u586B\u5145\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801\uFF0C\u6309terminalId\u964D\u5E8F\u6392\u5217\u3002\u82E5\u5F53\u524D\u7528\u6237\u6240\u5C5E\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u786E\u5B9E\u65E0\u95E8\u5E97\u6863\u6848\uFF08\u5982\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7\u672A\u5BA1\u6279\u901A\u8FC7\u3001\u95E8\u5E97\u6863\u6848\u5747\u88AB\u64A4\u5E97terminal_stat=2\u3001\u6216\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u672A\u5173\u8054\u95E8\u5E97\uFF09\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7A7A\u5217\u8868\uFF0C\u524D\u7AEF\u5C55\u793A\u7A7A\u8868\u683C\u3002\u6B64\u4E3A\u6B63\u5E38\u4E1A\u52A1\u60C5\u51B5\u800C\u975E\u9519\u8BEF\uFF0C\u4F46\u7528\u6237\u53EF\u80FD\u8BEF\u5224\u4E3A\u6545\u969C\u3002\u9700\u6838\u67E5\u8BE5\u7EC4\u7EC7/\u7ECF\u9500\u5546\u4E0B\u95E8\u5E97\u6863\u6848\u662F\u5426\u5DF2\u5EFA\u7ACB\u53CA\u6709\u6548\u72B6\u6001\u3002")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_id         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_code       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_name       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.cust_code           "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7ECF\u9500\u5546\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.terminal_stat       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.usable              "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6709\u6548\u72B6\u6001,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.entid               "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4F01\u4E1AID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         t.organization_id     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u7EC4\u7EC7ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   mkt_terminal t")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  t.organization_id "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    t.cust_code "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u5F53\u524D\u7ECF\u9500\u5546\u7F16\u7801}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER  BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " t.terminal_id "),
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
        _push2(`<p${_scopeId}><strong${_scopeId}>Q1\uFF1A\u95E8\u5E97\u6863\u6848\u5982\u4F55\u521B\u5EFA\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u7531&quot;\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7&quot;\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210\uFF08syncMktTerminal\u65B9\u6CD5\uFF09\uFF0C\u4E0D\u652F\u6301\u5728\u672C\u9875\u9762\u76F4\u63A5\u65B0\u589E\u3002</p><p${_scopeId}><strong${_scopeId}>Q2\uFF1A\u95E8\u5E97\u6863\u6848\u5982\u4F55\u66F4\u65B0\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u7531&quot;\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7&quot;\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u66F4\u65B0\uFF08onWfComplete\u65B9\u6CD5\uFF09\u3002\u672C\u9875\u9762\u4EC5\u652F\u6301\u8865\u5145&quot;\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E&quot;\u548C&quot;\u9762\u79EF\u53D8\u52A8\u8BF4\u660E&quot;\u3002</p><p${_scopeId}><strong${_scopeId}>Q3\uFF1A\u67E5\u8BE2\u65F6\u5982\u4F55\u8FC7\u6EE4\u6570\u636E\uFF1F</strong></p><p${_scopeId}>A\uFF1A\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF08entid\uFF09\u548C\u7ECF\u9500\u5546\u7F16\u7801\uFF08custCode\uFF09\u8FC7\u6EE4\uFF0C\u786E\u4FDD\u6570\u636E\u9694\u79BB\u3002</p><p${_scopeId}><strong${_scopeId}>Q4\uFF1ALOV\u63A5\u53E3\u6709\u4EC0\u4E48\u7528\uFF1F</strong></p><p${_scopeId}>A\uFF1AfinFeeApplyLov\u4E3A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9\uFF08\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570\uFF09\uFF0CcustDhReimburseHead\u4E3A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9\u3002</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "Q1\uFF1A\u95E8\u5E97\u6863\u6848\u5982\u4F55\u521B\u5EFA\uFF1F")
          ]),
          createVNode("p", null, 'A\uFF1A\u7531"\u65B0\u5EFA\u95E8\u5E97\u7533\u8BF7"\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u751F\u6210\uFF08syncMktTerminal\u65B9\u6CD5\uFF09\uFF0C\u4E0D\u652F\u6301\u5728\u672C\u9875\u9762\u76F4\u63A5\u65B0\u589E\u3002'),
          createVNode("p", null, [
            createVNode("strong", null, "Q2\uFF1A\u95E8\u5E97\u6863\u6848\u5982\u4F55\u66F4\u65B0\uFF1F")
          ]),
          createVNode("p", null, 'A\uFF1A\u7531"\u95E8\u5E97\u53D8\u66F4\u7533\u8BF7"\u5BA1\u6279\u901A\u8FC7\u540E\u81EA\u52A8\u66F4\u65B0\uFF08onWfComplete\u65B9\u6CD5\uFF09\u3002\u672C\u9875\u9762\u4EC5\u652F\u6301\u8865\u5145"\u5176\u4ED6\u60C5\u51B5\u8BF4\u660E"\u548C"\u9762\u79EF\u53D8\u52A8\u8BF4\u660E"\u3002'),
          createVNode("p", null, [
            createVNode("strong", null, "Q3\uFF1A\u67E5\u8BE2\u65F6\u5982\u4F55\u8FC7\u6EE4\u6570\u636E\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1A\u81EA\u52A8\u6309\u5F53\u524D\u7528\u6237\u7EC4\u7EC7ID\uFF08entid\uFF09\u548C\u7ECF\u9500\u5546\u7F16\u7801\uFF08custCode\uFF09\u8FC7\u6EE4\uFF0C\u786E\u4FDD\u6570\u636E\u9694\u79BB\u3002"),
          createVNode("p", null, [
            createVNode("strong", null, "Q4\uFF1ALOV\u63A5\u53E3\u6709\u4EC0\u4E48\u7528\uFF1F")
          ]),
          createVNode("p", null, "A\uFF1AfinFeeApplyLov\u4E3A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9\uFF08\u6CE8\u5165\u88C5\u4FEE\u63D0\u524D\u5929\u6570\uFF09\uFF0CcustDhReimburseHead\u4E3A\u95E8\u5934\u5C55\u677F\u62A5\u9500\u63D0\u4F9B\u95E8\u5E97\u9009\u62E9\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="changelog" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u66F4\u65B0\u8BB0\u5F55" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-13</td><td${_scopeId}>-</td><td${_scopeId}>YD</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA\u95E8\u5E97\u6863\u6848\u7BA1\u7406\u529F\u80FD</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-11-13"),
                createVNode("td", null, "-"),
                createVNode("td", null, "YD"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFA\u95E8\u5E97\u6863\u6848\u7BA1\u7406\u529F\u80FD")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u95E8\u5E97\u7BA1\u7406/\u95E8\u5E97\u6863\u6848/\u95E8\u5E97\u6863\u6848/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
