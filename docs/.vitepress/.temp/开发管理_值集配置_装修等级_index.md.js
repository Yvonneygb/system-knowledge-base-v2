import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u5F00\u53D1\u7BA1\u7406/\u503C\u96C6\u914D\u7F6E/\u88C5\u4FEE\u7B49\u7EA7/index.md"}');
const _sfc_main = { name: "\u5F00\u53D1\u7BA1\u7406/\u503C\u96C6\u914D\u7F6E/\u88C5\u4FEE\u7B49\u7EA7/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BreadcrumbTabs = resolveComponent("BreadcrumbTabs");
  const _component_KbCard = resolveComponent("KbCard");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_BreadcrumbTabs, null, null, _parent));
  _push(`<div id="biz-intro" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49</span><h2>\u88C5\u4FEE\u7B49\u7EA7\u662F\u4EC0\u4E48</h2><p>HZERO \u5E73\u53F0\u6807\u51C6 LOV \u503C\u96C6\uFF0C\u5BF9\u5E94\u7F16\u7801 <code>AE.FIXUP_GRADE</code></p></div><p>\u672C\u83DC\u5355\u4E3A HZERO \u5E73\u53F0\u6807\u51C6 LOV \u503C\u96C6\u914D\u7F6E\u9875\u9762\uFF0C\u5BF9\u5E94 LOV \u7F16\u7801 <code>AE.FIXUP_GRADE</code>\uFF0C\u65E0\u9700\u4E1A\u52A1\u540E\u7AEF\u4EE3\u7801\uFF0C\u6240\u6709 CRUD \u64CD\u4F5C\u901A\u8FC7 HZERO \u5E73\u53F0\u901A\u7528\u503C\u96C6\u670D\u52A1\u5B8C\u6210\u3002\u672C\u6587\u6863\u68B3\u7406\u503C\u96C6\u914D\u7F6E\u89C4\u5219\u53CA\u5176\u5728\u4E1A\u52A1\u6A21\u5757\u4E2D\u7684\u5F15\u7528\u5173\u7CFB\u3002</p><table class="kl-table"><tr><th style="${ssrRenderStyle({ "width": "160px" })}">\u5C5E\u6027</th><th>\u5185\u5BB9</th></tr><tr><td>\u503C\u96C6\u7F16\u7801</td><td><code>AE.FIXUP_GRADE</code></td></tr><tr><td>\u4E2D\u6587\u540D\u79F0</td><td>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td></tr><tr><td>\u5B58\u50A8\u4F4D\u7F6E</td><td>HZERO \u5E73\u53F0 <code>HPFM_LOV_VALUE</code> \u8868</td></tr><tr><td>\u5F53\u524D\u6A21\u5F0F</td><td>\u540C\u4E00 value + \u540C\u4E00 meaning\uFF0C\u901A\u8FC7 <code>tag</code> \u5B57\u6BB5\u6807\u8BB0\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08organization_id\uFF09</td></tr><tr><td>\u5B58\u50A8\u65B9\u5F0F</td><td>\u6240\u6709\u4E1A\u52A1\u8868\u4E2D <code>FIXUP_GRADE</code> \u5B57\u6BB5\u7EDF\u4E00\u5B58\u50A8\u503C\u96C6\u7684 <strong>value\uFF08Long \u7C7B\u578B\u6570\u503C\uFF09</strong>\uFF0C\u754C\u9762\u5C55\u793A\u65F6\u7FFB\u8BD1\u4E3A meaning\uFF08\u4E2D\u6587\u542B\u4E49\uFF09</td></tr></table></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u5B9A\u4E49\u65B9\u5F0F</span><h2>\u503C\u96C6\u5B9A\u4E49\u65B9\u5F0F</h2><p>HPFM_LOV_VALUE \u8868\u4E2D\u7684\u5B9A\u4E49\u89C4\u5219</p></div><p class="kl-desc">\u503C\u96C6\u5728 <code>HPFM_LOV_VALUE</code> \u8868\u4E2D\u5B9A\u4E49\uFF0C\u6BCF\u4E2A\u88C5\u4FEE\u7B49\u7EA7\u5BF9\u5E94\u4E00\u4E2A value \u548C meaning\u3002\u5F53\u524D\u6240\u6709\u4E8B\u4E1A\u90E8\u5171\u7528\u540C\u4E00\u5957 value\u2192meaning \u6620\u5C04\uFF0C\u901A\u8FC7 tag \u5B57\u6BB5\u533A\u5206\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\u3002</p><div class="kl-two-col"><div class="kl-col-box info"><div class="kl-col-title">\u503C\u96C6\u5B9A\u4E49\u793A\u4F8B</div><div class="kl-col-items"><code>value = 1, meaning = &#39;\u4E00\u7EA7&#39;, tag = &#39;123&#39;</code><br><code>value = 2, meaning = &#39;\u4E8C\u7EA7&#39;, tag = &#39;123&#39;</code><br><code>value = 3, meaning = &#39;\u4E09\u7EA7&#39;, tag = &#39;123&#39;</code></div></div><div class="kl-col-box warn"><div class="kl-col-title">\u6539\u52A8\u65B9\u5411</div><div class="kl-col-items"> \u5982\u9700\u652F\u6301\u4E0D\u540C\u4E8B\u4E1A\u90E8\u81EA\u5B9A\u4E49\u88C5\u4FEE\u7B49\u7EA7\u7684 value \u548C meaning\uFF0C\u9700\u5728 Java \u7FFB\u8BD1\u5C42\u589E\u52A0 organizationId \u53C2\u6570\uFF0C\u5E76\u8C03\u6574\u503C\u96C6\u914D\u7F6E\u65B9\u5F0F\u3002 </div></div></div></div><div class="kl-card"><div class="biz-kl-hdr"><span class="biz-tag" style="${ssrRenderStyle({ "background": "rgba(124,58,237,0.08)", "color": "#7C3AED", "border-color": "rgba(124,58,237,0.18)" })}"> \u4E0A\u4E0B\u6E38</span><h2>\u4E0A\u6E38\u4F9D\u8D56\u4E0E\u4E0B\u6E38\u5F71\u54CD</h2><p>\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6\u5728\u4E1A\u52A1\u94FE\u8DEF\u4E2D\u7684\u4F4D\u7F6E</p></div><h4 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "0 0 8px" })}">\u4E0A\u6E38\u4F9D\u8D56</h4><table class="kl-table"><tr><th>\u4E0A\u6E38\u6A21\u5757</th><th>\u4F9D\u8D56\u7C7B\u578B</th><th>\u4F9D\u8D56\u8BF4\u660E</th><th>\u4F9D\u8D56\u6210\u7ACB\u6761\u4EF6</th></tr><tr><td>HZERO \u5E73\u53F0 LOV \u670D\u52A1</td><td>\u5E73\u53F0\u670D\u52A1</td><td>\u63D0\u4F9B\u503C\u96C6 <code>AE.FIXUP_GRADE</code> \u7684 CRUD \u63A5\u53E3\u3001\u503C\u7FFB\u8BD1\u63A5\u53E3</td><td>HZERO \u5E73\u53F0\u5DF2\u90E8\u7F72\u4E14 LOV \u670D\u52A1\u53EF\u7528</td></tr><tr><td>HZERO \u4F4E\u4EE3\u7801\u5E73\u53F0\uFF08hlod\uFF09</td><td>\u5E73\u53F0\u670D\u52A1</td><td>\u9875\u9762\u6E32\u67D3\u3001\u67E5\u8BE2\u680F\u4E0E\u5217\u8868\u914D\u7F6E\u9A71\u52A8</td><td>\u4F4E\u4EE3\u7801\u9875\u9762\u5DF2\u914D\u7F6E\u5E76\u53D1\u5E03</td></tr><tr><td>HZERO \u7EC4\u7EC7\u670D\u52A1</td><td>\u5E73\u53F0\u670D\u52A1</td><td>\u901A\u8FC7 <code>TAG</code> \u5B57\u6BB5\u6807\u8BB0\u503C\u9879\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08organization_id\uFF09</td><td>\u591A\u4E8B\u4E1A\u90E8\u573A\u666F\u4E0B\u9700\u914D\u7F6E TAG</td></tr></table><h4 style="${ssrRenderStyle({ "font-size": "0.88rem", "font-weight": "800", "color": "#1F2937", "margin": "12px 0 8px" })}">\u4E0B\u6E38\u5F71\u54CD</h4><ul><li><strong>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7</strong>\uFF1A\u901A\u8FC7 <code>lookupCode: &#39;AE.FIXUP_GRADE&#39;</code> \u5F15\u7528\u503C\u96C6\uFF0C\u9009\u62E9\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7\uFF0C\u63D0\u4EA4\u65F6\u6821\u9A8C\u662F\u5426\u6709\u5BF9\u5E94\u7684\u62A5\u9500\u653F\u7B56\u6807\u51C6\u3002</li><li><strong>\u95E8\u5E97\u9A8C\u6536\u62A5\u9500</strong>\uFF1A\u9009\u62E9&quot;\u672C\u6B21\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7&quot;\u548C&quot;\u672C\u6B21\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7&quot;\uFF0C\u5339\u914D <code>TERMINAL_DECORATE_LINE</code> \u6807\u51C6\u884C\u8BA1\u7B97\u8865\u8D34\u91D1\u989D\u3002</li><li><strong>\u95E8\u5E97\u88C5\u4FEE\u6807\u51C6\u8BBE\u7F6E</strong>\uFF1A\u4EE5\u88C5\u4FEE\u7B49\u7EA7\u4E3A\u7EF4\u5EA6\u5B57\u6BB5\uFF0C\u5B9A\u4E49\u4E0D\u540C\u7B49\u7EA7\u5BF9\u5E94\u7684\u8865\u8D34\u6807\u51C6\uFF08\u989D\u5EA6\u5185/\u989D\u5EA6\u5916\u5355\u4EF7\uFF09\u3002</li><li><strong>\u8D22\u52A1\u8D39\u7528\u7533\u8BF7\uFF08\u5173\u5E97/\u53D8\u66F4/\u53D8\u66F4\u5173\u5E97\uFF09</strong>\uFF1A\u5C55\u793A\u5E76\u6821\u9A8C\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7\uFF0C\u5339\u914D\u62A5\u9500\u653F\u7B56\u3002</li><li><strong>\u95E8\u5E97\u4E3B\u6570\u636E/\u7F51\u70B9\u7533\u8BF7\u5355/\u95E8\u5E97\u53D8\u66F4</strong>\uFF1A\u4F5C\u4E3A\u95E8\u5E97\u5C5E\u6027\u5B57\u6BB5\uFF0C\u6807\u8BC6\u95E8\u5E97\u5F53\u524D\u88C5\u4FEE\u7B49\u7EA7\u3002</li></ul></div></div></div></div><div id="biz-flow" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap"><div class="bf-truth-flow"><h4 class="bf-main-title">\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6 \u2014 \u914D\u7F6E\u4E0E\u5F15\u7528\u5168\u94FE\u8DEF\u6D41\u7A0B\u56FE</h4><p class="bf-main-sub">HZERO \u5E73\u53F0 LOV \u914D\u7F6E \u2192 \u503C\u9879 CRUD \u2192 \u4E1A\u52A1\u5F15\u7528\u7FFB\u8BD1 \u2192 \u4E0B\u6E38\u4E1A\u52A1</p><div class="bf-fc-svg-wrap"><svg class="bf-fc-svg" style="${ssrRenderStyle({ "max-height": "none" })}" viewBox="0 0 1200 820" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"></polygon></marker><marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"></polygon></marker><marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"></polygon></marker><marker id="arr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#7C3AED"></polygon></marker><filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"></feDropShadow></filter></defs><rect x="50" y="20" width="1100" height="80" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"></rect><text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">\u4E0A\u6E38\u652F\u6491</text><rect x="120" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="240" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO \u5E73\u53F0 LOV \u670D\u52A1</text><rect x="400" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="520" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO \u4F4E\u4EE3\u7801\u5E73\u53F0\uFF08hlod\uFF09</text><rect x="680" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"></rect><text x="800" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO \u7EC4\u7EC7\u670D\u52A1</text><line x1="600" y1="100" x2="600" y2="130" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"></line><rect x="540" y="130" width="120" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="156" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u5F00\u59CB</text><line x1="600" y1="170" x2="600" y2="200" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="200" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="227" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u8FDB\u5165 HZERO \u5E73\u53F0 LOV \u503C\u96C6\u914D\u7F6E\u9875\u9762</text><line x1="600" y1="244" x2="600" y2="274" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="430" y="274" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="301" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879\u5217\u8868\uFF08\u6309\u7F16\u7801/\u540D\u79F0/\u72B6\u6001\uFF09</text><line x1="600" y1="318" x2="600" y2="348" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><polygon points="600,348 700,398 600,448 500,398" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></polygon><text x="600" y="402" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">\u9009\u62E9\u64CD\u4F5C</text><line x1="500" y1="398" x2="340" y2="398" stroke="#16A34A" stroke-width="2"></line><line x1="340" y1="398" x2="340" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="260" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"></rect><text x="340" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u65B0\u5EFA\u503C\u9879</text><line x1="550" y1="448" x2="550" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="470" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"></rect><text x="550" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u7F16\u8F91\u503C\u9879</text><line x1="650" y1="448" x2="650" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="570" y="470" width="160" height="40" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"></rect><text x="650" y="495" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">\u5220\u9664\u503C\u9879</text><line x1="700" y1="398" x2="860" y2="398" stroke="#16A34A" stroke-width="2"></line><line x1="860" y1="398" x2="860" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="780" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"></rect><text x="860" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">\u542F\u7528/\u7981\u7528\u503C\u9879</text><line x1="340" y1="510" x2="340" y2="540" stroke="#16A34A" stroke-width="2"></line><line x1="550" y1="510" x2="550" y2="540" stroke="#16A34A" stroke-width="2"></line><line x1="650" y1="510" x2="650" y2="540" stroke="#16A34A" stroke-width="2"></line><line x1="860" y1="510" x2="860" y2="540" stroke="#16A34A" stroke-width="2"></line><rect x="430" y="540" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="567" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u4FDD\u5B58\u6821\u9A8C\uFF08\u7F16\u7801\u552F\u4E00/\u5FC5\u586B/\u6392\u5E8F\u53F7\uFF09</text><line x1="600" y1="584" x2="600" y2="614" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="400" y="614" width="400" height="44" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow2)"></rect><text x="600" y="641" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="700">\u5199\u5165 HPFM_LOV_VALUE \u8868\uFF08HZERO \u5E73\u53F0 LOV \u670D\u52A1\uFF09</text><line x1="600" y1="658" x2="600" y2="688" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="380" y="688" width="440" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"></rect><text x="600" y="715" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">\u4E1A\u52A1\u5F15\u7528\uFF1AlovService.getMeaning / getValue \u7FFB\u8BD1</text><line x1="600" y1="732" x2="600" y2="762" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"></line><rect x="540" y="762" width="120" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"></rect><text x="600" y="788" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">\u7ED3\u675F</text></svg></div><div class="bf-fc-legend"><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> \u4E3B\u6D41\u7A0B\u6B65\u9AA4</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> \u5F00\u59CB/\u7ED3\u675F/\u5224\u65AD</span><span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> \u4E0A\u6E38\u652F\u6491\u670D\u52A1</span></div></div></div></div></div><div id="key-logic" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, {
    num: "1",
    title: "\u91CD\u70B9\u903B\u8F911\uFF1ALOV \u503C\u96C6\u914D\u7F6E"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u88C5\u4FEE\u7B49\u7EA7\u662F\u95E8\u5E97\u7BA1\u7406\u548C\u8D22\u52A1\u62A5\u9500\u7684\u6838\u5FC3\u57FA\u7840\u6570\u636E\uFF0C\u4E0D\u540C\u88C5\u4FEE\u7B49\u7EA7\u5BF9\u5E94\u4E0D\u540C\u7684\u62A5\u9500\u6807\u51C6\uFF0C\u9700\u7EDF\u4E00\u914D\u7F6E\u548C\u7EF4\u62A4\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7 HZERO \u5E73\u53F0\u6807\u51C6 LOV \u914D\u7F6E\u754C\u9762\u7EF4\u62A4\u503C\u96C6 <code${_scopeId}>AE.FIXUP_GRADE</code>\uFF0C\u6BCF\u4E2A\u88C5\u4FEE\u7B49\u7EA7\u5BF9\u5E94\u4E00\u4E2A <code${_scopeId}>VALUE</code>\uFF08\u503C\u7F16\u7801\uFF09\u548C <code${_scopeId}>MEANING</code>\uFF08\u503C\u540D\u79F0\uFF09\u3002\u6240\u6709\u4E1A\u52A1\u8868\u4E2D <code${_scopeId}>FIXUP_GRADE</code> \u5B57\u6BB5\u7EDF\u4E00\u5B58\u50A8 <code${_scopeId}>VALUE</code>\uFF08Long \u7C7B\u578B\u6570\u503C\uFF09\uFF0C\u754C\u9762\u5C55\u793A\u65F6\u901A\u8FC7 <code${_scopeId}>lovService.getMeaning(&quot;AE.FIXUP_GRADE&quot;, value)</code> \u7FFB\u8BD1\u4E3A <code${_scopeId}>MEANING</code>\uFF08\u4E2D\u6587\u542B\u4E49\uFF09\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u88C5\u4FEE\u7B49\u7EA7\u662F\u95E8\u5E97\u7BA1\u7406\u548C\u8D22\u52A1\u62A5\u9500\u7684\u6838\u5FC3\u57FA\u7840\u6570\u636E\uFF0C\u4E0D\u540C\u88C5\u4FEE\u7B49\u7EA7\u5BF9\u5E94\u4E0D\u540C\u7684\u62A5\u9500\u6807\u51C6\uFF0C\u9700\u7EDF\u4E00\u914D\u7F6E\u548C\u7EF4\u62A4\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7 HZERO \u5E73\u53F0\u6807\u51C6 LOV \u914D\u7F6E\u754C\u9762\u7EF4\u62A4\u503C\u96C6 "),
              createVNode("code", null, "AE.FIXUP_GRADE"),
              createTextVNode("\uFF0C\u6BCF\u4E2A\u88C5\u4FEE\u7B49\u7EA7\u5BF9\u5E94\u4E00\u4E2A "),
              createVNode("code", null, "VALUE"),
              createTextVNode("\uFF08\u503C\u7F16\u7801\uFF09\u548C "),
              createVNode("code", null, "MEANING"),
              createTextVNode("\uFF08\u503C\u540D\u79F0\uFF09\u3002\u6240\u6709\u4E1A\u52A1\u8868\u4E2D "),
              createVNode("code", null, "FIXUP_GRADE"),
              createTextVNode(" \u5B57\u6BB5\u7EDF\u4E00\u5B58\u50A8 "),
              createVNode("code", null, "VALUE"),
              createTextVNode("\uFF08Long \u7C7B\u578B\u6570\u503C\uFF09\uFF0C\u754C\u9762\u5C55\u793A\u65F6\u901A\u8FC7 "),
              createVNode("code", null, 'lovService.getMeaning("AE.FIXUP_GRADE", value)'),
              createTextVNode(" \u7FFB\u8BD1\u4E3A "),
              createVNode("code", null, "MEANING"),
              createTextVNode("\uFF08\u4E2D\u6587\u542B\u4E49\uFF09\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "2",
    title: "\u91CD\u70B9\u903B\u8F912\uFF1A\u503C\u7F16\u7801\u552F\u4E00\u6027"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u786E\u4FDD\u540C\u4E00 LOV \u4E0B\u503C\u7F16\u7801\u4E0D\u91CD\u590D\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u540C\u4E00 <code${_scopeId}>LOV_CODE = &#39;AE.FIXUP_GRADE&#39;</code> \u4E0B <code${_scopeId}>VALUE</code> \u5B57\u6BB5\u552F\u4E00\u3002\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6\u7531 HZERO \u5E73\u53F0\u6821\u9A8C\uFF0C\u82E5\u91CD\u590D\u63D0\u793A&quot;\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728&quot;\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u786E\u4FDD\u540C\u4E00 LOV \u4E0B\u503C\u7F16\u7801\u4E0D\u91CD\u590D\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u540C\u4E00 "),
              createVNode("code", null, "LOV_CODE = 'AE.FIXUP_GRADE'"),
              createTextVNode(" \u4E0B "),
              createVNode("code", null, "VALUE"),
              createTextVNode(' \u5B57\u6BB5\u552F\u4E00\u3002\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6\u7531 HZERO \u5E73\u53F0\u6821\u9A8C\uFF0C\u82E5\u91CD\u590D\u63D0\u793A"\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728"\u3002')
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "3",
    title: "\u91CD\u70B9\u903B\u8F913\uFF1A\u751F\u6548\u65E5\u671F\u63A7\u5236"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u503C\u9879\u53EF\u901A\u8FC7\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F\u63A7\u5236\u751F\u6548\u8303\u56F4\uFF0C\u652F\u6301\u88C5\u4FEE\u7B49\u7EA7\u7684\u7248\u672C\u5316\u7BA1\u7406\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u503C\u9879\u914D\u7F6E <code${_scopeId}>START_DATE</code> \u548C <code${_scopeId}>END_DATE</code>\uFF0C\u4E1A\u52A1\u67E5\u8BE2\u65F6\u4EC5\u8FD4\u56DE\u5F53\u524D\u65E5\u671F\u5728\u751F\u6548\u8303\u56F4\u5185\u7684\u503C\u9879\uFF0C\u8FC7\u671F\u6216\u672A\u751F\u6548\u7684\u503C\u9879\u4E0D\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u5C55\u793A\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u503C\u9879\u53EF\u901A\u8FC7\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F\u63A7\u5236\u751F\u6548\u8303\u56F4\uFF0C\u652F\u6301\u88C5\u4FEE\u7B49\u7EA7\u7684\u7248\u672C\u5316\u7BA1\u7406\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u503C\u9879\u914D\u7F6E "),
              createVNode("code", null, "START_DATE"),
              createTextVNode(" \u548C "),
              createVNode("code", null, "END_DATE"),
              createTextVNode("\uFF0C\u4E1A\u52A1\u67E5\u8BE2\u65F6\u4EC5\u8FD4\u56DE\u5F53\u524D\u65E5\u671F\u5728\u751F\u6548\u8303\u56F4\u5185\u7684\u503C\u9879\uFF0C\u8FC7\u671F\u6216\u672A\u751F\u6548\u7684\u503C\u9879\u4E0D\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u5C55\u793A\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "4",
    title: "\u91CD\u70B9\u903B\u8F914\uFF1A\u6392\u5E8F\u53F7\u63A7\u5236"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u63A7\u5236\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u5C55\u793A\u987A\u5E8F\uFF0C\u63D0\u5347\u7528\u6237\u9009\u62E9\u4F53\u9A8C\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u901A\u8FC7 <code${_scopeId}>ORDER_SEQ</code> \u5B57\u6BB5\u63A7\u5236\u503C\u9879\u5C55\u793A\u987A\u5E8F\uFF0C\u67E5\u8BE2\u65F6\u6309 <code${_scopeId}>ORDER_SEQ</code> \u5347\u5E8F\u6392\u5217\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u63A7\u5236\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u5C55\u793A\u987A\u5E8F\uFF0C\u63D0\u5347\u7528\u6237\u9009\u62E9\u4F53\u9A8C\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u901A\u8FC7 "),
              createVNode("code", null, "ORDER_SEQ"),
              createTextVNode(" \u5B57\u6BB5\u63A7\u5236\u503C\u9879\u5C55\u793A\u987A\u5E8F\uFF0C\u67E5\u8BE2\u65F6\u6309 "),
              createVNode("code", null, "ORDER_SEQ"),
              createTextVNode(" \u5347\u5E8F\u6392\u5217\u3002")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, {
    num: "5",
    title: "\u91CD\u70B9\u903B\u8F915\uFF1A\u591A\u4E8B\u4E1A\u90E8\u9002\u914D"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4E1A\u52A1\u610F\u4E49</strong>\uFF1A\u652F\u6301\u4E0D\u540C\u4E8B\u4E1A\u90E8\u81EA\u5B9A\u4E49\u88C5\u4FEE\u7B49\u7EA7\u7684\u503C\u548C\u542B\u4E49\u3002</li><li${_scopeId}><strong${_scopeId}>\u5177\u4F53\u903B\u8F91\u63CF\u8FF0</strong>\uFF1A\u5F53\u524D\u6240\u6709\u4E8B\u4E1A\u90E8\u5171\u7528\u540C\u4E00\u5957 <code${_scopeId}>VALUE \u2192 MEANING</code> \u6620\u5C04\uFF0C\u901A\u8FC7 <code${_scopeId}>TAG</code> \u5B57\u6BB5\u533A\u5206\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08<code${_scopeId}>organization_id</code>\uFF09\u3002\u5982\u9700\u652F\u6301\u4E0D\u540C\u4E8B\u4E1A\u90E8\u81EA\u5B9A\u4E49\uFF0C\u9700\u5728 Java \u7FFB\u8BD1\u5C42\u589E\u52A0 <code${_scopeId}>organizationId</code> \u53C2\u6570\uFF0C\u5E76\u8C03\u6574\u503C\u96C6\u914D\u7F6E\u65B9\u5F0F\u3002</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u4E1A\u52A1\u610F\u4E49"),
              createTextVNode("\uFF1A\u652F\u6301\u4E0D\u540C\u4E8B\u4E1A\u90E8\u81EA\u5B9A\u4E49\u88C5\u4FEE\u7B49\u7EA7\u7684\u503C\u548C\u542B\u4E49\u3002")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u5177\u4F53\u903B\u8F91\u63CF\u8FF0"),
              createTextVNode("\uFF1A\u5F53\u524D\u6240\u6709\u4E8B\u4E1A\u90E8\u5171\u7528\u540C\u4E00\u5957 "),
              createVNode("code", null, "VALUE \u2192 MEANING"),
              createTextVNode(" \u6620\u5C04\uFF0C\u901A\u8FC7 "),
              createVNode("code", null, "TAG"),
              createTextVNode(" \u5B57\u6BB5\u533A\u5206\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08"),
              createVNode("code", null, "organization_id"),
              createTextVNode("\uFF09\u3002\u5982\u9700\u652F\u6301\u4E0D\u540C\u4E8B\u4E1A\u90E8\u81EA\u5B9A\u4E49\uFF0C\u9700\u5728 Java \u7FFB\u8BD1\u5C42\u589E\u52A0 "),
              createVNode("code", null, "organizationId"),
              createTextVNode(" \u53C2\u6570\uFF0C\u5E76\u8C03\u6574\u503C\u96C6\u914D\u7F6E\u65B9\u5F0F\u3002")
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
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u4E3A HZERO \u5E73\u53F0\u6807\u51C6 LOV \u914D\u7F6E\u754C\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E HZERO \u4F4E\u4EE3\u7801\u5E73\u53F0\uFF08hlod\uFF09\u6E32\u67D3\u3002</p><h4${_scopeId}>\u67E5\u8BE2\u680F\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>LOV_CODE</td><td${_scopeId}>TextField</td><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u56FA\u5B9A\u4E3A \`AE.FIXUP_GRADE\`\uFF0C\u4E0D\u53EF\u7F16\u8F91</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u7F16\u7801</td><td${_scopeId}>VALUE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u540D\u79F0</td><td${_scopeId}>MEANING</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>ENABLE_FLAG</td><td${_scopeId}>Select</td><td${_scopeId}>\u542F\u7528\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u542F\u7528/\u7981\u7528</td></tr></tbody></table><h4${_scopeId}>\u5217\u8868\u5C55\u793A\u5B57\u6BB5</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u6570\u636E\u5E93\u5217\u540D</th><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u4E1A\u52A1\u91CA\u4E49</th><th${_scopeId}>\u663E\u9690\u6761\u4EF6</th><th${_scopeId}>\u53D6\u503C/\u8D4B\u503C\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u503C\u7F16\u7801</td><td${_scopeId}>VALUE</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u552F\u4E00\u6807\u8BC6</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u540D\u79F0</td><td${_scopeId}>MEANING</td><td${_scopeId}>TextField</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u663E\u793A\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u63CF\u8FF0</td><td${_scopeId}>DESCRIPTION</td><td${_scopeId}>TextField</td><td${_scopeId}>\u7B49\u7EA7\u63CF\u8FF0</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u8865\u5145\u8BF4\u660E</td></tr><tr${_scopeId}><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>TAG</td><td${_scopeId}>TextField</td><td${_scopeId}>\u6807\u8BB0\u9002\u7528\u7684\u4E8B\u4E1A\u90E8</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>organization_id</td></tr><tr${_scopeId}><td${_scopeId}>\u6392\u5E8F\u53F7</td><td${_scopeId}>ORDER_SEQ</td><td${_scopeId}>NumberField</td><td${_scopeId}>\u6392\u5E8F\u987A\u5E8F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63A7\u5236\u663E\u793A\u987A\u5E8F</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>ENABLE_FLAG</td><td${_scopeId}>Select</td><td${_scopeId}>\u542F\u7528\u72B6\u6001</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u542F\u7528/\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>START_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u751F\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4</td></tr><tr${_scopeId}><td${_scopeId}>\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>END_DATE</td><td${_scopeId}>DatePicker</td><td${_scopeId}>\u751F\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u59CB\u7EC8\u663E\u793A</td><td${_scopeId}>\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u4E3A HZERO \u5E73\u53F0\u6807\u51C6 LOV \u914D\u7F6E\u754C\u9762\uFF0C\u65E0\u72EC\u7ACB\u524D\u7AEF\u6E90\u7801\uFF0C\u57FA\u4E8E HZERO \u4F4E\u4EE3\u7801\u5E73\u53F0\uFF08hlod\uFF09\u6E32\u67D3\u3002"),
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
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "LOV_CODE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u56FA\u5B9A\u4E3A `AE.FIXUP_GRADE`\uFF0C\u4E0D\u53EF\u7F16\u8F91")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u7F16\u7801"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u540D\u79F0"),
                createVNode("td", null, "MEANING"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u624B\u5DE5\u8F93\u5165\uFF0C\u6A21\u7CCA\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "ENABLE_FLAG"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u542F\u7528\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u542F\u7528/\u7981\u7528")
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
                createVNode("td", null, "\u503C\u7F16\u7801"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u552F\u4E00\u6807\u8BC6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u540D\u79F0"),
                createVNode("td", null, "MEANING"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u663E\u793A\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63CF\u8FF0"),
                createVNode("td", null, "DESCRIPTION"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u7B49\u7EA7\u63CF\u8FF0"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u8865\u5145\u8BF4\u660E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "TAG"),
                createVNode("td", null, "TextField"),
                createVNode("td", null, "\u6807\u8BB0\u9002\u7528\u7684\u4E8B\u4E1A\u90E8"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "organization_id")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6392\u5E8F\u53F7"),
                createVNode("td", null, "ORDER_SEQ"),
                createVNode("td", null, "NumberField"),
                createVNode("td", null, "\u6392\u5E8F\u987A\u5E8F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63A7\u5236\u663E\u793A\u987A\u5E8F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "ENABLE_FLAG"),
                createVNode("td", null, "Select"),
                createVNode("td", null, "\u542F\u7528\u72B6\u6001"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u542F\u7528/\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "START_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u751F\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "END_DATE"),
                createVNode("td", null, "DatePicker"),
                createVNode("td", null, "\u751F\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u59CB\u7EC8\u663E\u793A"),
                createVNode("td", null, "\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5E8F\u53F7</th><th${_scopeId}>\u6309\u94AE\u540D\u79F0</th><th${_scopeId}>\u6240\u5728\u4F4D\u7F6E</th><th${_scopeId}>\u529F\u80FD\u8BF4\u660E</th><th${_scopeId}>\u89E6\u53D1\u6761\u4EF6</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>1</td><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u5217\u8868\u5DE5\u5177\u680F</td><td${_scopeId}>\u65B0\u589E\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879</td><td${_scopeId}>\u59CB\u7EC8\u53EF\u7528</td></tr><tr${_scopeId}><td${_scopeId}>2</td><td${_scopeId}>\u7F16\u8F91</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u7F16\u8F91\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879</td><td${_scopeId}>\u9009\u62E9\u4E00\u6761\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>3</td><td${_scopeId}>\u5220\u9664</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5220\u9664\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879</td><td${_scopeId}>\u9009\u62E9\u4E00\u6761\u6570\u636E</td></tr><tr${_scopeId}><td${_scopeId}>4</td><td${_scopeId}>\u542F\u7528/\u7981\u7528</td><td${_scopeId}>\u5217\u8868\u884C\u64CD\u4F5C</td><td${_scopeId}>\u5207\u6362\u503C\u9879\u542F\u7528\u72B6\u6001</td><td${_scopeId}>\u9009\u62E9\u4E00\u6761\u6570\u636E</td></tr></tbody></table><h4${_scopeId}>\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB&quot;\u65B0\u5EFA&quot;\u6309\u94AE</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u6253\u5F00\u65B0\u5EFA\u503C\u9879\u5F39\u7A97/\u62BD\u5C49</p><p${_scopeId}>2. \u586B\u5199\u503C\u7F16\u7801\u3001\u503C\u540D\u79F0\u3001\u63CF\u8FF0\u3001\u6392\u5E8F\u53F7\u3001\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F</p><p${_scopeId}>3. \u4FDD\u5B58\u65F6\u6821\u9A8C\u503C\u7F16\u7801\u552F\u4E00\u6027\u3001\u5FC5\u586B\u9879</p><p${_scopeId}>4. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u65B0\u589E\u63A5\u53E3\u5199\u5165 <code${_scopeId}>HPFM_LOV_VALUE</code> \u8868</p><h4${_scopeId}>\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB&quot;\u7F16\u8F91&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u6253\u5F00\u7F16\u8F91\u503C\u9879\u5F39\u7A97/\u62BD\u5C49\uFF0C\u56DE\u663E\u5F53\u524D\u503C\u9879\u6570\u636E</p><p${_scopeId}>2. \u4FEE\u6539\u503C\u9879\u4FE1\u606F\uFF08\u503C\u7F16\u7801\u901A\u5E38\u4E0D\u53EF\u7F16\u8F91\uFF09</p><p${_scopeId}>3. \u4FDD\u5B58\u65F6\u6821\u9A8C\u5FC5\u586B\u9879</p><p${_scopeId}>4. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u66F4\u65B0\u63A5\u53E3\u66F4\u65B0 <code${_scopeId}>HPFM_LOV_VALUE</code> \u8868</p><h4${_scopeId}>\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB&quot;\u5220\u9664&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A&quot;\u786E\u5B9A\u5220\u9664\u8BE5\u88C5\u4FEE\u7B49\u7EA7\u5417\uFF1F&quot;</p><p${_scopeId}>2. \u786E\u8BA4\u540E\u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u5220\u9664\u63A5\u53E3</p><p${_scopeId}>3. \u68C0\u67E5\u8BE5\u503C\u9879\u662F\u5426\u88AB\u4E1A\u52A1\u6570\u636E\u5F15\u7528\uFF0C\u82E5\u88AB\u5F15\u7528\u5219\u63D0\u793A\u65E0\u6CD5\u5220\u9664</p><h4${_scopeId}>\u6309\u94AE4\uFF1A\u542F\u7528/\u7981\u7528\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09</h4><p${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB&quot;\u542F\u7528/\u7981\u7528&quot;</p><p${_scopeId}><strong${_scopeId}>\u6267\u884C\u903B\u8F91</strong>\uFF1A</p><p${_scopeId}>1. \u5207\u6362 <code${_scopeId}>ENABLE_FLAG</code> \u5B57\u6BB5\u503C\uFF081\u21940\uFF09</p><p${_scopeId}>2. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u66F4\u65B0\u63A5\u53E3</p><p${_scopeId}>3. \u7981\u7528\u540E\u8BE5\u503C\u9879\u4E0D\u5728\u4E1A\u52A1\u4E0B\u62C9\u5217\u8868\u4E2D\u5C55\u793A</p>`);
      } else {
        return [
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
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u5217\u8868\u5DE5\u5177\u680F"),
                createVNode("td", null, "\u65B0\u589E\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879"),
                createVNode("td", null, "\u59CB\u7EC8\u53EF\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2"),
                createVNode("td", null, "\u7F16\u8F91"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u7F16\u8F91\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879"),
                createVNode("td", null, "\u9009\u62E9\u4E00\u6761\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "3"),
                createVNode("td", null, "\u5220\u9664"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5220\u9664\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879"),
                createVNode("td", null, "\u9009\u62E9\u4E00\u6761\u6570\u636E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "4"),
                createVNode("td", null, "\u542F\u7528/\u7981\u7528"),
                createVNode("td", null, "\u5217\u8868\u884C\u64CD\u4F5C"),
                createVNode("td", null, "\u5207\u6362\u503C\u9879\u542F\u7528\u72B6\u6001"),
                createVNode("td", null, "\u9009\u62E9\u4E00\u6761\u6570\u636E")
              ])
            ])
          ]),
          createVNode("h4", null, "\u6309\u94AE1\uFF1A\u65B0\u5EFA\uFF08\u5217\u8868\u5DE5\u5177\u680F\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u70B9\u51FB"\u65B0\u5EFA"\u6309\u94AE')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, "1. \u6253\u5F00\u65B0\u5EFA\u503C\u9879\u5F39\u7A97/\u62BD\u5C49"),
          createVNode("p", null, "2. \u586B\u5199\u503C\u7F16\u7801\u3001\u503C\u540D\u79F0\u3001\u63CF\u8FF0\u3001\u6392\u5E8F\u53F7\u3001\u5F00\u59CB/\u7ED3\u675F\u65E5\u671F"),
          createVNode("p", null, "3. \u4FDD\u5B58\u65F6\u6821\u9A8C\u503C\u7F16\u7801\u552F\u4E00\u6027\u3001\u5FC5\u586B\u9879"),
          createVNode("p", null, [
            createTextVNode("4. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u65B0\u589E\u63A5\u53E3\u5199\u5165 "),
            createVNode("code", null, "HPFM_LOV_VALUE"),
            createTextVNode(" \u8868")
          ]),
          createVNode("h4", null, "\u6309\u94AE2\uFF1A\u7F16\u8F91\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB"\u7F16\u8F91"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, "1. \u6253\u5F00\u7F16\u8F91\u503C\u9879\u5F39\u7A97/\u62BD\u5C49\uFF0C\u56DE\u663E\u5F53\u524D\u503C\u9879\u6570\u636E"),
          createVNode("p", null, "2. \u4FEE\u6539\u503C\u9879\u4FE1\u606F\uFF08\u503C\u7F16\u7801\u901A\u5E38\u4E0D\u53EF\u7F16\u8F91\uFF09"),
          createVNode("p", null, "3. \u4FDD\u5B58\u65F6\u6821\u9A8C\u5FC5\u586B\u9879"),
          createVNode("p", null, [
            createTextVNode("4. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u66F4\u65B0\u63A5\u53E3\u66F4\u65B0 "),
            createVNode("code", null, "HPFM_LOV_VALUE"),
            createTextVNode(" \u8868")
          ]),
          createVNode("h4", null, "\u6309\u94AE3\uFF1A\u5220\u9664\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB"\u5220\u9664"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, '1. \u5F39\u51FA\u786E\u8BA4\u6846\uFF1A"\u786E\u5B9A\u5220\u9664\u8BE5\u88C5\u4FEE\u7B49\u7EA7\u5417\uFF1F"'),
          createVNode("p", null, "2. \u786E\u8BA4\u540E\u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u5220\u9664\u63A5\u53E3"),
          createVNode("p", null, "3. \u68C0\u67E5\u8BE5\u503C\u9879\u662F\u5426\u88AB\u4E1A\u52A1\u6570\u636E\u5F15\u7528\uFF0C\u82E5\u88AB\u5F15\u7528\u5219\u63D0\u793A\u65E0\u6CD5\u5220\u9664"),
          createVNode("h4", null, "\u6309\u94AE4\uFF1A\u542F\u7528/\u7981\u7528\uFF08\u5217\u8868\u884C\u64CD\u4F5C\uFF09"),
          createVNode("p", null, [
            createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
            createTextVNode('\uFF1A\u9009\u62E9\u4E00\u6761\u6570\u636E\u70B9\u51FB"\u542F\u7528/\u7981\u7528"')
          ]),
          createVNode("p", null, [
            createVNode("strong", null, "\u6267\u884C\u903B\u8F91"),
            createTextVNode("\uFF1A")
          ]),
          createVNode("p", null, [
            createTextVNode("1. \u5207\u6362 "),
            createVNode("code", null, "ENABLE_FLAG"),
            createTextVNode(" \u5B57\u6BB5\u503C\uFF081\u21940\uFF09")
          ]),
          createVNode("p", null, "2. \u8C03\u7528 HZERO \u5E73\u53F0 LOV \u670D\u52A1\u66F4\u65B0\u63A5\u53E3"),
          createVNode("p", null, "3. \u7981\u7528\u540E\u8BE5\u503C\u9879\u4E0D\u5728\u4E1A\u52A1\u4E0B\u62C9\u5217\u8868\u4E2D\u5C55\u793A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u9009\u62E9\u5F39\u7A97" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u65E0\u9009\u62E9\u5F39\u7A97\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u65E0\u9009\u62E9\u5F39\u7A97\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4FDD\u5B58\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}>\u6821\u9A8C1\uFF1A\u503C\u7F16\u7801\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u6709\u552F\u4E00\u6807\u8BC6</li><li${_scopeId}>\u6821\u9A8C2\uFF1A\u503C\u7F16\u7801\u552F\u4E00 \u2014\u2014 \u540C\u4E00 LOV \u4E0B\u503C\u7F16\u7801\u4E0D\u53EF\u91CD\u590D\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49</li><li${_scopeId}>\u6821\u9A8C3\uFF1A\u503C\u540D\u79F0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u6709\u5C55\u793A\u540D\u79F0</li><li${_scopeId}>\u6821\u9A8C4\uFF1A\u6392\u5E8F\u53F7\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u6709\u660E\u786E\u987A\u5E8F</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, "\u6821\u9A8C1\uFF1A\u503C\u7F16\u7801\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u6709\u552F\u4E00\u6807\u8BC6"),
            createVNode("li", null, "\u6821\u9A8C2\uFF1A\u503C\u7F16\u7801\u552F\u4E00 \u2014\u2014 \u540C\u4E00 LOV \u4E0B\u503C\u7F16\u7801\u4E0D\u53EF\u91CD\u590D\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49"),
            createVNode("li", null, "\u6821\u9A8C3\uFF1A\u503C\u540D\u79F0\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u6709\u5C55\u793A\u540D\u79F0"),
            createVNode("li", null, "\u6821\u9A8C4\uFF1A\u6392\u5E8F\u53F7\u5FC5\u586B \u2014\u2014 \u786E\u4FDD\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u6709\u660E\u786E\u987A\u5E8F")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u63D0\u4EA4\u6821\u9A8C" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u672C\u9875\u9762\u65E0\u5BA1\u6279\u6D41\u7A0B\uFF0C\u4FDD\u5B58\u5373\u751F\u6548\uFF0C\u65E0\u9700\u63D0\u4EA4\u6821\u9A8C\u3002</p>`);
      } else {
        return [
          createVNode("p", null, "\u672C\u9875\u9762\u65E0\u5BA1\u6279\u6D41\u7A0B\uFF0C\u4FDD\u5B58\u5373\u751F\u6548\uFF0C\u65E0\u9700\u63D0\u4EA4\u6821\u9A8C\u3002")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "\u72B6\u6001\u673A" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>[\u65B0\u5EFA] \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 [\u542F\u7528(ENABLE_FLAG=1)] \u2500\u2500\u7981\u7528\u2500\u2500\u2192 [\u7981\u7528(ENABLE_FLAG=0)]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>                                              \u2514\u2500\u2500\u542F\u7528\u2500\u2500\u2192 [\u542F\u7528]</span></span>
<span class="line"${_scopeId}></span></code></pre></div><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5F53\u524D\u72B6\u6001</th><th${_scopeId}>\u89E6\u53D1\u52A8\u4F5C</th><th${_scopeId}>\u76EE\u6807\u72B6\u6001</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u65B0\u5EFA</td><td${_scopeId}>\u4FDD\u5B58</td><td${_scopeId}>\u542F\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u542F\u7528</td><td${_scopeId}>\u7981\u7528</td><td${_scopeId}>\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>\u7981\u7528</td><td${_scopeId}>\u542F\u7528</td><td${_scopeId}>\u542F\u7528</td></tr></tbody></table>`);
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "[\u65B0\u5EFA] \u2500\u2500\u4FDD\u5B58\u2500\u2500\u2192 [\u542F\u7528(ENABLE_FLAG=1)] \u2500\u2500\u7981\u7528\u2500\u2500\u2192 [\u7981\u7528(ENABLE_FLAG=0)]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "                                              \u2514\u2500\u2500\u542F\u7528\u2500\u2500\u2192 [\u542F\u7528]")
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
                createVNode("td", null, "\u65B0\u5EFA"),
                createVNode("td", null, "\u4FDD\u5B58"),
                createVNode("td", null, "\u542F\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u542F\u7528"),
                createVNode("td", null, "\u7981\u7528"),
                createVNode("td", null, "\u7981\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7981\u7528"),
                createVNode("td", null, "\u542F\u7528"),
                createVNode("td", null, "\u542F\u7528")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "\u4E1A\u52A1\u5F15\u7528\u8BF4\u660E" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6 <code${_scopeId}>AE.FIXUP_GRADE</code> \u5728\u591A\u4E2A\u4E1A\u52A1\u6A21\u5757\u4E2D\u88AB\u5F15\u7528\uFF0C\u7EDF\u4E00\u5B58\u50A8 <code${_scopeId}>VALUE</code>\uFF08Long \u7C7B\u578B\u6570\u503C\uFF09\uFF0C\u754C\u9762\u5C55\u793A\u65F6\u7FFB\u8BD1\u4E3A <code${_scopeId}>MEANING</code>\u3002</p><h4${_scopeId}>\u5F15\u7528\u83DC\u5355\u6C47\u603B</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u83DC\u5355\u540D\u79F0</th><th${_scopeId}>\u6838\u5FC3 Entity</th><th${_scopeId}>\u754C\u9762\u663E\u793A\u5B57\u6BB5</th><th${_scopeId}>\u5B58\u50A8\u5185\u5BB9</th><th${_scopeId}>\u4E1A\u52A1\u7528\u9014</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6\u66F4\u65B0</td><td${_scopeId}>FinFeeApplyFinishedHeader</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u5339\u914D\u88C5\u4FEE\u6807\u51C6\u3001\u63D0\u4EA4\u6821\u9A8C\u3001OA \u63A8\u9001</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u53D8\u66F4</td><td${_scopeId}>FinFeeApplyChangeHeader</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u4ECE\u539F\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u6253\u5370\u5C55\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u5173\u95ED</td><td${_scopeId}>FinFeeApplyClose</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u4ECE\u539F\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u4EC5\u5C55\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355</td><td${_scopeId}>FinFeeCheckBxHeader</td><td${_scopeId}>\u672C\u6B21\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7/\u672C\u6B21\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u5339\u914D\u88C5\u4FEE\u6807\u51C6\u884C\u3001\u8BA1\u7B97\u8865\u8D34\u91D1\u989D</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u6807\u51C6\u8BBE\u7F6E</td><td${_scopeId}>TerminalDecorateStandard + TerminalDecorateLine</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u4F5C\u4E3A\u6807\u51C6\u884C\u7EF4\u5EA6\u5B57\u6BB5\uFF0C\u5B9A\u4E49\u8865\u8D34\u6807\u51C6</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u70B9\u8D44\u6599\uFF08\u95E8\u5E97\u4E3B\u6570\u636E\uFF09</td><td${_scopeId}>MktTerminal</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u95E8\u5E97\u5C5E\u6027\u5B57\u6BB5\uFF0C\u6807\u8BC6\u5F53\u524D\u88C5\u4FEE\u7B49\u7EA7</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u70B9\u7533\u8BF7\u5355</td><td${_scopeId}>MktTerminalApply</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u95E8\u5E97\u7533\u8BF7\u5C5E\u6027\u5B57\u6BB5</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u53D8\u66F4</td><td${_scopeId}>MktTerminalModify</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\uFF08\u53D8\u66F4\u524D/\u540E\uFF09</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u8BB0\u5F55\u53D8\u66F4\u524D\u540E\u5BF9\u6BD4</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5934\u5C55\u677F\u62A5\u9500\uFF08\u65E7\uFF09</td><td${_scopeId}>FinFeeBxHeader</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u65E7\u7248\u83DC\u5355\uFF0C\u5386\u53F2\u6570\u636E\u5C55\u793A</td></tr><tr${_scopeId}><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\uFF08\u65E7\uFF09</td><td${_scopeId}>FinFeeApplyHeader</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u672C\u6B21\u7533\u8BF7\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>VALUE</td><td${_scopeId}>\u65E7\u7248\u83DC\u5355\uFF0C\u5386\u53F2\u6570\u636E\u5C55\u793A</td></tr></tbody></table><h4${_scopeId}>Java \u5C42\u7FFB\u8BD1\u65B9\u5F0F</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u7FFB\u8BD1\u65B9\u5F0F</th><th${_scopeId}>\u4EE3\u7801</th><th${_scopeId}>\u65B9\u5411</th><th${_scopeId}>\u4F7F\u7528\u573A\u666F</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u6807\u51C6\u7FFB\u8BD1</td><td${_scopeId}>\`lovService.getMeaning(&quot;AE.FIXUP_GRADE&quot;, value)\`</td><td${_scopeId}>VALUE\u2192MEANING</td><td${_scopeId}>\u6253\u5370/\u5C55\u793A\u65F6\u5C06\u6570\u503C\u7FFB\u8BD1\u4E3A\u4E2D\u6587</td></tr><tr${_scopeId}><td${_scopeId}>\u53CD\u5411\u7FFB\u8BD1</td><td${_scopeId}>\`lovService.getValue(&quot;AE.FIXUP_GRADE&quot;, meaning)\`</td><td${_scopeId}>MEANING\u2192VALUE</td><td${_scopeId}>OA \u56DE\u5199\u65F6\u5C06\u4E2D\u6587\u53CD\u67E5\u4E3A\u6570\u503C</td></tr><tr${_scopeId}><td${_scopeId}>\u6CE8\u89E3\u7FFB\u8BD1</td><td${_scopeId}>\`@LovValue(lovCode=&quot;AE.FIXUP_GRADE&quot;, meaningField=&quot;fixupGradeMeaning&quot;)\`</td><td${_scopeId}>VALUE\u2192MEANING</td><td${_scopeId}>VO \u8FD4\u56DE\u524D\u7AEF\u65F6\u81EA\u52A8\u7FFB\u8BD1</td></tr></tbody></table><h4${_scopeId}>SQL \u5C42\u7FFB\u8BD1\u65B9\u5F0F</h4><table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u7FFB\u8BD1\u65B9\u5F0F</th><th${_scopeId}>SQL</th><th${_scopeId}>\u4F7F\u7528\u573A\u666F</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>JOIN \u7FFB\u8BD1</td><td${_scopeId}>\`LEFT JOIN HPFM_LOV_VALUE hlv ON hlv.LOV_CODE=&#39;AE.FIXUP_GRADE&#39; AND hlv.VALUE=TO_CHAR(afh.FIXUP_GRADE) AND hlv.TAG LIKE CONCAT(&#39;%&#39;,CONCAT(afh.ORGANIZATION_ID,&#39;%&#39;))\`</td><td${_scopeId}>\u5BFC\u51FA/\u62A5\u8868\u67E5\u8BE2</td></tr><tr${_scopeId}><td${_scopeId}>\u51FD\u6570\u7FFB\u8BD1</td><td${_scopeId}>\`GET_DIV_DICT_NAME(&#39;AE.FIXUP_GRADE&#39;, TO_CHAR(cbh.FIXUP_GRADE), cbh.ORGANIZATION_ID)\`</td><td${_scopeId}>\u5BFC\u51FA/\u62A5\u8868\u67E5\u8BE2</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6 "),
            createVNode("code", null, "AE.FIXUP_GRADE"),
            createTextVNode(" \u5728\u591A\u4E2A\u4E1A\u52A1\u6A21\u5757\u4E2D\u88AB\u5F15\u7528\uFF0C\u7EDF\u4E00\u5B58\u50A8 "),
            createVNode("code", null, "VALUE"),
            createTextVNode("\uFF08Long \u7C7B\u578B\u6570\u503C\uFF09\uFF0C\u754C\u9762\u5C55\u793A\u65F6\u7FFB\u8BD1\u4E3A "),
            createVNode("code", null, "MEANING"),
            createTextVNode("\u3002")
          ]),
          createVNode("h4", null, "\u5F15\u7528\u83DC\u5355\u6C47\u603B"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u83DC\u5355\u540D\u79F0"),
                createVNode("th", null, "\u6838\u5FC3 Entity"),
                createVNode("th", null, "\u754C\u9762\u663E\u793A\u5B57\u6BB5"),
                createVNode("th", null, "\u5B58\u50A8\u5185\u5BB9"),
                createVNode("th", null, "\u4E1A\u52A1\u7528\u9014")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u4E0E\u8FDB\u5EA6\u66F4\u65B0"),
                createVNode("td", null, "FinFeeApplyFinishedHeader"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u5339\u914D\u88C5\u4FEE\u6807\u51C6\u3001\u63D0\u4EA4\u6821\u9A8C\u3001OA \u63A8\u9001")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u53D8\u66F4"),
                createVNode("td", null, "FinFeeApplyChangeHeader"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u4ECE\u539F\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u6253\u5370\u5C55\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u5173\u95ED"),
                createVNode("td", null, "FinFeeApplyClose"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u4ECE\u539F\u7533\u8BF7\u5355\u5E26\u5165\uFF0C\u4EC5\u5C55\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u9A8C\u6536\u4E0E\u62A5\u9500\u5355"),
                createVNode("td", null, "FinFeeCheckBxHeader"),
                createVNode("td", null, "\u672C\u6B21\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7/\u672C\u6B21\u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u5339\u914D\u88C5\u4FEE\u6807\u51C6\u884C\u3001\u8BA1\u7B97\u8865\u8D34\u91D1\u989D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u6807\u51C6\u8BBE\u7F6E"),
                createVNode("td", null, "TerminalDecorateStandard + TerminalDecorateLine"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u4F5C\u4E3A\u6807\u51C6\u884C\u7EF4\u5EA6\u5B57\u6BB5\uFF0C\u5B9A\u4E49\u8865\u8D34\u6807\u51C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u70B9\u8D44\u6599\uFF08\u95E8\u5E97\u4E3B\u6570\u636E\uFF09"),
                createVNode("td", null, "MktTerminal"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u95E8\u5E97\u5C5E\u6027\u5B57\u6BB5\uFF0C\u6807\u8BC6\u5F53\u524D\u88C5\u4FEE\u7B49\u7EA7")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u7F51\u70B9\u7533\u8BF7\u5355"),
                createVNode("td", null, "MktTerminalApply"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u95E8\u5E97\u7533\u8BF7\u5C5E\u6027\u5B57\u6BB5")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u53D8\u66F4"),
                createVNode("td", null, "MktTerminalModify"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\uFF08\u53D8\u66F4\u524D/\u540E\uFF09"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u8BB0\u5F55\u53D8\u66F4\u524D\u540E\u5BF9\u6BD4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5934\u5C55\u677F\u62A5\u9500\uFF08\u65E7\uFF09"),
                createVNode("td", null, "FinFeeBxHeader"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u65E7\u7248\u83DC\u5355\uFF0C\u5386\u53F2\u6570\u636E\u5C55\u793A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\uFF08\u65E7\uFF09"),
                createVNode("td", null, "FinFeeApplyHeader"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7B49\u7EA7/\u672C\u6B21\u7533\u8BF7\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "\u65E7\u7248\u83DC\u5355\uFF0C\u5386\u53F2\u6570\u636E\u5C55\u793A")
              ])
            ])
          ]),
          createVNode("h4", null, "Java \u5C42\u7FFB\u8BD1\u65B9\u5F0F"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u7FFB\u8BD1\u65B9\u5F0F"),
                createVNode("th", null, "\u4EE3\u7801"),
                createVNode("th", null, "\u65B9\u5411"),
                createVNode("th", null, "\u4F7F\u7528\u573A\u666F")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "\u6807\u51C6\u7FFB\u8BD1"),
                createVNode("td", null, '`lovService.getMeaning("AE.FIXUP_GRADE", value)`'),
                createVNode("td", null, "VALUE\u2192MEANING"),
                createVNode("td", null, "\u6253\u5370/\u5C55\u793A\u65F6\u5C06\u6570\u503C\u7FFB\u8BD1\u4E3A\u4E2D\u6587")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u53CD\u5411\u7FFB\u8BD1"),
                createVNode("td", null, '`lovService.getValue("AE.FIXUP_GRADE", meaning)`'),
                createVNode("td", null, "MEANING\u2192VALUE"),
                createVNode("td", null, "OA \u56DE\u5199\u65F6\u5C06\u4E2D\u6587\u53CD\u67E5\u4E3A\u6570\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6CE8\u89E3\u7FFB\u8BD1"),
                createVNode("td", null, '`@LovValue(lovCode="AE.FIXUP_GRADE", meaningField="fixupGradeMeaning")`'),
                createVNode("td", null, "VALUE\u2192MEANING"),
                createVNode("td", null, "VO \u8FD4\u56DE\u524D\u7AEF\u65F6\u81EA\u52A8\u7FFB\u8BD1")
              ])
            ])
          ]),
          createVNode("h4", null, "SQL \u5C42\u7FFB\u8BD1\u65B9\u5F0F"),
          createVNode("table", { class: "kb-field-tbl" }, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u7FFB\u8BD1\u65B9\u5F0F"),
                createVNode("th", null, "SQL"),
                createVNode("th", null, "\u4F7F\u7528\u573A\u666F")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "JOIN \u7FFB\u8BD1"),
                createVNode("td", null, "`LEFT JOIN HPFM_LOV_VALUE hlv ON hlv.LOV_CODE='AE.FIXUP_GRADE' AND hlv.VALUE=TO_CHAR(afh.FIXUP_GRADE) AND hlv.TAG LIKE CONCAT('%',CONCAT(afh.ORGANIZATION_ID,'%'))`"),
                createVNode("td", null, "\u5BFC\u51FA/\u62A5\u8868\u67E5\u8BE2")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u51FD\u6570\u7FFB\u8BD1"),
                createVNode("td", null, "`GET_DIV_DICT_NAME('AE.FIXUP_GRADE', TO_CHAR(cbh.FIXUP_GRADE), cbh.ORGANIZATION_ID)`"),
                createVNode("td", null, "\u5BFC\u51FA/\u62A5\u8868\u67E5\u8BE2")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_KbCard, { title: "HPFM_LOV\uFF08HZERO \u5E73\u53F0 LOV \u503C\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>LOV_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>LOV_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>\u56FA\u5B9A\u4E3A \`AE.FIXUP_GRADE\`</td></tr><tr${_scopeId}><td${_scopeId}>LOV_TYPE_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>LOV \u7C7B\u578B</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u72EC\u7ACB\u503C\u96C6</td></tr><tr${_scopeId}><td${_scopeId}>DESCRIPTION</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>LOV \u63CF\u8FF0</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u503C\u96C6\u63CF\u8FF0</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "LOV_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LOV_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "\u56FA\u5B9A\u4E3A `AE.FIXUP_GRADE`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LOV_TYPE_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "LOV \u7C7B\u578B"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u72EC\u7ACB\u503C\u96C6")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DESCRIPTION"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "LOV \u63CF\u8FF0"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u503C\u96C6\u63CF\u8FF0")
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
  _push(ssrRenderComponent(_component_KbCard, { title: "HPFM_LOV_VALUE\uFF08LOV \u503C\u9879\u8868\uFF09" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5B57\u6BB5\u540D</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u91CA\u4E49</th><th${_scopeId}>\u5BF9\u5E94\u754C\u9762\u5B57\u6BB5</th><th${_scopeId}>\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>LOV_VALUE_ID</td><td${_scopeId}>Long</td><td${_scopeId}>\u4E3B\u952EID</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u81EA\u589E</td></tr><tr${_scopeId}><td${_scopeId}>LOV_CODE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>LOV \u7F16\u7801</td><td${_scopeId}>\u56FA\u5B9A\u4E3A \`AE.FIXUP_GRADE\`</td></tr><tr${_scopeId}><td${_scopeId}>VALUE</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u503C\u7F16\u7801</td><td${_scopeId}>\u503C\u7F16\u7801</td><td${_scopeId}>\u552F\u4E00\u6807\u8BC6\uFF0C\u4E1A\u52A1\u8868\u5B58\u50A8\u6B64\u503C</td></tr><tr${_scopeId}><td${_scopeId}>MEANING</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u503C\u540D\u79F0</td><td${_scopeId}>\u503C\u540D\u79F0</td><td${_scopeId}>\u754C\u9762\u5C55\u793A\u7528</td></tr><tr${_scopeId}><td${_scopeId}>TAG</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u6807\u7B7E</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u6807\u8BB0\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08organization_id\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>DESCRIPTION</td><td${_scopeId}>VARCHAR</td><td${_scopeId}>\u63CF\u8FF0</td><td${_scopeId}>\u63CF\u8FF0</td><td${_scopeId}>\u8865\u5145\u8BF4\u660E</td></tr><tr${_scopeId}><td${_scopeId}>ORDER_SEQ</td><td${_scopeId}>Long</td><td${_scopeId}>\u6392\u5E8F\u53F7</td><td${_scopeId}>\u6392\u5E8F\u53F7</td><td${_scopeId}>\u63A7\u5236\u663E\u793A\u987A\u5E8F</td></tr><tr${_scopeId}><td${_scopeId}>START_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u751F\u6548\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u5F00\u59CB\u65E5\u671F</td><td${_scopeId}>\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4</td></tr><tr${_scopeId}><td${_scopeId}>END_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u751F\u6548\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u7ED3\u675F\u65E5\u671F</td><td${_scopeId}>\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4</td></tr><tr${_scopeId}><td${_scopeId}>ENABLE_FLAG</td><td${_scopeId}>Long</td><td${_scopeId}>\u542F\u7528\u6807\u5FD7</td><td${_scopeId}>\u72B6\u6001</td><td${_scopeId}>1=\u542F\u7528\uFF0C0=\u7981\u7528</td></tr><tr${_scopeId}><td${_scopeId}>CREATION_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u521B\u5EFA\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr><tr${_scopeId}><td${_scopeId}>LAST_UPDATE_DATE</td><td${_scopeId}>LocalDateTime</td><td${_scopeId}>\u6700\u540E\u66F4\u65B0\u65F6\u95F4</td><td${_scopeId}>\u65E0</td><td${_scopeId}>\u7CFB\u7EDF\u81EA\u52A8</td></tr></tbody></table>`);
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
                createVNode("td", null, "LOV_VALUE_ID"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u4E3B\u952EID"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u81EA\u589E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "LOV_CODE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "LOV \u7F16\u7801"),
                createVNode("td", null, "\u56FA\u5B9A\u4E3A `AE.FIXUP_GRADE`")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "VALUE"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u503C\u7F16\u7801"),
                createVNode("td", null, "\u503C\u7F16\u7801"),
                createVNode("td", null, "\u552F\u4E00\u6807\u8BC6\uFF0C\u4E1A\u52A1\u8868\u5B58\u50A8\u6B64\u503C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "MEANING"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u503C\u540D\u79F0"),
                createVNode("td", null, "\u503C\u540D\u79F0"),
                createVNode("td", null, "\u754C\u9762\u5C55\u793A\u7528")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "TAG"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u6807\u7B7E"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "\u6807\u8BB0\u9002\u7528\u7684\u4E8B\u4E1A\u90E8\uFF08organization_id\uFF09")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "DESCRIPTION"),
                createVNode("td", null, "VARCHAR"),
                createVNode("td", null, "\u63CF\u8FF0"),
                createVNode("td", null, "\u63CF\u8FF0"),
                createVNode("td", null, "\u8865\u5145\u8BF4\u660E")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ORDER_SEQ"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u6392\u5E8F\u53F7"),
                createVNode("td", null, "\u6392\u5E8F\u53F7"),
                createVNode("td", null, "\u63A7\u5236\u663E\u793A\u987A\u5E8F")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "START_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u751F\u6548\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u5F00\u59CB\u65E5\u671F"),
                createVNode("td", null, "\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "END_DATE"),
                createVNode("td", null, "LocalDateTime"),
                createVNode("td", null, "\u751F\u6548\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u7ED3\u675F\u65E5\u671F"),
                createVNode("td", null, "\u63A7\u5236\u503C\u9879\u751F\u6548\u8303\u56F4")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "ENABLE_FLAG"),
                createVNode("td", null, "Long"),
                createVNode("td", null, "\u542F\u7528\u6807\u5FD7"),
                createVNode("td", null, "\u72B6\u6001"),
                createVNode("td", null, "1=\u542F\u7528\uFF0C0=\u7981\u7528")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u62A5\u9519\u4FE1\u606F</th><th${_scopeId}>\u63D0\u793A\u8282\u70B9</th><th${_scopeId}>\u6839\u56E0\u4E0E\u89E3\u51B3\u65B9\u6848</th><th${_scopeId}>\u7B49\u7EA7</th><th${_scopeId}>\u8BE6\u7EC6\u903B\u8F91</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6</td><td${_scopeId}>\u540C\u4E00 LOV \u4E0B \`VALUE\` \u91CD\u590D\uFF1B\u4F7F\u7528\u4E0D\u540C\u7684\u7F16\u7801</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u4FDD\u5B58\u524D\u67E5\u8BE2 \`HPFM_LOV_VALUE\` \u6821\u9A8C \`VALUE\` \u552F\u4E00\u6027</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6</td><td${_scopeId}>\`VALUE\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u503C\u7F16\u7801</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6</td><td${_scopeId}>\`MEANING\` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u503C\u540D\u79F0</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u5FC5\u586B\u6821\u9A8C</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u672A\u914D\u7F6E\u5BF9\u5E94\u7684\u62A5\u9500\u653F\u7B56\u6807\u51C6\uFF1B\u5728\u88C5\u4FEE\u6807\u51C6\u914D\u7F6E\u4E2D\u8865\u5145\u8BE5\u7B49\u7EA7\u7684\u62A5\u9500\u6807\u51C6</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63D0\u4EA4\u6821\u9A8C\u67E5\u8BE2 \`TERMINAL_DECORATE_LINE\` \u65E0\u5BF9\u5E94\u6807\u51C6\u884C</td></tr><tr${_scopeId}><td${_scopeId}>\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6</td><td${_scopeId}>\`FIXUP_GRADE\` \u4E3A\u7A7A\u6216 0\uFF1B\u9009\u62E9\u6709\u6548\u7684\u88C5\u4FEE\u7B49\u7EA7</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63D0\u4EA4\u6821\u9A8C \`FIXUP_GRADE\` \u975E\u7A7A\u975E 0</td></tr><tr${_scopeId}><td${_scopeId}>\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01</td><td${_scopeId}>\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6</td><td${_scopeId}>\u88C5\u4FEE\u7B49\u7EA7\u5728\u6709\u6548\u671F\u5185\u65E0\u5BF9\u5E94\u6807\u51C6\uFF1B\u68C0\u67E5 \`TERMINAL_DECORATE_LINE\` \u914D\u7F6E</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u63D0\u4EA4\u6821\u9A8C\u7CBE\u786E\u5339\u914D\u6709\u6548\u671F\u5185\u6807\u51C6\u884C\u65E0\u7ED3\u679C</td></tr><tr${_scopeId}><td${_scopeId}>\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728</td><td${_scopeId}>\u67E5\u8BE2\u65F6</td><td${_scopeId}>\u503C\u96C6 \`AE.FIXUP_GRADE\` \u672A\u521B\u5EFA\uFF1B\u5148\u5728 HZERO \u503C\u96C6\u7BA1\u7406\u4E2D\u521B\u5EFA\u503C\u96C6</td><td${_scopeId}>\u9519\u8BEF</td><td${_scopeId}>\u67E5\u8BE2 \`HPFM_LOV\` \u65E0\u5BF9\u5E94 \`LOV_CODE\`</td></tr><tr${_scopeId}><td${_scopeId}>\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</td><td${_scopeId}>\u4EFB\u610F\u63A5\u53E3\u8C03\u7528</td><td${_scopeId}>\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u65F6\uFF0C\u68C0\u67E5\u7F51\u7EDC\u53CA\u540E\u7AEF\u8D85\u65F6\u914D\u7F6E</td><td${_scopeId}>error</td><td${_scopeId}>axios catch \u6216 timeout</td></tr><tr${_scopeId}><td${_scopeId}>\u6743\u9650\u4E0D\u8DB3</td><td${_scopeId}>\u70B9\u51FB\u64CD\u4F5C\u6309\u94AE</td><td${_scopeId}>\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94\u6309\u94AE\u6743\u9650\u7801\uFF0C\u8054\u7CFB\u7BA1\u7406\u5458\u6388\u6743</td><td${_scopeId}>error</td><td${_scopeId}>permissionList \u6821\u9A8C\u672A\u901A\u8FC7</td></tr><tr${_scopeId}><td${_scopeId}>\u6570\u636E\u4E0D\u5B58\u5728</td><td${_scopeId}>\u7F16\u8F91/\u5220\u9664</td><td${_scopeId}>\u503C\u9879ID\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 LOV_VALUE_ID \u6709\u6548\u6027</td><td${_scopeId}>error</td><td${_scopeId}>\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</td><td${_scopeId}>\u542F\u7528/\u7981\u7528</td><td${_scopeId}>\u503C\u9879\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u542F\u7528\u4E0D\u53EF\u91CD\u590D\u542F\u7528\uFF0C\u68C0\u67E5 ENABLE_FLAG</td><td${_scopeId}>error</td><td${_scopeId}>\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25</td></tr><tr${_scopeId}><td${_scopeId}>\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u63CF\u8FF0\uFF0C\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C DESCRIPTION \u975E\u7A7A</td></tr><tr${_scopeId}><td${_scopeId}>\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A</td><td${_scopeId}>\u4FDD\u5B58\u63D0\u4EA4</td><td${_scopeId}>\u672A\u586B\u5199\u6392\u5E8F\u53F7\uFF0C\u586B\u5199\u540E\u4FDD\u5B58</td><td${_scopeId}>error</td><td${_scopeId}>\u524D\u7AEF\u6821\u9A8C ORDER_SEQ \u975E\u7A7A</td></tr></tbody></table><h4${_scopeId}>\u62A5\u95191\uFF1A\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879\u65F6\uFF0C\u540C\u4E00 LOV\uFF08AE.FIXUP_GRADE\uFF09\u4E0B VALUE \u5B57\u6BB5\u4E0E\u5DF2\u6709\u503C\u9879\u91CD\u590D</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u4FDD\u5B58\u524D\u67E5\u8BE2 HPFM_LOV_VALUE \u8868\uFF0C\u6821\u9A8C\u540C\u4E00 LOV_CODE=&#39;AE.FIXUP_GRADE&#39; \u4E0B VALUE \u552F\u4E00\u6027\uFF0C\u82E5\u5B58\u5728\u91CD\u590D\u5219\u63D0\u793A&quot;\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728&quot;\u3002\u786E\u4FDD\u503C\u7F16\u7801\u552F\u4E00\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u91CD\u590D\u6570\u91CF,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LISTAGG(MEANING, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WITHIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> GROUP (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0\u5217\u8868</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95192\uFF1A\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u65F6\uFF0CVALUE \u5B57\u6BB5\u672A\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 VALUE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u503C\u7F16\u7801\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u503C\u7F16\u7801\u662F\u503C\u9879\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u4E1A\u52A1\u8868\u5B58\u50A8\u6B64\u503C\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95193\uFF1A\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u65F6\uFF0CMEANING \u5B57\u6BB5\u672A\u586B\u5199</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 MEANING \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u503C\u540D\u79F0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u503C\u540D\u79F0\u7528\u4E8E\u754C\u9762\u5C55\u793A\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> MEANING </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95194\uFF1A\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0C\u6240\u9009\u88C5\u4FEE\u7B49\u7EA7\u5728 TERMINAL_DECORATE_LINE \u8868\u4E2D\u65E0\u5BF9\u5E94\u7684\u6807\u51C6\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C\u67E5\u8BE2 TERMINAL_DECORATE_LINE \u8868\uFF0C\u6839\u636E FIXUP_GRADE \u5339\u914D\u88C5\u4FEE\u6807\u51C6\u884C\uFF0C\u82E5\u65E0\u5BF9\u5E94\u6807\u51C6\u884C\u5219\u63D0\u793A&quot;\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6&quot;\u3002\u786E\u4FDD\u88C5\u4FEE\u7B49\u7EA7\u6709\u5BF9\u5E94\u7684\u62A5\u9500\u6807\u51C6\uFF0C\u907F\u514D\u63D0\u4EA4\u540E\u65E0\u6CD5\u8BA1\u7B97\u8865\u8D34\u91D1\u989D</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         lv.MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         lv.ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE lv</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TERMINAL_DECORATE_LINE tdl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tdl.FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95195\uFF1A\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0CFIXUP_GRADE \u5B57\u6BB5\u4E3A\u7A7A\u6216\u4E3A 0</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C FIXUP_GRADE \u5B57\u6BB5\u975E\u7A7A\u975E 0\uFF0C\u82E5\u4E3A\u7A7A\u6216\u4E3A 0 \u5219\u63D0\u793A&quot;\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01&quot;\u3002\u88C5\u4FEE\u7B49\u7EA7\u662F\u5339\u914D\u62A5\u9500\u6807\u51C6\u7684\u5FC5\u8981\u5B57\u6BB5\uFF0C\u5FC5\u987B\u9009\u62E9\u6709\u6548\u503C</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ACCEPTANCE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u9A8C\u6536ID,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         STORE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5E97\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         FRONTDOOR_FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_CHECK_BX_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>     </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95196\uFF1A\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0C\u88C5\u4FEE\u7B49\u7EA7\u5728\u6709\u6548\u671F\u5185\u65E0\u5BF9\u5E94\u6807\u51C6\u884C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C\u7CBE\u786E\u5339\u914D\u6709\u6548\u671F\u5185\u6807\u51C6\u884C\uFF0C\u67E5\u8BE2 TERMINAL_DECORATE_LINE \u8868\u4E2D FIXUP_GRADE \u5339\u914D\u4E14 START_DATE &lt;= \u5F53\u524D\u65E5\u671F &lt;= END_DATE \u7684\u6807\u51C6\u884C\uFF0C\u82E5\u65E0\u7ED3\u679C\u5219\u63D0\u793A&quot;\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01&quot;\u3002\u786E\u4FDD\u88C5\u4FEE\u7B49\u7EA7\u5728\u5F53\u524D\u65F6\u95F4\u6709\u6709\u6548\u7684\u62A5\u9500\u6807\u51C6</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.VALUE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         lv.MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         lv.START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879\u5F00\u59CB\u65E5\u671F,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         lv.END_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879\u7ED3\u675F\u65E5\u671F</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE lv</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>BETWEEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>EXISTS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TERMINAL_DECORATE_LINE tdl</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tdl.FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> lv.VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>BETWEEN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tdl.START_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> tdl.END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    );</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95197\uFF1A\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6\u65F6\uFF0CHPFM_LOV \u8868\u4E2D\u65E0 LOV_CODE=&#39;AE.FIXUP_GRADE&#39; \u7684\u8BB0\u5F55</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u67E5\u8BE2 HPFM_LOV \u8868\uFF0C\u82E5\u4E0D\u5B58\u5728 LOV_CODE=&#39;AE.FIXUP_GRADE&#39; \u7684\u503C\u96C6\u5B9A\u4E49\u5219\u63D0\u793A&quot;\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728&quot;\u3002\u9700\u5148\u5728 HZERO \u503C\u96C6\u7BA1\u7406\u4E2D\u521B\u5EFA\u503C\u96C6 AE.FIXUP_GRADE\uFF0C\u518D\u914D\u7F6E\u503C\u9879</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_ID, LOV_CODE, LOV_TYPE_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95198\uFF1A\u7F51\u7EDC\u5F02\u5E38/\u63A5\u53E3\u8D85\u65F6</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4EFB\u610F\u63A5\u53E3\u8C03\u7528\u65F6\uFF0C\u7F51\u7EDC\u4E2D\u65AD\u6216\u63A5\u53E3\u54CD\u5E94\u8D85\u8FC7 axios timeout \u914D\u7F6E</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A&quot;\u8BF7\u6C42\u5931\u8D25&quot;\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001hzero-platform \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801, MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         TO_CHAR(LAST_UPDATE_DATE,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD HH24:MI:SS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6700\u540E\u66F4\u65B0\u65F6\u95F4</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>SYSDATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>-</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LAST_UPDATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u95199\uFF1A\u6743\u9650\u4E0D\u8DB3</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u542F\u7528/\u7981\u7528\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF Button \u7EC4\u4EF6\u901A\u8FC7 permissionList \u914D\u7F6E\u6743\u9650\u7801\uFF0CHZERO \u6846\u67B6\u6821\u9A8C\u5F53\u524D\u7528\u6237\u89D2\u8272\u662F\u5426\u5305\u542B\u8BE5\u6743\u9650\u7801\uFF0C\u672A\u5305\u542B\u5219\u6309\u94AE\u4E0D\u53EF\u89C1\u6216\u7981\u7528\u3002\u82E5\u5F3A\u5236\u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u4E5F\u4F1A\u6821\u9A8C\u6743\u9650\u8FD4\u56DE403\u3002\u9700\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E\u5BF9\u5E94\u89D2\u8272\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u7528\u6237\u540D, R.ROLE_NAME </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u89D2\u8272\u540D, P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6743\u9650\u7801</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER U</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_USER_ROLE UR </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.USER_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE R </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> UR.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_ROLE_PERMISSION RP </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> R.ROLE_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.ROLE_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LEFT JOIN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> SYS_PERMISSION P </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ON</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> RP.PERMISSION_ID </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_ID</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> P.PERMISSION_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>LIKE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>%fixup_grade%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> U.USER_NAME;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951910\uFF1A\u6570\u636E\u4E0D\u5B58\u5728</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u503C\u9879ID\u4E0D\u5B58\u5728</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u901A\u8FC7 lovValueId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 HPFM_LOV_VALUE \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u503C\u9879ID\u9519\u8BEF\u3001\u503C\u9879\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 LOV_VALUE_ID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID, LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV\u7F16\u7801, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0, ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951911\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u70B9\u51FB\u542F\u7528/\u7981\u7528\u6309\u94AE\u65F6\uFF0C\u503C\u9879\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u542F\u7528\uFF08ENABLE_FLAG=1\uFF09\u4E0D\u53EF\u91CD\u590D\u542F\u7528\u3001\u5DF2\u7981\u7528\uFF08ENABLE_FLAG=0\uFF09\u4E0D\u53EF\u91CD\u590D\u7981\u7528\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u503C\u9879\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801, MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u72B6\u6001, ERROR_INFO </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5F02\u5E38\u95EE\u9898</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ENABLE_FLAG </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NOT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IN</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> CREATE_DATE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESC</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951912\uFF1A\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u65F6\uFF0CDESCRIPTION \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 DESCRIPTION \u5B57\u6BB5&#39;\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u63CF\u8FF0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u63CF\u8FF0\u7528\u4E8E\u8BB0\u5F55\u503C\u9879\u7684\u4E1A\u52A1\u542B\u4E49\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801, MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u63CF\u8FF0</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><h4${_scopeId}>\u62A5\u951913\uFF1A\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A</h4><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u89E6\u53D1\u6761\u4EF6</strong>\uFF1A\u4FDD\u5B58\u65F6\uFF0CORDER_SEQ \u5B57\u6BB5\u4E3A\u7A7A</li><li${_scopeId}><strong${_scopeId}>\u903B\u8F91\u5206\u6790</strong>\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 ORDER_SEQ \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u6392\u5E8F\u53F7\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A&quot;\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A&quot;\u3002\u6392\u5E8F\u53F7\u7528\u4E8E\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u5C55\u793A\u987A\u5E8F\uFF0C\u5FC5\u987B\u660E\u786E</li><li${_scopeId}><strong${_scopeId}>\u6392\u67E5SQL</strong>\uFF1A</li></ul><div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u9879ID, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u7F16\u7801, MEANING </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u503C\u540D\u79F0,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>         ORDER_SEQ </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u6392\u5E8F\u53F7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AND</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_SEQ </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>IS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>NULL</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
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
                createVNode("td", null, "\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "\u540C\u4E00 LOV \u4E0B `VALUE` \u91CD\u590D\uFF1B\u4F7F\u7528\u4E0D\u540C\u7684\u7F16\u7801"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u4FDD\u5B58\u524D\u67E5\u8BE2 `HPFM_LOV_VALUE` \u6821\u9A8C `VALUE` \u552F\u4E00\u6027")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "`VALUE` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u503C\u7F16\u7801"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u65B0\u589E/\u7F16\u8F91\u4FDD\u5B58\u65F6"),
                createVNode("td", null, "`MEANING` \u5B57\u6BB5\u672A\u586B\u5199\uFF1B\u586B\u5199\u503C\u540D\u79F0"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u5FC5\u586B\u6821\u9A8C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u672A\u914D\u7F6E\u5BF9\u5E94\u7684\u62A5\u9500\u653F\u7B56\u6807\u51C6\uFF1B\u5728\u88C5\u4FEE\u6807\u51C6\u914D\u7F6E\u4E2D\u8865\u5145\u8BE5\u7B49\u7EA7\u7684\u62A5\u9500\u6807\u51C6"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u63D0\u4EA4\u6821\u9A8C\u67E5\u8BE2 `TERMINAL_DECORATE_LINE` \u65E0\u5BF9\u5E94\u6807\u51C6\u884C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "`FIXUP_GRADE` \u4E3A\u7A7A\u6216 0\uFF1B\u9009\u62E9\u6709\u6548\u7684\u88C5\u4FEE\u7B49\u7EA7"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u63D0\u4EA4\u6821\u9A8C `FIXUP_GRADE` \u975E\u7A7A\u975E 0")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01"),
                createVNode("td", null, "\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6"),
                createVNode("td", null, "\u88C5\u4FEE\u7B49\u7EA7\u5728\u6709\u6548\u671F\u5185\u65E0\u5BF9\u5E94\u6807\u51C6\uFF1B\u68C0\u67E5 `TERMINAL_DECORATE_LINE` \u914D\u7F6E"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u63D0\u4EA4\u6821\u9A8C\u7CBE\u786E\u5339\u914D\u6709\u6548\u671F\u5185\u6807\u51C6\u884C\u65E0\u7ED3\u679C")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728"),
                createVNode("td", null, "\u67E5\u8BE2\u65F6"),
                createVNode("td", null, "\u503C\u96C6 `AE.FIXUP_GRADE` \u672A\u521B\u5EFA\uFF1B\u5148\u5728 HZERO \u503C\u96C6\u7BA1\u7406\u4E2D\u521B\u5EFA\u503C\u96C6"),
                createVNode("td", null, "\u9519\u8BEF"),
                createVNode("td", null, "\u67E5\u8BE2 `HPFM_LOV` \u65E0\u5BF9\u5E94 `LOV_CODE`")
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
                createVNode("td", null, "\u7F16\u8F91/\u5220\u9664"),
                createVNode("td", null, "\u503C\u9879ID\u4E0D\u5B58\u5728\u6216\u5DF2\u5220\u9664\uFF0C\u68C0\u67E5 LOV_VALUE_ID \u6709\u6548\u6027"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
                createVNode("td", null, "\u542F\u7528/\u7981\u7528"),
                createVNode("td", null, "\u503C\u9879\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C\uFF0C\u5982\u5DF2\u542F\u7528\u4E0D\u53EF\u91CD\u590D\u542F\u7528\uFF0C\u68C0\u67E5 ENABLE_FLAG"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\u5931\u8D25")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u63CF\u8FF0\uFF0C\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C DESCRIPTION \u975E\u7A7A")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A"),
                createVNode("td", null, "\u4FDD\u5B58\u63D0\u4EA4"),
                createVNode("td", null, "\u672A\u586B\u5199\u6392\u5E8F\u53F7\uFF0C\u586B\u5199\u540E\u4FDD\u5B58"),
                createVNode("td", null, "error"),
                createVNode("td", null, "\u524D\u7AEF\u6821\u9A8C ORDER_SEQ \u975E\u7A7A")
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95191\uFF1A\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879\u65F6\uFF0C\u540C\u4E00 LOV\uFF08AE.FIXUP_GRADE\uFF09\u4E0B VALUE \u5B57\u6BB5\u4E0E\u5DF2\u6709\u503C\u9879\u91CD\u590D")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u540E\u7AEF\u4FDD\u5B58\u524D\u67E5\u8BE2 HPFM_LOV_VALUE \u8868\uFF0C\u6821\u9A8C\u540C\u4E00 LOV_CODE='AE.FIXUP_GRADE' \u4E0B VALUE \u552F\u4E00\u6027\uFF0C\u82E5\u5B58\u5728\u91CD\u590D\u5219\u63D0\u793A"\u7B49\u7EA7\u7F16\u7801\u5DF2\u5B58\u5728"\u3002\u786E\u4FDD\u503C\u7F16\u7801\u552F\u4E00\uFF0C\u907F\u514D\u4E1A\u52A1\u5F15\u7528\u6B67\u4E49`)
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
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u91CD\u590D\u6570\u91CF,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LISTAGG(MEANING, "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, ","),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WITHIN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " GROUP ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID) "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0\u5217\u8868")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE")
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
          createVNode("h4", null, "\u62A5\u95192\uFF1A\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u65F6\uFF0CVALUE \u5B57\u6BB5\u672A\u586B\u5199")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 VALUE \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u503C\u7F16\u7801\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u503C\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u503C\u7F16\u7801\u662F\u503C\u9879\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u4E1A\u52A1\u8868\u5B58\u50A8\u6B64\u503C\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LOV_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95193\uFF1A\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u65B0\u589E\u6216\u7F16\u8F91\u4FDD\u5B58\u65F6\uFF0CMEANING \u5B57\u6BB5\u672A\u586B\u5199")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 MEANING \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u503C\u540D\u79F0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u503C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u503C\u540D\u79F0\u7528\u4E8E\u754C\u9762\u5C55\u793A\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         LOV_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " MEANING "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95194\uFF1A\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0C\u6240\u9009\u88C5\u4FEE\u7B49\u7EA7\u5728 TERMINAL_DECORATE_LINE \u8868\u4E2D\u65E0\u5BF9\u5E94\u7684\u6807\u51C6\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C\u67E5\u8BE2 TERMINAL_DECORATE_LINE \u8868\uFF0C\u6839\u636E FIXUP_GRADE \u5339\u914D\u88C5\u4FEE\u6807\u51C6\u884C\uFF0C\u82E5\u65E0\u5BF9\u5E94\u6807\u51C6\u884C\u5219\u63D0\u793A"\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u5BF9\u5E94\u7684\u653F\u7B56\u6807\u51C6"\u3002\u786E\u4FDD\u88C5\u4FEE\u7B49\u7EA7\u6709\u5BF9\u5E94\u7684\u62A5\u9500\u6807\u51C6\uFF0C\u907F\u514D\u63D0\u4EA4\u540E\u65E0\u6CD5\u8BA1\u7B97\u8865\u8D34\u91D1\u989D')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         lv.MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         lv.ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE lv")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TERMINAL_DECORATE_LINE tdl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tdl.FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95195\uFF1A\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0CFIXUP_GRADE \u5B57\u6BB5\u4E3A\u7A7A\u6216\u4E3A 0")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C FIXUP_GRADE \u5B57\u6BB5\u975E\u7A7A\u975E 0\uFF0C\u82E5\u4E3A\u7A7A\u6216\u4E3A 0 \u5219\u63D0\u793A"\u65E0\u653F\u7B56\u6807\u51C6\u4E0D\u80FD\u63D0\u4EA4\uFF01"\u3002\u88C5\u4FEE\u7B49\u7EA7\u662F\u5339\u914D\u62A5\u9500\u6807\u51C6\u7684\u5FC5\u8981\u5B57\u6BB5\uFF0C\u5FC5\u987B\u9009\u62E9\u6709\u6548\u503C')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ACCEPTANCE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u9A8C\u6536ID,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         STORE_NAME "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5E97\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         FRONTDOOR_FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_CHECK_BX_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "     "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIXUP_GRADE "),
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
          createVNode("h4", null, "\u62A5\u95196\uFF1A\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u95E8\u5E97\u88C5\u4FEE\u7533\u8BF7\u63D0\u4EA4\u65F6\uFF0C\u88C5\u4FEE\u7B49\u7EA7\u5728\u6709\u6548\u671F\u5185\u65E0\u5BF9\u5E94\u6807\u51C6\u884C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u540E\u7AEF\u63D0\u4EA4\u6821\u9A8C\u7CBE\u786E\u5339\u914D\u6709\u6548\u671F\u5185\u6807\u51C6\u884C\uFF0C\u67E5\u8BE2 TERMINAL_DECORATE_LINE \u8868\u4E2D FIXUP_GRADE \u5339\u914D\u4E14 START_DATE <= \u5F53\u524D\u65E5\u671F <= END_DATE \u7684\u6807\u51C6\u884C\uFF0C\u82E5\u65E0\u7ED3\u679C\u5219\u63D0\u793A"\u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7\u6CA1\u6709\u6709\u6548\u671F\u5185\u7684\u653F\u7B56\u6807\u51C6\uFF01"\u3002\u786E\u4FDD\u88C5\u4FEE\u7B49\u7EA7\u5728\u5F53\u524D\u65F6\u95F4\u6709\u6709\u6548\u7684\u62A5\u9500\u6807\u51C6')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.VALUE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u7B49\u7EA7\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         lv.MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u88C5\u4FEE\u7B49\u7EA7\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         lv.START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879\u5F00\u59CB\u65E5\u671F,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         lv.END_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879\u7ED3\u675F\u65E5\u671F")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE lv")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "BETWEEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "EXISTS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TERMINAL_DECORATE_LINE tdl")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tdl.FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " lv.VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "SYSDATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "BETWEEN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tdl.START_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " tdl.END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    );")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u95197\uFF1A\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6\u65F6\uFF0CHPFM_LOV \u8868\u4E2D\u65E0 LOV_CODE='AE.FIXUP_GRADE' \u7684\u8BB0\u5F55")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u540E\u7AEF\u67E5\u8BE2 HPFM_LOV \u8868\uFF0C\u82E5\u4E0D\u5B58\u5728 LOV_CODE='AE.FIXUP_GRADE' \u7684\u503C\u96C6\u5B9A\u4E49\u5219\u63D0\u793A"\u503C\u96C6\u7F16\u7801\u4E0D\u5B58\u5728"\u3002\u9700\u5148\u5728 HZERO \u503C\u96C6\u7BA1\u7406\u4E2D\u521B\u5EFA\u503C\u96C6 AE.FIXUP_GRADE\uFF0C\u518D\u914D\u7F6E\u503C\u9879`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_ID, LOV_CODE, LOV_TYPE_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
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
              createTextVNode('\uFF1A\u524D\u7AEF axios \u8BF7\u6C42\u672A\u6536\u5230\u54CD\u5E94\u6216\u54CD\u5E94\u8D85\u65F6\uFF0C\u89E6\u53D1 catch \u56DE\u8C03\u7EDF\u4E00\u63D0\u793A"\u8BF7\u6C42\u5931\u8D25"\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u7F51\u7EDC\u4E2D\u65AD\u3001hzero-platform \u670D\u52A1\u5047\u6B7B\u3001\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u7B49\u3002\u9700\u68C0\u67E5\u7F51\u7EDC\u8FDE\u901A\u6027\u3001\u540E\u7AEF\u670D\u52A1\u8D1F\u8F7D\u3001\u6570\u636E\u5E93\u6027\u80FD')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801, MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         TO_CHAR(LAST_UPDATE_DATE,"),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LAST_UPDATE_DATE "),
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
              createTextVNode("\uFF1A\u70B9\u51FB\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u3001\u542F\u7528/\u7981\u7528\u7B49\u6309\u94AE\u65F6\uFF0C\u5F53\u524D\u7528\u6237\u65E0\u5BF9\u5E94 permissionList \u6743\u9650\u7801")
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
                  createVNode("span", { style: { "color": "#C3E88D" } }, "%fixup_grade%"),
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
              createTextVNode("\uFF1A\u7F16\u8F91\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u65F6\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\u6216\u503C\u9879ID\u4E0D\u5B58\u5728")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u524D\u7AEF\u901A\u8FC7 lovValueId \u8C03\u7528\u63A5\u53E3\uFF0C\u540E\u7AEF\u67E5\u8BE2 HPFM_LOV_VALUE \u8868\u65E0\u5BF9\u5E94\u8BB0\u5F55\u6216\u8BB0\u5F55\u5DF2\u903B\u8F91\u5220\u9664\uFF0C\u8FD4\u56DE\u7A7A\u6570\u636E\u3002\u5E38\u89C1\u6839\u56E0\uFF1A\u503C\u9879ID\u9519\u8BEF\u3001\u503C\u9879\u5DF2\u88AB\u5220\u9664\u3001\u8DE8\u79DF\u6237\u67E5\u8BE2\u3001\u6570\u636E\u6743\u9650\u9694\u79BB\u7B49\u3002\u9700\u68C0\u67E5 LOV_VALUE_ID \u6709\u6548\u6027\u53CA\u6570\u636E\u6743\u9650")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID, LOV_CODE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV\u7F16\u7801, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0, ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " (LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENABLE_FLAG "),
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
          createVNode("h4", null, "\u62A5\u951911\uFF1A\u72B6\u6001\u4E0D\u5141\u8BB8\u64CD\u4F5C"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u70B9\u51FB\u542F\u7528/\u7981\u7528\u6309\u94AE\u65F6\uFF0C\u503C\u9879\u72B6\u6001\u4E0D\u5141\u8BB8\u8BE5\u64CD\u4F5C")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode("\uFF1A\u540E\u7AEF\u6821\u9A8C\u72B6\u6001\u673A\uFF0C\u5982\u5DF2\u542F\u7528\uFF08ENABLE_FLAG=1\uFF09\u4E0D\u53EF\u91CD\u590D\u542F\u7528\u3001\u5DF2\u7981\u7528\uFF08ENABLE_FLAG=0\uFF09\u4E0D\u53EF\u91CD\u590D\u7981\u7528\u7B49\u3002\u72B6\u6001\u4E0D\u5339\u914D\u65F6\u540E\u7AEF\u8FD4\u56DE\u4E1A\u52A1\u5F02\u5E38\u3002\u9700\u68C0\u67E5\u503C\u9879\u5F53\u524D\u72B6\u6001\u53CA\u64CD\u4F5C\u6D41\u7A0B")
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801, MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u72B6\u6001, ERROR_INFO "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5F02\u5E38\u95EE\u9898")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ENABLE_FLAG "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NOT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IN"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " CREATE_DATE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESC"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951912\uFF1A\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65F6\uFF0CDESCRIPTION \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode(`\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 DESCRIPTION \u5B57\u6BB5'\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u63CF\u8FF0\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u63CF\u8FF0\u7528\u4E8E\u8BB0\u5F55\u503C\u9879\u7684\u4E1A\u52A1\u542B\u4E49\uFF0C\u5FC5\u987B\u660E\u786E`)
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801, MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u63CF\u8FF0")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "IS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "NULL"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("h4", null, "\u62A5\u951913\uFF1A\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A"),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("strong", null, "\u89E6\u53D1\u6761\u4EF6"),
              createTextVNode("\uFF1A\u4FDD\u5B58\u65F6\uFF0CORDER_SEQ \u5B57\u6BB5\u4E3A\u7A7A")
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "\u903B\u8F91\u5206\u6790"),
              createTextVNode('\uFF1A\u524D\u7AEF\u8868\u5355\u5BF9 ORDER_SEQ \u5B57\u6BB5\u914D\u7F6E required \u6821\u9A8C\uFF0C\u63D0\u4EA4\u524D\u6821\u9A8C\u6392\u5E8F\u53F7\u662F\u5426\u586B\u5199\uFF0C\u4E3A\u7A7A\u5219\u963B\u6B62\u63D0\u4EA4\u5E76\u63D0\u793A"\u6392\u5E8F\u53F7\u4E0D\u80FD\u4E3A\u7A7A"\u3002\u6392\u5E8F\u53F7\u7528\u4E8E\u503C\u9879\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u7684\u5C55\u793A\u987A\u5E8F\uFF0C\u5FC5\u987B\u660E\u786E')
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u9879ID, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u7F16\u7801, MEANING "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u503C\u540D\u79F0,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "         ORDER_SEQ "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u6392\u5E8F\u53F7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AND"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_SEQ "),
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
  _push(`</div></div></div><div id="faq" style="${ssrRenderStyle({ "display": "none" })}"><div class="tab-pad"><div class="kl-wrap">`);
  _push(ssrRenderComponent(_component_KbCard, { title: "\u6392\u67E5SQL\u6C47\u603B" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sql"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sql</span><pre class="shiki"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 1. \u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6\u5B9A\u4E49</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_ID, LOV_CODE, LOV_TYPE_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 2. \u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879\u5217\u8868</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_VALUE_ID, LOV_CODE, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, MEANING, TAG,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>DESCRIPTION</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, ORDER_SEQ, </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       ENABLE_FLAG, CREATION_DATE, LAST_UPDATE_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>ORDER BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ORDER_SEQ;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 3. \u6821\u9A8C\u503C\u7F16\u7801\u552F\u4E00\u6027</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> cnt</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> HPFM_LOV_VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LOV_CODE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>AE.FIXUP_GRADE</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>GROUP BY</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>VALUE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>HAVING</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>COUNT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 4. \u67E5\u8BE2\u4F7F\u7528\u88C5\u4FEE\u7B49\u7EA7\u7684\u95E8\u5E97\u9A8C\u6536\u62A5\u9500</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ACCEPTANCE_ID, STORE_NAME,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       FRONTDOOR_FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>AS</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> \u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIN_FEE_CHECK_BX_HEADER</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :fixupGrade</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>   </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>OR</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FRONTDOOR_FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :fixupGrade;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>-- 5. \u68C0\u67E5\u88C5\u4FEE\u7B49\u7EA7\u662F\u5426\u6709\u5BF9\u5E94\u7684\u62A5\u9500\u6807\u51C6</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>SELECT</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LINE_ID, FIXUP_GRADE, DECORATE_PROJECT,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       UPER_AREA, LOWER_AREA, IN_STANDARD, OUT_STANDARD,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>       </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>START_DATE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>, END_DATE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>FROM</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> TERMINAL_DECORATE_LINE</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>WHERE</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> FIXUP_GRADE </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> :fixupGrade;</span></span>
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
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 1. \u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u96C6\u5B9A\u4E49")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_ID, LOV_CODE, LOV_TYPE_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 2. \u67E5\u8BE2\u88C5\u4FEE\u7B49\u7EA7\u503C\u9879\u5217\u8868")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_VALUE_ID, LOV_CODE, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", MEANING, TAG,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "DESCRIPTION"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", ORDER_SEQ, "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       ENABLE_FLAG, CREATION_DATE, LAST_UPDATE_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "ORDER BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ORDER_SEQ;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 3. \u6821\u9A8C\u503C\u7F16\u7801\u552F\u4E00\u6027")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "COUNT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "*"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " cnt")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " HPFM_LOV_VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LOV_CODE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "AE.FIXUP_GRADE"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "GROUP BY"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "VALUE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
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
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 4. \u67E5\u8BE2\u4F7F\u7528\u88C5\u4FEE\u7B49\u7EA7\u7684\u95E8\u5E97\u9A8C\u6536\u62A5\u9500")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ACCEPTANCE_ID, STORE_NAME,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u5E97\u9762\u88C5\u4FEE\u7B49\u7EA7,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       FRONTDOOR_FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "AS"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " \u95E8\u5934\u88C5\u4FEE\u7B49\u7EA7")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIN_FEE_CHECK_BX_HEADER")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :fixupGrade")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "   "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "OR"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FRONTDOOR_FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :fixupGrade;")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "-- 5. \u68C0\u67E5\u88C5\u4FEE\u7B49\u7EA7\u662F\u5426\u6709\u5BF9\u5E94\u7684\u62A5\u9500\u6807\u51C6")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "SELECT"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LINE_ID, FIXUP_GRADE, DECORATE_PROJECT,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       UPER_AREA, LOWER_AREA, IN_STANDARD, OUT_STANDARD,")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "       "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "START_DATE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ", END_DATE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "FROM"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " TERMINAL_DECORATE_LINE")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F78C6C" } }, "WHERE"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " FIXUP_GRADE "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " :fixupGrade;")
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
        _push2(`<table class="kb-field-tbl"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u65E5\u671F</th><th${_scopeId}>\u63D0\u4EA4ID</th><th${_scopeId}>\u63D0\u4EA4\u4EBA</th><th${_scopeId}>\u63D0\u4EA4\u5185\u5BB9</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>2025-11-12</td><td${_scopeId}>-</td><td${_scopeId}>hfy</td><td${_scopeId}>\u521D\u59CB\u521B\u5EFA</td></tr><tr${_scopeId}><td${_scopeId}>2026-07-31</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-28</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u503C\u96C6 \`AE.FIXUP_GRADE\` \u7EF4\u62A4\u903B\u8F91\u3001\u591A\u4E1A\u52A1\u5F15\u7528\u8BF4\u660E\u3001\u6392\u67E5 SQL</td></tr><tr${_scopeId}><td${_scopeId}>2026-08-30</td><td${_scopeId}>-</td><td${_scopeId}>AI</td><td${_scopeId}>\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u660E\u786E HZERO \u5E73\u53F0\u6807\u51C6\u503C\u96C6\u914D\u7F6E\u5B9A\u4F4D</td></tr></tbody></table>`);
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
                createVNode("td", null, "2026-07-31"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5BF9\u6BD4\u7F51\u7AD9\u8865\u5145\u5B9A\u4E49\u3001\u8BE6\u7EC6\u903B\u8F91\u3001\u6570\u636E\u5E93\u8868\u5B57\u6BB5\u7B49")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-28"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u5B8C\u6574\u91CD\u5199\uFF0C\u8865\u5145\u503C\u96C6 `AE.FIXUP_GRADE` \u7EF4\u62A4\u903B\u8F91\u3001\u591A\u4E1A\u52A1\u5F15\u7528\u8BF4\u660E\u3001\u6392\u67E5 SQL")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "2026-08-30"),
                createVNode("td", null, "-"),
                createVNode("td", null, "AI"),
                createVNode("td", null, "\u6309 skill \u89C4\u8303\u683C\u5F0F\u91CD\u5199\uFF0C\u660E\u786E HZERO \u5E73\u53F0\u6807\u51C6\u503C\u96C6\u914D\u7F6E\u5B9A\u4F4D")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("\u5F00\u53D1\u7BA1\u7406/\u503C\u96C6\u914D\u7F6E/\u88C5\u4FEE\u7B49\u7EA7/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
