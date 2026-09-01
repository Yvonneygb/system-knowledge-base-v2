import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u8D22\u52A1\u7BA1\u7406/\u8C03\u6574\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md"}');
const _sfc_main = { name: "\u8D22\u52A1\u7BA1\u7406/\u8C03\u6574\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u662F\u4EC0\u4E48</h2><p>\u53D1\u8D77\u653F\u7B56\u6027\u8865\u8D34\u5151\u73B0\u7684\u7533\u8BF7\u5355\u636E\uFF0C\u7ECF\u5BA1\u6279\u540E\u5151\u73B0\u8865\u8D34</p></div><div class="biz-2col-inner"><div class="kl-col-box"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#7c3aed,#6d28d9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><rect x="2" y="10" width="5" height="3" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M9 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E1A\u52A1\u672C\u8D28</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u5151\u73B0\u653F\u7B56\u6027\u8865\u8D34</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u8865\u8D34\u5151\u73B0</strong> \u2014 \u4F9D\u636E\u653F\u7B56\u6027\u8865\u8D34\u6761\u6B3E\uFF0C\u53D1\u8D77\u5151\u73B0\u7533\u8BF7\u5E76\u843D\u5730\u8865\u8D34\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u6765\u6E90\u53EF\u6EAF</strong> \u2014 \u6BCF\u7B14\u660E\u7EC6\u5173\u8054\u8D44\u91D1\u6C60\u6765\u6E90\u5355\u636E\uFF0C\u4FDD\u8BC1\u8865\u8D34\u6765\u6E90\u6E05\u6670\u53EF\u67E5\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F5F3FF", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53CC\u8F68\u5BA1\u6279</strong> \u2014 \u7533\u8BF7\u540C\u65F6\u8D70\u7CFB\u7EDF\u5DE5\u4F5C\u6D41\u5BA1\u6279\u4E0E OA \u9001\u7B7E\u3002</div></div></div></div><div class="kl-col-box alt"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "10px", "margin-bottom": "12px" })}"><div style="${ssrRenderStyle({ "width": "40px", "height": "40px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h4 style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "800", "color": "#1F2937", "margin": "0" })}">\u4E3A\u4EC0\u4E48\u8981\u7533\u8BF7</h4></div><p style="${ssrRenderStyle({ "font-size": "0.78rem", "font-weight": "600", "color": "#6B7280", "margin": "0 0 10px" })}">\u8BA9\u8865\u8D34\u5151\u73B0\u89C4\u8303\u5408\u89C4</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "8px" })}"><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u5408\u89C4\u5151\u73B0</strong> \u2014 \u8865\u8D34\u5151\u73B0\u9700\u7ECF\u5BA1\u6279\u7559\u75D5\uFF0C\u907F\u514D\u968F\u610F\u53D1\u653E\u3002</div></div><div style="${ssrRenderStyle({ "display": "flex", "align-items": "flex-start", "gap": "8px", "padding": "8px 10px", "background": "#F0FDF4", "border-radius": "8px" })}"><div style="${ssrRenderStyle({ "font-size": ".75rem" })}"><strong>\u53E3\u5F84\u7EDF\u4E00</strong> \u2014 \u6765\u6E90\u7C7B\u578B\u7EDF\u4E00\u7EF4\u62A4\uFF0C\u660E\u7EC6\u8054\u52A8\u4FDD\u6301\u4E00\u81F4\u3002</div></div></div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u6D41\u7A0B</span><h2>\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u6D41\u8F6C\u8FC7\u7A0B</h2><p>\u65B0\u5EFA\u7533\u8BF7\uFF0C\u7ECF\u53CC\u8F68\u5BA1\u6279\u901A\u8FC7\u540E\u5151\u73B0</p></div><div class="biz-steps"><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="5" height="5" rx="1" stroke="white" stroke-width="1.5"></rect><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u65B0\u5EFA\u7533\u8BF7</h5><small>\u9009\u6765\u6E90\u7C7B\u578B<br>\u586B\u6765\u6E90\u5355\u53F7</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#7C3AED,#6D28D9)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L13 4V8C13 11 8 14 8 14C8 14 3 11 3 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path></svg></div><h5>\u53CC\u8F68\u5BA1\u6279</h5><small>\u5DE5\u4F5C\u6D41\u5BA1\u6279<br>\u4E0E OA \u9001\u7B7E</small></div><div class="biz-step-arrow">\u2192</div><div class="biz-step-item"><div class="biz-step-circle" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5L4.5 8L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><h5>\u5BA1\u6279\u5151\u73B0</h5><small>\u901A\u8FC7\u540E\u5151\u73B0<br>\u62D2\u7EDD\u5219\u7EC8\u6B62</small></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5173\u952E\u89C4\u5219</span><h2>\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5173\u952E\u89C4\u5219</h2><p>\u4FDD\u8BC1\u6570\u636E\u8054\u52A8\u4E00\u81F4\u4E0E\u5355\u53F7\u552F\u4E00</p></div><div class="biz-3col"><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#7C3AED,#A78BFA)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1.5"></rect><path d="M4 5H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 8H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u7C7B\u578B\u8054\u52A8</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u5934\u90E8\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u53D8\u66F4\u65F6\uFF0C\u6240\u6709\u660E\u7EC6\u884C\u540C\u6B65\u66F4\u65B0\u4FDD\u6301\u4E00\u81F4\u3002</p></div></div></div><div class="kl-col-box alt" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#16A34A,#4ADE80)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H14" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M4 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 3V7" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u6765\u6E90\u8054\u52A8</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u9009\u62E9\u6765\u6E90\u5355\u636E\u7C7B\u578B\u540E\uFF0C\u6765\u6E90\u5355\u53F7\u7684\u53EF\u9009\u8303\u56F4\u968F\u7C7B\u578B\u53D8\u5316\u3002</p></div></div></div><div class="kl-col-box" style="${ssrRenderStyle({ "margin-bottom": "0" })}"><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "align-items": "flex-start" })}"><div style="${ssrRenderStyle({ "width": "36px", "height": "36px", "border-radius": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "flex-shrink": "0", "background": "linear-gradient(135deg,#F59E0B,#FBBF24)" })}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="5" height="9" rx="1" stroke="white" stroke-width="1.5"></rect><rect x="9" y="2" width="5" height="11" rx="1" stroke="white" stroke-width="1.5"></rect></svg></div><div><h5 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 6px" })}">\u5355\u53F7\u552F\u4E00</h5><p style="${ssrRenderStyle({ "font-size": "0.73rem", "color": "#6B7280", "margin": "0", "line-height": "1.6" })}">\u8865\u8D34\u5355\u53F7\u6309\u4E8B\u4E1A\u90E8\u53CA\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u4FDD\u8BC1\u5168\u94FE\u8DEF\u552F\u4E00\u53EF\u8FFD\u6EAF\u3002</p></div></div></div></div><div class="kl-tip" style="${ssrRenderStyle({ "margin-top": "14px" })}"><strong>\u5BA1\u6279\u539F\u5219\uFF1A</strong>\u8865\u8D34\u7533\u8BF7\u987B\u7ECF\u5DE5\u4F5C\u6D41\u4E0E OA \u53CC\u8F68\u5BA1\u6279\u901A\u8FC7\u540E\u65B9\u53EF\u5151\u73B0\uFF0C\u4EFB\u4E00\u73AF\u8282\u62D2\u7EDD\u5373\u7EC8\u6B62\u672C\u6B21\u5151\u73B0\u3002 </div></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="bf-truth-flow"><h4 class="bf-main-title">\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7 \u2014 \u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">\u5F00\u59CB \u2192 \u2605\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u2605 \u2192 \u2696\u5BA1\u6279\u901A\u8FC7\uFF1F(\u5DE5\u4F5C\u6D41SA_POLICY_SPECIAL_MCS_AW + OA\u9001\u7B7E) \u2192 \u7ED3\u675F\uFF08\u62D2\u7EDD\u5219\u5DE5\u4F5C\u6D41REJECTED\uFF09</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1100 590" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"></polygon></marker><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="20" y="20" width="1060" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="100" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="160" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5BA2\u6237\u4E3B\u6863</text><rect x="230" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="290" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u4EA4\u6613\u516C\u53F8</text><rect x="360" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="420" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u6CD5\u4EBA\u4E3B\u6863</text><rect x="490" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="550" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u7F16\u7801\u89C4\u5219</text><rect x="620" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="680" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">\u5DE5\u4F5C\u6D41\u5F15\u64CE</text><rect x="750" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="810" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">OA\u5BA1\u6279\u7CFB\u7EDF</text><rect x="880" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="940" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">EBS\u7CFB\u7EDF</text><line x1="550" y1="115" x2="550" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="500" y="150" width="100" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="550" y1="194" x2="550" y2="214" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="460" y="214" width="180" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"></rect><text x="550" y="238" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">\u2605\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u2605</text><text x="550" y="256" text-anchor="middle" fill="#DCFCE7" font-size="10">\u9009\u8D44\u91D1\u6C60\u6765\u6E90/\u6765\u6E90\u5355\u636E\xB7\u5F55\u5165\u660E\u7EC6\xB7\u4FDD\u5B58</text><line x1="550" y1="268" x2="550" y2="292" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="550,292 622,327 550,362 478,327" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="550" y="331" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u2696 \u5BA1\u6279\u901A\u8FC7\uFF1F</text><line x1="622" y1="327" x2="712" y2="327" stroke="#EF4444" stroke-width="2" marker-end="url(#arr-red)"></line><rect x="667" y="312" width="90" height="28" rx="4" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"></rect><text x="712" y="331" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u62D2\u7EDD \u2717</text><line x1="712" y1="312" x2="712" y2="241" stroke="#EF4444" stroke-width="1.5"></line><line x1="712" y1="241" x2="640" y2="241" stroke="#EF4444" stroke-width="1.5" marker-end="url(#arr-red)"></line><line x1="550" y1="362" x2="550" y2="386" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="495" y="386" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="550" y="411" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text><line x1="550" y1="426" x2="550" y2="470" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"></line><rect x="20" y="470" width="1060" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="550" y="492" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">\u4E0B\u6E38\u5F71\u54CD</text><rect x="390" y="508" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="465" y="531" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u8D44\u91D1\u6C60</text><rect x="560" y="508" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"></rect><text x="635" y="531" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u6765\u6E90\u5355\u636E</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span><span class="bf-fc-legend-item"><span style="${ssrRenderStyle({ "display": "inline-block", "width": "22px", "height": "2px", "background": "#EF4444" })}"></span> \u5BA1\u6279\u62D2\u7EDD/\u9A73\u56DE</span></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1AOA\u5BA1\u6279\u6D41\u7A0B {\u5BA1\u6279\u6D41\u8F6C}"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9700\u7ECFOA\u5BA1\u6279\uFF0C\u786E\u4FDD\u8865\u8D34\u53D1\u653E\u5408\u89C4</li></ul><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong></li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B(SA_POLICY_SPECIAL_MCS_AW)</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C2\u70B9\uFF1AOA\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7wfComplete\u56DE\u8C03\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AAPPROVED</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C3\u70B9\uFF1AOA\u5BA1\u6279\u62D2\u7EDD\u540E\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AREJECTED</li></ul><ul${_scopeId}><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u5BA1\u6279\u72B6\u6001\u6D41\u8F6C\uFF1ANEW\u2192RUN\u2192APPROVED/REJECTED</li></ul>`);
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
            createVNode("li", null, "\u7B2C1\u70B9\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B(SA_POLICY_SPECIAL_MCS_AW)")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u7B2C2\u70B9\uFF1AOA\u5BA1\u6279\u901A\u8FC7\u540E\u901A\u8FC7wfComplete\u56DE\u8C03\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3AAPPROVED")
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
  _push(`</div></div></div><div id="detail-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57571\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5217\u8868\u9875\uFF08arrow-ae\u6807\u51C6React\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E <code${_scopeId}>packages/arrow-ae/src/pages/contractPolicy/saPolicySpecial/</code>\uFF0C\u8DEF\u7531\uFF1A<code${_scopeId}>/sa-policy-special/list</code>\u3002\u4E0E\u83DC\u535597\u5171\u7528\u540C\u4E00\u5957\u4EE3\u7801\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.POLICY_SPECIAL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CREATOR</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CREATE_TIME</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.TRADING_COMPANY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.LEGAL_ENTITY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.APPLY_AMT</td><td${_scopeId}>\u6570\u5B57\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.AMOUNT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5BA1\u6838\u901A\u8FC7\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6838\u540E\u663E\u793A</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.AUDIT_STAT</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.CAPITAL_TYPE</td><td${_scopeId}>Select(AE.CAPITAL_TYPE)</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.SOURCE_BILL_TYPE</td><td${_scopeId}>Select(AE.FIN_FEE_BILL_TYPE)</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u53F7</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.SOURCE_BILL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9009\u62E9\u6765\u6E90\u5355\u53F7\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u539F\u56E0</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.NOTE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u4EBA</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.LAST_UPDATE_BY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr><tr${_scopeId}><td${_scopeId}>\u66F4\u65B0\u65E5\u671F</td><td${_scopeId}>SA_POLICY_SPECIAL_HEADER.LAST_UPDATE_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65E5\u671F</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u524D\u7AEF\u6E90\u7801\u4F4D\u4E8E "),
            createVNode("code", null, "packages/arrow-ae/src/pages/contractPolicy/saPolicySpecial/"),
            createTextVNode("\uFF0C\u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/sa-policy-special/list"),
            createTextVNode("\u3002\u4E0E\u83DC\u535597\u5171\u7528\u540C\u4E00\u5957\u4EE3\u7801\u3002")
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
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.CAPITAL_TYPE"),
                createVNode("td", null, "Select(AE.CAPITAL_TYPE)"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.SOURCE_BILL_TYPE"),
                createVNode("td", null, "Select(AE.FIN_FEE_BILL_TYPE)"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7528\u6237\u9009\u62E9")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5355\u53F7"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.SOURCE_BILL_NO"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u53F7"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u9009\u62E9\u6765\u6E90\u5355\u53F7\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.NOTE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.LAST_UPDATE_BY_NAME"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u4EBA"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u66F4\u65B0\u65E5\u671F"),
                createVNode("td", null, "SA_POLICY_SPECIAL_HEADER.LAST_UPDATE_DATE"),
                createVNode("td", null, "\u65E5\u671F\u9009\u62E9\u6846"),
                createVNode("td", null, "\u6700\u540E\u66F4\u65B0\u65E5\u671F"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u7CFB\u7EDF\u81EA\u52A8\u8BB0\u5F55")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u754C\u9762\u6A21\u57572\uFF1A\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u8BE6\u60C5/\u7F16\u8F91\u9875\uFF08arrow-ae\u6807\u51C6React\u9875\u9762\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u8BE6\u60C5\u9875\u8DEF\u7531\uFF1A<code${_scopeId}>/sa-policy-special/detail</code>\uFF0C\u5305\u542B\u5934\u90E8\u8868\u5355\u548C\u660E\u7EC6\u884C\u8868\u683C\u3002</blockquote><h4${_scopeId}>\u5934\u90E8\u4FE1\u606F\u533A</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>POLICY_SPECIAL_NO</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>CREATED_BY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>\u65E5\u671F\u9009\u62E9\u6846</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>HZ_APPROVE_STATUS</td><td${_scopeId}>Select(HWKF.APPROVE_STATUS)</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>CAPITAL_TYPE</td><td${_scopeId}>Select(AE.CAPITAL_TYPE)</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0C\u5FC5\u586B</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>SOURCE_BILL_TYPE</td><td${_scopeId}>Select(AE.FIN_FEE_BILL_TYPE)</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u7528\u6237\u9009\u62E9\uFF0CREJECTED/NEW/WITHDRAW\u65F6\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u6765\u6E90\u5355\u53F7</td><td${_scopeId}>SOURCE_BILL_NO_OBJ</td><td${_scopeId}>Lov(AE.FEE_CHECK_BX_SEARCH)</td><td${_scopeId}>\u6765\u6E90\u5355\u53F7LOV</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u6709\u6765\u6E90\u5355\u636E\u7C7B\u578B\u65F6\u5FC5\u586B\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u6765\u6E90\u5355\u53F7</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u539F\u56E0</td><td${_scopeId}>NOTE</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B</td></tr></tbody></table><h4${_scopeId}>\u660E\u7EC6\u884C\u8868\u683C</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u4E8B\u4E1A\u90E8</td><td${_scopeId}>DIVISION_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4E8B\u4E1A\u90E8\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u9ED8\u8BA4\u5E26\u51FA\u5F53\u524D\u7528\u6237\u4E8B\u4E1A\u90E8</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>CUSTOMER_OBJ</td><td${_scopeId}>Lov(BASIC_CUSTOM_ORG_LOV_2)</td><td${_scopeId}>\u7ECF\u9500\u5546LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u7ECF\u9500\u5546\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0/\u4E8B\u4E1A\u90E8ID</td></tr><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>CUST_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u7ECF\u9500\u5546LOV\u5E26\u51FA\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>TRADING_COMPANY_OBJ</td><td${_scopeId}>Lov(TRADING_LEGAL_SQL_V)</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u4EA4\u6613\u516C\u53F8\u7F16\u7801/\u540D\u79F0</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801</td><td${_scopeId}>LEGAL_ENTITY_OBJ</td><td${_scopeId}>Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)</td><td${_scopeId}>\u6CD5\u4EBA\u7F16\u7801LOV\u9009\u62E9</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u6CD5\u4EBALOV\u5E26\u51FA\uFF0C\u53EA\u8BFB</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u8D26\u6237</td><td${_scopeId}>ACCOUNT_NAME</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237\u540D\u79F0</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>CAPITAL_POOL</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>CAPITAL_TYPE</td><td${_scopeId}>Select(AE.CAPITAL_TYPE)</td><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u4ECE\u5934\u90E8\u4FE1\u606F\u5E26\u5165</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>APPLY_AMT</td><td${_scopeId}>\u6570\u5B57\u8F93\u5165\u6846</td><td${_scopeId}>\u7533\u8BF7\u8865\u8D34\u91D1\u989D</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u9700&gt;0</td></tr><tr${_scopeId}><td${_scopeId}>\u5BA1\u6279\u91D1\u989D</td><td${_scopeId}>APPROVED_AMT</td><td${_scopeId}>\u6570\u5B57\u663E\u793A\u6846</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6279\u540E\u663E\u793A</td><td${_scopeId}>\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D\uFF0C\u5BA1\u6279\u540E\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>CURRENCY</td><td${_scopeId}>\u6587\u672C\u6846</td><td${_scopeId}>\u5E01\u79CD</td><td${_scopeId}>\u5E38\u663E</td><td${_scopeId}>\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA</td></tr></tbody></table><h4${_scopeId}>\u5F39\u7A971\uFF1A\u7ECF\u9500\u5546\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>custCode</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>&quot;C001&quot;</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u7ECF\u9500\u5546</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u7ECF\u9500\u5546\u4E3B\u6570\u636E\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID, CUST_CODE, CUST_NAME, SHORT_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_ORG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A972\uFF1A\u4F59\u989D\u8D26\u6237\u9009\u62E9\uFF08\u5355\u9009\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>2001</td><td${_scopeId}>\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u4F59\u989D\u8D26\u6237</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2SQL\uFF08\u540E\u7AEF\u63A5\u53E3select-account\uFF09\uFF1A</blockquote><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ACCOUNT_ID, ACCOUNT_NAME, CAPITAL_POOL </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAPITAL_ACCOUNT </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{tradingCompanyId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u5F39\u7A973\uFF1A\u4EA4\u6613\u516C\u53F8\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>1001</td><td${_scopeId}>\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\u7684\u4EA4\u6613\u516C\u53F8</td></tr><tr${_scopeId}><td${_scopeId}>tradingScope</td><td${_scopeId}>\u4EA4\u6613\u8303\u56F4</td><td${_scopeId}>\u4EA4\u6613\u8303\u56F4</td><td${_scopeId}>1(\u9500\u552E\u4E3B\u4F53)</td><td${_scopeId}>\u4EC5\u9500\u552E\u4E3B\u4F53\u7C7B\u578B\u7684\u4EA4\u6613\u516C\u53F8</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2LOV\u7F16\u7801\uFF1A<code${_scopeId}>TRADING_LEGAL_SQL_V</code>\uFF08\u67E5\u627E\u6807\u5FD7searchFlag=4\uFF09\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u4EA4\u6613\u516C\u53F8\u7F16\u7801/\u540D\u79F0</blockquote><h4${_scopeId}>\u5F39\u7A974\uFF1A\u6CD5\u4EBA\u9009\u62E9\uFF08\u5355\u9009\uFF0C\u7F16\u8F91\u9875\u660E\u7EC6\u884C\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>customerId</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>1001</td><td${_scopeId}>\u8BE5\u7ECF\u9500\u5546\u4E0B\u7684\u6CD5\u4EBA</td></tr><tr${_scopeId}><td${_scopeId}>tradingCompanyId</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>2001</td><td${_scopeId}>\u8BE5\u4EA4\u6613\u516C\u53F8\u4E0B\u7684\u6CD5\u4EBA</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2LOV\u7F16\u7801\uFF1A<code${_scopeId}>MBO.DISTRIBUTOR_COMPANY_LEGAL_VO</code>\uFF08\u67E5\u627E\u6807\u5FD7flag=9\uFF09</blockquote><h4${_scopeId}>\u5F39\u7A975\uFF1A\u6765\u6E90\u5355\u53F7\u9009\u62E9\uFF08\u7F16\u8F91\u9875\u5934\u90E8\uFF09</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5165\u53C2</th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}>\u6570\u636E\u8303\u56F4</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u5B57\u6BB5\u540D</td><td${_scopeId}>\u4E2D\u6587\u540D</td><td${_scopeId}>\u91CA\u4E49</td><td${_scopeId}>\u793A\u4F8B</td><td${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}>sourceBillType</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>\u6765\u6E90\u5355\u636E\u7C7B\u578B</td><td${_scopeId}>-</td><td${_scopeId}>\u9700\u5148\u9009\u62E9\u6765\u6E90\u5355\u636E\u7C7B\u578B\u624D\u53EF\u5F39\u7A97</td></tr></tbody></table><blockquote${_scopeId}>\u67E5\u8BE2LOV\u7F16\u7801\uFF1A<code${_scopeId}>AE.FEE_CHECK_BX_SEARCH</code></blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, [
            createTextVNode("\u8BE6\u60C5\u9875\u8DEF\u7531\uFF1A"),
            createVNode("code", null, "/sa-policy-special/detail"),
            createTextVNode("\uFF0C\u5305\u542B\u5934\u90E8\u8868\u5355\u548C\u660E\u7EC6\u884C\u8868\u683C\u3002")
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
                createVNode("td", null, "\u7528\u6237\u9009\u62E9\uFF0CREJECTED/NEW/WITHDRAW\u65F6\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6765\u6E90\u5355\u53F7"),
                createVNode("td", null, "SOURCE_BILL_NO_OBJ"),
                createVNode("td", null, "Lov(AE.FEE_CHECK_BX_SEARCH)"),
                createVNode("td", null, "\u6765\u6E90\u5355\u53F7LOV"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u6709\u6765\u6E90\u5355\u636E\u7C7B\u578B\u65F6\u5FC5\u586B\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u6765\u6E90\u5355\u53F7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0"),
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0/\u5907\u6CE8"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B")
              ])
            ])
          ]),
          createVNode("h4", null, "\u660E\u7EC6\u884C\u8868\u683C"),
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
                createVNode("td", null, "\u7ECF\u9500\u5546\u7F16\u7801"),
                createVNode("td", null, "CUSTOMER_OBJ"),
                createVNode("td", null, "Lov(BASIC_CUSTOM_ORG_LOV_2)"),
                createVNode("td", null, "\u7ECF\u9500\u5546LOV\u9009\u62E9"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u7ECF\u9500\u5546\u7F16\u7801/\u540D\u79F0/\u7B80\u79F0/\u4E8B\u4E1A\u90E8ID")
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
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546\u8FC7\u6EE4\uFF0C\u9009\u62E9\u540E\u5E26\u51FA\u4EA4\u6613\u516C\u53F8\u7F16\u7801/\u540D\u79F0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801"),
                createVNode("td", null, "LEGAL_ENTITY_OBJ"),
                createVNode("td", null, "Lov(MBO.DISTRIBUTOR_COMPANY_LEGAL_VO)"),
                createVNode("td", null, "\u6CD5\u4EBA\u7F16\u7801LOV\u9009\u62E9"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u5FC5\u586B\uFF0C\u6839\u636E\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8\u8FC7\u6EE4")
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
                createVNode("td", null, "\u901A\u8FC7select-account\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "CAPITAL_POOL"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u8D44\u91D1\u6C60\u5F53\u524D\u4F59\u989D"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA")
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
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165\uFF0C\u5FC5\u586B\uFF0C\u9700>0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5BA1\u6279\u91D1\u989D"),
                createVNode("td", null, "APPROVED_AMT"),
                createVNode("td", null, "\u6570\u5B57\u663E\u793A\u6846"),
                createVNode("td", null, "\u5BA1\u6279\u901A\u8FC7\u91D1\u989D"),
                createVNode("td", null, "\u5BA1\u6279\u540E\u663E\u793A"),
                createVNode("td", null, "\u9ED8\u8BA4\u4E3A\u7533\u8BF7\u91D1\u989D\uFF0C\u5BA1\u6279\u540E\u66F4\u65B0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "CURRENCY"),
                createVNode("td", null, "\u6587\u672C\u6846"),
                createVNode("td", null, "\u5E01\u79CD"),
                createVNode("td", null, "\u5E38\u663E"),
                createVNode("td", null, "\u901A\u8FC7get-currency\u63A5\u53E3\u67E5\u8BE2\u5E26\u51FA")
              ])
            ])
          ]),
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
          createVNode("h4", null, "\u5F39\u7A972\uFF1A\u4F59\u989D\u8D26\u6237\u9009\u62E9\uFF08\u5355\u9009\uFF09"),
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
          ]),
          createVNode("h4", null, "\u5F39\u7A975\uFF1A\u6765\u6E90\u5355\u53F7\u9009\u62E9\uFF08\u7F16\u8F91\u9875\u5934\u90E8\uFF09"),
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
                createVNode("td", null, "sourceBillType"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "\u6765\u6E90\u5355\u636E\u7C7B\u578B"),
                createVNode("td", null, "-"),
                createVNode("td", null, "\u9700\u5148\u9009\u62E9\u6765\u6E90\u5355\u636E\u7C7B\u578B\u624D\u53EF\u5F39\u7A97")
              ])
            ])
          ]),
          createVNode("blockquote", null, [
            createTextVNode("\u67E5\u8BE2LOV\u7F16\u7801\uFF1A"),
            createVNode("code", null, "AE.FEE_CHECK_BX_SEARCH")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5BFC\u5165" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<blockquote${_scopeId}>\u672C\u9875\u9762\u652F\u6301\u660E\u7EC6\u5BFC\u5165\uFF08FrontImport\u7EC4\u4EF6\uFF09\uFF0C\u901A\u8FC7&quot;\u660E\u7EC6\u5BFC\u5165&quot;\u6309\u94AE\u5BFC\u5165\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u884C\u3002\u5BFC\u5165\u524D\u7F6E\u6821\u9A8C\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08capitalType\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002\u5BFC\u5165\u65F6\u81EA\u52A8\u53BB\u91CD\uFF08\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801\u7EC4\u5408\u5224\u65AD\uFF09\u3002</blockquote>`);
      } else {
        return [
          createVNode("blockquote", null, '\u672C\u9875\u9762\u652F\u6301\u660E\u7EC6\u5BFC\u5165\uFF08FrontImport\u7EC4\u4EF6\uFF09\uFF0C\u901A\u8FC7"\u660E\u7EC6\u5BFC\u5165"\u6309\u94AE\u5BFC\u5165\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u884C\u3002\u5BFC\u5165\u524D\u7F6E\u6821\u9A8C\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08capitalType\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002\u5BFC\u5165\u65F6\u81EA\u52A8\u53BB\u91CD\uFF08\u6309\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801\u7EC4\u5408\u5224\u65AD\uFF09\u3002')
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u5176\u4ED6\u6309\u94AE" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6309\u94AE\u4F5C\u7528</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6/\u53EF\u70B9\u51FB\u6761\u4EF6</th><th${_scopeId}>\u5F71\u54CD</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u589E</td><td${_scopeId}>\u65B0\u5EFA\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u6253\u5F00\u65B0\u5EFA\u9875\u9762</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u4FDD\u5B58\u7533\u8BF7\u4FE1\u606F</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u53D1\u8D77OA\u5BA1\u6279</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528save-and-submit\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5220\u9664\u7533\u8BF7\u5355</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u9009\u4E2D\u672A\u63D0\u4EA4\u8BB0\u5F55(AUDIT_STAT=NEW/\u7A7A)</td><td${_scopeId}>\u8C03\u7528remove\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u5BFC\u51FA</td><td${_scopeId}>\u5BFC\u51FA\u5217\u8868\u6570\u636E</td><td${_scopeId}>\u5217\u8868\u9875</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8C03\u7528export\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u67E5\u770B</td><td${_scopeId}>\u67E5\u770B\u7533\u8BF7\u5355\u8BE6\u60C5</td><td${_scopeId}>\u5217\u8868\u9875\u884C</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u53EA\u8BFB\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u7F16\u8F91\u7533\u8BF7\u5355</td><td${_scopeId}>\u5217\u8868\u9875\u884C</td><td${_scopeId}>RUN/APPROVED/SUSPEND/RETURN\u72B6\u6001\u5916\u53EF\u7528</td><td${_scopeId}>\u8DF3\u8F6C\u8BE6\u60C5\u9875\u7F16\u8F91\u6A21\u5F0F</td></tr><tr${_scopeId}><td${_scopeId}>\u660E\u7EC6\u5BFC\u5165</td><td${_scopeId}>\u6279\u91CF\u5BFC\u5165\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u8C03\u7528import-lines\u63A5\u53E3</td></tr><tr${_scopeId}><td${_scopeId}>\u6A21\u677F\u4E0B\u8F7D</td><td${_scopeId}>\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u4E0B\u8F7D\u653F\u7B56\u6027\u8865\u8D34\u660E\u7EC6\u5BFC\u5165\u6A21\u677F</td></tr><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA(\u660E\u7EC6\u884C)</td><td${_scopeId}>\u65B0\u589E\u7A7A\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001</td><td${_scopeId}>\u5728\u8868\u683C\u672B\u5C3E\u65B0\u589E\u4E00\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u5220\u9664(\u660E\u7EC6\u884C)</td><td${_scopeId}>\u5220\u9664\u9009\u4E2D\u660E\u7EC6\u884C</td><td${_scopeId}>\u7F16\u8F91\u9875</td><td${_scopeId}>\u7F16\u8F91\u72B6\u6001\u4E14\u9009\u4E2D\u884C</td><td${_scopeId}>\u5220\u9664\u9009\u4E2D\u7684\u660E\u7EC6\u884C</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u7F16\u8F91\u9875\uFF09</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u72B6\u6001</li><li${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</li><li${_scopeId}>\u7B2C1\u70B9\uFF1A\u5148\u6267\u884C\u4FDD\u5B58\u6821\u9A8C</li><li${_scopeId}>\u7B2C2\u70B9\uFF1A\u4FDD\u5B58\u6570\u636E\u5230SA_POLICY_SPECIAL_HEADER</li><li${_scopeId}>\u7B2C3\u70B9\uFF1A\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B(SA_POLICY_SPECIAL_MCS_AW)</li><li${_scopeId}>\u7B2C4\u70B9\uFF1A\u66F4\u65B0\u5BA1\u6838\u72B6\u6001\u4E3ARUN</li><li${_scopeId}><strong${_scopeId}>\u63A5\u53E3\u8C03\u7528</strong>\uFF1APOST <code${_scopeId}>/v1/{organizationId}/sa-policy-special-headers/save-and-submit</code></li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{id} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u8C03\u7528save\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u53D1\u8D77OA\u5BA1\u6279"),
                createVNode("td", null, "\u7F16\u8F91\u9875"),
                createVNode("td", null, "\u7F16\u8F91\u72B6\u6001"),
                createVNode("td", null, "\u8C03\u7528save-and-submit\u63A5\u53E3")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5220\u9664\u7533\u8BF7\u5355"),
                createVNode("td", null, "\u5217\u8868\u9875"),
                createVNode("td", null, "\u9009\u4E2D\u672A\u63D0\u4EA4\u8BB0\u5F55(AUDIT_STAT=NEW/\u7A7A)"),
                createVNode("td", null, "\u8C03\u7528remove\u63A5\u53E3")
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
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u4FDD\u5B58\u5E76\u63D0\u4EA4\uFF08\u7F16\u8F91\u9875\uFF09"),
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
            createVNode("li", null, "\u7B2C3\u70B9\uFF1A\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B(SA_POLICY_SPECIAL_MCS_AW)"),
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
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D \u2014\u2014 \u786E\u4FDD\u6709\u5145\u8DB3\u8D44\u91D1</li></ul><ul${_scopeId}><li${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</li></ul><p${_scopeId}>- \u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D</p><ul${_scopeId}><li${_scopeId}>\u7CFB\u7EDF\u4F53\u73B0\uFF1A\u963B\u65AD\u6027\u62A5\u9519</li></ul><ul${_scopeId}><li${_scopeId}>\u6392\u67E5SQL\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.APPLY_AMT, C.CAPITAL_POOL </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H, CAPITAL_ACCOUNT C</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.EXT_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D \u2014\u2014 \u786E\u4FDD\u6709\u5145\u8DB3\u8D44\u91D1")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, "\u8BE6\u7EC6\u903B\u8F91")
          ]),
          createVNode("p", null, "- \u7B2C1\u70B9\uFF1A\u63D0\u4EA4\u65F6\u6821\u9A8C\u7533\u8BF7\u91D1\u989D\u4E0D\u8D85\u8FC7\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D"),
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
        _push2(`<blockquote${_scopeId}>\u4E0E\u83DC\u535597\u5171\u7528\u540C\u4E00\u5F20\u8868\uFF0C\u5B57\u6BB5\u8BE6\u89C1&quot;\u8D22\u52A1\u7BA1\u7406-\u5BF9\u8D26\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7&quot;\u3002</blockquote><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>-</td><td${_scopeId}>\u81EA\u589E\u4E3B\u952E</td></tr><tr${_scopeId}><td${_scopeId}>POLICY_SPECIAL_NO</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u8865\u8D34\u5355\u53F7</td><td${_scopeId}>\u81EA\u52A8\u751F\u6210</td></tr><tr${_scopeId}><td${_scopeId}>CREATOR</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u7533\u8BF7\u4EBA</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u7528\u6237</td></tr><tr${_scopeId}><td${_scopeId}>CREATE_TIME</td><td${_scopeId}>DATETIME</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u7533\u8BF7\u65F6\u95F4</td><td${_scopeId}>\u81EA\u52A8\u5E26\u51FA\u5F53\u524D\u65F6\u95F4</td></tr><tr${_scopeId}><td${_scopeId}>CUST_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7ECF\u9500\u5546ID</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUST_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u7F16\u7801</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CUST_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u7ECF\u9500\u5546\u540D\u79F0</td><td${_scopeId}>\u7ECF\u9500\u5546</td><td${_scopeId}>\u9009\u62E9\u7ECF\u9500\u5546\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>APPLY_AMT</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr><tr${_scopeId}><td${_scopeId}>AMOUNT</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6838\u91D1\u989D</td><td${_scopeId}>\u5BA1\u6279\u901A\u8FC7\u540E\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_ID</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8ID</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>TRADING_COMPANY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u540D\u79F0</td><td${_scopeId}>-</td><td${_scopeId}>\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>ACCOUNT_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>\u4F59\u989D\u8D26\u6237</td><td${_scopeId}>\u9009\u62E9\u4F59\u989D\u8D26\u6237\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>CAPITAL_POOL</td><td${_scopeId}>BIGINT</td><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>LEGAL_ENTITY_NAME</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6CD5\u4EBA\u540D\u79F0</td><td${_scopeId}>\u6CD5\u4EBA</td><td${_scopeId}>\u6839\u636E\u4EA4\u6613\u516C\u53F8\u5E26\u51FA</td></tr><tr${_scopeId}><td${_scopeId}>AUDIT_STAT</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>OA\u5BA1\u6838\u72B6\u6001</td><td${_scopeId}>\u6D41\u7A0B\u56DE\u8C03\u66F4\u65B0</td></tr><tr${_scopeId}><td${_scopeId}>NOTE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u5907\u6CE8</td><td${_scopeId}>\u624B\u52A8\u8F93\u5165</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("blockquote", null, '\u4E0E\u83DC\u535597\u5171\u7528\u540C\u4E00\u5F20\u8868\uFF0C\u5B57\u6BB5\u8BE6\u89C1"\u8D22\u52A1\u7BA1\u7406-\u5BF9\u8D26\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7"\u3002'),
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
                createVNode("td", null, "ACCOUNT_NAME"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237"),
                createVNode("td", null, "\u4F59\u989D\u8D26\u6237"),
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
                createVNode("td", null, "NOTE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u5907\u6CE8"),
                createVNode("td", null, "\u624B\u52A8\u8F93\u5165")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u586B\u5199\u4E860\u6216\u8D1F\u6570</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D</td><td${_scopeId}>\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u7533\u8BF7\u91D1\u989D\u5927\u4E8E\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A</td><td${_scopeId}>\u5BFC\u5165\u660E\u7EC6\u524D</td><td${_scopeId}>\u672A\u9009\u62E9\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5BFC\u5165</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7533\u8BF7\u539F\u56E0\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u586B\u5199\u7533\u8BF7\u539F\u56E0\uFF0C\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u6CD5\u4EBA\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01</td><td${_scopeId}>\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u672A\u9009\u62E9\u5BA1\u6279\u6D41\u7A0B\uFF0C\u9009\u62E9\u6D41\u7A0B\u540E\u63D0\u4EA4</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8</td><td${_scopeId}>\u67E5\u8BE2\u8D44\u91D1\u6C60\u65F6</td><td${_scopeId}>\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8\u672A\u9009\u62E9\uFF0C\u5148\u9009\u62E9\u540E\u518D\u67E5\u8BE2\u8D44\u91D1\u6C60</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u884C\u6570\u636E\u91CD\u590D</td><td${_scopeId}>\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u540C\u4E00\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u91CD\u590D\uFF0C\u53BB\u91CD\u540E\u4FDD\u5B58</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01</td><td${_scopeId}>\u5220\u9664\u65F6</td><td${_scopeId}>\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\uFF0C\u9009\u4E2D\u540E\u5220\u9664</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u5355\u636E\u672A\u5728OA\u5BA1\u6838\u8282\u70B9</td><td${_scopeId}>OA\u5BA1\u6279\u56DE\u8C03\u65F6</td><td${_scopeId}>\u5355\u636E\u5BA1\u6838\u72B6\u6001\u975E&quot;\u5DF2\u9001\u7B7EOA&quot;\uFF0C\u68C0\u67E5OA\u56DE\u8C03\u65F6\u5E8F</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E</td><td${_scopeId}>OA\u5BA1\u6279\u56DE\u8C03\u65F6</td><td${_scopeId}>OA\u56DE\u4F20ID\u5728\u7CFB\u7EDF\u4E2D\u627E\u4E0D\u5230\uFF0C\u68C0\u67E5OA\u5355\u636E\u6620\u5C04</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</td><td${_scopeId}>\u4FDD\u5B58/\u63D0\u4EA4/\u5220\u9664\u65F6</td><td${_scopeId}>\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216OA\u7CFB\u7EDF\u4E0D\u53EF\u8FBE\uFF0C\u786E\u8BA4\u670D\u52A1\u6B63\u5E38</td><td${_scopeId}>toast\u63D0\u9192</td><td${_scopeId}>[\u67E5\u770B]</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u8FDB\u5165\u9875\u9762\u65F6</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u7ECF\u9500\u5546\u6570\u636E\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650</td><td${_scopeId}>\u963B\u65AD\u6027\u62A5\u9519</td><td${_scopeId}>[\u67E5\u770B]</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u7ECF\u9500\u5546\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u65B0\u5EFA/\u7F16\u8F91\u9875\u672A\u9009\u62E9\u7ECF\u9500\u5546\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u83DC\u5355\u4E0E\u83DC\u535597\u5171\u7528SA_POLICY_SPECIAL_HEADER\u8868\u53CASaPolicySpecialHeaderController\u3002\u4FDD\u5B58\u6821\u9A8CCUST_ID\u975E\u7A7A\uFF0C\u7ECF\u9500\u5546\u662F\u5173\u8054\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u7684\u524D\u7F6E\u6761\u4EF6\u3002\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u65E0\u6267\u884C\u5BF9\u8C61\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_ID, CUST_NAME, APPLY_AMT, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u7533\u8BF7\u91D1\u989D\u8F93\u5165\u6846\u586B\u51990\u3001\u8D1F\u6570\u6216\u7559\u7A7A\u540E\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AF\uFF1A\u8865\u8D34\u7533\u8BF7\u91D1\u989DAPPLY_AMT\u4EE3\u8868\u5B9E\u9645\u53D1\u653E\u91D1\u989D\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u30020\u6216\u8D1F\u6570\u65E0\u4E1A\u52A1\u610F\u4E49\uFF0C\u4E14\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u5F02\u5E38\uFF08\u6263\u51CF0\u6216\u53CD\u5411\u589E\u52A0\u4F59\u989D\uFF09\u3002\u6821\u9A8CAPPLY_AMT &gt; 0\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\uFF0C\u63D0\u4EA4\u6821\u9A8C\u53D1\u73B0APPLY_AMT &gt; \u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF08CAPITAL_POOL\uFF09</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u63D0\u4EA4\u65F6\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u7684CAPITAL_POOL\uFF0C\u6821\u9A8CAPPLY_AMT &lt;= CAPITAL_POOL\u3002\u8D85\u51FA\u4F59\u989D\u610F\u5473\u7740\u8865\u8D34\u65E0\u5145\u8DB3\u8D44\u91D1\u6765\u6E90\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u8D1F\u6570\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u53D1\u8D77\uFF0C\u9700\u8C03\u51CF\u7533\u8BF7\u91D1\u989D\u6216\u5148\u8865\u5145\u8D44\u91D1\u6C60</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, H.CUST_NAME, H.APPLY_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         C.ACCOUNT_NAME, C.CAPITAL_POOL, (H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8D85\u989D\u91D1\u989D</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAPITAL_ACCOUNT C </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.EXT_ACCOUNT_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.ACCOUNT_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.APPLY_AMT </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> C.CAPITAL_POOL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RUN</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u8BE6\u60C5\u9875\u672A\u9009\u62E9&quot;\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B&quot;\uFF08capitalType\uFF09\u76F4\u63A5\u70B9\u51FB\u5BFC\u5165\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFDetailPage/index.tsx\u7684beforeImportUpload\u56DE\u8C03\u4E2D\u6821\u9A8CheadDs.current?.get(&#39;capitalType&#39;)\uFF0C\u82E5\u4E3A\u7A7A\u5219notification.error\u63D0\u793A&quot;\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01&quot;\u5E76\u8FD4\u56DEfalse\u963B\u65AD\u5BFC\u5165\u3002\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08lookupCode: AE.CAPITAL_TYPE\uFF09\u51B3\u5B9A\u8D44\u91D1\u6C60\u67E5\u8BE2\u7684\u696D\u52D9\u7C7B\u578B\uFF0CHeadDS\u4E2D\u914D\u7F6E\u4E3Arequired: true\u3002\u9700\u5148\u9009\u62E9\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u518D\u5BFC\u5165\u660E\u7EC6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CAPITAL_TYPE, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CAPITAL_TYPE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>REJECTED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u7533\u8BF7\u539F\u56E0\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u672A\u586B\u5199&quot;\u7533\u8BF7\u539F\u56E0&quot;\uFF08note\uFF09\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFHeadDS.ts\u4E2Dnote\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u7533\u8BF7\u539F\u56E0\u8BB0\u5F55\u8865\u8D34\u7533\u8BF7\u7684\u4E1A\u52A1\u80CC\u666F\uFF0C\u662FOA\u5BA1\u6279\u7684\u91CD\u8981\u53C2\u8003\u4FE1\u606F\u3002\u672A\u586B\u5199\u65F6DataSet\u6821\u9A8C\u5931\u8D25\uFF0C\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, NOTE, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> NOTE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>REJECTED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFLineDS.ts\u4E2DtradingCompanyObj\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u4EA4\u6613\u516C\u53F8\u662F\u5173\u8054\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u7684\u524D\u7F6E\u6761\u4EF6\uFF0C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u67E5\u8BE2\u65E0\u6267\u884C\u5BF9\u8C61\uFF08handleSelectCapital\u4E2D\u6821\u9A8CtradingCompanyCode\uFF09\u3002\u6821\u9A8C\u5931\u8D25\u65F6\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, L.POLICY_SPECIAL_LINE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         L.CUST_NAME, L.TRADING_COMPANY_ID, L.TRADING_COMPANY_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_LINE L </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> L.POLICY_SPECIAL_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> L.TRADING_COMPANY_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>REJECTED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u672A\u9009\u62E9\u6CD5\u4EBA\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFLineDS.ts\u4E2DlegalEntityObj\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u6CD5\u4EBA\u662F\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u548C\u8D44\u91D1\u6C60\u67E5\u8BE2\u7684\u5173\u952E\u5B57\u6BB5\uFF0Cselect-capital\u63A5\u53E3\u5165\u53C2legalEntityCode\u5373\u6765\u81EA\u6CD5\u4EBA\u9009\u62E9\u3002\u672A\u9009\u62E9\u6CD5\u4EBA\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u4F59\u989D\u65E0\u6CD5\u67E5\u8BE2\uFF0C\u63D0\u4EA4\u6821\u9A8C\u65E0\u6CD5\u6267\u884C\u3002\u6821\u9A8C\u5931\u8D25\u65F6\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, L.POLICY_SPECIAL_LINE_ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         L.CUST_NAME, L.LEGAL_ENTITY_ID, L.LEGAL_ENTITY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER H</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_LINE L </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> L.POLICY_SPECIAL_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> L.LEGAL_ENTITY_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> H.AUDIT_STAT </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>REJECTED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB&quot;\u4FDD\u5B58\u5E76\u63D0\u4EA4&quot;\u6309\u94AE\uFF0Cdto.getFlowCode()\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AsaveAndSubmit\u65B9\u6CD5\u4E2D\u6821\u9A8CStringUtils.isEmpty(dto.getFlowCode())\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException(&quot;\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01&quot;)\u3002\u6D41\u7A0B\u7F16\u7801\uFF08flowCode\uFF09\u662F\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u7684\u5FC5\u8981\u53C2\u6570\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4workFlowStart\u65E0\u6CD5\u542F\u52A8\u6D41\u7A0B\u3002\u9700\u5728\u8BE6\u60C5\u9875\u9009\u62E9\u5BA1\u6279\u6D41\u7A0B\u540E\u518D\u6B21\u63D0\u4EA4</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, HZ_APPROVE_STATUS, HZ_INSTANCE_ID, AUDIT_STAT</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_INSTANCE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u70B9\u51FB&quot;\u67E5\u8BE2\u8D44\u91D1\u6C60&quot;\u6309\u94AE\uFF0C\u4F46custCode\u6216tradingCompanyCode\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFhandleSelectCapital\u56DE\u8C03\u4E2D\u6821\u9A8Crecord?.get(&#39;custCode&#39;)\u548Crecord?.get(&#39;tradingCompanyCode&#39;)\uFF0C\u82E5\u4EFB\u4E00\u4E3A\u7A7A\u5219notification.error\u63D0\u793A&quot;\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546 \u6216 \u4EA4\u6613\u516C\u53F8&quot;\u5E76return\u3002\u8D44\u91D1\u6C60\u67E5\u8BE2\uFF08select-capital\u63A5\u53E3\uFF09\u9700\u8981legalEntityCode\u548CtradingCompanyCode\u4F5C\u4E3A\u5165\u53C2\uFF0C\u4E8C\u8005\u5206\u522B\u6765\u81EA\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u3002\u9700\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u518D\u67E5\u8BE2\u8D44\u91D1\u6C60</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_LINE_ID, CUST_CODE, CUST_NAME, TRADING_COMPANY_CODE, TRADING_COMPANY_NAME</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TRADING_COMPANY_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u884C\u6570\u636E\u91CD\u590D</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u4FDD\u5B58\u65F6\uFF0C\u660E\u7EC6\u884C\u4E2D\u5B58\u5728\u76F8\u540C\u7684&quot;\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801&quot;\u7EC4\u5408</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEFDetailPage/index.tsx\u7684\u6821\u9A8C\u903B\u8F91\u4E2D\uFF0C\u6309custCode + &#39;-&#39; + tradingCompanyName + &#39;-&#39; + legalEntityCode\u751F\u6210\u552F\u4E00\u952E\uFF0C\u82E5\u91CD\u590D\u5219notification.error\u63D0\u793A&quot;\u7B2CX\u884C\u6570\u636E\u91CD\u590D&quot;\u5E76\u8FD4\u56DEfalse\u963B\u65AD\u4FDD\u5B58\u3002\u540C\u4E00\u7533\u8BF7\u5355\u4E2D\u4E0D\u5141\u8BB8\u76F8\u540C\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u91CD\u590D\uFF0C\u907F\u514D\u8D44\u91D1\u6C60\u91CD\u590D\u6263\u51CF\u3002\u9700\u53BB\u91CD\u540E\u4FDD\u5B58</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_CODE, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u91CD\u590D\u884C\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{policySpecialId}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUST_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_CODE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u672A\u9009\u4E2D\u4EFB\u4F55\u7533\u8BF7\u5355\u76F4\u63A5\u70B9\u51FB&quot;\u5220\u9664&quot;\u6309\u94AE</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1Aremove\u65B9\u6CD5\u63A5\u6536cmContractPaymentApplyList\u5217\u8868\uFF0C\u82E5CollectionUtils.isEmpty\u4E3Atrue\u5219\u629B\u51FACommonException(&quot;\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01&quot;)\u3002\u524D\u7AEF\u5217\u8868\u9875\u9700\u9009\u4E2D\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55\u624D\u53EF\u89E6\u53D1\u5220\u9664\u64CD\u4F5C\u3002\u9700\u5728\u5217\u8868\u4E2D\u52FE\u9009\u76EE\u6807\u8BB0\u5F55\u540E\u91CD\u8BD5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u53EF\u5220\u9664\u7684\u7533\u8BF7\u5355\uFF08\u672A\u63D0\u4EA4\u6216\u5DF2\u62D2\u7EDD\u72B6\u6001\uFF09</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CREATOR, AUDIT_STAT, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>NEW</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>REJECTED</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_TIME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u5355\u636E\u672A\u5728OA\u5BA1\u6838\u8282\u70B9</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AOA\u5BA1\u6279\u56DE\u8C03doProcessOA\u65B9\u6CD5\u65F6\uFF0C\u5355\u636E\u7684AUDIT_STAT\u4E0D\u7B49\u4E8E&quot;\u5DF2\u9001\u7B7EOA&quot;</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdoProcessOA\u65B9\u6CD5\u4E2D\u6309policySpecialId\u67E5\u8BE2\u5355\u636E\uFF0C\u82E5saPolicySpecialHeaderVO.getAuditStat()\u4E0D\u7B49\u4E8E&quot;\u5DF2\u9001\u7B7EOA&quot;\u5219\u629B\u51FACommonException(&quot;\u5355\u636E\u3010{}\u3011\u672A\u5728oa\u5BA1\u6838\u8282\u70B9&quot;, policySpecialId)\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)OA\u56DE\u8C03\u65F6\u5E8F\u5F02\u5E38\uFF0C\u5355\u636E\u5C1A\u672A\u63A8\u9001OA\u5373\u6536\u5230\u56DE\u8C03\uFF1B(2)\u5355\u636E\u5DF2\u88AB\u5176\u4ED6\u56DE\u8C03\u5904\u7406\u66F4\u65B0\u72B6\u6001\uFF1B(3)\u4EBA\u5DE5\u4FEE\u6539\u4E86AUDIT_STAT\u5B57\u6BB5\u3002\u9700\u6838\u67E5OA\u56DE\u8C03\u65F6\u5E8F\u53CA\u5355\u636E\u72B6\u6001\u6D41\u8F6C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, AUDIT_STAT, HZ_APPROVE_STATUS,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         HZ_INSTANCE_ID, CALLBACK_SOURCE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{policySpecialId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1AOA\u5BA1\u6279\u56DE\u8C03doProcessOA\u65B9\u6CD5\u65F6\uFF0C\u6309policySpecialId\u67E5\u8BE2SA_POLICY_SPECIAL_HEADER\u8FD4\u56DE\u7A7A\u96C6\u5408</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1AdoProcessOA\u65B9\u6CD5\u4E2D\u6821\u9A8CpolicySpecialId\u975E\u7A7A\u4E14\u5927\u4E8E0\uFF0C\u7136\u540E\u901A\u8FC7saPolicySpecialHeaderRepository.search\u67E5\u8BE2\u3002\u82E5\u8FD4\u56DE\u7A7A\u96C6\u5408\u5219\u629B\u51FACommonException(&quot;\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E\uFF0C\u8BF7\u68C0\u67E5&quot;)\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)OA\u56DE\u4F20\u7684ID\u5728\u7CFB\u7EDF\u4E2D\u4E0D\u5B58\u5728\uFF08\u5982\u6D4B\u8BD5\u73AF\u5883OA\u56DE\u8C03\u5230\u751F\u4EA7\uFF09\uFF1B(2)\u7533\u8BF7\u5355\u5DF2\u88AB\u7269\u7406\u5220\u9664\uFF1B(3)\u6570\u636E\u6743\u9650\u8FC7\u6EE4\u5BFC\u81F4\u67E5\u8BE2\u4E0D\u5230\u3002\u9700\u6838\u5BF9OA\u56DE\u4F20ID\u4E0E\u7CFB\u7EDFPOLICY_SPECIAL_ID\u5B57\u6BB5</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         AUDIT_STAT, HZ_APPROVE_STATUS</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> POLICY_SPECIAL_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{policySpecialId};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951914\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u70B9\u51FB\u4FDD\u5B58/\u4FDD\u5B58\u5E76\u63D0\u4EA4/\u5220\u9664\u6309\u94AE\uFF0C\u524D\u7AEF\u8C03\u7528\u5BF9\u5E94\u63A5\u53E3\u8FD4\u56DE\u975E2xx\u72B6\u6001\u7801\u6216\u8D85\u65F6</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u901A\u8FC7SaPolicySpecialHeaderController\u63D0\u4F9Bsave/save-and-submit/remove\u7B49\u63A5\u53E3\uFF0C\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u6D41\u7A0B\uFF0CdoOaAudit\u4E2D\u901A\u8FC7oaService.toDataOA\u63A8\u9001OA\u7CFB\u7EDF\u3002\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u6839\u56E0\u6709\u56DB\u7C7B\uFF1A(1)ae-business\u670D\u52A1\u672A\u542F\u52A8\u6216\u5B95\u673A\uFF1B(2)OA\u7CFB\u7EDF\u4E0D\u53EF\u8FBE\uFF0CtoDataOA\u8C03\u7528\u8D85\u65F6\u6216\u5931\u8D25\uFF1B(3)\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\uFF1B(4)\u7F51\u5173\u6216\u7F51\u7EDC\u5C42\u6545\u969C\u3002\u9700\u5148\u786E\u8BA4ae-business\u670D\u52A1\u548COA\u7CFB\u7EDF\u8FDE\u901A\u6027</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7533\u8BF7\u5355\u72B6\u6001\u5206\u5E03</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u8BB0\u5F55\u6570</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SA_POLICY_SPECIAL_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HZ_APPROVE_STATUS;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951915\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7528\u6237\u767B\u5F55\u540E\u8FDB\u5165\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9875\u9762\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u672C\u9875\u9762\u6309\u7ECF\u9500\u5546\u7EF4\u5EA6\u67E5\u8BE2\uFF0C\u6570\u636E\u6743\u9650\u901A\u8FC7\u7528\u6237\u4E0A\u4E0B\u6587CustomUserDetails\u7684additionInfo\u63A7\u5236\u53EF\u89C1\u7ECF\u9500\u5546\u8303\u56F4\u3002\u524D\u7AEFLineDS.ts\u4E2DcustomerObj\u7684lovCode\u4E3ABASIC_CUSTOM_ORG_LOV_2\uFF0C\u901A\u8FC7lovPara\u7684searchFlag: 146\u8FC7\u6EE4\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u7ECF\u9500\u5546\u3002\u6743\u9650\u4E0D\u8DB3\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u5BF9\u5E94\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650\uFF0CLOV\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF1B(2)\u7528\u6237\u672A\u5206\u914D\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u9875\u9762\u5165\u53E3\u4E0D\u53EF\u89C1\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u6743\u9650\u7CFB\u7EDF\u4E2D\u5206\u914D\u5BF9\u5E94\u7ECF\u9500\u5546\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- \u6838\u67E5\u7528\u6237\u662F\u5426\u6709\u8BE5\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_NAME</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, CUSTOMER_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ENABLED</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> USER_CUSTOMER_AUTH</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>USER_ID</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{userId} </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CUSTOMER_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> #{customerCode};</span></span>
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
                createVNode("td", null, "\u672A\u9009\u62E9\u7ECF\u9500\u5546\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u5FC5\u987B\u5927\u4E8E0"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u586B\u5199\u4E860\u6216\u8D1F\u6570"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D"),
                createVNode("td", null, "\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u7533\u8BF7\u91D1\u989D\u5927\u4E8E\u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A"),
                createVNode("td", null, "\u5BFC\u5165\u660E\u7EC6\u524D"),
                createVNode("td", null, "\u672A\u9009\u62E9\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF0C\u9009\u62E9\u540E\u5BFC\u5165"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7533\u8BF7\u539F\u56E0\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u586B\u5199\u7533\u8BF7\u539F\u56E0\uFF0C\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u6CD5\u4EBA\uFF0C\u9009\u62E9\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01"),
                createVNode("td", null, "\u4FDD\u5B58\u5E76\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u672A\u9009\u62E9\u5BA1\u6279\u6D41\u7A0B\uFF0C\u9009\u62E9\u6D41\u7A0B\u540E\u63D0\u4EA4"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8"),
                createVNode("td", null, "\u67E5\u8BE2\u8D44\u91D1\u6C60\u65F6"),
                createVNode("td", null, "\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8\u672A\u9009\u62E9\uFF0C\u5148\u9009\u62E9\u540E\u518D\u67E5\u8BE2\u8D44\u91D1\u6C60"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u884C\u6570\u636E\u91CD\u590D"),
                createVNode("td", null, "\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u540C\u4E00\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u91CD\u590D\uFF0C\u53BB\u91CD\u540E\u4FDD\u5B58"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01"),
                createVNode("td", null, "\u5220\u9664\u65F6"),
                createVNode("td", null, "\u672A\u9009\u4E2D\u4EFB\u4F55\u8BB0\u5F55\uFF0C\u9009\u4E2D\u540E\u5220\u9664"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5355\u636E\u672A\u5728OA\u5BA1\u6838\u8282\u70B9"),
                createVNode("td", null, "OA\u5BA1\u6279\u56DE\u8C03\u65F6"),
                createVNode("td", null, '\u5355\u636E\u5BA1\u6838\u72B6\u6001\u975E"\u5DF2\u9001\u7B7EOA"\uFF0C\u68C0\u67E5OA\u56DE\u8C03\u65F6\u5E8F'),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E"),
                createVNode("td", null, "OA\u5BA1\u6279\u56DE\u8C03\u65F6"),
                createVNode("td", null, "OA\u56DE\u4F20ID\u5728\u7CFB\u7EDF\u4E2D\u627E\u4E0D\u5230\uFF0C\u68C0\u67E5OA\u5355\u636E\u6620\u5C04"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
                createVNode("td", null, "\u4FDD\u5B58/\u63D0\u4EA4/\u5220\u9664\u65F6"),
                createVNode("td", null, "\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u6216OA\u7CFB\u7EDF\u4E0D\u53EF\u8FBE\uFF0C\u786E\u8BA4\u670D\u52A1\u6B63\u5E38"),
                createVNode("td", null, "toast\u63D0\u9192"),
                createVNode("td", null, "[\u67E5\u770B]")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6743\u9650\u4E0D\u8DB3"),
                createVNode("td", null, "\u8FDB\u5165\u9875\u9762\u65F6"),
                createVNode("td", null, "\u5F53\u524D\u7528\u6237\u65E0\u7ECF\u9500\u5546\u6570\u636E\u6743\u9650\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u5206\u914D\u6743\u9650"),
                createVNode("td", null, "\u963B\u65AD\u6027\u62A5\u9519"),
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
              createTextVNode("\uFF1A\u672C\u83DC\u5355\u4E0E\u83DC\u535597\u5171\u7528SA_POLICY_SPECIAL_HEADER\u8868\u53CASaPolicySpecialHeaderController\u3002\u4FDD\u5B58\u6821\u9A8CCUST_ID\u975E\u7A7A\uFF0C\u7ECF\u9500\u5546\u662F\u5173\u8054\u4EA4\u6613\u516C\u53F8\u3001\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u7684\u524D\u7F6E\u6761\u4EF6\u3002\u672A\u9009\u62E9\u7ECF\u9500\u5546\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u4F59\u989D\u6821\u9A8C\u65E0\u6267\u884C\u5BF9\u8C61\u3002\u6821\u9A8C\u5728Controller\u5C42\u524D\u7F6E\u62E6\u622A\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_ID, CUST_NAME, APPLY_AMT, AUDIT_STAT")
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
              createTextVNode("\uFF1AF\uFF1A\u8865\u8D34\u7533\u8BF7\u91D1\u989DAPPLY_AMT\u4EE3\u8868\u5B9E\u9645\u53D1\u653E\u91D1\u989D\uFF0C\u5FC5\u987B\u4E3A\u6B63\u6570\u30020\u6216\u8D1F\u6570\u65E0\u4E1A\u52A1\u610F\u4E49\uFF0C\u4E14\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u5F02\u5E38\uFF08\u6263\u51CF0\u6216\u53CD\u5411\u589E\u52A0\u4F59\u989D\uFF09\u3002\u6821\u9A8CAPPLY_AMT > 0\uFF0Ctoast\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u7533\u8BF7\u91D1\u989D\u8D85\u8FC7\u8D44\u91D1\u6C60\u4F59\u989D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\uFF0C\u63D0\u4EA4\u6821\u9A8C\u53D1\u73B0APPLY_AMT > \u8D44\u91D1\u6C60\u53EF\u7528\u4F59\u989D\uFF08CAPITAL_POOL\uFF09')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u63D0\u4EA4\u65F6\u901A\u8FC7select-capital\u63A5\u53E3\u67E5\u8BE2\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u7684CAPITAL_POOL\uFF0C\u6821\u9A8CAPPLY_AMT <= CAPITAL_POOL\u3002\u8D85\u51FA\u4F59\u989D\u610F\u5473\u7740\u8865\u8D34\u65E0\u5145\u8DB3\u8D44\u91D1\u6765\u6E90\uFF0C\u5BA1\u6279\u901A\u8FC7\u540E\u6263\u51CF\u8D44\u91D1\u6C60\u5C06\u51FA\u73B0\u8D1F\u6570\u3002\u6B64\u4E3A\u963B\u65AD\u6027\u62A5\u9519\uFF0C\u963B\u6B62OA\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u53D1\u8D77\uFF0C\u9700\u8C03\u51CF\u7533\u8BF7\u91D1\u989D\u6216\u5148\u8865\u5145\u8D44\u91D1\u6C60")
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
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u5728\u8BE6\u60C5\u9875\u672A\u9009\u62E9"\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B"\uFF08capitalType\uFF09\u76F4\u63A5\u70B9\u51FB\u5BFC\u5165\u660E\u7EC6')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEFDetailPage/index.tsx\u7684beforeImportUpload\u56DE\u8C03\u4E2D\u6821\u9A8CheadDs.current?.get('capitalType')\uFF0C\u82E5\u4E3A\u7A7A\u5219notification.error\u63D0\u793A"\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\uFF01"\u5E76\u8FD4\u56DEfalse\u963B\u65AD\u5BFC\u5165\u3002\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\uFF08lookupCode: AE.CAPITAL_TYPE\uFF09\u51B3\u5B9A\u8D44\u91D1\u6C60\u67E5\u8BE2\u7684\u696D\u52D9\u7C7B\u578B\uFF0CHeadDS\u4E2D\u914D\u7F6E\u4E3Arequired: true\u3002\u9700\u5148\u9009\u62E9\u8D44\u91D1\u6C60\u6765\u6E90\u7C7B\u578B\u518D\u5BFC\u5165\u660E\u7EC6`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CAPITAL_TYPE, AUDIT_STAT")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CAPITAL_TYPE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "REJECTED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u7533\u8BF7\u539F\u56E0\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u672A\u586B\u5199"\u7533\u8BF7\u539F\u56E0"\uFF08note\uFF09\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEFHeadDS.ts\u4E2Dnote\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u7533\u8BF7\u539F\u56E0\u8BB0\u5F55\u8865\u8D34\u7533\u8BF7\u7684\u4E1A\u52A1\u80CC\u666F\uFF0C\u662FOA\u5BA1\u6279\u7684\u91CD\u8981\u53C2\u8003\u4FE1\u606F\u3002\u672A\u586B\u5199\u65F6DataSet\u6821\u9A8C\u5931\u8D25\uFF0C\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, NOTE, AUDIT_STAT")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " NOTE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " AUDIT_STAT "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "REJECTED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u4EA4\u6613\u516C\u53F8\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEFLineDS.ts\u4E2DtradingCompanyObj\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u4EA4\u6613\u516C\u53F8\u662F\u5173\u8054\u6CD5\u4EBA\u3001\u4F59\u989D\u8D26\u6237\u7684\u524D\u7F6E\u6761\u4EF6\uFF0C\u672A\u9009\u62E9\u4EA4\u6613\u516C\u53F8\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u67E5\u8BE2\u65E0\u6267\u884C\u5BF9\u8C61\uFF08handleSelectCapital\u4E2D\u6821\u9A8CtradingCompanyCode\uFF09\u3002\u6821\u9A8C\u5931\u8D25\u65F6\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, L.POLICY_SPECIAL_LINE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         L.CUST_NAME, L.TRADING_COMPANY_ID, L.TRADING_COMPANY_NAME")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_LINE L "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " L.POLICY_SPECIAL_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " L.TRADING_COMPANY_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "REJECTED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u6CD5\u4EBA\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u672A\u9009\u62E9\u6CD5\u4EBA\u76F4\u63A5\u70B9\u51FB\u4FDD\u5B58")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEFLineDS.ts\u4E2DlegalEntityObj\u5B57\u6BB5\u914D\u7F6E\u4E3Arequired: true\uFF0CDataSet\u63D0\u4EA4\u65F6\u81EA\u52A8\u6821\u9A8C\u5FC5\u586B\u3002\u6CD5\u4EBA\u662F\u5173\u8054\u4F59\u989D\u8D26\u6237\uFF08CAPITAL_ACCOUNT\uFF09\u548C\u8D44\u91D1\u6C60\u67E5\u8BE2\u7684\u5173\u952E\u5B57\u6BB5\uFF0Cselect-capital\u63A5\u53E3\u5165\u53C2legalEntityCode\u5373\u6765\u81EA\u6CD5\u4EBA\u9009\u62E9\u3002\u672A\u9009\u62E9\u6CD5\u4EBA\u5C06\u5BFC\u81F4\u8D44\u91D1\u6C60\u4F59\u989D\u65E0\u6CD5\u67E5\u8BE2\uFF0C\u63D0\u4EA4\u6821\u9A8C\u65E0\u6CD5\u6267\u884C\u3002\u6821\u9A8C\u5931\u8D25\u65F6\u524D\u7AEF\u8868\u5355\u6807\u7EA2\u63D0\u793A\u540E\u963B\u65AD\u4FDD\u5B58")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID, H.POLICY_SPECIAL_NO, L.POLICY_SPECIAL_LINE_ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         L.CUST_NAME, L.LEGAL_ENTITY_ID, L.LEGAL_ENTITY_CODE")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_LINE L "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ON"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " H.POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " L.POLICY_SPECIAL_ID")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " L.LEGAL_ENTITY_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "REJECTED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95198\uFF1A\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u70B9\u51FB"\u4FDD\u5B58\u5E76\u63D0\u4EA4"\u6309\u94AE\uFF0Cdto.getFlowCode()\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AsaveAndSubmit\u65B9\u6CD5\u4E2D\u6821\u9A8CStringUtils.isEmpty(dto.getFlowCode())\uFF0C\u82E5\u4E3A\u7A7A\u5219\u629B\u51FACommonException("\u6D41\u7A0B\u7F16\u7801\u7F3A\u5931\uFF0C\u8BF7\u9009\u62E9\u6D41\u7A0B\uFF01")\u3002\u6D41\u7A0B\u7F16\u7801\uFF08flowCode\uFF09\u662F\u53D1\u8D77OA\u5BA1\u6279\u6D41\u7A0B\uFF08SA_POLICY_SPECIAL_MCS_AW\uFF09\u7684\u5FC5\u8981\u53C2\u6570\uFF0C\u7F3A\u5931\u5C06\u5BFC\u81F4workFlowStart\u65E0\u6CD5\u542F\u52A8\u6D41\u7A0B\u3002\u9700\u5728\u8BE6\u60C5\u9875\u9009\u62E9\u5BA1\u6279\u6D41\u7A0B\u540E\u518D\u6B21\u63D0\u4EA4')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, HZ_APPROVE_STATUS, HZ_INSTANCE_ID, AUDIT_STAT")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_INSTANCE_ID "),
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
          createVNode("h4", null, "\u62A5\u95199\uFF1A\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546\u6216\u4EA4\u6613\u516C\u53F8"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u5728\u660E\u7EC6\u884C\u70B9\u51FB"\u67E5\u8BE2\u8D44\u91D1\u6C60"\u6309\u94AE\uFF0C\u4F46custCode\u6216tradingCompanyCode\u4E3A\u7A7A')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEFhandleSelectCapital\u56DE\u8C03\u4E2D\u6821\u9A8Crecord?.get('custCode')\u548Crecord?.get('tradingCompanyCode')\uFF0C\u82E5\u4EFB\u4E00\u4E3A\u7A7A\u5219notification.error\u63D0\u793A"\u8BF7\u5148\u9009\u62E9\u7ECF\u9500\u5546 \u6216 \u4EA4\u6613\u516C\u53F8"\u5E76return\u3002\u8D44\u91D1\u6C60\u67E5\u8BE2\uFF08select-capital\u63A5\u53E3\uFF09\u9700\u8981legalEntityCode\u548CtradingCompanyCode\u4F5C\u4E3A\u5165\u53C2\uFF0C\u4E8C\u8005\u5206\u522B\u6765\u81EA\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u9009\u62E9\u3002\u9700\u5148\u9009\u62E9\u7ECF\u9500\u5546\u548C\u4EA4\u6613\u516C\u53F8\u518D\u67E5\u8BE2\u8D44\u91D1\u6C60`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_LINE_ID, CUST_CODE, CUST_NAME, TRADING_COMPANY_CODE, TRADING_COMPANY_NAME")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TRADING_COMPANY_CODE "),
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
          createVNode("h4", null, "\u62A5\u951910\uFF1A\u884C\u6570\u636E\u91CD\u590D"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u4FDD\u5B58\u65F6\uFF0C\u660E\u7EC6\u884C\u4E2D\u5B58\u5728\u76F8\u540C\u7684"\u7ECF\u9500\u5546\u7F16\u7801+\u4EA4\u6613\u516C\u53F8\u540D\u79F0+\u6CD5\u4EBA\u7F16\u7801"\u7EC4\u5408')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEFDetailPage/index.tsx\u7684\u6821\u9A8C\u903B\u8F91\u4E2D\uFF0C\u6309custCode + '-' + tradingCompanyName + '-' + legalEntityCode\u751F\u6210\u552F\u4E00\u952E\uFF0C\u82E5\u91CD\u590D\u5219notification.error\u63D0\u793A"\u7B2CX\u884C\u6570\u636E\u91CD\u590D"\u5E76\u8FD4\u56DEfalse\u963B\u65AD\u4FDD\u5B58\u3002\u540C\u4E00\u7533\u8BF7\u5355\u4E2D\u4E0D\u5141\u8BB8\u76F8\u540C\u7ECF\u9500\u5546+\u4EA4\u6613\u516C\u53F8+\u6CD5\u4EBA\u7EC4\u5408\u91CD\u590D\uFF0C\u907F\u514D\u8D44\u91D1\u6C60\u91CD\u590D\u6263\u51CF\u3002\u9700\u53BB\u91CD\u540E\u4FDD\u5B58`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_CODE, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u91CD\u590D\u884C\u6570")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " SA_POLICY_SPECIAL_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{policySpecialId}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUST_CODE, TRADING_COMPANY_NAME, LEGAL_ENTITY_CODE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
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
          ]),
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1A\u7528\u6237\u672A\u9009\u4E2D\u4EFB\u4F55\u7533\u8BF7\u5355\u76F4\u63A5\u70B9\u51FB"\u5220\u9664"\u6309\u94AE')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1Aremove\u65B9\u6CD5\u63A5\u6536cmContractPaymentApplyList\u5217\u8868\uFF0C\u82E5CollectionUtils.isEmpty\u4E3Atrue\u5219\u629B\u51FACommonException("\u8BF7\u9009\u62E9\u9700\u8981\u5220\u9664\u7684\u6570\u636E\uFF01")\u3002\u524D\u7AEF\u5217\u8868\u9875\u9700\u9009\u4E2D\u81F3\u5C11\u4E00\u6761\u8BB0\u5F55\u624D\u53EF\u89E6\u53D1\u5220\u9664\u64CD\u4F5C\u3002\u9700\u5728\u5217\u8868\u4E2D\u52FE\u9009\u76EE\u6807\u8BB0\u5F55\u540E\u91CD\u8BD5')
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u53EF\u5220\u9664\u7684\u7533\u8BF7\u5355\uFF08\u672A\u63D0\u4EA4\u6216\u5DF2\u62D2\u7EDD\u72B6\u6001\uFF09")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CREATOR, AUDIT_STAT, HZ_APPROVE_STATUS")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "NEW"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "REJECTED"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u5355\u636E\u672A\u5728OA\u5BA1\u6838\u8282\u70B9"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode('\uFF1AOA\u5BA1\u6279\u56DE\u8C03doProcessOA\u65B9\u6CD5\u65F6\uFF0C\u5355\u636E\u7684AUDIT_STAT\u4E0D\u7B49\u4E8E"\u5DF2\u9001\u7B7EOA"')
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AdoProcessOA\u65B9\u6CD5\u4E2D\u6309policySpecialId\u67E5\u8BE2\u5355\u636E\uFF0C\u82E5saPolicySpecialHeaderVO.getAuditStat()\u4E0D\u7B49\u4E8E"\u5DF2\u9001\u7B7EOA"\u5219\u629B\u51FACommonException("\u5355\u636E\u3010{}\u3011\u672A\u5728oa\u5BA1\u6838\u8282\u70B9", policySpecialId)\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)OA\u56DE\u8C03\u65F6\u5E8F\u5F02\u5E38\uFF0C\u5355\u636E\u5C1A\u672A\u63A8\u9001OA\u5373\u6536\u5230\u56DE\u8C03\uFF1B(2)\u5355\u636E\u5DF2\u88AB\u5176\u4ED6\u56DE\u8C03\u5904\u7406\u66F4\u65B0\u72B6\u6001\uFF1B(3)\u4EBA\u5DE5\u4FEE\u6539\u4E86AUDIT_STAT\u5B57\u6BB5\u3002\u9700\u6838\u67E5OA\u56DE\u8C03\u65F6\u5E8F\u53CA\u5355\u636E\u72B6\u6001\u6D41\u8F6C')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, AUDIT_STAT, HZ_APPROVE_STATUS,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         HZ_INSTANCE_ID, CALLBACK_SOURCE")
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
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{policySpecialId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1AOA\u5BA1\u6279\u56DE\u8C03doProcessOA\u65B9\u6CD5\u65F6\uFF0C\u6309policySpecialId\u67E5\u8BE2SA_POLICY_SPECIAL_HEADER\u8FD4\u56DE\u7A7A\u96C6\u5408")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1AdoProcessOA\u65B9\u6CD5\u4E2D\u6821\u9A8CpolicySpecialId\u975E\u7A7A\u4E14\u5927\u4E8E0\uFF0C\u7136\u540E\u901A\u8FC7saPolicySpecialHeaderRepository.search\u67E5\u8BE2\u3002\u82E5\u8FD4\u56DE\u7A7A\u96C6\u5408\u5219\u629B\u51FACommonException("\u672A\u67E5\u8BE2\u5230\u4E1A\u52A1\u5355\u636E\uFF0C\u8BF7\u68C0\u67E5")\u3002\u6839\u56E0\u6709\u4E09\u7C7B\uFF1A(1)OA\u56DE\u4F20\u7684ID\u5728\u7CFB\u7EDF\u4E2D\u4E0D\u5B58\u5728\uFF08\u5982\u6D4B\u8BD5\u73AF\u5883OA\u56DE\u8C03\u5230\u751F\u4EA7\uFF09\uFF1B(2)\u7533\u8BF7\u5355\u5DF2\u88AB\u7269\u7406\u5220\u9664\uFF1B(3)\u6570\u636E\u6743\u9650\u8FC7\u6EE4\u5BFC\u81F4\u67E5\u8BE2\u4E0D\u5230\u3002\u9700\u6838\u5BF9OA\u56DE\u4F20ID\u4E0E\u7CFB\u7EDFPOLICY_SPECIAL_ID\u5B57\u6BB5')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " POLICY_SPECIAL_ID, POLICY_SPECIAL_NO, CUST_NAME, APPLY_AMT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         AUDIT_STAT, HZ_APPROVE_STATUS")
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
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{policySpecialId};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951914\uFF1A\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u70B9\u51FB\u4FDD\u5B58/\u4FDD\u5B58\u5E76\u63D0\u4EA4/\u5220\u9664\u6309\u94AE\uFF0C\u524D\u7AEF\u8C03\u7528\u5BF9\u5E94\u63A5\u53E3\u8FD4\u56DE\u975E2xx\u72B6\u6001\u7801\u6216\u8D85\u65F6")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u901A\u8FC7SaPolicySpecialHeaderController\u63D0\u4F9Bsave/save-and-submit/remove\u7B49\u63A5\u53E3\uFF0C\u63D0\u4EA4\u65F6\u901A\u8FC7workFlowStart\u53D1\u8D77OA\u6D41\u7A0B\uFF0CdoOaAudit\u4E2D\u901A\u8FC7oaService.toDataOA\u63A8\u9001OA\u7CFB\u7EDF\u3002\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u6839\u56E0\u6709\u56DB\u7C7B\uFF1A(1)ae-business\u670D\u52A1\u672A\u542F\u52A8\u6216\u5B95\u673A\uFF1B(2)OA\u7CFB\u7EDF\u4E0D\u53EF\u8FBE\uFF0CtoDataOA\u8C03\u7528\u8D85\u65F6\u6216\u5931\u8D25\uFF1B(3)\u6570\u636E\u5E93\u8FDE\u63A5\u5F02\u5E38\uFF1B(4)\u7F51\u5173\u6216\u7F51\u7EDC\u5C42\u6545\u969C\u3002\u9700\u5148\u786E\u8BA4ae-business\u670D\u52A1\u548COA\u7CFB\u7EDF\u8FDE\u901A\u6027")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7533\u8BF7\u5355\u72B6\u6001\u5206\u5E03")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS, "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u8BB0\u5F55\u6570")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HZ_APPROVE_STATUS;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951915\uFF1A\u6743\u9650\u4E0D\u8DB3"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u7528\u6237\u767B\u5F55\u540E\u8FDB\u5165\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7\u9875\u9762\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u672C\u9875\u9762\u6309\u7ECF\u9500\u5546\u7EF4\u5EA6\u67E5\u8BE2\uFF0C\u6570\u636E\u6743\u9650\u901A\u8FC7\u7528\u6237\u4E0A\u4E0B\u6587CustomUserDetails\u7684additionInfo\u63A7\u5236\u53EF\u89C1\u7ECF\u9500\u5546\u8303\u56F4\u3002\u524D\u7AEFLineDS.ts\u4E2DcustomerObj\u7684lovCode\u4E3ABASIC_CUSTOM_ORG_LOV_2\uFF0C\u901A\u8FC7lovPara\u7684searchFlag: 146\u8FC7\u6EE4\u5F53\u524D\u7528\u6237\u6709\u6743\u9650\u7684\u7ECF\u9500\u5546\u3002\u6743\u9650\u4E0D\u8DB3\u6839\u56E0\u6709\u4E8C\uFF1A(1)\u7528\u6237\u672A\u5206\u914D\u5BF9\u5E94\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650\uFF0CLOV\u67E5\u8BE2\u8FD4\u56DE\u7A7A\uFF1B(2)\u7528\u6237\u672A\u5206\u914D\u83DC\u5355\u8BBF\u95EE\u6743\u9650\uFF0C\u9875\u9762\u5165\u53E3\u4E0D\u53EF\u89C1\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u5728\u6743\u9650\u7CFB\u7EDF\u4E2D\u5206\u914D\u5BF9\u5E94\u7ECF\u9500\u5546\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- \u6838\u67E5\u7528\u6237\u662F\u5426\u6709\u8BE5\u7ECF\u9500\u5546\u7684\u6570\u636E\u6743\u9650")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_ID"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "USER_NAME"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", CUSTOMER_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ENABLED")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " USER_CUSTOMER_AUTH")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CUSTOMER_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " #{customerCode};")
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
        _push2(`<ul${_scopeId}><li${_scopeId}>\u95EE\u98981\uFF1A\u4E0E\u83DC\u535597\u7684\u5173\u7CFB</li><li${_scopeId}>\u539F\u56E0\uFF1A\u83DC\u535597&quot;\u8D22\u52A1\u7BA1\u7406-\u5BF9\u8D26\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7&quot;\u548C\u83DC\u5355103&quot;\u8D22\u52A1\u7BA1\u7406-\u8C03\u6574\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7&quot;\u5171\u7528\u540C\u4E00\u5957\u4EE3\u7801</li><li${_scopeId}>\u89E3\u51B3\u601D\u8DEF\uFF1A\u4E24\u4E2A\u83DC\u5355\u5165\u53E3\u6307\u5411\u540C\u4E00\u4E2A\u529F\u80FD\uFF0C\u6570\u636E\u5B8C\u5168\u5171\u4EAB</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u95EE\u98981\uFF1A\u4E0E\u83DC\u535597\u7684\u5173\u7CFB"),
            createVNode("li", null, '\u539F\u56E0\uFF1A\u83DC\u535597"\u8D22\u52A1\u7BA1\u7406-\u5BF9\u8D26\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7"\u548C\u83DC\u5355103"\u8D22\u52A1\u7BA1\u7406-\u8C03\u6574\u5355-\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7"\u5171\u7528\u540C\u4E00\u5957\u4EE3\u7801'),
            createVNode("li", null, "\u89E3\u51B3\u601D\u8DEF\uFF1A\u4E24\u4E2A\u83DC\u5355\u5165\u53E3\u6307\u5411\u540C\u4E00\u4E2A\u529F\u80FD\uFF0C\u6570\u636E\u5B8C\u5168\u5171\u4EAB")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u6807\u6CE8\u4E0E\u83DC\u535597\u5171\u7528\u4EE3\u7801</td></tr><tr${_scopeId}><td${_scopeId}>2025-09-17</td><td${_scopeId}>-</td><td${_scopeId}>jiaqiang.fu01</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFASaPolicySpecialHeader\u5B9E\u4F53</td></tr></tbody></table>`);
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
                createVNode("td", null, "\u6309skill\u89C4\u8303\u91CD\u5199\uFF0C\u6807\u6CE8\u4E0E\u83DC\u535597\u5171\u7528\u4EE3\u7801")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u8D22\u52A1\u7BA1\u7406/\u8C03\u6574\u5355/\u653F\u7B56\u6027\u8865\u8D34\u7533\u8BF7/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
