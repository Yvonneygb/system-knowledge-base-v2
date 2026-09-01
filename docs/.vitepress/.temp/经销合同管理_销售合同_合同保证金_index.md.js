import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5408\u540C\u4FDD\u8BC1\u91D1/index.md"}');
const _sfc_main = { name: "\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5408\u540C\u4FDD\u8BC1\u91D1/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u5408\u540C\u4FDD\u8BC1\u91D1\u67E5\u4EC0\u4E48</h2><p>\u4ECE EBS \u5171\u4EAB\u7CFB\u7EDF\u540C\u6B65\u7684\u5230\u6B3E\u8BA4\u6B3E\u8BB0\u5F55\u89C6\u56FE\uFF0C\u7BA1\u7406\u8BA4\u6B3E\u3001\u64A4\u9500\u4E0E\u8BA4\u7F34\u8DF3\u8F6C</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5.5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5V8L9.8 9.2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u8BA4\u6B3E\u6765\u6E90</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8BB0\u5F55\u6765\u81EA EBS \u5171\u4EAB\u5230\u6B3E\uFF0C\u542B\u8BA4\u6B3E\u5355\u53F7\u3001\u91D1\u989D\u4E0E\u540C\u6B65\u65F6\u95F4\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5.5 6L7 7.5L10.5 4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u8BA4\u7F34\u7C7B\u578B</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u533A\u5206\u666E\u901A\u8BA4\u7F34\u4E0E\u5C01\u9876\u8BA4\u7F34\uFF0C\u5C01\u9876\u7C7B\u578B\u5F71\u54CD\u64A4\u9500\u4E0E\u7F34\u6E05\u5224\u5B9A\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M2 6H14M5 2V4M11 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u72B6\u6001\u6807\u8BC6</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8BA4\u6B3E\u72B6\u6001\u5206\u5DF2\u8BA4\u6B3E\u4E0E\u64A4\u9500\u8BA4\u6B3E\uFF0C\u51B3\u5B9A\u53EF\u6267\u884C\u7684\u64CD\u4F5C\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4F7F\u7528</span><h2>\u600E\u4E48\u7528\u5B83\u7BA1\u7406\u8BA4\u6B3E</h2><p>\u67E5\u8BE2\u8BA4\u6B3E \u2192 \u64A4\u9500\u6216\u53D1\u8D77\u8BA4\u7F34 \u2192 \u540C\u6B65\u66F4\u65B0\u7F34\u6E05\u72B6\u6001</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u67E5\u8BE2\u8BA4\u6B3E</h5><small>\u67E5\u770B EBS \u540C\u6B65<br>\u5230\u6B3E\u8BA4\u6B3E\u8BB0\u5F55</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h10M8 3v10" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u64A4\u9500/\u8BA4\u7F34</h5><small>\u64A4\u9500\u8BA4\u6B3E<br>\u6216\u8DF3\u8F6C\u8BA4\u7F34\u7533\u8BF7</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#059669,#047857)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 13L6 9L9 11L13 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><h5>\u66F4\u65B0\u72B6\u6001</h5><small>\u66F4\u65B0\u5408\u540C\u7F34\u6E05<br>\u63A8\u9001 CRM</small></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u4F7F\u7528\u539F\u5219\uFF1A</strong>\u5408\u540C\u4FDD\u8BC1\u91D1\u9875\u662F\u8BA4\u6B3E\u6570\u636E\u7684\u7BA1\u7406\u53F0\uFF0C\u672C\u8EAB\u7531 EBS \u540C\u6B65\u9A71\u52A8\uFF1B\u64A4\u9500\u8BA4\u6B3E\u4F1A\u53CD\u5411\u56DE\u9000\u5408\u540C\u4E0E\u8BA4\u7F34\u6982\u51B5\u7684\u7F34\u6E05\u72B6\u6001\uFF0C\u5C01\u9876\u8BA4\u7F34\u4E0E\u666E\u901A\u8BA4\u7F34\u5904\u7406\u903B\u8F91\u4E0D\u540C\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u5408\u540C\u4FDD\u8BC1\u91D1 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u5408\u540C\u4FDD\u8BC1\u91D1\u7BA1\u7406\u2605(\u67E5\u8BE2/\u64A4\u9500\u8BA4\u6B3E/\u8BA4\u7F34\u7533\u8BF7) \u2192 \u7ED3\u675F\uFF08\u64A4\u9500\u66F4\u65B0\u5408\u540C\u4E0E\u8BA4\u7F34\u6982\u51B5\xB7\u63A8\u9001CRM\uFF1B\u8BA4\u7F34\u7533\u8BF7\u8DF3\u8F6C\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="270" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="370" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">EBS\u5171\u4EAB\u7CFB\u7EDF</text><rect x="500" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4FDD\u8BC1\u91D1\u6807\u51C6\u8BBE\u5B9A</text><rect x="730" y="56" width="200" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="830" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5E74\u5EA6\u7ECF\u9500\u5408\u540C</text><line x1="600" y1="115" x2="600" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="560" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="194" x2="600" y2="230" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="230" width="340" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="600" y="254" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u5408\u540C\u4FDD\u8BC1\u91D1\u7BA1\u7406\u2605</text><text x="600" y="272" text-anchor="middle" fill="#DCFCE7" font-size="10">\u67E5\u8BE2\u8BA4\u6B3E\u8BB0\u5F55/\u64A4\u9500\u8BA4\u6B3E/\u8BA4\u7F34\u7533\u8BF7\u8DF3\u8F6C</text><line x1="600" y1="284" x2="600" y2="400" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="545" y="400" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="425" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="600" y1="440" x2="600" y2="460" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="460" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="482" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="370" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u66F4\u65B0\u5408\u540C\u8BA4\u7F34\u72B6\u6001</text><rect x="500" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="600" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u66F4\u65B0\u8BA4\u7F34\u6982\u51B5</text><rect x="730" y="498" width="200" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="830" y="521" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8DF3\u8F6C\u8BA4\u7F34\u7533\u8BF7</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u7CFB\u7EDF</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u4FDD\u8BC1\u91D1\u5230\u6B3E\u7BA1\u7406 {\u5230\u6B3E\u7BA1\u7406}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7BA1\u7406\u4FDD\u8BC1\u91D1\u5230\u6B3E\u8BB0\u5F55\uFF0C\u638C\u63E1\u4FDD\u8BC1\u91D1\u7F34\u7EB3\u60C5\u51B5</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u901A\u8FC7search\u63A5\u53E3\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E\u8BB0\u5F55</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u652F\u6301\u64A4\u9500\u8BA4\u6B3E(cancelPayById)\uFF0C\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u652F\u6301\u4ECE\u8BA4\u6B3E\u8BB0\u5F55\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7(respectively)</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7BA1\u7406\u4FDD\u8BC1\u91D1\u5230\u6B3E\u8BB0\u5F55\uFF0C\u638C\u63E1\u4FDD\u8BC1\u91D1\u7F34\u7EB3\u60C5\u51B5")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u901A\u8FC7search\u63A5\u53E3\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E\u8BB0\u5F55")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u652F\u6301\u64A4\u9500\u8BA4\u6B3E(cancelPayById)\uFF0C\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u652F\u6301\u4ECE\u8BA4\u6B3E\u8BB0\u5F55\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7(respectively)")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u4FDD\u8BC1\u91D1\u5C01\u9876\u4E0E\u6807\u51C6 {\u914D\u7F6E\u7BA1\u7406}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u901A\u8FC7\u5C01\u9876\u548C\u6807\u51C6\u914D\u7F6E\u63A7\u5236\u4FDD\u8BC1\u91D1\u4E0A\u9650\u548C\u7F34\u7EB3\u6807\u51C6</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u4FDD\u8BC1\u91D1\u5C01\u9876(CmDepositsCeiling)\u8BBE\u7F6E\u4FDD\u8BC1\u91D1\u4E0A\u9650</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4FDD\u8BC1\u91D1\u6807\u51C6(CmDepositsPayStandard)\u914D\u7F6E\u7F34\u7EB3\u6807\u51C6</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u901A\u8FC7\u5C01\u9876\u548C\u6807\u51C6\u914D\u7F6E\u63A7\u5236\u4FDD\u8BC1\u91D1\u4E0A\u9650\u548C\u7F34\u7EB3\u6807\u51C6")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u4FDD\u8BC1\u91D1\u5C01\u9876(CmDepositsCeiling)\u8BBE\u7F6E\u4FDD\u8BC1\u91D1\u4E0A\u9650")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4FDD\u8BC1\u91D1\u6807\u51C6(CmDepositsPayStandard)\u914D\u7F6E\u7F34\u7EB3\u6807\u51C6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5408\u540C\u4FDD\u8BC1\u91D1\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5230\u6B3EID</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.PAYMENT_ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5230\u6B3E\u8BB0\u5F55ID</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.CONTRACT_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5173\u8054\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.CUSTOMER_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.PAYMENT_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u5230\u6B3E\u65E5\u671F</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.PAYMENT_DATE</td><td${_scopeId}>\u65E5\u671F\u663E\u793A\u6846</td><td${_scopeId}>\u5230\u6B3E\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>CM_DEPOSITS_PAYMENT.STATUS</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u5230\u6B3EID"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.PAYMENT_ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5230\u6B3E\u8BB0\u5F55ID"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u751F\u6210")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.CONTRACT_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5173\u8054\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.CUSTOMER_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.PAYMENT_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5230\u6B3E\u65E5\u671F"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.PAYMENT_DATE"),
                createVNode("td", null, "\u65E5\u671F\u663E\u793A\u6846"),
                createVNode("td", null, "\u5230\u6B3E\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "CM_DEPOSITS_PAYMENT.STATUS"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4F7F\u7528\u6587\u672C\u8F93\u5165\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u67E5\u8BE2\u6761\u4EF6\u4F7F\u7528\u6587\u672C\u8F93\u5165\uFF0C\u65E0\u72EC\u7ACB\u5F39\u7A97\u3002")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2</td><td${_scopeId}>\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528search\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u8BA4\u6B3E</td><td${_scopeId}>\u64A4\u9500\u8BA4\u6B3E\u8BB0\u5F55</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u53EF\u64A4\u9500\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528cancelPayById\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u8BA4\u7F34\u7533\u8BF7</td><td${_scopeId}>\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u8BA4\u6B3E\u8BB0\u5F55</td><td${_scopeId}>\u8C03\u7528respectively\u63A5\u53E3</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528"),
                createVNode("td", null, "\u8C03\u7528search\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u64A4\u9500\u8BA4\u6B3E"),
                createVNode("td", null, "\u64A4\u9500\u8BA4\u6B3E\u8BB0\u5F55"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u53EF\u64A4\u9500\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528cancelPayById\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BA4\u7F34\u7533\u8BF7"),
                createVNode("td", null, "\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u8BA4\u6B3E\u8BB0\u5F55"),
                createVNode("td", null, "\u8C03\u7528respectively\u63A5\u53E3")
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
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u7BA1\u7406\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u4E3A\u67E5\u8BE2\u7BA1\u7406\u9875\u9762\uFF0C\u65E0\u4FDD\u5B58\u64CD\u4F5C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002\u64A4\u9500\u8BA4\u6B3E\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, "\u672C\u9875\u9762\u65E0\u63D0\u4EA4\u64CD\u4F5C\u3002\u64A4\u9500\u8BA4\u6B3E\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>\u72B6\u6001\u673A\u6D41\u8F6C\u56FE</h4><div class="language-text"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\u5230\u6B3E \u2500\u2500\u8BA4\u7F34\u7533\u8BF7\u2500\u2500\u2192 \u5DF2\u8BA4\u7F34 \u2500\u2500\u64A4\u9500\u8BA4\u6B3E\u2500\u2500\u2192 \u5DF2\u64A4\u9500</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}></span></span></code></pre></div><h4${_scopeId}>\u72B6\u6001\u673A\u5217\u8868</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u72B6\u6001\u673A\u540D\u79F0</th><th${_scopeId}>\u72B6\u6001\u91CA\u4E49</th><th${_scopeId}>\u53EF\u6267\u884C\u7684\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}></tbody></table><p${_scopeId}>&gt;|</p><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5DF2\u5230\u6B3E</th><th${_scopeId}>\u4FDD\u8BC1\u91D1\u5DF2\u5230\u6B3E\u672A\u8BA4\u7F34</th><th${_scopeId}>\u67E5\u8BE2\u3001\u8BA4\u7F34\u7533\u8BF7</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5DF2\u64A4\u9500</td><td${_scopeId}>\u8BA4\u6B3E\u5DF2\u64A4\u9500</td><td${_scopeId}>\u67E5\u8BE2</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\u5230\u6B3E \u2500\u2500\u8BA4\u7F34\u7533\u8BF7\u2500\u2500\u2192 \u5DF2\u8BA4\u7F34 \u2500\u2500\u64A4\u9500\u8BA4\u6B3E\u2500\u2500\u2192 \u5DF2\u64A4\u9500")
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
            createVNode("tbody")
          ]),
          createVNode("p", null, ">|"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5DF2\u5230\u6B3E"),
                createVNode("th", null, "\u4FDD\u8BC1\u91D1\u5DF2\u5230\u6B3E\u672A\u8BA4\u7F34"),
                createVNode("th", null, "\u67E5\u8BE2\u3001\u8BA4\u7F34\u7533\u8BF7")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u5DF2\u64A4\u9500"),
                createVNode("td", null, "\u8BA4\u6B3E\u5DF2\u64A4\u9500"),
                createVNode("td", null, "\u67E5\u8BE2")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ACM_DEPOSITS_PAYMENT\uFF08\u4FDD\u8BC1\u91D1\u5230\u6B3E\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PAYMENT_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u5230\u6B3EID</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>CONTRACT_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u5408\u540C\u7F16\u53F7</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUSTOMER_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_AMT</td><td${_scopeId}>DECIMAL</td><td${_scopeId}>\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>\u5230\u6B3E\u91D1\u989D</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>PAYMENT_DATE</td><td${_scopeId}>DATE</td><td${_scopeId}>\u5230\u6B3E\u65E5\u671F</td><td${_scopeId}>\u5230\u6B3E\u65E5\u671F</td><td${_scopeId}>\u7CFB\u7EDF\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>STATUS</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>\u8BA4\u6B3E\u72B6\u6001</td><td${_scopeId}>\u7CFB\u7EDF\u66F4\u65B0</td></tr></tbody></table>`);
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
                createVNode("td", null, "PAYMENT_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "\u5230\u6B3EID"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CONTRACT_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u5408\u540C\u7F16\u53F7"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CUSTOMER_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u540D\u79F0"),
                createVNode("td", null, "\u7ECF\u9500\u5546"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_AMT"),
                createVNode("td", null, "DECIMAL"),
                createVNode("td", null, "\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u5230\u6B3E\u91D1\u989D"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PAYMENT_DATE"),
                createVNode("td", null, "DATE"),
                createVNode("td", null, "\u5230\u6B3E\u65E5\u671F"),
                createVNode("td", null, "\u5230\u6B3E\u65E5\u671F"),
                createVNode("td", null, "\u7CFB\u7EDF\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "STATUS"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "\u8BA4\u6B3E\u72B6\u6001"),
                createVNode("td", null, "\u7CFB\u7EDF\u66F4\u65B0")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1ACM_DEPOSITS_CEILING\uFF08\u4FDD\u8BC1\u91D1\u5C01\u9876\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>CEILING_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr></tbody></table>`);
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
                createVNode("td", null, "CEILING_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88683\uFF1ACM_DEPOSITS_PAY_STANDARD\uFF08\u4FDD\u8BC1\u91D1\u6807\u51C6\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PAY_STANDARD_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr></tbody></table>`);
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
                createVNode("td", null, "PAY_STANDARD_ID"),
                createVNode("td", null, "BIGINT"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u81EA\u589E\u4E3B\u952E")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u64A4\u9500\u8BA4\u6B3E\u5931\u8D25</td><td${_scopeId}>\u64A4\u9500\u65F6</td><td${_scopeId}>\u8BA4\u6B3E\u5DF2\u88AB\u4F7F\u7528\u6216\u72B6\u6001\u4E0D\u53EF\u64A4\u9500</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u8BC1\u91D1ID\u4E0D\u80FD\u7A7A</td><td${_scopeId}>\u64A4\u9500/\u8BA4\u7F34\u65F6</td><td${_scopeId}>\u672A\u9009\u4E2D\u5230\u6B3E\u8BB0\u5F55\u6216\u8BB0\u5F55ID\u4E22\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u7B14\u8BA4\u6B3E\u91D1\u989D\u5DF2\u8FDB\u884C\u64A4\u9500\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u8FDB\u884C\u8BA4\u9886</td><td${_scopeId}>\u8BA4\u7F34\u7533\u8BF7\u65F6</td><td${_scopeId}>\u8BA4\u6B3E\u5DF2\u64A4\u9500\uFF0C\u4E0D\u53EF\u518D\u8BA4\u9886</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BE5\u8BA4\u6B3E\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\uFF0C\u4E0D\u80FD\u518D\u8FDB\u884C\u8BA4\u7F34\u64CD\u4F5C</td><td${_scopeId}>\u8BA4\u7F34\u7533\u8BF7\u65F6</td><td${_scopeId}>\u8BA4\u6B3E\u5DF2\u7528\u4E8E\u5C01\u9876\u8BA4\u7F34</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5F53\u524D\u6CD5\u4EBA\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFBit\u5904\u7406</td><td${_scopeId}>\u8BA4\u7F34\u7533\u8BF7\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u672A\u5173\u8054\u6CD5\u4EBA\u4E3B\u6570\u636E</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u8BA4\u7F34\u7533\u8BF7\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u6CD5\u4EBA\u7F16\u7801\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8id\u3001\u7ECF\u9500\u5546id\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2/\u8BA4\u7F34\u65F6</td><td${_scopeId}>\u5FC5\u586B\u53C2\u6570\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u67E5\u8BE2/\u8BA4\u7F34\u65F6</td><td${_scopeId}>\u5408\u540C\u7C7B\u578B\u53C2\u6570\u7F3A\u5931</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C</td><td${_scopeId}>\u5168\u5C40</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u64A4\u9500\u8BA4\u6B3E\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u9009\u4E2D\u8BA4\u6B3E\u8BB0\u5F55\u70B9\u51FB&quot;\u64A4\u9500\u8BA4\u6B3E&quot;\uFF0CcancelPayById\u63A5\u53E3\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u64A4\u9500\u65F6\u8FD4\u56DE\u5931\u8D25</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u64A4\u9500\u8BA4\u6B3E\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u6267\u884C\uFF0C\u64A4\u9500\u540E\u6062\u590D\u8BA4\u6B3E\u72B6\u6001\u5E76\u56DE\u9000\u4FDD\u8BC1\u91D1\u4F59\u989D\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u8BA4\u6B3E\u5DF2\u88AB\u4F7F\u7528\uFF0C\u5982\u5DF2\u5173\u8054\u4FDD\u8BC1\u91D1\u51CF\u514D\u7533\u8BF7\uFF08CM_DEPOSITS_REDUCTION_HEAD\uFF09\u6216\u5DF2\u6C47\u603B\u5230\u8BA4\u7F34\u6982\u51B5\uFF08CM_CONTRACT_PAYMENT_SUMMARY\uFF09\uFF0C\u4E0D\u53EF\u64A4\u9500\uFF1B(2)\u8BA4\u6B3E\u72B6\u6001\u4E0D\u53EF\u64A4\u9500\uFF0CSTATUS\u975E&quot;\u5DF2\u8BA4\u7F34&quot;\uFF08\u5982\u5DF2\u64A4\u9500\u6216\u5DF2\u5230\u6B3E\u672A\u8BA4\u7F34\uFF09\uFF1B(3)\u5DE5\u4F5C\u6D41EPM_PAYMENT_ALLOT_CANCEL\u914D\u7F6E\u7F3A\u5931\u6216OA\u7CFB\u7EDF\u4E0D\u53EF\u7528\u3002\u9700\u6838\u67E5\u8BA4\u6B3E\u4F7F\u7528\u60C5\u51B5\u53CA\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.PAYMENT_AMT, P.PAYMENT_DATE, P.STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>SUM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(R.REDUCTION_AMT) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_REDUCTION_HEAD R</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>          </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.CONTRACT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>APPROVED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5DF2\u51CF\u514D\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT P</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{paymentId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u4FDD\u8BC1\u91D1ID\u4E0D\u80FD\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u5217\u8868\u9875\u672A\u9009\u4E2D\u8BB0\u5F55\u6216\u9009\u4E2D\u8BB0\u5F55ID\u4E22\u5931\uFF0C\u76F4\u63A5\u70B9\u51FB&quot;\u64A4\u9500\u8BA4\u6B3E&quot;\u6216&quot;\u8BA4\u7F34\u7533\u8BF7&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AcancelPayById\u4E0Erespectively\u63A5\u53E3\u5728CmDepositsPaymentServiceImpl\u4E2D\u524D\u7F6E\u6821\u9A8CPAYMENT_ID\u975E\u7A7A\u3002\u4FDD\u8BC1\u91D1ID\u662F\u5230\u6B3E\u8BB0\u5F55\u7684\u4E3B\u952E\uFF0C\u672A\u4F20\u5165\u5C06\u5BFC\u81F4\u540E\u7EED\u67E5\u8BE2\u3001\u72B6\u6001\u66F4\u65B0\u3001\u5DE5\u4F5C\u6D41\u53D1\u8D77\u5747\u65E0\u6CD5\u5B9A\u4F4D\u8BB0\u5F55\u3002\u6821\u9A8C\u5728Service\u5C42\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT, PAYMENT_DATE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u8BE5\u7B14\u8BA4\u6B3E\u91D1\u989D\u5DF2\u8FDB\u884C\u64A4\u9500\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u8FDB\u884C\u8BA4\u9886</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5BF9\u5DF2\u64A4\u9500\u7684\u8BA4\u6B3E\u8BB0\u5F55\u518D\u6B21\u70B9\u51FB&quot;\u8BA4\u7F34\u7533\u8BF7&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u8BA4\u7F34\u7533\u8BF7(respectively)\u63A5\u53E3\u6821\u9A8C\u8BA4\u6B3E\u72B6\u6001\uFF0C\u82E5\u8BE5\u7B14\u8BA4\u6B3E\u5DF2\u6267\u884C\u8FC7\u64A4\u9500\u64CD\u4F5C\uFF08STATUS=&#39;CANCELLED&#39;\u6216\u5DF2\u8BB0\u5F55\u64A4\u9500\u5386\u53F2\uFF09\uFF0C\u5219\u4E0D\u5141\u8BB8\u518D\u53D1\u8D77\u8BA4\u9886\u3002\u64A4\u9500\u64CD\u4F5C\u4F1A\u5199\u5165CmDepositsPaymentHistory\u5386\u53F2\u8868\uFF0C\u518D\u6B21\u8BA4\u9886\u5C06\u5BFC\u81F4\u8BA4\u6B3E\u91D1\u989D\u91CD\u590D\u4F7F\u7528\uFF0C\u7834\u574F\u4FDD\u8BC1\u91D1\u4F59\u989D\u4E00\u81F4\u6027\u3002\u9700\u9009\u62E9\u72B6\u6001\u4E3A&quot;\u5DF2\u5230\u6B3E&quot;\u6216&quot;\u5DF2\u8BA4\u7F34&quot;\u7684\u6709\u6548\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID, P.CONTRACT_NO, P.PAYMENT_AMT, P.STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         H.OPERATION_TYPE, H.OPERATION_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT P</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT_HISTORY H </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.PAYMENT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CANCELLED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.OPERATION_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>CANCEL</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u8BE5\u8BA4\u6B3E\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\uFF0C\u4E0D\u80FD\u518D\u8FDB\u884C\u8BA4\u7F34\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5BF9\u5DF2\u7528\u4E8E\u5C01\u9876\u8BA4\u7F34\u7684\u8BA4\u6B3E\u8BB0\u5F55\u70B9\u51FB&quot;\u8BA4\u7F34\u7533\u8BF7&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u8BA4\u6B3E\u8BB0\u5F55\u5B58\u5728CONVERT_CEILING_FLAG\u5B57\u6BB5\u6807\u8BC6\u662F\u5426\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\u3002\u5F53CONVERT_CEILING_FLAG=&#39;Y&#39;\u65F6\uFF0C\u8BE5\u8BA4\u6B3E\u5DF2\u7EB3\u5165\u5C01\u9876\u8BA4\u7F34\u6D41\u7A0B\uFF0C\u518D\u6B21\u53D1\u8D77\u666E\u901A\u8BA4\u7F34\u5C06\u5BFC\u81F4\u540C\u4E00\u7B14\u6B3E\u9879\u88AB\u53CC\u91CD\u8BA4\u7F34\u3002\u5C01\u9876\u8BA4\u7F34\u4E0E\u666E\u901A\u8BA4\u7F34\u4E92\u65A5\uFF0C\u9700\u5148\u64A4\u9500\u5C01\u9876\u8BA4\u7F34\u518D\u53D1\u8D77\u666E\u901A\u8BA4\u7F34</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         PAYMENT_STATUS, CONVERT_CEILING_FLAG, PAYMENT_TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONVERT_CEILING_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Y</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>SHARE_COMPLETE_PAY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u5F53\u524D\u6CD5\u4EBA\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFBit\u5904\u7406</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\uFF0Crespectively\u63A5\u53E3\u6839\u636E\u7ECF\u9500\u5546\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\u8FD4\u56DE\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u8BA4\u7F34\u7533\u8BF7\u9700\u5173\u8054\u6CD5\u4EBA\u4FE1\u606F\u7528\u4E8E\u8D44\u91D1\u6D41\u5411\u786E\u8BA4\u3002CmDepositsPaymentServiceImpl\u6839\u636E\u7ECF\u9500\u5546CUSTOMER_ID\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\u8868\uFF0C\u82E5\u7ECF\u9500\u5546\u672A\u914D\u7F6E\u6CD5\u4EBA\u5173\u8054\u6216\u6CD5\u4EBA\u4E3B\u6570\u636E\u5DF2\u5931\u6548\uFF0C\u5C06\u629B\u51FA\u6B64\u5F02\u5E38\u3002\u9700\u8054\u7CFBIT\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u5173\u8054\u5173\u7CFB</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         C.CUSTOMER_ID, C.CORPORATE_CODE, C.CORPORATE_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT P</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_CORPORATE_REL C </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.BILLING_UNIT_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CUSTOMER_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CORPORATE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u6CD5\u4EBA\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u8BA4\u7F34\u7533\u8BF7\u6216\u4FDD\u8BC1\u91D1\u540C\u6B65\u65F6\uFF0C\u7ECF\u9500\u5546\u5BF9\u5E94\u7684\u6CD5\u4EBA\u7F16\u7801\uFF08CORPORATE_CODE\uFF09\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u6CD5\u4EBA\u7F16\u7801\u662F\u4FDD\u8BC1\u91D1\u8BA4\u7F34\u63A8\u9001CRM\u3001\u8D44\u91D1\u6D41\u5411\u786E\u8BA4\u7684\u5173\u952E\u6807\u8BC6\u3002CmDepositsPaymentServiceImpl\u5728\u540C\u6B65\u4FDD\u8BC1\u91D1\u6216\u53D1\u8D77\u8BA4\u7F34\u524D\u6821\u9A8C\u6CD5\u4EBA\u7F16\u7801\u975E\u7A7A\u3002\u6CD5\u4EBA\u7F16\u7801\u7F3A\u5931\u5C06\u5BFC\u81F4CRM\u4FA7\u65E0\u6CD5\u5339\u914D\u6CD5\u4EBA\u4E3B\u4F53\uFF0C\u8D44\u91D1\u6D41\u5411\u65E0\u6CD5\u786E\u8BA4\u3002\u9700\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u7F16\u7801</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         C.CUSTOMER_CODE, C.CORPORATE_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT P</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER C </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.BILLING_UNIT_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CUSTOMER_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CORPORATE_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CORPORATE_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u4E8B\u4E1A\u90E8id\u3001\u7ECF\u9500\u5546id\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E\u6216\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\u65F6\uFF0CENTID\uFF08\u4E8B\u4E1A\u90E8ID\uFF09\u6216CUSTOMER_ID\uFF08\u7ECF\u9500\u5546ID\uFF09\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u4E8B\u4E1A\u90E8\u548C\u7ECF\u9500\u5546\u662F\u4FDD\u8BC1\u91D1\u6570\u636E\u9694\u79BB\u7684\u6838\u5FC3\u7EF4\u5EA6\u3002CmDepositsPaymentServiceImpl\u5728\u67E5\u8BE2\u3001\u8BA4\u7F34\u3001\u64A4\u9500\u7B49\u64CD\u4F5C\u524D\u6821\u9A8CENTID\u548CCUSTOMER_ID\u975E\u7A7A\u3002\u53C2\u6570\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u67E5\u8BE2\u65E0\u6570\u636E\u8303\u56F4\u6216\u8BA4\u7F34\u65E0\u6CD5\u5B9A\u4F4D\u4FDD\u8BC1\u91D1\u5F52\u5C5E\u3002\u901A\u5E38\u7531\u524D\u7AEF\u672A\u6B63\u786E\u4F20\u5165\u5F53\u524D\u4E8B\u4E1A\u90E8\u6216\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5BFC\u81F4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID, CONTRACT_NO, ENTID, BILLING_UNIT_CODE, CUSTOMER_NAME, PAYMENT_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENTID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> BILLING_UNIT_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u5408\u540C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6216\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\u65F6\uFF0CCONTRACT_TYPE\uFF08\u5408\u540C\u7C7B\u578B\uFF09\u53C2\u6570\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u5408\u540C\u7C7B\u578B\u533A\u5206\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u3001\u4E34\u65F6\u5408\u540C\u7B49\u4E0D\u540C\u7C7B\u578B\uFF0C\u5F71\u54CD\u4FDD\u8BC1\u91D1\u6807\u51C6\u548C\u5C01\u9876\u914D\u7F6E\u7684\u5339\u914D\u3002CmDepositsPaymentServiceImpl\u5728\u67E5\u8BE2\u548C\u8BA4\u7F34\u524D\u6821\u9A8CCONTRACT_TYPE\u975E\u7A7A\u3002\u5408\u540C\u7C7B\u578B\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF08CM_DEPOSITS_PAY_STANDARD\uFF09\u65E0\u6CD5\u5339\u914D\uFF0C\u8BA4\u7F34\u91D1\u989D\u8BA1\u7B97\u65E0\u4F9D\u636E\u3002\u9700\u524D\u7AEF\u6B63\u786E\u4F20\u5165\u5408\u540C\u7C7B\u578B\u53C2\u6570</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, CONTRACT_TYPE, PAYMENT_AMT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CM_DEPOSITS_PAYMENT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CONTRACT_TYPE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u524D\u7AEF\u8C03\u7528cm-deposits-payments\u76F8\u5173\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8BF7\u6C42\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7axios\u8C03\u7528AE_BUSINESS\u670D\u52A1\uFF0C\u7F51\u7EDC\u5F02\u5E38\u3001\u670D\u52A1\u5B95\u673A\u3001\u7F51\u5173\u8D85\u65F6\u5747\u4F1A\u89E6\u53D1\u3002\u524D\u7AEF\u62E6\u622A\u5668\u7EDF\u4E00\u6355\u83B7\u5E76toast\u63D0\u793A\u3002\u9700\u68C0\u67E5AE_BUSINESS\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u7F51\u7EDC\u5C42\u5F02\u5E38\uFF0C\u65E0SQL\u6392\u67E5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DUAL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u5F53\u524D\u7528\u6237\u5BF9\u64A4\u9500\u8BA4\u6B3E\u3001\u8BA4\u7F34\u7533\u8BF7\u7B49\u64CD\u4F5C\u65E0\u5BF9\u5E94\u529F\u80FD\u6743\u9650\u6216\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u901A\u8FC7\u6743\u9650\u6CE8\u89E3\u6821\u9A8C\u7528\u6237\u89D2\u8272\uFF0C\u524D\u7AEF\u901A\u8FC7\u83DC\u5355\u548C\u6309\u94AE\u6743\u9650\u63A7\u5236\u663E\u9690\u3002\u7528\u6237\u65E0\u6743\u9650\u65F6\u540E\u7AEF\u8FD4\u56DE403\uFF0C\u524D\u7AEF\u62E6\u622A\u5668toast\u63D0\u793A\u3002\u9700\u5728\u6743\u9650\u7BA1\u7406\u4E2D\u4E3A\u7528\u6237\u5206\u914D\u5BF9\u5E94\u89D2\u8272</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u6743\u9650\u5C42\u5F02\u5E38\uFF0C\u8BF7\u6838\u67E5\u7528\u6237\u89D2\u8272\u914D\u7F6E</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63D0\u793A </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DUAL;</span></span>
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
                createVNode("td", null, "\u64A4\u9500\u8BA4\u6B3E\u5931\u8D25"),
                createVNode("td", null, "\u64A4\u9500\u65F6"),
                createVNode("td", null, "\u8BA4\u6B3E\u5DF2\u88AB\u4F7F\u7528\u6216\u72B6\u6001\u4E0D\u53EF\u64A4\u9500"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u8BC1\u91D1ID\u4E0D\u80FD\u7A7A"),
                createVNode("td", null, "\u64A4\u9500/\u8BA4\u7F34\u65F6"),
                createVNode("td", null, "\u672A\u9009\u4E2D\u5230\u6B3E\u8BB0\u5F55\u6216\u8BB0\u5F55ID\u4E22\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u7B14\u8BA4\u6B3E\u91D1\u989D\u5DF2\u8FDB\u884C\u64A4\u9500\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u8FDB\u884C\u8BA4\u9886"),
                createVNode("td", null, "\u8BA4\u7F34\u7533\u8BF7\u65F6"),
                createVNode("td", null, "\u8BA4\u6B3E\u5DF2\u64A4\u9500\uFF0C\u4E0D\u53EF\u518D\u8BA4\u9886"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BE5\u8BA4\u6B3E\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\uFF0C\u4E0D\u80FD\u518D\u8FDB\u884C\u8BA4\u7F34\u64CD\u4F5C"),
                createVNode("td", null, "\u8BA4\u7F34\u7533\u8BF7\u65F6"),
                createVNode("td", null, "\u8BA4\u6B3E\u5DF2\u7528\u4E8E\u5C01\u9876\u8BA4\u7F34"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F53\u524D\u6CD5\u4EBA\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFBit\u5904\u7406"),
                createVNode("td", null, "\u8BA4\u7F34\u7533\u8BF7\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u672A\u5173\u8054\u6CD5\u4EBA\u4E3B\u6570\u636E"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u8BA4\u7F34\u7533\u8BF7\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u6CD5\u4EBA\u7F16\u7801\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8id\u3001\u7ECF\u9500\u5546id\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2/\u8BA4\u7F34\u65F6"),
                createVNode("td", null, "\u5FC5\u586B\u53C2\u6570\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u67E5\u8BE2/\u8BA4\u7F34\u65F6"),
                createVNode("td", null, "\u5408\u540C\u7C7B\u578B\u53C2\u6570\u7F3A\u5931"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8D85\u65F6"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C"),
                createVNode("td", null, "\u5168\u5C40"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u64CD\u4F5C\u6743\u9650"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u64A4\u9500\u8BA4\u6B3E\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u9009\u4E2D\u8BA4\u6B3E\u8BB0\u5F55\u70B9\u51FB"\u64A4\u9500\u8BA4\u6B3E"\uFF0CcancelPayById\u63A5\u53E3\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u64A4\u9500\u65F6\u8FD4\u56DE\u5931\u8D25')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u64A4\u9500\u8BA4\u6B3E\u901A\u8FC7EPM_PAYMENT_ALLOT_CANCEL\u5DE5\u4F5C\u6D41\u6267\u884C\uFF0C\u64A4\u9500\u540E\u6062\u590D\u8BA4\u6B3E\u72B6\u6001\u5E76\u56DE\u9000\u4FDD\u8BC1\u91D1\u4F59\u989D\u3002\u5931\u8D25\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)\u8BA4\u6B3E\u5DF2\u88AB\u4F7F\u7528\uFF0C\u5982\u5DF2\u5173\u8054\u4FDD\u8BC1\u91D1\u51CF\u514D\u7533\u8BF7\uFF08CM_DEPOSITS_REDUCTION_HEAD\uFF09\u6216\u5DF2\u6C47\u603B\u5230\u8BA4\u7F34\u6982\u51B5\uFF08CM_CONTRACT_PAYMENT_SUMMARY\uFF09\uFF0C\u4E0D\u53EF\u64A4\u9500\uFF1B(2)\u8BA4\u6B3E\u72B6\u6001\u4E0D\u53EF\u64A4\u9500\uFF0CSTATUS\u975E"\u5DF2\u8BA4\u7F34"\uFF08\u5982\u5DF2\u64A4\u9500\u6216\u5DF2\u5230\u6B3E\u672A\u8BA4\u7F34\uFF09\uFF1B(3)\u5DE5\u4F5C\u6D41EPM_PAYMENT_ALLOT_CANCEL\u914D\u7F6E\u7F3A\u5931\u6216OA\u7CFB\u7EDF\u4E0D\u53EF\u7528\u3002\u9700\u6838\u67E5\u8BA4\u6B3E\u4F7F\u7528\u60C5\u51B5\u53CA\u72B6\u6001')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.PAYMENT_AMT, P.PAYMENT_DATE, P.STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "SUM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(R.REDUCTION_AMT) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_REDUCTION_HEAD R")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " R.CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.CONTRACT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " R.HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "APPROVED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5DF2\u51CF\u514D\u91D1\u989D")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT P")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{paymentId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u4FDD\u8BC1\u91D1ID\u4E0D\u80FD\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u5728\u5217\u8868\u9875\u672A\u9009\u4E2D\u8BB0\u5F55\u6216\u9009\u4E2D\u8BB0\u5F55ID\u4E22\u5931\uFF0C\u76F4\u63A5\u70B9\u51FB"\u64A4\u9500\u8BA4\u6B3E"\u6216"\u8BA4\u7F34\u7533\u8BF7"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1AcancelPayById\u4E0Erespectively\u63A5\u53E3\u5728CmDepositsPaymentServiceImpl\u4E2D\u524D\u7F6E\u6821\u9A8CPAYMENT_ID\u975E\u7A7A\u3002\u4FDD\u8BC1\u91D1ID\u662F\u5230\u6B3E\u8BB0\u5F55\u7684\u4E3B\u952E\uFF0C\u672A\u4F20\u5165\u5C06\u5BFC\u81F4\u540E\u7EED\u67E5\u8BE2\u3001\u72B6\u6001\u66F4\u65B0\u3001\u5DE5\u4F5C\u6D41\u53D1\u8D77\u5747\u65E0\u6CD5\u5B9A\u4F4D\u8BB0\u5F55\u3002\u6821\u9A8C\u5728Service\u5C42\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u64CD\u4F5C")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT, PAYMENT_DATE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u8BE5\u7B14\u8BA4\u6B3E\u91D1\u989D\u5DF2\u8FDB\u884C\u64A4\u9500\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u8FDB\u884C\u8BA4\u9886"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u5BF9\u5DF2\u64A4\u9500\u7684\u8BA4\u6B3E\u8BB0\u5F55\u518D\u6B21\u70B9\u51FB"\u8BA4\u7F34\u7533\u8BF7"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u8BA4\u7F34\u7533\u8BF7(respectively)\u63A5\u53E3\u6821\u9A8C\u8BA4\u6B3E\u72B6\u6001\uFF0C\u82E5\u8BE5\u7B14\u8BA4\u6B3E\u5DF2\u6267\u884C\u8FC7\u64A4\u9500\u64CD\u4F5C\uFF08STATUS='CANCELLED'\u6216\u5DF2\u8BB0\u5F55\u64A4\u9500\u5386\u53F2\uFF09\uFF0C\u5219\u4E0D\u5141\u8BB8\u518D\u53D1\u8D77\u8BA4\u9886\u3002\u64A4\u9500\u64CD\u4F5C\u4F1A\u5199\u5165CmDepositsPaymentHistory\u5386\u53F2\u8868\uFF0C\u518D\u6B21\u8BA4\u9886\u5C06\u5BFC\u81F4\u8BA4\u6B3E\u91D1\u989D\u91CD\u590D\u4F7F\u7528\uFF0C\u7834\u574F\u4FDD\u8BC1\u91D1\u4F59\u989D\u4E00\u81F4\u6027\u3002\u9700\u9009\u62E9\u72B6\u6001\u4E3A"\u5DF2\u5230\u6B3E"\u6216"\u5DF2\u8BA4\u7F34"\u7684\u6709\u6548\u8BB0\u5F55`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID, P.CONTRACT_NO, P.PAYMENT_AMT, P.STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         H.OPERATION_TYPE, H.OPERATION_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT P")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT_HISTORY H "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.PAYMENT_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CANCELLED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.OPERATION_TYPE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "CANCEL"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u8BE5\u8BA4\u6B3E\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\uFF0C\u4E0D\u80FD\u518D\u8FDB\u884C\u8BA4\u7F34\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u5BF9\u5DF2\u7528\u4E8E\u5C01\u9876\u8BA4\u7F34\u7684\u8BA4\u6B3E\u8BB0\u5F55\u70B9\u51FB"\u8BA4\u7F34\u7533\u8BF7"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u8BA4\u6B3E\u8BB0\u5F55\u5B58\u5728CONVERT_CEILING_FLAG\u5B57\u6BB5\u6807\u8BC6\u662F\u5426\u5DF2\u8F6C\u6362\u4E3A\u5C01\u9876\u8BA4\u6B3E\u3002\u5F53CONVERT_CEILING_FLAG='Y'\u65F6\uFF0C\u8BE5\u8BA4\u6B3E\u5DF2\u7EB3\u5165\u5C01\u9876\u8BA4\u7F34\u6D41\u7A0B\uFF0C\u518D\u6B21\u53D1\u8D77\u666E\u901A\u8BA4\u7F34\u5C06\u5BFC\u81F4\u540C\u4E00\u7B14\u6B3E\u9879\u88AB\u53CC\u91CD\u8BA4\u7F34\u3002\u5C01\u9876\u8BA4\u7F34\u4E0E\u666E\u901A\u8BA4\u7F34\u4E92\u65A5\uFF0C\u9700\u5148\u64A4\u9500\u5C01\u9876\u8BA4\u7F34\u518D\u53D1\u8D77\u666E\u901A\u8BA4\u7F34")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, PAYMENT_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         PAYMENT_STATUS, CONVERT_CEILING_FLAG, PAYMENT_TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONVERT_CEILING_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "Y"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "SHARE_COMPLETE_PAY"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u5F53\u524D\u6CD5\u4EBA\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFBit\u5904\u7406"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\uFF0Crespectively\u63A5\u53E3\u6839\u636E\u7ECF\u9500\u5546\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\u8FD4\u56DE\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u8BA4\u7F34\u7533\u8BF7\u9700\u5173\u8054\u6CD5\u4EBA\u4FE1\u606F\u7528\u4E8E\u8D44\u91D1\u6D41\u5411\u786E\u8BA4\u3002CmDepositsPaymentServiceImpl\u6839\u636E\u7ECF\u9500\u5546CUSTOMER_ID\u67E5\u8BE2\u6CD5\u4EBA\u4E3B\u6570\u636E\u8868\uFF0C\u82E5\u7ECF\u9500\u5546\u672A\u914D\u7F6E\u6CD5\u4EBA\u5173\u8054\u6216\u6CD5\u4EBA\u4E3B\u6570\u636E\u5DF2\u5931\u6548\uFF0C\u5C06\u629B\u51FA\u6B64\u5F02\u5E38\u3002\u9700\u8054\u7CFBIT\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u5173\u8054\u5173\u7CFB")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         C.CUSTOMER_ID, C.CORPORATE_CODE, C.CORPORATE_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT P")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_CORPORATE_REL C "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.BILLING_UNIT_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CUSTOMER_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CORPORATE_CODE "),
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u6CD5\u4EBA\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u8BA4\u7F34\u7533\u8BF7\u6216\u4FDD\u8BC1\u91D1\u540C\u6B65\u65F6\uFF0C\u7ECF\u9500\u5546\u5BF9\u5E94\u7684\u6CD5\u4EBA\u7F16\u7801\uFF08CORPORATE_CODE\uFF09\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u6CD5\u4EBA\u7F16\u7801\u662F\u4FDD\u8BC1\u91D1\u8BA4\u7F34\u63A8\u9001CRM\u3001\u8D44\u91D1\u6D41\u5411\u786E\u8BA4\u7684\u5173\u952E\u6807\u8BC6\u3002CmDepositsPaymentServiceImpl\u5728\u540C\u6B65\u4FDD\u8BC1\u91D1\u6216\u53D1\u8D77\u8BA4\u7F34\u524D\u6821\u9A8C\u6CD5\u4EBA\u7F16\u7801\u975E\u7A7A\u3002\u6CD5\u4EBA\u7F16\u7801\u7F3A\u5931\u5C06\u5BFC\u81F4CRM\u4FA7\u65E0\u6CD5\u5339\u914D\u6CD5\u4EBA\u4E3B\u4F53\uFF0C\u8D44\u91D1\u6D41\u5411\u65E0\u6CD5\u786E\u8BA4\u3002\u9700\u5728\u7ECF\u9500\u5546\u4E3B\u6570\u636E\u4E2D\u7EF4\u62A4\u6CD5\u4EBA\u7F16\u7801")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.PAYMENT_ID, P.CONTRACT_NO, P.CUSTOMER_NAME, P.BILLING_UNIT_CODE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         C.CUSTOMER_CODE, C.CORPORATE_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT P")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LEFT JOIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER C "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " P.BILLING_UNIT_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CUSTOMER_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CORPORATE_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " C.CORPORATE_CODE "),
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
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u4E8B\u4E1A\u90E8id\u3001\u7ECF\u9500\u5546id\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u5230\u6B3E\u6216\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\u65F6\uFF0CENTID\uFF08\u4E8B\u4E1A\u90E8ID\uFF09\u6216CUSTOMER_ID\uFF08\u7ECF\u9500\u5546ID\uFF09\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u4E8B\u4E1A\u90E8\u548C\u7ECF\u9500\u5546\u662F\u4FDD\u8BC1\u91D1\u6570\u636E\u9694\u79BB\u7684\u6838\u5FC3\u7EF4\u5EA6\u3002CmDepositsPaymentServiceImpl\u5728\u67E5\u8BE2\u3001\u8BA4\u7F34\u3001\u64A4\u9500\u7B49\u64CD\u4F5C\u524D\u6821\u9A8CENTID\u548CCUSTOMER_ID\u975E\u7A7A\u3002\u53C2\u6570\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u67E5\u8BE2\u65E0\u6570\u636E\u8303\u56F4\u6216\u8BA4\u7F34\u65E0\u6CD5\u5B9A\u4F4D\u4FDD\u8BC1\u91D1\u5F52\u5C5E\u3002\u901A\u5E38\u7531\u524D\u7AEF\u672A\u6B63\u786E\u4F20\u5165\u5F53\u524D\u4E8B\u4E1A\u90E8\u6216\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5BFC\u81F4")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID, CONTRACT_NO, ENTID, BILLING_UNIT_CODE, CUSTOMER_NAME, PAYMENT_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENTID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " BILLING_UNIT_CODE "),
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
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u5408\u540C\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u4FDD\u8BC1\u91D1\u6216\u53D1\u8D77\u8BA4\u7F34\u7533\u8BF7\u65F6\uFF0CCONTRACT_TYPE\uFF08\u5408\u540C\u7C7B\u578B\uFF09\u53C2\u6570\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u5408\u540C\u7C7B\u578B\u533A\u5206\u5E74\u5EA6\u7ECF\u9500\u5408\u540C\u3001\u4E34\u65F6\u5408\u540C\u7B49\u4E0D\u540C\u7C7B\u578B\uFF0C\u5F71\u54CD\u4FDD\u8BC1\u91D1\u6807\u51C6\u548C\u5C01\u9876\u914D\u7F6E\u7684\u5339\u914D\u3002CmDepositsPaymentServiceImpl\u5728\u67E5\u8BE2\u548C\u8BA4\u7F34\u524D\u6821\u9A8CCONTRACT_TYPE\u975E\u7A7A\u3002\u5408\u540C\u7C7B\u578B\u4E3A\u7A7A\u5C06\u5BFC\u81F4\u4FDD\u8BC1\u91D1\u6807\u51C6\uFF08CM_DEPOSITS_PAY_STANDARD\uFF09\u65E0\u6CD5\u5339\u914D\uFF0C\u8BA4\u7F34\u91D1\u989D\u8BA1\u7B97\u65E0\u4F9D\u636E\u3002\u9700\u524D\u7AEF\u6B63\u786E\u4F20\u5165\u5408\u540C\u7C7B\u578B\u53C2\u6570")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PAYMENT_ID, CONTRACT_NO, CUSTOMER_NAME, CONTRACT_TYPE, PAYMENT_AMT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CM_DEPOSITS_PAYMENT")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CONTRACT_TYPE "),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8C03\u7528cm-deposits-payments\u76F8\u5173\u63A5\u53E3\u65F6\uFF0C\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u8FBE\u6216\u8BF7\u6C42\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7axios\u8C03\u7528AE_BUSINESS\u670D\u52A1\uFF0C\u7F51\u7EDC\u5F02\u5E38\u3001\u670D\u52A1\u5B95\u673A\u3001\u7F51\u5173\u8D85\u65F6\u5747\u4F1A\u89E6\u53D1\u3002\u524D\u7AEF\u62E6\u622A\u5668\u7EDF\u4E00\u6355\u83B7\u5E76toast\u63D0\u793A\u3002\u9700\u68C0\u67E5AE_BUSINESS\u670D\u52A1\u72B6\u6001\u3001\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u7F51\u5173\u914D\u7F6E")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u7F51\u7EDC\u5C42\u5F02\u5E38\uFF0C\u65E0SQL\u6392\u67E5"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u793A "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DUAL;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u5F53\u524D\u7528\u6237\u5BF9\u64A4\u9500\u8BA4\u6B3E\u3001\u8BA4\u7F34\u7533\u8BF7\u7B49\u64CD\u4F5C\u65E0\u5BF9\u5E94\u529F\u80FD\u6743\u9650\u6216\u6570\u636E\u6743\u9650")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u901A\u8FC7\u6743\u9650\u6CE8\u89E3\u6821\u9A8C\u7528\u6237\u89D2\u8272\uFF0C\u524D\u7AEF\u901A\u8FC7\u83DC\u5355\u548C\u6309\u94AE\u6743\u9650\u63A7\u5236\u663E\u9690\u3002\u7528\u6237\u65E0\u6743\u9650\u65F6\u540E\u7AEF\u8FD4\u56DE403\uFF0C\u524D\u7AEF\u62E6\u622A\u5668toast\u63D0\u793A\u3002\u9700\u5728\u6743\u9650\u7BA1\u7406\u4E2D\u4E3A\u7528\u6237\u5206\u914D\u5BF9\u5E94\u89D2\u8272")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u6743\u9650\u5C42\u5F02\u5E38\uFF0C\u8BF7\u6838\u67E5\u7528\u6237\u89D2\u8272\u914D\u7F6E"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63D0\u793A "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DUAL;")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u4FDD\u8BC1\u91D1\u4F59\u989D\u4E0D\u6B63\u786E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5230\u6B3E\u8BB0\u5F55\u6216\u64A4\u9500\u8BB0\u5F55\u672A\u53CA\u65F6\u66F4\u65B0</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5SQL <code${_scopeId}>SELECT SUM(PAYMENT_AMT) FROM CM_DEPOSITS_PAYMENT WHERE CONTRACT_NO = #{contractNo} AND STATUS = &#39;VALID&#39;</code></li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u4FDD\u8BC1\u91D1\u4F59\u989D\u4E0D\u6B63\u786E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5230\u6B3E\u8BB0\u5F55\u6216\u64A4\u9500\u8BB0\u5F55\u672A\u53CA\u65F6\u66F4\u65B0"),
            createVNode("li", null, [
              createTextVNode("\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5SQL "),
              createVNode("code", null, "SELECT SUM(PAYMENT_AMT) FROM CM_DEPOSITS_PAYMENT WHERE CONTRACT_NO = #{contractNo} AND STATUS = 'VALID'")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u7ECF\u9500\u5408\u540C\u7BA1\u7406/\u9500\u552E\u5408\u540C/\u5408\u540C\u4FDD\u8BC1\u91D1/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
