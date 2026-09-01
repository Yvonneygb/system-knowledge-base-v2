import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u505A\u4EC0\u4E48</span><h2>\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868\u505A\u4EC0\u4E48</h2><p>\u6C47\u603B\u4E0A\u6708\u5151\u73B0\u6570\u636E\u751F\u6210\u989D\u5EA6\u5185\u51B2\u9500\u8BB0\u5F55\uFF0C\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\u91CA\u653E\u9884\u7B97</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u636E\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u624B\u5DE5\u89E6\u53D1\u8BFB\u53D6\u4E0A\u6708\u95E8\u5E97\u8D39\u7528\u5151\u73B0\u6570\u636E\uFF0C\u6309\u7EF4\u5EA6\u6C47\u603B\u751F\u6210\u6216\u66F4\u65B0\u51B2\u9500\u8BB0\u5F55\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u9884\u7B97\u91CA\u653E</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u51B2\u9500\u6570\u636E\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF\u8FDB\u884C\u9884\u7B97\u91CA\u653E\uFF0C\u5B9E\u73B0\u8D22\u52A1\u51B2\u9500\u5165\u8D26\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 5L8 2L12 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u79D1\u76EE\u533A\u5206</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u5151\u73B0\u6A21\u5F0F\u533A\u5206\u65B0\u65E7\u4F1A\u8BA1\u79D1\u76EE\uFF0C\u5F71\u54CD\u501F\u8D37\u65B9\u5411\u4E0E\u7A0E\u7387\u8BA1\u7B97\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u600E\u4E48\u7528</span><h2>\u5982\u4F55\u4F7F\u7528\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868</h2><p>\u66F4\u65B0\u751F\u6210\u51B2\u9500\u6570\u636E\u540E\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u66F4\u65B0\u51B2\u9500\u6570\u636E</h5><small>\u8BFB\u53D6\u4E0A\u6708\u5151\u73B0<br>\u6C47\u603B\u51B2\u9500\u8BB0\u5F55</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u6267\u884C\u63A8\u9001\u5171\u4EAB</h5><small>\u63A8\u9001\u5171\u4EAB\u7CFB\u7EDF<br>\u91CA\u653E\u9884\u7B97</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u7ED3\u679C\u53CD\u9988</h5><small>\u63A8\u9001\u6210\u529F\u5B8C\u6210\u51B2\u9500<br>\u5931\u8D25\u5219\u53CD\u9988</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u51B2\u9500\u53E3\u5F84\uFF1A</strong>\u51B2\u9500\u6570\u636E\u4EE5\u4E0A\u6708\u95E8\u5E97\u8D39\u7528\u5151\u73B0\u4E3A\u6765\u6E90\uFF0C\u6309\u7EF4\u5EA6\u6C47\u603B\uFF1B\u63A8\u9001\u5171\u4EAB\u5931\u8D25\u65F6\u4E0D\u91CA\u653E\u9884\u7B97\uFF0C\u9700\u6309\u5931\u8D25\u8DEF\u5F84\u5904\u7406\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u95E8\u5E97\u8D39\u7528\u5151\u73B0\u6570\u636E \u2192 \u2605\u66F4\u65B0\u751F\u6210\u989D\u5EA6\u5185\u51B2\u9500\u6570\u636E\u2605 \u2192 \u2696\u6267\u884C\u63A8\u5171\u4EAB\u6210\u529F\uFF1F \u2192 \u7ED3\u675F\uFF08\u5931\u8D25\u5219\u5171\u4EAB\u8FD4\u56DE\u5931\u8D25\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 620" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="20" y="20" width="1060" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="230" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="290" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u95E8\u5E97\u8D39\u7528\u5151\u73B0\u6570\u636E</text><rect x="360" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="420" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4E8B\u4E1A\u90E8\u57FA\u7840\u8BBE\u7F6E</text><rect x="490" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u51B2\u9500\u7A0E\u7387</text><rect x="620" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="680" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5171\u4EAB\u63A5\u53E3</text><rect x="750" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="810" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">LOV\u914D\u7F6E</text><line x1="550" y1="115" x2="550" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="500" y="150" width="100" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="550" y1="194" x2="550" y2="210" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="210" width="240" height="40" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="550" y="235" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u95E8\u5E97\u8D39\u7528\u5151\u73B0\u6570\u636E</text><line x1="550" y1="250" x2="550" y2="268" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="268" width="240" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="550" y="292" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u66F4\u65B0\u751F\u6210\u989D\u5EA6\u5185\u51B2\u9500\u6570\u636E\u2605</text><text x="550" y="310" text-anchor="middle" fill="#DCFCE7" font-size="10">\u624B\u5DE5\u89E6\u53D1\u66F4\u65B0\xB7\u6309\u7EF4\u5EA6\u6C47\u603B</text><line x1="550" y1="322" x2="550" y2="340" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="550,340 622,378 550,416 478,378" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="550" y="382" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u6267\u884C\u63A8\u5171\u4EAB\u6210\u529F\uFF1F</text><line x1="622" y1="378" x2="712" y2="378" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="667" y="363" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="712" y="382" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u5931\u8D25 \u2717</text><line x1="550" y1="416" x2="550" y2="432" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="495" y="432" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="457" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="550" y1="472" x2="550" y2="500" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="20" y="500" width="1060" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="522" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="390" y="538" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="465" y="561" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8D22\u52A1\u5171\u4EAB(FSCC)</text><rect x="560" y="538" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="635" y="561" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u670D\u52A1\u8D39\u51B2\u9500</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u6267\u884C\u5931\u8D25/\u62A5\u9519</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u51B2\u9500\u6570\u636E\u751F\u6210\u4E0E\u66F4\u65B0 {\u6570\u636E\u7EF4\u62A4}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u51B2\u9500\u6570\u636E\u9700\u8981\u5B9A\u671F\u66F4\u65B0\uFF0C\u786E\u4FDD\u62A5\u8868\u6570\u636E\u51C6\u786E</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7updateReversalData\u63A5\u53E3\u66F4\u65B0\u51B2\u9500\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1ARepository\u5C42\u901A\u8FC7queryWriteoffInQuotaView\u7B49\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u6C47\u603B\u9884\u63D0\u3001\u5151\u73B0\u3001\u51B2\u9500\u7B49\u6570\u636E\u751F\u6210\u62A5\u8868</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u51B2\u9500\u6570\u636E\u9700\u8981\u5B9A\u671F\u66F4\u65B0\uFF0C\u786E\u4FDD\u62A5\u8868\u6570\u636E\u51C6\u786E")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7updateReversalData\u63A5\u53E3\u66F4\u65B0\u51B2\u9500\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1ARepository\u5C42\u901A\u8FC7queryWriteoffInQuotaView\u7B49\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u6C47\u603B\u9884\u63D0\u3001\u5151\u73B0\u3001\u51B2\u9500\u7B49\u6570\u636E\u751F\u6210\u62A5\u8868")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u6267\u884C\u51B2\u9500\u63A8\u9001 {\u6570\u636E\u63A8\u9001}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF0C\u786E\u4FDD\u8D22\u52A1\u6838\u7B97\u540C\u6B65</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7execReversalData\u63A5\u53E3\u6267\u884C\u51B2\u9500</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(ENCX-\u989D\u5EA6\u5185\u51B2\u9500)</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u5355\u636E\u7C7B\u578Bfin_fee_writeoff_in_quota</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u51B2\u9500\u6570\u636E\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF0C\u786E\u4FDD\u8D22\u52A1\u6838\u7B97\u540C\u6B65")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7execReversalData\u63A5\u53E3\u6267\u884C\u51B2\u9500")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u63A8\u9001\u5230\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(ENCX-\u989D\u5EA6\u5185\u51B2\u9500)")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u5355\u636E\u7C7B\u578Bfin_fee_writeoff_in_quota")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868\u5217\u8868\u9875\uFF08arrow-ae\u6807\u51C6React\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>arrow-ae/src/pages/storeManage/finFeeWriteoffInQuota/</code>\uFF0C\u540E\u7AEF\u57FA\u4E8Eae-business\u670D\u52A1\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.IN_WRITEOFF_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u5934\u5355\u53F7</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.IN_WRITEOFF_HEADNO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801(\u4E8B\u4E1A\u90E8\u51B2\u9500\u5355\u53F7)</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5E74\u5EA6</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.YEAR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5E74\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6708\u5EA6</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.MONTH</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u6708\u5EA6</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.ENTNAME</td><td${_scopeId}>Select(AE.EPM_DIVISION)</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_TAX_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_NOTAX_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u603B\u989D</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_SUMAMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.CURRENCY</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.SYNC_ITEM</td><td${_scopeId}>\u65E5\u671F\u663E\u793A\u6846</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u63A8\u9001\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.BILL_STATUS</td><td${_scopeId}>Select(AE.SHARE_STAT)</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u79D1\u76EE\u540D\u79F0</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.SUBJECT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F1A\u8BA1\u79D1\u76EE</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5151\u73B0\u65B9\u5F0F</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.CASH_OUT_MODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5151\u73B0\u65B9\u5F0F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>FIN_FEE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "arrow-ae/src/pages/storeManage/finFeeWriteoffInQuota/"),
            createTextVNode("\uFF0C\u540E\u7AEF\u57FA\u4E8Eae-business\u670D\u52A1\u3002")
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
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.IN_WRITEOFF_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u53F7"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.IN_WRITEOFF_HEADNO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801(\u4E8B\u4E1A\u90E8\u51B2\u9500\u5355\u53F7)"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E74\u5EA6"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.YEAR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5E74\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6708\u5EA6"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.MONTH"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u6708\u5EA6"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.ENTNAME"),
                createVNode("td", null, "Select(AE.EPM_DIVISION)"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_TAX_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_NOTAX_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.WRITEOFF_SUMAMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.CURRENCY"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.SYNC_ITEM"),
                createVNode("td", null, "\u65E5\u671F\u663E\u793A\u6846"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u63A8\u9001\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.BILL_STATUS"),
                createVNode("td", null, "Select(AE.SHARE_STAT)"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u79D1\u76EE\u540D\u79F0"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.SUBJECT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4F1A\u8BA1\u79D1\u76EE"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5151\u73B0\u65B9\u5F0F"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.CASH_OUT_MODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5151\u73B0\u65B9\u5F0F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "FIN_FEE_WRITEOFF_IN_QUOTA.COST_CENTER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u67E5\u8BE2\u680F\u5B57\u6BB5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>COMMON_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u59CB\u5E74\u6708</td><td${_scopeId}>START_DATE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5F00\u59CB\u5E74\u6708\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u675F\u5E74\u6708</td><td${_scopeId}>END_DATE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ED3\u675F\u5E74\u6708\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>Select(AE.EPM_DIVISION)</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>BILL_STATUS</td><td${_scopeId}>Select(AE.SHARE_STAT)</td><td${_scopeId}>\u5355\u636E\u72B6\u6001\u67E5\u8BE2</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u503C\u96C6\u67E5\u8BE2</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "COMMON_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u59CB\u5E74\u6708"),
                createVNode("td", null, "START_DATE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5F00\u59CB\u5E74\u6708\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED3\u675F\u5E74\u6708"),
                createVNode("td", null, "END_DATE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ED3\u675F\u5E74\u6708\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "Select(AE.EPM_DIVISION)"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "BILL_STATUS"),
                createVNode("td", null, "Select(AE.SHARE_STAT)"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001\u67E5\u8BE2"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u503C\u96C6\u67E5\u8BE2")
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
        _push2(`<h4${_scopeId}>\u5F39\u7A971\uFF1A\u6267\u884C\u51B2\u9500\u5F39\u7A97</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u7684\u5E74\u6708</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u683C\u5F0Fyyyy-MM</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TextField</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u8F93\u5165\uFF08\u975E\u5FC5\u586B\u53C2\u8003\uFF09</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("h4", null, "\u5F39\u7A971\uFF1A\u6267\u884C\u51B2\u9500\u5F39\u7A97"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5B57\u6BB5\u540D"),
                createVNode("th", null, "\u7EC4\u4EF6"),
                createVNode("th", null, "\u4E1A\u52A1\u91CA\u4E49"),
                createVNode("th", null, "\u663E\u9690\u6761\u4EF6"),
                createVNode("th", null, "\u53D6\u503C/\u8D4B\u503C\u903B\u8F91")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u7684\u5E74\u6708"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u683C\u5F0Fyyyy-MM")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u8F93\u5165\uFF08\u975E\u5FC5\u586B\u53C2\u8003\uFF09")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u5BFC\u5165\u529F\u80FD\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u6309\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u67E5\u8BE2fin_fee_writeoff_in_quota\u8868</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u51B2\u9500\u6570\u636E</td><td${_scopeId}>\u66F4\u65B0\u51B2\u9500\u9884\u63D0\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528updateReversalData\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u6267\u884C\u51B2\u9500</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u5E76\u63A8\u9001\u5171\u4EAB\u8D22\u52A1</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528(Header\u6309\u94AE)</td><td${_scopeId}>\u5F39\u51FA\u6267\u884C\u51B2\u9500\u5F39\u7A97\uFF0C\u586B\u5199\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u540E\u8C03\u7528execReversalData\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u51B2\u9500\u5217\u8868\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528export\u63A5\u53E3</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u59CB\u7EC8\u53EF\u7528</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7Repository\u5C42\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u66F4\u65B0fin_fee_writeoff_in_quota\u8868\u6570\u636E</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/writeoff-in-quota/updateReversalData</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u6309\u94AE2\uFF1A\u6267\u884C\u51B2\u9500\uFF08\u5217\u8868\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u4E2D\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u6267\u884C\u51B2\u9500\u8BA1\u7B97</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(ENCX-\u989D\u5EA6\u5185\u51B2\u9500)</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u66F4\u65B0\u5355\u636E\u72B6\u6001\u548C\u540C\u6B65\u65F6\u95F4</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/writeoff-in-quota/execReversalData</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{ids}) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BILL_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u6309\u6761\u4EF6\u67E5\u8BE2\u51B2\u9500\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u67E5\u8BE2fin_fee_writeoff_in_quota\u8868")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u51B2\u9500\u6570\u636E"),
                createVNode("td", null, "\u66F4\u65B0\u51B2\u9500\u9884\u63D0\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528updateReversalData\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6267\u884C\u51B2\u9500"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u5E76\u63A8\u9001\u5171\u4EAB\u8D22\u52A1"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528(Header\u6309\u94AE)"),
                createVNode("td", null, "\u5F39\u51FA\u6267\u884C\u51B2\u9500\u5F39\u7A97\uFF0C\u586B\u5199\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u540E\u8C03\u7528execReversalData\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BFC\u51FA"),
                createVNode("td", null, "\u5BFC\u51FA\u51B2\u9500\u5217\u8868\u6570\u636E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528export\u63A5\u53E3")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u59CB\u7EC8\u53EF\u7528")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7Repository\u5C42\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u66F4\u65B0fin_fee_writeoff_in_quota\u8868\u6570\u636E"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/writeoff-in-quota/updateReversalData")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearmonth};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u6267\u884C\u51B2\u9500\uFF08\u5217\u8868\u9875\uFF09"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9009\u4E2D\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
              createTextVNode("\uFF1A")
            ]),
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u6267\u884C\u51B2\u9500\u8BA1\u7B97"),
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF(ENCX-\u989D\u5EA6\u5185\u51B2\u9500)"),
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u66F4\u65B0\u5355\u636E\u72B6\u6001\u548C\u540C\u6B65\u65F6\u95F4"),
            createVNode("li", null, [
              createVNode("strong", null, "\u63A5\u53E3\u8C03\u7528"),
              createTextVNode("\uFF1APOST "),
              createVNode("code", null, "/v1/{organizationId}/writeoff-in-quota/execReversalData")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{ids}) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BILL_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u62A5\u8868\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u6570\u636E\u751F\u6210 \u2500\u2500\u66F4\u65B0\u51B2\u9500\u6570\u636E\u2500\u2500\u2192 \u5DF2\u66F4\u65B0 \u2500\u2500\u6267\u884C\u51B2\u9500\u2500\u2500\u2192 \u5DF2\u51B2\u9500(\u5DF2\u63A8\u9001)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>0</td><td${_scopeId}>\u5F85\u66F4\u65B0</td><td${_scopeId}>\u67E5\u8BE2\u3001\u66F4\u65B0\u51B2\u9500\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u5DF2\u66F4\u65B0\u5F85\u51B2\u9500</td><td${_scopeId}>\u67E5\u8BE2\u3001\u6267\u884C\u51B2\u9500</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u5DF2\u51B2\u9500</td><td${_scopeId}>\u67E5\u8BE2</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u6570\u636E\u751F\u6210 \u2500\u2500\u66F4\u65B0\u51B2\u9500\u6570\u636E\u2500\u2500\u2192 \u5DF2\u66F4\u65B0 \u2500\u2500\u6267\u884C\u51B2\u9500\u2500\u2500\u2192 \u5DF2\u51B2\u9500(\u5DF2\u63A8\u9001)")
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
                createVNode("td", null, "0"),
                createVNode("td", null, "\u5F85\u66F4\u65B0"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u66F4\u65B0\u51B2\u9500\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "1"),
                createVNode("td", null, "\u5DF2\u66F4\u65B0\u5F85\u51B2\u9500"),
                createVNode("td", null, "\u67E5\u8BE2\u3001\u6267\u884C\u51B2\u9500")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u5DF2\u51B2\u9500"),
                createVNode("td", null, "\u67E5\u8BE2")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1AFIN_FEE_WRITEOFF_IN_QUOTA\uFF08\u989D\u5EA6\u5185\u51B2\u9500\u9884\u63D0\u6570\u636E\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>IN_WRITEOFF_ID</td><td${_scopeId}>INTEGER</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>IN_WRITEOFF_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u51B2\u9500\u5355\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>IN_WRITEOFF_HEADNO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801</td><td${_scopeId}>\u51B2\u9500\u5934\u5355\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>YEARMONTH</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>\u5E74\u6708</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>BILLING_UNIT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ENTNAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>COST_CENTER_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3\u540D\u79F0</td><td${_scopeId}>\u6210\u672C\u4E2D\u5FC3</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_TAX_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u51B2\u9500\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_NOTAX_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>WRITEOFF_SUMAMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u51B2\u9500\u603B\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>SYNC_ITEM</td><td${_scopeId}>DATE</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u540C\u6B65\u65F6\u95F4</td><td${_scopeId}>\u63A8\u9001\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>BILL_STATUS</td><td${_scopeId}>INTEGER</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u5355\u636E\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>DIVISION_ID</td><td${_scopeId}>INTEGER</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>SUBJECT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u79D1\u76EE\u540D\u79F0</td><td${_scopeId}>\u79D1\u76EE\u540D\u79F0</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CASH_OUT_MODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5151\u73B0\u65B9\u5F0F</td><td${_scopeId}>\u5151\u73B0\u65B9\u5F0F</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>DATA_LOG</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6570\u636E\u65E5\u5FD7</td><td${_scopeId}>-</td><td${_scopeId}>\u7CFB\u7EDF\u8BB0\u5F55</td></tr></tbody></table>`);
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
                createVNode("td", null, "IN_WRITEOFF_ID"),
                createVNode("td", null, "INTEGER"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_WRITEOFF_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u51B2\u9500\u5355\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IN_WRITEOFF_HEADNO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u636E\u7F16\u7801"),
                createVNode("td", null, "\u51B2\u9500\u5934\u5355\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "YEARMONTH"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "\u5E74\u6708"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILLING_UNIT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6CD5\u4EBA\u5BA2\u6237\u540D\u79F0"),
                createVNode("td", null, "\u6CD5\u4EBA\u540D\u79F0"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENTNAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "COST_CENTER_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3\u540D\u79F0"),
                createVNode("td", null, "\u6210\u672C\u4E2D\u5FC3"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TRADING_COMPANY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_TAX_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u51B2\u9500\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_NOTAX_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u51B2\u9500\u4E0D\u542B\u7A0E\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "WRITEOFF_SUMAMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u51B2\u9500\u603B\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SYNC_ITEM"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u540C\u6B65\u65F6\u95F4"),
                createVNode("td", null, "\u63A8\u9001\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "BILL_STATUS"),
                createVNode("td", null, "INTEGER"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u5355\u636E\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DIVISION_ID"),
                createVNode("td", null, "INTEGER"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u8BCD\u6C47\u503C"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SUBJECT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u79D1\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u79D1\u76EE\u540D\u79F0"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CASH_OUT_MODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5151\u73B0\u65B9\u5F0F"),
                createVNode("td", null, "\u5151\u73B0\u65B9\u5F0F"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DATA_LOG"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6570\u636E\u65E5\u5FD7"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u7CFB\u7EDF\u8BB0\u5F55")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u51B2\u9500\u6570\u636E\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u51B2\u9500\u6570\u636E\u672A\u751F\u6210\uFF0C\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u65F6</td><td${_scopeId}>\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\uFF0C\u68C0\u67E5ENCX\u7CFB\u7EDF\u72B6\u6001</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u65F6</td><td${_scopeId}>\u6307\u5B9A\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u65E0\u51B2\u9500\u6570\u636E\uFF0C\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u65F6</td><td${_scopeId}>\u5171\u4EAB\u8D22\u52A1\u63A5\u53E3\u65E0\u54CD\u5E94\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u68C0\u67E5\u7F51\u7EDC\u548CENCX\u7CFB\u7EDF</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u65F6</td><td${_scopeId}>\u51B2\u9500\u6267\u884C\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u5F02\u5E38\uFF0C\u67E5\u770B\u540E\u7AEF\u65E5\u5FD7</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5E74\u6708\u5FC5\u586B</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u5F39\u7A97</td><td${_scopeId}>\u672A\u586B\u5199\u5E74\u6708\uFF0C\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u5E74\u6708</td><td${_scopeId}>\u8868\u5355\u6821\u9A8C</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5FC5\u586B</td><td${_scopeId}>\u6267\u884C\u51B2\u9500\u5F39\u7A97</td><td${_scopeId}>\u672A\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801\uFF0C\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801</td><td${_scopeId}>\u8868\u5355\u6821\u9A8C</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u51B2\u9500\u6570\u636E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u6309\u5E74\u6708/\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2\u51B2\u9500\u6570\u636E\uFF0CFIN_FEE_WRITEOFF_IN_QUOTA\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u51B2\u9500\u6570\u636E\u9700\u901A\u8FC7&quot;\u66F4\u65B0\u51B2\u9500\u6570\u636E&quot;\u6309\u94AE\uFF08updateReversalData\u63A5\u53E3\uFF09\u4E3B\u52A8\u751F\u6210\uFF0CRepository\u5C42\u901A\u8FC7queryWriteoffInQuotaView\u7B49\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E\u5E76\u5199\u5165FIN_FEE_WRITEOFF_IN_QUOTA\u8868\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u4ECE\u672A\u6267\u884C\u8FC7\u66F4\u65B0\u51B2\u9500\u6570\u636E\u64CD\u4F5C\uFF0C\u8868\u4E3A\u7A7A\uFF1B(2)\u4E0A\u6E38\u989D\u5EA6\u5185\u5151\u73B0\u8BB0\u5F55\u672A\u5BA1\u6279\u901A\u8FC7\u6216\u51FA\u5E93\u5355\u9884\u63D0\u6570\u636E\u672A\u751F\u6210\uFF0C\u51B2\u9500\u89C6\u56FE\u65E0\u6570\u636E\uFF1B(3)\u67E5\u8BE2\u7684\u5E74\u6708/\u4E8B\u4E1A\u90E8\u533A\u95F4\u5185\u65E0\u51B2\u9500\u8BB0\u5F55\u3002\u9700\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF0C\u518D\u67E5\u8BE2\u786E\u8BA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, ENTNAME, TRADING_COMPANY_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         BILLING_UNIT_NAME, WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, WRITEOFF_SUMAMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SYNC_ITEM, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearmonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (ENTID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{entid} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, IN_WRITEOFF_NO;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u4E2D\u8BB0\u5F55\u70B9\u51FB&quot;\u6267\u884C\u51B2\u9500&quot;\uFF0CexecReversalData\u63A5\u53E3\u63A8\u9001\u81F3ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u65F6\u8FD4\u56DE\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u6267\u884C\u51B2\u9500\u63A5\u53E3\u6267\u884C\u51B2\u9500\u8BA1\u7B97\u5E76\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF08ENCX-\u989D\u5EA6\u5185\u51B2\u9500\uFF09\uFF0C\u5355\u636E\u7C7B\u578Bfin_fee_writeoff_in_quota\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF1B(2)\u63A8\u9001\u6570\u636E\u5F02\u5E38\uFF0C\u5982\u51B2\u9500\u542B\u7A0E/\u4E0D\u542B\u7A0E\u91D1\u989D\u4E3A0\u3001\u6CD5\u4EBA\u7F16\u7801\uFF08BILLING_UNIT_CODE\uFF09\u5728ENCX\u4E2D\u4E0D\u5B58\u5728\u3001\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\uFF08COST_CENTER_CODE\uFF09\u4E0D\u5339\u914D\u3001\u79D1\u76EE\u540D\u79F0\uFF08SUBJECT_NAME\uFF09\u672A\u914D\u7F6E\uFF1B(3)ENCX\u4FA7\u91CD\u590D\u63A8\u9001\u6821\u9A8C\u3002\u63A8\u9001\u5931\u8D25\u9700\u68C0\u67E5SYNC_ITEM\u548CBILL_STATUS\u5B57\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, BILLING_UNIT_CODE, COST_CENTER_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         SUBJECT_NAME, WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, SYNC_ITEM, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (#{ids}) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (BILL_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>!=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYNC_ITEM </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u586B\u5199\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u540E\u70B9\u51FB\u786E\u5B9A\uFF0CqueryQuotaLimitHead\u67E5\u8BE2\u8FD4\u56DEnull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:97\u5904\u6821\u9A8Cdata\u4E3Anull\u65F6\u629B\u51FACommonException(&quot;\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A\uFF01&quot;)\u3002queryQuotaLimitHead\u6309\u4EA4\u6613\u516C\u53F8\u7F16\u7801\uFF08TRADING_COMPANY_CODE\uFF09\u548C\u5E74\u6708\uFF08YEARMONTH\uFF09\u67E5\u8BE2\u51B2\u9500\u5934\u6570\u636E\uFF0C\u8FD4\u56DEnull\u8868\u793A\u8BE5\u4EA4\u6613\u516C\u53F8\u5728\u6307\u5B9A\u5E74\u6708\u65E0\u51B2\u9500\u6570\u636E\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u672A\u5148\u6267\u884C&quot;\u66F4\u65B0\u51B2\u9500\u6570\u636E&quot;\u751F\u6210\u51B2\u9500\u8BB0\u5F55\uFF1B(2)\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u4E0E\u51B2\u9500\u6570\u636E\u4E0D\u5339\u914D\u3002\u9700\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF0C\u518D\u6267\u884C\u51B2\u9500</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TRADING_COMPANY_NAME, BILL_STATUS, WRITEOFF_TAX_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearMonth} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6267\u884C\u51B2\u9500\u65F6\u8C03\u7528arrowFsscSdk.inLimitBudPush\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF0C\u8FD4\u56DEFsscRsVO\u4E3Anull</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:196\u5904\u6821\u9A8CfsccRsVO\u4E3Anull\u65F6\u629B\u51FACommonException(&quot;\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25\uFF01&quot;)\u3002\u8BE5\u5F02\u5E38\u8868\u793A\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u63A5\u53E3\uFF08inLimitBudPush\uFF09\u65E0\u54CD\u5E94\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u672A\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C\u5BF9\u8C61\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u670D\u52A1\u4E0D\u53EF\u7528\uFF1B(2)\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD\u6216\u8D85\u65F6\uFF1B(3)\u5171\u4EAB\u63A5\u53E3URL\u914D\u7F6E\u9519\u8BEF\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u548CENCX\u7CFB\u7EDF\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, TRADING_COMPANY_CODE, YEARMONTH,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         BILL_STATUS, SYNC_ITEM</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_HEADNO </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{apportionCode};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u6267\u884C\u51B2\u9500\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u5F02\u5E38\uFF0C\u88ABtry-catch\u6355\u83B7\u540E\u629B\u51FA</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:208\u5904catch\u5757\u4E2D\u8BB0\u5F55ERROR\u65E5\u5FD7\u5E76\u629B\u51FACommonException(&quot;\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38\uFF01&quot;)\u3002\u8BE5\u5F02\u5E38\u4E3A\u515C\u5E95\u5F02\u5E38\u5904\u7406\uFF0C\u8986\u76D6\u6240\u6709\u672A\u660E\u786E\u5904\u7406\u7684\u5F02\u5E38\u60C5\u51B5\u3002\u6839\u56E0\u53EF\u80FD\u5305\u62EC\uFF1A(1)\u51B2\u9500\u6570\u636E\u8BA1\u7B97\u5F02\u5E38\uFF0C\u5982\u91D1\u989D\u4E3Anull\u3001\u9664\u4EE50\u7B49\uFF1B(2)\u6570\u636E\u5E93\u64CD\u4F5C\u5F02\u5E38\uFF1B(3)\u5171\u4EAB\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\uFF08\u975E\u8FD4\u56DEnull\u60C5\u51B5\uFF09\u3002\u9700\u67E5\u770B\u540E\u7AEF\u65E5\u5FD7FinFeeWriteoffInQuotaServiceImpl.execReversalData\u7684ERROR\u8F93\u51FA\u5B9A\u4F4D\u5177\u4F53\u539F\u56E0</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, BILL_STATUS, SUBJECT_NAME, CASH_OUT_MODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_HEADNO </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{apportionCode};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u5E74\u6708\u5FC5\u586B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u672A\u586B\u5199\u5E74\u6708\u5373\u70B9\u51FB\u786E\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6267\u884C\u51B2\u9500\u5F39\u7A97\u5728ListPage/index.tsx:30\u5904\u5B9A\u4E49yearMonth\u5B57\u6BB5required: true\uFF0CmodalDs.validate()\u6821\u9A8C\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4\u3002\u5E74\u6708\u7528\u4E8EqueryQuotaLimitHead\u67E5\u8BE2\u51B2\u9500\u5934\u6570\u636E\uFF0C\u4E3A\u6267\u884C\u51B2\u9500\u7684\u5FC5\u586B\u53C2\u6570\u3002\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u6709\u6548\u7684\u5E74\u6708\uFF08\u683C\u5F0Fyyyy-MM\uFF09</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> YEARMONTH </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{yearMonth};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5FC5\u586B</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u672A\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5373\u70B9\u51FB\u786E\u5B9A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u6267\u884C\u51B2\u9500\u5F39\u7A97\u5728ListPage/index.tsx:31\u5904\u5B9A\u4E49tradingCompanyCode\u5B57\u6BB5required: true\uFF0CmodalDs.validate()\u6821\u9A8C\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4\u3002\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u7528\u4E8EqueryQuotaLimitHead\u67E5\u8BE2\u6307\u5B9A\u4EA4\u6613\u516C\u53F8\u7684\u51B2\u9500\u5934\u6570\u636E\uFF0C\u4E3A\u6267\u884C\u51B2\u9500\u7684\u5FC5\u586B\u53C2\u6570\u3002\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u6709\u6548\u7684\u4EA4\u6613\u516C\u53F8\u7F16\u7801</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TRADING_COMPANY_NAME, BILL_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_WRITEOFF_IN_QUOTA</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyCode};</span></span>
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
                createVNode("td", null, "\u51B2\u9500\u6570\u636E\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u51B2\u9500\u6570\u636E\u672A\u751F\u6210\uFF0C\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u65F6"),
                createVNode("td", null, "\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\uFF0C\u68C0\u67E5ENCX\u7CFB\u7EDF\u72B6\u6001"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u65F6"),
                createVNode("td", null, "\u6307\u5B9A\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u65E0\u51B2\u9500\u6570\u636E\uFF0C\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u65F6"),
                createVNode("td", null, "\u5171\u4EAB\u8D22\u52A1\u63A5\u53E3\u65E0\u54CD\u5E94\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u68C0\u67E5\u7F51\u7EDC\u548CENCX\u7CFB\u7EDF"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u65F6"),
                createVNode("td", null, "\u51B2\u9500\u6267\u884C\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u5F02\u5E38\uFF0C\u67E5\u770B\u540E\u7AEF\u65E5\u5FD7"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E74\u6708\u5FC5\u586B"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u5F39\u7A97"),
                createVNode("td", null, "\u672A\u586B\u5199\u5E74\u6708\uFF0C\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u5E74\u6708"),
                createVNode("td", null, "\u8868\u5355\u6821\u9A8C"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5FC5\u586B"),
                createVNode("td", null, "\u6267\u884C\u51B2\u9500\u5F39\u7A97"),
                createVNode("td", null, "\u672A\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801\uFF0C\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801"),
                createVNode("td", null, "\u8868\u5355\u6821\u9A8C"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u51B2\u9500\u6570\u636E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u6309\u5E74\u6708/\u4E8B\u4E1A\u90E8/\u4EA4\u6613\u516C\u53F8\u67E5\u8BE2\u51B2\u9500\u6570\u636E\uFF0CFIN_FEE_WRITEOFF_IN_QUOTA\u8868\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u51B2\u9500\u6570\u636E\u9700\u901A\u8FC7"\u66F4\u65B0\u51B2\u9500\u6570\u636E"\u6309\u94AE\uFF08updateReversalData\u63A5\u53E3\uFF09\u4E3B\u52A8\u751F\u6210\uFF0CRepository\u5C42\u901A\u8FC7queryWriteoffInQuotaView\u7B49\u65B9\u6CD5\u67E5\u8BE2\u51B2\u9500\u89C6\u56FE\u6570\u636E\u5E76\u5199\u5165FIN_FEE_WRITEOFF_IN_QUOTA\u8868\u3002\u65E0\u6570\u636E\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u4ECE\u672A\u6267\u884C\u8FC7\u66F4\u65B0\u51B2\u9500\u6570\u636E\u64CD\u4F5C\uFF0C\u8868\u4E3A\u7A7A\uFF1B(2)\u4E0A\u6E38\u989D\u5EA6\u5185\u5151\u73B0\u8BB0\u5F55\u672A\u5BA1\u6279\u901A\u8FC7\u6216\u51FA\u5E93\u5355\u9884\u63D0\u6570\u636E\u672A\u751F\u6210\uFF0C\u51B2\u9500\u89C6\u56FE\u65E0\u6570\u636E\uFF1B(3)\u67E5\u8BE2\u7684\u5E74\u6708/\u4E8B\u4E1A\u90E8\u533A\u95F4\u5185\u65E0\u51B2\u9500\u8BB0\u5F55\u3002\u9700\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF0C\u518D\u67E5\u8BE2\u786E\u8BA4')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, ENTNAME, TRADING_COMPANY_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         BILLING_UNIT_NAME, WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, WRITEOFF_SUMAMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SYNC_ITEM, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (ENTID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{entid} "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", IN_WRITEOFF_NO;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u9009\u4E2D\u8BB0\u5F55\u70B9\u51FB"\u6267\u884C\u51B2\u9500"\uFF0CexecReversalData\u63A5\u53E3\u63A8\u9001\u81F3ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u65F6\u8FD4\u56DE\u5931\u8D25')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u6267\u884C\u51B2\u9500\u63A5\u53E3\u6267\u884C\u51B2\u9500\u8BA1\u7B97\u5E76\u63A8\u9001\u81F3\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF08ENCX-\u989D\u5EA6\u5185\u51B2\u9500\uFF09\uFF0C\u5355\u636E\u7C7B\u578Bfin_fee_writeoff_in_quota\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u4E0D\u53EF\u7528\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF1B(2)\u63A8\u9001\u6570\u636E\u5F02\u5E38\uFF0C\u5982\u51B2\u9500\u542B\u7A0E/\u4E0D\u542B\u7A0E\u91D1\u989D\u4E3A0\u3001\u6CD5\u4EBA\u7F16\u7801\uFF08BILLING_UNIT_CODE\uFF09\u5728ENCX\u4E2D\u4E0D\u5B58\u5728\u3001\u6210\u672C\u4E2D\u5FC3\u7F16\u7801\uFF08COST_CENTER_CODE\uFF09\u4E0D\u5339\u914D\u3001\u79D1\u76EE\u540D\u79F0\uFF08SUBJECT_NAME\uFF09\u672A\u914D\u7F6E\uFF1B(3)ENCX\u4FA7\u91CD\u590D\u63A8\u9001\u6821\u9A8C\u3002\u63A8\u9001\u5931\u8D25\u9700\u68C0\u67E5SYNC_ITEM\u548CBILL_STATUS\u5B57\u6BB5")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, BILLING_UNIT_CODE, COST_CENTER_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         SUBJECT_NAME, WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, SYNC_ITEM, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (#{ids}) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (BILL_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "!="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SYNC_ITEM "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u586B\u5199\u5E74\u6708\u548C\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u540E\u70B9\u51FB\u786E\u5B9A\uFF0CqueryQuotaLimitHead\u67E5\u8BE2\u8FD4\u56DEnull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:97\u5904\u6821\u9A8Cdata\u4E3Anull\u65F6\u629B\u51FACommonException("\u8981\u6267\u884C\u7684\u6570\u636E\u4E3A\u7A7A\uFF01")\u3002queryQuotaLimitHead\u6309\u4EA4\u6613\u516C\u53F8\u7F16\u7801\uFF08TRADING_COMPANY_CODE\uFF09\u548C\u5E74\u6708\uFF08YEARMONTH\uFF09\u67E5\u8BE2\u51B2\u9500\u5934\u6570\u636E\uFF0C\u8FD4\u56DEnull\u8868\u793A\u8BE5\u4EA4\u6613\u516C\u53F8\u5728\u6307\u5B9A\u5E74\u6708\u65E0\u51B2\u9500\u6570\u636E\u3002\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u672A\u5148\u6267\u884C"\u66F4\u65B0\u51B2\u9500\u6570\u636E"\u751F\u6210\u51B2\u9500\u8BB0\u5F55\uFF1B(2)\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u4E0E\u51B2\u9500\u6570\u636E\u4E0D\u5339\u914D\u3002\u9700\u5148\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\uFF0C\u518D\u6267\u884C\u51B2\u9500')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TRADING_COMPANY_NAME, BILL_STATUS, WRITEOFF_TAX_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearMonth} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6267\u884C\u51B2\u9500\u65F6\u8C03\u7528arrowFsscSdk.inLimitBudPush\u63A8\u9001\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\uFF0C\u8FD4\u56DEFsscRsVO\u4E3Anull")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:196\u5904\u6821\u9A8CfsccRsVO\u4E3Anull\u65F6\u629B\u51FACommonException("\u5171\u4EAB\u63A5\u53E3\u8FD4\u56DEnull,\u6267\u884C\u5171\u4EAB\u63A5\u53E3\u5931\u8D25\uFF01")\u3002\u8BE5\u5F02\u5E38\u8868\u793A\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u63A5\u53E3\uFF08inLimitBudPush\uFF09\u65E0\u54CD\u5E94\u6216\u7F51\u7EDC\u4E2D\u65AD\uFF0C\u672A\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C\u5BF9\u8C61\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)ENCX\u5171\u4EAB\u8D22\u52A1\u7CFB\u7EDF\u670D\u52A1\u4E0D\u53EF\u7528\uFF1B(2)\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD\u6216\u8D85\u65F6\uFF1B(3)\u5171\u4EAB\u63A5\u53E3URL\u914D\u7F6E\u9519\u8BEF\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u548CENCX\u7CFB\u7EDF\u72B6\u6001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, TRADING_COMPANY_CODE, YEARMONTH,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         BILL_STATUS, SYNC_ITEM")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_HEADNO "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{apportionCode};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u6267\u884C\u51B2\u9500\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u5F02\u5E38\uFF0C\u88ABtry-catch\u6355\u83B7\u540E\u629B\u51FA")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AexecReversalData\u63A5\u53E3\u5728FinFeeWriteoffInQuotaServiceImpl.java:208\u5904catch\u5757\u4E2D\u8BB0\u5F55ERROR\u65E5\u5FD7\u5E76\u629B\u51FACommonException("\u6267\u884C\u51B2\u9500\u6570\u636E\u63A5\u53E3\u5F02\u5E38\uFF01")\u3002\u8BE5\u5F02\u5E38\u4E3A\u515C\u5E95\u5F02\u5E38\u5904\u7406\uFF0C\u8986\u76D6\u6240\u6709\u672A\u660E\u786E\u5904\u7406\u7684\u5F02\u5E38\u60C5\u51B5\u3002\u6839\u56E0\u53EF\u80FD\u5305\u62EC\uFF1A(1)\u51B2\u9500\u6570\u636E\u8BA1\u7B97\u5F02\u5E38\uFF0C\u5982\u91D1\u989D\u4E3Anull\u3001\u9664\u4EE50\u7B49\uFF1B(2)\u6570\u636E\u5E93\u64CD\u4F5C\u5F02\u5E38\uFF1B(3)\u5171\u4EAB\u63A5\u53E3\u8C03\u7528\u5F02\u5E38\uFF08\u975E\u8FD4\u56DEnull\u60C5\u51B5\uFF09\u3002\u9700\u67E5\u770B\u540E\u7AEF\u65E5\u5FD7FinFeeWriteoffInQuotaServiceImpl.execReversalData\u7684ERROR\u8F93\u51FA\u5B9A\u4F4D\u5177\u4F53\u539F\u56E0')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         WRITEOFF_TAX_AMT, WRITEOFF_NOTAX_AMT, BILL_STATUS, SUBJECT_NAME, CASH_OUT_MODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_HEADNO "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{apportionCode};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u5E74\u6708\u5FC5\u586B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u672A\u586B\u5199\u5E74\u6708\u5373\u70B9\u51FB\u786E\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u6267\u884C\u51B2\u9500\u5F39\u7A97\u5728ListPage/index.tsx:30\u5904\u5B9A\u4E49yearMonth\u5B57\u6BB5required: true\uFF0CmodalDs.validate()\u6821\u9A8C\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4\u3002\u5E74\u6708\u7528\u4E8EqueryQuotaLimitHead\u67E5\u8BE2\u51B2\u9500\u5934\u6570\u636E\uFF0C\u4E3A\u6267\u884C\u51B2\u9500\u7684\u5FC5\u586B\u53C2\u6570\u3002\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u6709\u6548\u7684\u5E74\u6708\uFF08\u683C\u5F0Fyyyy-MM\uFF09")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " YEARMONTH "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{yearMonth};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5FC5\u586B"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u6267\u884C\u51B2\u9500\u5F39\u7A97\u4E2D\u672A\u586B\u5199\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u5373\u70B9\u51FB\u786E\u5B9A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u6267\u884C\u51B2\u9500\u5F39\u7A97\u5728ListPage/index.tsx:31\u5904\u5B9A\u4E49tradingCompanyCode\u5B57\u6BB5required: true\uFF0CmodalDs.validate()\u6821\u9A8C\u5931\u8D25\u65F6\u963B\u6B62\u63D0\u4EA4\u3002\u4EA4\u6613\u516C\u53F8\u7F16\u7801\u7528\u4E8EqueryQuotaLimitHead\u67E5\u8BE2\u6307\u5B9A\u4EA4\u6613\u516C\u53F8\u7684\u51B2\u9500\u5934\u6570\u636E\uFF0C\u4E3A\u6267\u884C\u51B2\u9500\u7684\u5FC5\u586B\u53C2\u6570\u3002\u9700\u5728\u5F39\u7A97\u4E2D\u586B\u5199\u6709\u6548\u7684\u4EA4\u6613\u516C\u53F8\u7F16\u7801")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " IN_WRITEOFF_ID, IN_WRITEOFF_NO, YEARMONTH, TRADING_COMPANY_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TRADING_COMPANY_NAME, BILL_STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_WRITEOFF_IN_QUOTA")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{tradingCompanyCode};")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u51B2\u9500\u6570\u636E\u4E0D\u6B63\u786E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u9884\u63D0\u6216\u5151\u73B0\u6570\u636E\u672A\u53CA\u65F6\u540C\u6B65</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\u64CD\u4F5C\uFF0C\u68C0\u67E5SQL <code${_scopeId}>SELECT * FROM FIN_FEE_WRITEOFF_IN_QUOTA WHERE YEARMONTH = #{yearmonth}</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u51B2\u9500\u6570\u636E\u4E0D\u6B63\u786E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u9884\u63D0\u6216\u5151\u73B0\u6570\u636E\u672A\u53CA\u65F6\u540C\u6B65"),
            createVNode("li", null, [
              createTextVNode("\u89E3\u51B3\u601D\u8DEF\uFF1A\u6267\u884C\u66F4\u65B0\u51B2\u9500\u6570\u636E\u64CD\u4F5C\uFF0C\u68C0\u67E5SQL "),
              createVNode("code", null, "SELECT * FROM FIN_FEE_WRITEOFF_IN_QUOTA WHERE YEARMONTH = #{yearmonth}")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u8865\u5145\u754C\u9762\u6A21\u5757\u3001\u6570\u636E\u5E93\u8868\u8BE6\u89E3</td></tr><tr${_scopeId}><td${_scopeId}>2025-09-02</td><td${_scopeId}>-</td><td${_scopeId}>jiaqiang.fu01</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFAFinFeeWriteoffInQuota\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "2025-09-02"),
                createVNode("td", null, "-"),
                createVNode("td", null, "jiaqiang.fu01"),
                createVNode("td", null, "\u521D\u59CB\u521B\u5EFAFinFeeWriteoffInQuota\u5B9E\u4F53")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u9884\u63D0\u4E0E\u51B2\u9500/\u989D\u5EA6\u5185\u51B2\u9500\u62A5\u8868/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
