import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u4EA7\u54C1\u4E2D\u5FC3/\u5E93\u5B58/\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2/index.md"}');
const _sfc_main = { name: "\u4EA7\u54C1\u4E2D\u5FC3/\u5E93\u5B58/\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2\u67E5\u4EC0\u4E48</h2><p>\u6309\u4E8B\u4E1A\u90E8\u7EF4\u5EA6\u6C47\u603B\u5E93\u5B58\uFF0C\u638C\u63E1\u5404\u4E8B\u4E1A\u90E8\u7684\u5E93\u5B58\u603B\u91CF</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 3v10M11 3v10" stroke="white" stroke-width="1.5"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6C47\u603B\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u6309\u4E8B\u4E1A\u90E8\u805A\u5408\u5404\u4ED3\u5E93\u5E93\u5B58\u603B\u91CF\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#15803D)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke="white" stroke-width="1.5"></circle><path d="M8 5.5v5M5.5 8h5" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6570\u91CF\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u542B\u53EF\u7528\u91CF\u4E0E\u603B\u5E93\u5B58\u91CF\u7B49\u6307\u6807\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 2v12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u8303\u56F4\u53E3\u5F84</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u9ED8\u8BA4\u5F53\u524D\u4E8B\u4E1A\u90E8\uFF0C\u53EF\u5207\u6362\u67E5\u770B\u3002</p></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4F7F\u7528</span><h2>\u600E\u4E48\u7528\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2</h2><p>\u6570\u636E\u53EA\u8BFB\uFF0C\u6C47\u603B\u5C55\u793A\uFF0C\u652F\u6491\u8BA1\u5212\u4E0E\u53D1\u8D27\u5224\u65AD</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="4.5" stroke="white" stroke-width="1.5"></circle><path d="M11 11l3 3" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u9009\u4E8B\u4E1A\u90E8</h5><small>\u5207\u6362\u6216\u9ED8\u8BA4<br>\u5F53\u524D\u4E8B\u4E1A\u90E8</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="1.5" stroke="white" stroke-width="1.5"></rect><path d="M5 5h6M5 8h6M5 11h4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u6C47\u603B\u5C55\u793A</h5><small>\u67E5\u770B\u4E8B\u4E1A\u90E8<br>\u5E93\u5B58\u603B\u91CF</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><circle cx="8" cy="8" r="1.5" stroke="white" stroke-width="1.5"></circle></svg></div><h5>\u4E0B\u94BB\u660E\u7EC6</h5><small>\u8DF3\u8F6C\u5E93\u5B58\u67E5\u8BE2<br>\u770B\u660E\u7EC6</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u8BA1\u5212\u53C2\u8003</h5><small>\u652F\u6491\u8981\u8D27/\u91C7\u8D2D<br>\u4E0E\u53D1\u8D27\u5224\u65AD</small></div></div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2\u2605 \u2192 \u7ED3\u675F\uFF08\u6309\u4E8B\u4E1A\u90E8\u7EF4\u5EA6\u6C47\u603BLNK_INVENTORYS\uFF1B\u4E0B\u6E38\u5E93\u5B58\u660E\u7EC6/\u8BA1\u5212\u53C2\u8003\uFF0C\u4EC5\u67E5\u8BE2\u65E0\u5BA1\u6279\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="280" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="340" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5E93\u5B58\u8868\u6570\u636E(LNK)</text><rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4ED3\u5E93\u4E3B\u6570\u636E</text><rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4EA7\u54C1\u4E3B\u6863</text><rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4E8B\u4E1A\u90E8\u4E3B\u6570\u636E</text><rect x="800" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="860" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">CRM\u7CFB\u7EDF</text><line x1="540" y1="115" x2="540" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="500" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="540" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="540" y1="194" x2="540" y2="228" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="400" y="228" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="540" y="252" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2\u2605</text><text x="540" y="270" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u4E8B\u4E1A\u90E8\xB7\u6C47\u603B\u67E5\u8BE2\xB7\u5C55\u793A</text><line x1="540" y1="282" x2="540" y2="316" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="485" y="316" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="540" y="341" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="540" y1="356" x2="540" y2="400" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="50" y="400" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="422" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="270" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="345" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u5E93\u5B58\u67E5\u8BE2(\u660E\u7EC6)</text><rect x="440" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="515" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8981\u8D27/\u91C7\u8D2D\u8BA1\u5212</text><rect x="610" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="685" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7ECF\u8425\u5206\u6790</text><rect x="780" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="855" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u53D1\u8D27\u53EF\u7528\u91CF</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1A\u4E8B\u4E1A\u90E8\u6743\u9650\u81EA\u52A8\u6CE8\u5165 `\u6570\u636E\u9694\u79BB`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u7528\u6237\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u6240\u5C5E\u4E8B\u4E1A\u90E8\u7684\u5E93\u5B58\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u9694\u79BB</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8ID\uFF08deptId\uFF09\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1ADMS\u7CFB\u7EDF\u7528\u6237\u989D\u5916\u6CE8\u5165\u7ECF\u9500\u5546\u7F16\u7801\uFF08acctCode\uFF09\uFF0C\u4F7F\u7528selectListDMS\u67E5\u8BE2</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u975EDMS\u7528\u6237\u4F7F\u7528selectList\u67E5\u8BE2\uFF0C\u4E0D\u9650\u5236\u7ECF\u9500\u5546</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u7528\u6237\u53EA\u80FD\u67E5\u770B\u81EA\u5DF1\u6240\u5C5E\u4E8B\u4E1A\u90E8\u7684\u5E93\u5B58\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u9694\u79BB")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8ID\uFF08deptId\uFF09\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1ADMS\u7CFB\u7EDF\u7528\u6237\u989D\u5916\u6CE8\u5165\u7ECF\u9500\u5546\u7F16\u7801\uFF08acctCode\uFF09\uFF0C\u4F7F\u7528selectListDMS\u67E5\u8BE2")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u975EDMS\u7528\u6237\u4F7F\u7528selectList\u67E5\u8BE2\uFF0C\u4E0D\u9650\u5236\u7ECF\u9500\u5546")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u4EA7\u54C1\u7F16\u7801\u591A\u503C\u67E5\u8BE2 `\u6279\u91CF\u67E5\u8BE2`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u4E00\u6B21\u6027\u67E5\u8BE2\u591A\u4E2A\u4EA7\u54C1\u7684\u5E93\u5B58\uFF0C\u63D0\u5347\u67E5\u8BE2\u6548\u7387</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5F53\u4EA7\u54C1\u7F16\u7801\u8F93\u5165\u6846\u5305\u542B\u5206\u9694\u7B26\uFF08\u9017\u53F7\u3001\u987F\u53F7\u3001\u5206\u53F7\u3001\u56DE\u8F66\u3001\u6362\u884C\uFF09\u65F6\uFF0C\u540E\u7AEF\u81EA\u52A8\u62C6\u5206\u4E3A\u4EA7\u54C1\u7F16\u7801\u96C6\u5408</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u62C6\u5206\u540E\u4F7F\u7528IN\u67E5\u8BE2\u66FF\u4EE3LIKE\u67E5\u8BE2\uFF0C\u7CBE\u786E\u5339\u914D\u591A\u4E2A\u4EA7\u54C1\u7F16\u7801</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u4E00\u6B21\u6027\u67E5\u8BE2\u591A\u4E2A\u4EA7\u54C1\u7684\u5E93\u5B58\uFF0C\u63D0\u5347\u67E5\u8BE2\u6548\u7387")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u5F53\u4EA7\u54C1\u7F16\u7801\u8F93\u5165\u6846\u5305\u542B\u5206\u9694\u7B26\uFF08\u9017\u53F7\u3001\u987F\u53F7\u3001\u5206\u53F7\u3001\u56DE\u8F66\u3001\u6362\u884C\uFF09\u65F6\uFF0C\u540E\u7AEF\u81EA\u52A8\u62C6\u5206\u4E3A\u4EA7\u54C1\u7F16\u7801\u96C6\u5408")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u62C6\u5206\u540E\u4F7F\u7528IN\u67E5\u8BE2\u66FF\u4EE3LIKE\u67E5\u8BE2\uFF0C\u7CBE\u786E\u5339\u914D\u591A\u4E2A\u4EA7\u54C1\u7F16\u7801")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u5E93\u5B58\u6570\u91CF\u4E0A\u9650\u63A7\u5236 `\u5E93\u5B58\u4E0A\u9650`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u5C55\u793A\u7684\u5E93\u5B58\u6570\u91CF\u4E0D\u8D85\u8FC7\u914D\u7F6E\u7684\u4E0A\u9650\u503C\uFF0C\u907F\u514D\u8D85\u91CF\u5C55\u793A</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u65F6\u5173\u8054LNK_INV_MAX\u8868\u83B7\u53D6\u5E93\u5B58\u4E0A\u9650\uFF0C\u652F\u6301Product\uFF08\u6309\u4EA7\u54C1\uFF09\u3001ProdLine\uFF08\u6309\u4EA7\u54C1\u7EBF\uFF09\u3001ALL\uFF08\u5168\u90E8\uFF09\u4E09\u79CD\u7C7B\u578B</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u5C55\u793A\u5E93\u5B58\u6570\u91CF\u53D6\u5B9E\u9645\u5E93\u5B58\u6C47\u603B\u503C\u4E0E\u4E0A\u9650\u503C\u7684\u8F83\u5C0F\u503C\uFF1Aleast(sum(\u5E93\u5B58\u6570\u91CF), nvl(max(\u4E0A\u9650\u503C), sum(\u5E93\u5B58\u6570\u91CF)))</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u5C55\u793A\u7684\u5E93\u5B58\u6570\u91CF\u4E0D\u8D85\u8FC7\u914D\u7F6E\u7684\u4E0A\u9650\u503C\uFF0C\u907F\u514D\u8D85\u91CF\u5C55\u793A")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u65F6\u5173\u8054LNK_INV_MAX\u8868\u83B7\u53D6\u5E93\u5B58\u4E0A\u9650\uFF0C\u652F\u6301Product\uFF08\u6309\u4EA7\u54C1\uFF09\u3001ProdLine\uFF08\u6309\u4EA7\u54C1\u7EBF\uFF09\u3001ALL\uFF08\u5168\u90E8\uFF09\u4E09\u79CD\u7C7B\u578B")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u5C55\u793A\u5E93\u5B58\u6570\u91CF\u53D6\u5B9E\u9645\u5E93\u5B58\u6C47\u603B\u503C\u4E0E\u4E0A\u9650\u503C\u7684\u8F83\u5C0F\u503C\uFF1Aleast(sum(\u5E93\u5B58\u6570\u91CF), nvl(max(\u4E0A\u9650\u503C), sum(\u5E93\u5B58\u6570\u91CF)))")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5E93\u5B58\u6362\u7B97 `\u8F6C\u6362\u7387\u8BA1\u7B97`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u9700\u6309\u8F6C\u6362\u7387\u5C06\u5E93\u5B58\u6570\u91CF\u6362\u7B97\u4E3A\u5C55\u793A\u5355\u4F4D\uFF08\u7BB1\uFF09</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u7ED3\u679C\u540E\u540E\u5904\u7406\u8C03\u7528getInventoryListConversionRate\u83B7\u53D6\u8F6C\u6362\u7387</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u8F6C\u6362\u7387\u901A\u8FC7Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8BA1\u7B97</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5E93\u5B58\u6362\u7B97\u6570\u91CF = \u5E93\u5B58\u6570\u91CF / \u8F6C\u6362\u7387\uFF08\u4FDD\u75592\u4F4D\u5C0F\u6570\uFF0C\u56DB\u820D\u4E94\u5165\uFF09</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5355\u4F4D\u663E\u793A\u4E3A&quot;\u7BB1&quot;\uFF0C\u5176\u4ED6\u4EA7\u54C1\u7EBF\u663E\u793A\u4EA7\u54C1\u539F\u59CB\u5355\u4F4D</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u9700\u6309\u8F6C\u6362\u7387\u5C06\u5E93\u5B58\u6570\u91CF\u6362\u7B97\u4E3A\u5C55\u793A\u5355\u4F4D\uFF08\u7BB1\uFF09")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u67E5\u8BE2\u7ED3\u679C\u540E\u540E\u5904\u7406\u8C03\u7528getInventoryListConversionRate\u83B7\u53D6\u8F6C\u6362\u7387")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u8F6C\u6362\u7387\u901A\u8FC7Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8BA1\u7B97")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5E93\u5B58\u6362\u7B97\u6570\u91CF = \u5E93\u5B58\u6570\u91CF / \u8F6C\u6362\u7387\uFF08\u4FDD\u75592\u4F4D\u5C0F\u6570\uFF0C\u56DB\u820D\u4E94\u5165\uFF09")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, '\u7B2C4\u70B9\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5355\u4F4D\u663E\u793A\u4E3A"\u7BB1"\uFF0C\u5176\u4ED6\u4EA7\u54C1\u7EBF\u663E\u793A\u4EA7\u54C1\u539F\u59CB\u5355\u4F4D')
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1ADMS\u7528\u6237\u4E8B\u4E1A\u90E8\u53EF\u89C1\u6027\u8FC7\u6EE4 `\u503C\u96C6\u63A7\u5236`"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1ADMS\u7CFB\u7EDF\u7528\u6237\u53EF\u67E5\u770B\u7684\u4E8B\u4E1A\u90E8\u8303\u56F4\u7531\u503C\u96C6\u914D\u7F6E\u63A7\u5236</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1ADMS\u7528\u6237\u67E5\u8BE2\u65F6\u901A\u8FC7DEPT_STOCK_S\u548CDEPT_STOCK_P\u503C\u96C6\u914D\u7F6E\u8FC7\u6EE4\u53EF\u89C1\u4E8B\u4E1A\u90E8</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4F7F\u7528selectListDMS\u67E5\u8BE2\uFF0C\u590D\u7528queryInventoryQTY\u5B50\u67E5\u8BE2</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1ADMS\u7CFB\u7EDF\u7528\u6237\u53EF\u67E5\u770B\u7684\u4E8B\u4E1A\u90E8\u8303\u56F4\u7531\u503C\u96C6\u914D\u7F6E\u63A7\u5236")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0")
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C1\u70B9\uFF1ADMS\u7528\u6237\u67E5\u8BE2\u65F6\u901A\u8FC7DEPT_STOCK_S\u548CDEPT_STOCK_P\u503C\u96C6\u914D\u7F6E\u8FC7\u6EE4\u53EF\u89C1\u4E8B\u4E1A\u90E8")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1A\u4F7F\u7528selectListDMS\u67E5\u8BE2\uFF0C\u590D\u7528queryInventoryQTY\u5B50\u67E5\u8BE2")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u5E93\u5B58\u67E5\u8BE2\u5217\u8868\u9875" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>LNK_INVENTORY.LH_PROD_ID</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u67E5\u8BE2\u4EA7\u54C1\u7F16\u7801\uFF0C\u652F\u6301\u591A\u503C\uFF08\u9017\u53F7/\u987F\u53F7/\u5206\u53F7/\u56DE\u8F66\u5206\u9694\uFF09</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D\uFF0C\u591A\u503C\u65F6\u7CBE\u786E\u5339\u914D 3. \u53EF\u7F16\u8F91\uFF1A\u662F\uFF08\u67E5\u8BE2\u6761\u4EF6\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>LNK_PROD.PROD_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u5173\u8054LNK_PROD\u67E5\u8BE2 3. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u89C4\u683C</td><td${_scopeId}>LNK_INVENTORY.PROD_STANDARD</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u89C4\u683C</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u578B\u53F7</td><td${_scopeId}>LNK_INVENTORY.LH_PROD_MODEL</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u578B\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u5E93\u5B58\u6570</td><td${_scopeId}>LNK_INVENTORY.LH_INVENTORY_QTY</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5E93\u5B58\u6570\u91CF\uFF08\u5DF2\u6309\u4E0A\u9650\u53D6\u8F83\u5C0F\u503C\uFF09</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u540E\u7AEF\u6C47\u603B\u8BA1\u7B97least(sum(qty), max(\u4E0A\u9650)) 3. \u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A\u6362\u7B97\u540E\u6570\u91CF</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u547D\u72B6\u6001</td><td${_scopeId}>LNK_PROD.SM_STATE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u751F\u547D\u5468\u671F\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.PRODUCT_Z_STATE_NAME 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u5B9A\u4F4D</td><td${_scopeId}>LNK_PROD.PROD_POSITIONING</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u5B9A\u4F4D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.PROD_POSITIONING 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u989C\u8272</td><td${_scopeId}>LNK_INVENTORY.PROD_COLOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u989C\u8272</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u53EF\u7F16\u8F91\uFF1A\u5426</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u4F4D</td><td${_scopeId}>LNK_INVENTORY.PROD_UNIT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E93\u5B58\u5355\u4F4D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A&quot;\u7BB1&quot;\uFF0C\u5176\u4ED6\u663E\u793A\u4EA7\u54C1\u5355\u4F4D</td></tr><tr${_scopeId}><td${_scopeId}>\u8F6C\u6362\u7387</td><td${_scopeId}>-</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5355\u4F4D\u8F6C\u6362\u7387</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1AOracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8BA1\u7B97</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u4F53\u79EF</td><td${_scopeId}>LNK_INVENTORY.PROD_VOLUME</td><td${_scopeId}>\u6570\u503C\u6846</td><td${_scopeId}>\u5355\u4E2A\u4EA7\u54C1\u4F53\u79EF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u53EF\u7F16\u8F91\uFF1A\u5426</td></tr><tr${_scopeId}><td${_scopeId}>\u6E20\u9053</td><td${_scopeId}>LNK_PROD.LH_PROD_CHANNEL</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u9500\u552E\u6E20\u9053</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_CHANNELS 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u751F\u4EA7\u57FA\u5730</td><td${_scopeId}>LNK_INVENTORY.LH_PRODUCTION_BASE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u751F\u4EA7\u57FA\u5730</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6ARROW.CORPORATE_CLIENT 3. \u4EC5LNK_PROD_BASE_CFG.IS_ACTIVE=1\u65F6\u5C55\u793A 4. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>LNK_INVENTORY.ORG_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E93\u5B58\u6240\u5C5E\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8 3. \u53EF\u7F16\u8F91\uFF1A\u5426 4. \u4EC5\u5C55\u793A\u4E0D\u53EF\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u7EBF</td><td${_scopeId}>LNK_INVENTORY.LH_PROD_LINE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u7EBF</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_LINE 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA7\u54C1\u5C0F\u7C7B</td><td${_scopeId}>LNK_INVENTORY.LH_PROD_TYPE2</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA7\u54C1\u5C0F\u7C7B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u7BA1\u7406\u5206\u7C7B</td><td${_scopeId}>LNK_PROD.LH_ITEM_MANAGE_TYPE</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u4EA7\u54C1\u7BA1\u7406\u5206\u7C7B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_ITEM_MANAGE_TYPE 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr><tr${_scopeId}><td${_scopeId}>\u7269\u6599\u7C7B\u578B</td><td${_scopeId}>LNK_PROD.LH_PROD_SIGN</td><td${_scopeId}>\u4E0B\u62C9\u9009\u62E9\u6846</td><td${_scopeId}>\u7269\u6599\u7C7B\u578B\uFF08\u6210\u54C1/\u534A\u6210\u54C1\u7B49\uFF09</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_SIGN 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "LNK_INVENTORY.LH_PROD_ID"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u67E5\u8BE2\u4EA7\u54C1\u7F16\u7801\uFF0C\u652F\u6301\u591A\u503C\uFF08\u9017\u53F7/\u987F\u53F7/\u5206\u53F7/\u56DE\u8F66\u5206\u9694\uFF09"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D\uFF0C\u591A\u503C\u65F6\u7CBE\u786E\u5339\u914D 3. \u53EF\u7F16\u8F91\uFF1A\u662F\uFF08\u67E5\u8BE2\u6761\u4EF6\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "LNK_PROD.PROD_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u5173\u8054LNK_PROD\u67E5\u8BE2 3. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u89C4\u683C"),
                createVNode("td", null, "LNK_INVENTORY.PROD_STANDARD"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u89C4\u683C"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u578B\u53F7"),
                createVNode("td", null, "LNK_INVENTORY.LH_PROD_MODEL"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u578B\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E93\u5B58\u6570"),
                createVNode("td", null, "LNK_INVENTORY.LH_INVENTORY_QTY"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5E93\u5B58\u6570\u91CF\uFF08\u5DF2\u6309\u4E0A\u9650\u53D6\u8F83\u5C0F\u503C\uFF09"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u540E\u7AEF\u6C47\u603B\u8BA1\u7B97least(sum(qty), max(\u4E0A\u9650)) 3. \u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A\u6362\u7B97\u540E\u6570\u91CF")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u547D\u72B6\u6001"),
                createVNode("td", null, "LNK_PROD.SM_STATE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u751F\u547D\u5468\u671F\u72B6\u6001"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.PRODUCT_Z_STATE_NAME 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u5B9A\u4F4D"),
                createVNode("td", null, "LNK_PROD.PROD_POSITIONING"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u5B9A\u4F4D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.PROD_POSITIONING 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u989C\u8272"),
                createVNode("td", null, "LNK_INVENTORY.PROD_COLOR"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u989C\u8272"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u53EF\u7F16\u8F91\uFF1A\u5426")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u4F4D"),
                createVNode("td", null, "LNK_INVENTORY.PROD_UNIT"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E93\u5B58\u5355\u4F4D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, '1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A"\u7BB1"\uFF0C\u5176\u4ED6\u663E\u793A\u4EA7\u54C1\u5355\u4F4D')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8F6C\u6362\u7387"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5355\u4F4D\u8F6C\u6362\u7387"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1AOracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8BA1\u7B97")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u4F53\u79EF"),
                createVNode("td", null, "LNK_INVENTORY.PROD_VOLUME"),
                createVNode("td", null, "\u6570\u503C\u6846"),
                createVNode("td", null, "\u5355\u4E2A\u4EA7\u54C1\u4F53\u79EF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u53EF\u7F16\u8F91\uFF1A\u5426")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6E20\u9053"),
                createVNode("td", null, "LNK_PROD.LH_PROD_CHANNEL"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u9500\u552E\u6E20\u9053"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_CHANNELS 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u751F\u4EA7\u57FA\u5730"),
                createVNode("td", null, "LNK_INVENTORY.LH_PRODUCTION_BASE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u751F\u4EA7\u57FA\u5730"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6ARROW.CORPORATE_CLIENT 3. \u4EC5LNK_PROD_BASE_CFG.IS_ACTIVE=1\u65F6\u5C55\u793A 4. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "LNK_INVENTORY.ORG_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E93\u5B58\u6240\u5C5E\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8 3. \u53EF\u7F16\u8F91\uFF1A\u5426 4. \u4EC5\u5C55\u793A\u4E0D\u53EF\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u7EBF"),
                createVNode("td", null, "LNK_INVENTORY.LH_PROD_LINE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u7EBF"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_LINE 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA7\u54C1\u5C0F\u7C7B"),
                createVNode("td", null, "LNK_INVENTORY.LH_PROD_TYPE2"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u5C0F\u7C7B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u67E5\u8BE2\u652F\u6301\u6A21\u7CCA\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7BA1\u7406\u5206\u7C7B"),
                createVNode("td", null, "LNK_PROD.LH_ITEM_MANAGE_TYPE"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u4EA7\u54C1\u7BA1\u7406\u5206\u7C7B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_ITEM_MANAGE_TYPE 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7269\u6599\u7C7B\u578B"),
                createVNode("td", null, "LNK_PROD.LH_PROD_SIGN"),
                createVNode("td", null, "\u4E0B\u62C9\u9009\u62E9\u6846"),
                createVNode("td", null, "\u7269\u6599\u7C7B\u578B\uFF08\u6210\u54C1/\u534A\u6210\u54C1\u7B49\uFF09"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "1. \u9ED8\u8BA4\u503C\uFF1A\u65E0 2. \u6765\u6E90\uFF1A\u503C\u96C6CRM.LH_PROD_SIGN 3. \u67E5\u8BE2\u652F\u6301\u7CBE\u786E\u5339\u914D")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u64CD\u4F5C\u6309\u94AE</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u672C\u9875\u9762\u4E3A\u7EAF\u67E5\u8BE2\u9875\u9762\uFF0C\u65E0\u64CD\u4F5C\u6309\u94AE")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88681\uFF1ALNK_INVENTORY\uFF08\u5E93\u5B58\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>ROW_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E3B\u952E</td><td${_scopeId}>\u65E0\uFF08\u9690\u85CF\uFF09</td><td${_scopeId}>\u5B57\u7B26\u4E32\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>ORG_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7EC4\u7EC7ID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u79DF\u6237\u9694\u79BB</td></tr><tr${_scopeId}><td${_scopeId}>LH_PROD_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u4EA7\u54C1\u7F16\u7801</td><td${_scopeId}>\u5173\u8054LNK_PROD.PROD_CODE</td></tr><tr${_scopeId}><td${_scopeId}>LH_PRODUCTION_BASE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u751F\u4EA7\u57FA\u5730\u7F16\u7801</td><td${_scopeId}>\u751F\u4EA7\u57FA\u5730</td><td${_scopeId}>\u5173\u8054LNK_PROD_BASE_CFG\u63A7\u5236\u5C55\u793A</td></tr><tr${_scopeId}><td${_scopeId}>PROD_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u4EA7\u54C1\u540D\u79F0</td><td${_scopeId}>\u5197\u4F59\u5B57\u6BB5\uFF0C\u540C\u6B65\u81EALNK_PROD</td></tr><tr${_scopeId}><td${_scopeId}>PROD_STANDARD</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u89C4\u683C</td><td${_scopeId}>\u4EA7\u54C1\u89C4\u683C</td><td${_scopeId}>\u5197\u4F59\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>LH_PROD_MODEL</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u578B\u53F7</td><td${_scopeId}>\u578B\u53F7</td><td${_scopeId}>\u5197\u4F59\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>PROD_UNIT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u5355\u4F4D</td><td${_scopeId}>\u5355\u4F4D</td><td${_scopeId}>\u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A&quot;\u7BB1&quot;</td></tr><tr${_scopeId}><td${_scopeId}>ORG_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u6309\u4E8B\u4E1A\u90E8\u5206\u7EC4\u5C55\u793A</td></tr><tr${_scopeId}><td${_scopeId}>LH_PROD_LINE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u7EBF</td><td${_scopeId}>\u4EA7\u54C1\u7EBF</td><td${_scopeId}>\u74F7\u7816\u4EA7\u54C1\u7EBF\u7279\u6B8A\u5904\u7406\u8F6C\u6362\u7387</td></tr><tr${_scopeId}><td${_scopeId}>LH_PROD_TYPE2</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u5C0F\u7C7B</td><td${_scopeId}>\u4EA7\u54C1\u5C0F\u7C7B</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>PROD_VOLUME</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u4EA7\u54C1\u4F53\u79EF</td><td${_scopeId}>\u4EA7\u54C1\u4F53\u79EF</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>LH_INVENTORY_QTY</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5E93\u5B58\u6570\u91CF</td><td${_scopeId}>\u5E93\u5B58\u6570</td><td${_scopeId}>\u6309\u4EA7\u54C1+\u4E8B\u4E1A\u90E8+\u751F\u4EA7\u57FA\u5730\u5206\u7EC4\u6C47\u603B\uFF0C\u53D6\u4E0A\u9650\u8F83\u5C0F\u503C</td></tr><tr${_scopeId}><td${_scopeId}>PROD_COLOR</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u989C\u8272</td><td${_scopeId}>\u989C\u8272</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>DEPT_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>\u65E0\uFF08\u9690\u85CF\uFF09</td><td${_scopeId}>\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8ID</td></tr><tr${_scopeId}><td${_scopeId}>SUBINVENTORY_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5B50\u5E93\u5B58\u7F16\u7801</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>VERSION</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7248\u672C\u53F7</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CREATED</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPD</td><td${_scopeId}>TIMESTAMP</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPD_BY</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>CORP_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u516C\u53F8ID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>POSTN_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5C97\u4F4DID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>LH_PROD_COLOR_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u989C\u8272\u7F16\u53F7</td><td${_scopeId}>\u65E0</td><td${_scopeId}>-</td></tr></tbody></table>`);
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
                createVNode("td", null, "ROW_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E3B\u952E"),
                createVNode("td", null, "\u65E0\uFF08\u9690\u85CF\uFF09"),
                createVNode("td", null, "\u5B57\u7B26\u4E32\u4E3B\u952E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORG_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7EC4\u7EC7ID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u79DF\u6237\u9694\u79BB")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PROD_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u4EA7\u54C1\u7F16\u7801"),
                createVNode("td", null, "\u5173\u8054LNK_PROD.PROD_CODE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PRODUCTION_BASE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u751F\u4EA7\u57FA\u5730\u7F16\u7801"),
                createVNode("td", null, "\u751F\u4EA7\u57FA\u5730"),
                createVNode("td", null, "\u5173\u8054LNK_PROD_BASE_CFG\u63A7\u5236\u5C55\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u4EA7\u54C1\u540D\u79F0"),
                createVNode("td", null, "\u5197\u4F59\u5B57\u6BB5\uFF0C\u540C\u6B65\u81EALNK_PROD")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_STANDARD"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u89C4\u683C"),
                createVNode("td", null, "\u4EA7\u54C1\u89C4\u683C"),
                createVNode("td", null, "\u5197\u4F59\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PROD_MODEL"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u578B\u53F7"),
                createVNode("td", null, "\u578B\u53F7"),
                createVNode("td", null, "\u5197\u4F59\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_UNIT"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u5355\u4F4D"),
                createVNode("td", null, "\u5355\u4F4D"),
                createVNode("td", null, '\u74F7\u7816\u4EA7\u54C1\u7EBF\u663E\u793A"\u7BB1"')
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORG_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u6309\u4E8B\u4E1A\u90E8\u5206\u7EC4\u5C55\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PROD_LINE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u7EBF"),
                createVNode("td", null, "\u4EA7\u54C1\u7EBF"),
                createVNode("td", null, "\u74F7\u7816\u4EA7\u54C1\u7EBF\u7279\u6B8A\u5904\u7406\u8F6C\u6362\u7387")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PROD_TYPE2"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u5C0F\u7C7B"),
                createVNode("td", null, "\u4EA7\u54C1\u5C0F\u7C7B"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_VOLUME"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u4EA7\u54C1\u4F53\u79EF"),
                createVNode("td", null, "\u4EA7\u54C1\u4F53\u79EF"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_INVENTORY_QTY"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5E93\u5B58\u6570\u91CF"),
                createVNode("td", null, "\u5E93\u5B58\u6570"),
                createVNode("td", null, "\u6309\u4EA7\u54C1+\u4E8B\u4E1A\u90E8+\u751F\u4EA7\u57FA\u5730\u5206\u7EC4\u6C47\u603B\uFF0C\u53D6\u4E0A\u9650\u8F83\u5C0F\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_COLOR"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u989C\u8272"),
                createVNode("td", null, "\u989C\u8272"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEPT_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "\u65E0\uFF08\u9690\u85CF\uFF09"),
                createVNode("td", null, "\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SUBINVENTORY_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5B50\u5E93\u5B58\u7F16\u7801"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VERSION"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u7248\u672C\u53F7"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CREATED"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u521B\u5EFA\u65F6\u95F4"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPD"),
                createVNode("td", null, "TIMESTAMP"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65F6\u95F4"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LAST_UPD_BY"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "CORP_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u516C\u53F8ID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "POSTN_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5C97\u4F4DID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LH_PROD_COLOR_NO"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u989C\u8272\u7F16\u53F7"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "-")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88682\uFF1ALNK_INV_MAX\uFF08\u5E93\u5B58\u4E0A\u9650\u914D\u7F6E\u8868\uFF0C\u67E5\u8BE2\u65F6\u5173\u8054\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>PROD_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1ID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u5173\u8054LNK_PROD.ROW_ID</td></tr><tr${_scopeId}><td${_scopeId}>DEPT_ID</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8ID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u5173\u8054\u4E8B\u4E1A\u90E8</td></tr><tr${_scopeId}><td${_scopeId}>MAXIMUN</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u5E93\u5B58\u4E0A\u9650\u503C</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u53D6\u6700\u5C0F\u503C\u4F5C\u4E3A\u4E0A\u9650</td></tr><tr${_scopeId}><td${_scopeId}>TYPE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E0A\u9650\u7C7B\u578B</td><td${_scopeId}>\u65E0</td><td${_scopeId}>Product(\u6309\u4EA7\u54C1)/ProdLine(\u6309\u4EA7\u54C1\u7EBF)/ALL(\u5168\u90E8)</td></tr></tbody></table>`);
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
                createVNode("td", null, "PROD_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1ID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u5173\u8054LNK_PROD.ROW_ID")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DEPT_ID"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8ID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u5173\u8054\u4E8B\u4E1A\u90E8")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "MAXIMUN"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u5E93\u5B58\u4E0A\u9650\u503C"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u53D6\u6700\u5C0F\u503C\u4F5C\u4E3A\u4E0A\u9650")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TYPE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E0A\u9650\u7C7B\u578B"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "Product(\u6309\u4EA7\u54C1)/ProdLine(\u6309\u4EA7\u54C1\u7EBF)/ALL(\u5168\u90E8)")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u88683\uFF1ALNK_PROD_BASE_CFG\uFF08\u751F\u4EA7\u57FA\u5730\u914D\u7F6E\u8868\uFF0C\u67E5\u8BE2\u65F6\u5173\u8054\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>DEPT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u5173\u8054LNK_INVENTORY.ORG_NAME</td></tr><tr${_scopeId}><td${_scopeId}>PROD_LINE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA7\u54C1\u7EBF</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u5173\u8054LNK_INVENTORY.LH_PROD_LINE</td></tr><tr${_scopeId}><td${_scopeId}>IS_ACTIVE</td><td${_scopeId}>NUMBER</td><td${_scopeId}>\u662F\u5426\u542F\u7528</td><td${_scopeId}>\u65E0</td><td${_scopeId}>1=\u5C55\u793A\u751F\u4EA7\u57FA\u5730\uFF0C0=\u4E0D\u5C55\u793A</td></tr></tbody></table>`);
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
                createVNode("td", null, "DEPT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4E8B\u4E1A\u90E8\u540D\u79F0"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u5173\u8054LNK_INVENTORY.ORG_NAME")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PROD_LINE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4EA7\u54C1\u7EBF"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u5173\u8054LNK_INVENTORY.LH_PROD_LINE")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "IS_ACTIVE"),
                createVNode("td", null, "NUMBER"),
                createVNode("td", null, "\u662F\u5426\u542F\u7528"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "1=\u5C55\u793A\u751F\u4EA7\u57FA\u5730\uFF0C0=\u4E0D\u5C55\u793A")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38\u6216\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u548C\u540E\u7AEF\u670D\u52A1\u72B6\u6001</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u67E5\u8BE2\u5E93\u5B58\u6570\u636E</td><td${_scopeId}>\u9875\u9762\u52A0\u8F7D\u65F6</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7ID\u6216\u4E8B\u4E1A\u90E8\u6743\u9650\uFF0C\u68C0\u67E5\u7528\u6237\u89D2\u8272\u548C\u4E8B\u4E1A\u90E8\u503C\u96C6\u914D\u7F6E</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6682\u65E0\u6570\u636E</td><td${_scopeId}>\u67E5\u8BE2\u7ED3\u679C\u533A</td><td${_scopeId}>\u67E5\u8BE2\u6761\u4EF6\u65E0\u5339\u914D\u7ED3\u679C\u6216\u5E93\u5B58\u8868\u65E0\u6570\u636E\uFF0C\u5C5E\u6B63\u5E38\u63D0\u793A</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7528\u6237\u672A\u767B\u5F55\u6216\u4F1A\u8BDD\u5DF2\u8FC7\u671F</td><td${_scopeId}>\u9875\u9762\u52A0\u8F7D\u65F6</td><td${_scopeId}>\u767B\u5F55\u6001\u5931\u6548\uFF0C\u9700\u91CD\u65B0\u767B\u5F55</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u65F6\uFF0C\u524D\u7AEF\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u5931\u8D25\uFF08HTTP\u975E200\u6216\u7F51\u7EDC\u8D85\u65F6\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7\u4F4E\u4EE3\u7801\u9875\u9762\uFF08hlod\uFF09\u53D1\u8D77\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u540E\u7AEF\u8D70selectList/selectListDMS\u63A5\u53E3\u67E5\u8BE2LNK_INVENTORY\u8868\u3002\u82E5\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u8D85\u65F6\u3001Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u6267\u884C\u5F02\u5E38\u7B49\uFF0C\u5747\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u5931\u8D25\u3002\u524D\u7AEF\u6355\u83B7\u5F02\u5E38\u540Etoast\u63D0\u793A\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u5E93\u5B58\u8868\u662F\u5426\u6709\u6570\u636E</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E93\u5B58\u8BB0\u5F55\u6570 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_INVENTORY </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORG_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :organizationId;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u4EA7\u54C1\u4E3B\u6863\u662F\u5426\u5B58\u5728</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u4EA7\u54C1\u6570 </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_PROD </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORG_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :organizationId;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u67E5\u8BE2\u5E93\u5B58\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7ID\u6216\u4E8B\u4E1A\u90E8\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8ID\uFF08deptId\uFF09\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6\u3002DMS\u7528\u6237\u989D\u5916\u901A\u8FC7DEPT_STOCK_S\u548CDEPT_STOCK_P\u503C\u96C6\u8FC7\u6EE4\u53EF\u89C1\u4E8B\u4E1A\u90E8\u3002\u82E5\u7528\u6237\u672A\u914D\u7F6E\u4E8B\u4E1A\u90E8\u6743\u9650\u6216\u503C\u96C6\u4E3A\u7A7A\uFF0C\u5219\u67E5\u8BE2\u4E0D\u5230\u4EFB\u4F55\u5E93\u5B58\u6570\u636E\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u7528\u6237\u4E8B\u4E1A\u90E8\u6743\u9650\u503C\u96C6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>DEPT_STOCK_S</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORGANIZATION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :organizationId;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>DEPT_STOCK_P</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORGANIZATION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :organizationId;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u6682\u65E0\u6570\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u6210\u529F\u4F46\u7ED3\u679C\u96C6\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u67E5\u8BE2\u6761\u4EF6\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u6216LNK_INVENTORY\u8868\u4E2D\u65E0\u5F53\u524D\u4E8B\u4E1A\u90E8/\u4EA7\u54C1\u7684\u5E93\u5B58\u6570\u636E\u3002\u5C5E\u6B63\u5E38\u63D0\u793A\uFF0C\u975E\u5F02\u5E38\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5339\u914D\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_INVENTORY I</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> I.DEPT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :deptId</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> I.LH_PROD_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :prodCode;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u7528\u6237\u672A\u767B\u5F55\u6216\u4F1A\u8BDD\u5DF2\u8FC7\u671F</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u67E5\u8BE2\u65F6\uFF0C\u524D\u7AEF\u8BF7\u6C42\u643A\u5E26\u7684token\u5DF2\u5931\u6548</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8BF7\u6C42\u5934\u4E2D\u643A\u5E26\u7684Authorization token\u8FC7\u671F\u6216\u65E0\u6548\uFF0C\u540E\u7AEF\u62E6\u622A\u5668\u8FD4\u56DE401\u72B6\u6001\u7801\u3002\u524D\u7AEF\u8DF3\u8F6C\u767B\u5F55\u9875\u3002</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u68C0\u67E5\u7528\u6237\u662F\u5426\u5B58\u5728\u4E14\u6709\u6548</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>STATUS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_USER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :userId;</span></span>
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
                createVNode("td", null, "\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u7F51\u7EDC\u5F02\u5E38\u6216\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u548C\u540E\u7AEF\u670D\u52A1\u72B6\u6001"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u67E5\u8BE2\u5E93\u5B58\u6570\u636E"),
                createVNode("td", null, "\u9875\u9762\u52A0\u8F7D\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7ID\u6216\u4E8B\u4E1A\u90E8\u6743\u9650\uFF0C\u68C0\u67E5\u7528\u6237\u89D2\u8272\u548C\u4E8B\u4E1A\u90E8\u503C\u96C6\u914D\u7F6E"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6682\u65E0\u6570\u636E"),
                createVNode("td", null, "\u67E5\u8BE2\u7ED3\u679C\u533A"),
                createVNode("td", null, "\u67E5\u8BE2\u6761\u4EF6\u65E0\u5339\u914D\u7ED3\u679C\u6216\u5E93\u5B58\u8868\u65E0\u6570\u636E\uFF0C\u5C5E\u6B63\u5E38\u63D0\u793A"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7528\u6237\u672A\u767B\u5F55\u6216\u4F1A\u8BDD\u5DF2\u8FC7\u671F"),
                createVNode("td", null, "\u9875\u9762\u52A0\u8F7D\u65F6"),
                createVNode("td", null, "\u767B\u5F55\u6001\u5931\u6548\uFF0C\u9700\u91CD\u65B0\u767B\u5F55"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u65F6\uFF0C\u524D\u7AEF\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u5931\u8D25\uFF08HTTP\u975E200\u6216\u7F51\u7EDC\u8D85\u65F6\uFF09")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7\u4F4E\u4EE3\u7801\u9875\u9762\uFF08hlod\uFF09\u53D1\u8D77\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u540E\u7AEF\u8D70selectList/selectListDMS\u63A5\u53E3\u67E5\u8BE2LNK_INVENTORY\u8868\u3002\u82E5\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u8D85\u65F6\u3001Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u6267\u884C\u5F02\u5E38\u7B49\uFF0C\u5747\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u5931\u8D25\u3002\u524D\u7AEF\u6355\u83B7\u5F02\u5E38\u540Etoast\u63D0\u793A\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u5E93\u5B58\u8868\u662F\u5426\u6709\u6570\u636E")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E93\u5B58\u8BB0\u5F55\u6570 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_INVENTORY "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORG_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :organizationId;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "  "),
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u4EA7\u54C1\u4E3B\u6863\u662F\u5426\u5B58\u5728")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u4EA7\u54C1\u6570 "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_PROD "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORG_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :organizationId;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u6743\u9650\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u67E5\u8BE2\u5E93\u5B58\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u7EC4\u7EC7ID\u6216\u4E8B\u4E1A\u90E8\u6743\u9650")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u7528\u6237\u7684\u4E8B\u4E1A\u90E8ID\uFF08deptId\uFF09\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6\u3002DMS\u7528\u6237\u989D\u5916\u901A\u8FC7DEPT_STOCK_S\u548CDEPT_STOCK_P\u503C\u96C6\u8FC7\u6EE4\u53EF\u89C1\u4E8B\u4E1A\u90E8\u3002\u82E5\u7528\u6237\u672A\u914D\u7F6E\u4E8B\u4E1A\u90E8\u6743\u9650\u6216\u503C\u96C6\u4E3A\u7A7A\uFF0C\u5219\u67E5\u8BE2\u4E0D\u5230\u4EFB\u4F55\u5E93\u5B58\u6570\u636E\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u7528\u6237\u4E8B\u4E1A\u90E8\u6743\u9650\u503C\u96C6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "DEPT_STOCK_S"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORGANIZATION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :organizationId;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "DEPT_STOCK_P"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORGANIZATION_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :organizationId;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u6682\u65E0\u6570\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6210\u529F\u4F46\u7ED3\u679C\u96C6\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u6761\u4EF6\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u6216LNK_INVENTORY\u8868\u4E2D\u65E0\u5F53\u524D\u4E8B\u4E1A\u90E8/\u4EA7\u54C1\u7684\u5E93\u5B58\u6570\u636E\u3002\u5C5E\u6B63\u5E38\u63D0\u793A\uFF0C\u975E\u5F02\u5E38\u3002")
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5339\u914D\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_INVENTORY I")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " I.DEPT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :deptId")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " I.LH_PROD_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "LIKE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :prodCode;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u7528\u6237\u672A\u767B\u5F55\u6216\u4F1A\u8BDD\u5DF2\u8FC7\u671F"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u9875\u9762\u52A0\u8F7D\u6216\u67E5\u8BE2\u65F6\uFF0C\u524D\u7AEF\u8BF7\u6C42\u643A\u5E26\u7684token\u5DF2\u5931\u6548")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u8BF7\u6C42\u5934\u4E2D\u643A\u5E26\u7684Authorization token\u8FC7\u671F\u6216\u65E0\u6548\uFF0C\u540E\u7AEF\u62E6\u622A\u5668\u8FD4\u56DE401\u72B6\u6001\u7801\u3002\u524D\u7AEF\u8DF3\u8F6C\u767B\u5F55\u9875\u3002")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u68C0\u67E5\u7528\u6237\u662F\u5426\u5B58\u5728\u4E14\u6709\u6548")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "STATUS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_USER "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :userId;")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5E93\u5B58\u6570\u91CF\u4E3A0\u6216\u4F4E\u4E8E\u5B9E\u9645\u5E93\u5B58</li><li${_scopeId}>\u539F\u56E0\uFF1A\u5E93\u5B58\u4E0A\u9650\u914D\u7F6E\uFF08LNK_INV_MAX\uFF09\u9650\u5236\u4E86\u5C55\u793A\u6570\u91CF\u3002\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lim.PROD_ID, lim.DEPT_ID, lim.MAXIMUN, lim.TYPE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_INV_MAX lim</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lim.PROD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ROW_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_PROD </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> PROD_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{prodCode});</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5LNK_INV_MAX\u8868\u662F\u5426\u914D\u7F6E\u4E86\u8FC7\u4F4E\u7684\u5E93\u5B58\u4E0A\u9650\uFF0C\u6216\u8C03\u6574\u4E0A\u9650\u503C</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98982\uFF1ADMS\u7528\u6237\u67E5\u8BE2\u4E0D\u5230\u67D0\u4E9B\u4E8B\u4E1A\u90E8\u7684\u5E93\u5B58</li><li${_scopeId}>\u539F\u56E0\uFF1ADMS\u7528\u6237\u7684\u4E8B\u4E1A\u90E8\u53EF\u89C1\u8303\u56F4\u7531DEPT_STOCK_S/DEPT_STOCK_P\u503C\u96C6\u63A7\u5236\u3002\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_INVENTORY </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DEPT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4E8B\u4E1A\u90E8ID} </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LH_PROD_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4EA7\u54C1\u7F16\u7801};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u503C\u96C6DEPT_STOCK_S\u548CDEPT_STOCK_P\u662F\u5426\u5305\u542B\u76EE\u6807\u4E8B\u4E1A\u90E8</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98983\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5E93\u5B58\u6362\u7B97\u6570\u91CF\u4E0D\u6B63\u786E</li><li${_scopeId}>\u539F\u56E0\uFF1A\u8F6C\u6362\u7387\u8BA1\u7B97\u5F02\u5E38\u6216Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8FD4\u56DE\u9519\u8BEF\u3002\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cux_inv_convert_ex_pub.inv_um_convert(#{from_uom}, #{to_uom}, #{prod_code}) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> conversion_rate</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> DUAL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5Oracle\u8F6C\u6362\u7387\u51FD\u6570\u662F\u5426\u6B63\u786E\u90E8\u7F72\uFF0C\u786E\u8BA4\u4EA7\u54C1\u7684\u5355\u4F4D\u914D\u7F6E</li></ul><ul${_scopeId}><li${_scopeId}>\u95EE\u98984\uFF1A\u751F\u4EA7\u57FA\u5730\u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}>\u539F\u56E0\uFF1ALNK_PROD_BASE_CFG\u4E2DIS_ACTIVE\u4E0D\u4E3A1\u3002\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lpbc.DEPT_NAME, lpbc.PROD_LINE, lpbc.IS_ACTIVE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LNK_PROD_BASE_CFG lpbc</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lpbc.DEPT_NAME </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4E8B\u4E1A\u90E8\u540D\u79F0} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lpbc.PROD_LINE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{\u4EA7\u54C1\u7EBF};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ul${_scopeId}><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u5728\u751F\u4EA7\u57FA\u5730\u914D\u7F6E\u4E2D\u5C06IS_ACTIVE\u8BBE\u7F6E\u4E3A1</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5E93\u5B58\u6570\u91CF\u4E3A0\u6216\u4F4E\u4E8E\u5B9E\u9645\u5E93\u5B58"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u5E93\u5B58\u4E0A\u9650\u914D\u7F6E\uFF08LNK_INV_MAX\uFF09\u9650\u5236\u4E86\u5C55\u793A\u6570\u91CF\u3002\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lim.PROD_ID, lim.DEPT_ID, lim.MAXIMUN, lim.TYPE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_INV_MAX lim")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lim.PROD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ROW_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_PROD "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " PROD_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{prodCode});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5LNK_INV_MAX\u8868\u662F\u5426\u914D\u7F6E\u4E86\u8FC7\u4F4E\u7684\u5E93\u5B58\u4E0A\u9650\uFF0C\u6216\u8C03\u6574\u4E0A\u9650\u503C")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98982\uFF1ADMS\u7528\u6237\u67E5\u8BE2\u4E0D\u5230\u67D0\u4E9B\u4E8B\u4E1A\u90E8\u7684\u5E93\u5B58"),
            createVNode("li", null, "\u539F\u56E0\uFF1ADMS\u7528\u6237\u7684\u4E8B\u4E1A\u90E8\u53EF\u89C1\u8303\u56F4\u7531DEPT_STOCK_S/DEPT_STOCK_P\u503C\u96C6\u63A7\u5236\u3002\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_INVENTORY ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DEPT_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4E8B\u4E1A\u90E8ID} ")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LH_PROD_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4EA7\u54C1\u7F16\u7801};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5\u503C\u96C6DEPT_STOCK_S\u548CDEPT_STOCK_P\u662F\u5426\u5305\u542B\u76EE\u6807\u4E8B\u4E1A\u90E8")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98983\uFF1A\u74F7\u7816\u4EA7\u54C1\u7EBF\u5E93\u5B58\u6362\u7B97\u6570\u91CF\u4E0D\u6B63\u786E"),
            createVNode("li", null, "\u539F\u56E0\uFF1A\u8F6C\u6362\u7387\u8BA1\u7B97\u5F02\u5E38\u6216Oracle\u51FD\u6570cux_inv_convert_ex_pub.inv_um_convert\u8FD4\u56DE\u9519\u8BEF\u3002\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cux_inv_convert_ex_pub.inv_um_convert(#{from_uom}, #{to_uom}, #{prod_code}) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " conversion_rate")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " DUAL;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u68C0\u67E5Oracle\u8F6C\u6362\u7387\u51FD\u6570\u662F\u5426\u6B63\u786E\u90E8\u7F72\uFF0C\u786E\u8BA4\u4EA7\u54C1\u7684\u5355\u4F4D\u914D\u7F6E")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98984\uFF1A\u751F\u4EA7\u57FA\u5730\u5B57\u6BB5\u4E3A\u7A7A"),
            createVNode("li", null, "\u539F\u56E0\uFF1ALNK_PROD_BASE_CFG\u4E2DIS_ACTIVE\u4E0D\u4E3A1\u3002\u6392\u67E5SQL\uFF1A")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lpbc.DEPT_NAME, lpbc.PROD_LINE, lpbc.IS_ACTIVE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LNK_PROD_BASE_CFG lpbc")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lpbc.DEPT_NAME "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4E8B\u4E1A\u90E8\u540D\u79F0} "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lpbc.PROD_LINE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{\u4EA7\u54C1\u7EBF};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u5728\u751F\u4EA7\u57FA\u5730\u914D\u7F6E\u4E2D\u5C06IS_ACTIVE\u8BBE\u7F6E\u4E3A1")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-29</td><td${_scopeId}>-</td><td${_scopeId}>-</td><td${_scopeId}>\u6309skill\u89C4\u8303\u5B8C\u6574\u91CD\u5199\uFF0C\u57FA\u4E8E\u524D\u540E\u7AEF\u4EE3\u7801\u68B3\u7406</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-08-29"),
                createVNode("td", null, "-"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u6309skill\u89C4\u8303\u5B8C\u6574\u91CD\u5199\uFF0C\u57FA\u4E8E\u524D\u540E\u7AEF\u4EE3\u7801\u68B3\u7406")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u4EA7\u54C1\u4E2D\u5FC3/\u5E93\u5B58/\u4E8B\u4E1A\u90E8\u5E93\u5B58\u67E5\u8BE2/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
