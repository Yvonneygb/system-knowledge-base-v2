import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"Test Page 2 - with more elements","description":"","frontmatter":{},"headers":[],"relativePath":"test-vue/index.md"}');
const _sfc_main = { name: "test-vue/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="test-page-2-with-more-elements" tabindex="-1">Test Page 2 - with more elements <a class="header-anchor" href="#test-page-2-with-more-elements" aria-hidden="true">#</a></h1><div id="test-1" class="overlay"><div class="box"><a href="#" class="close-btn">\xD7</a><h4><span style="${ssrRenderStyle({ "color": "#7C3AED" })}">\u62A5\u9519\uFF1A</span>{invbillno}-{itemCode}\u5BF9\u5E94\u7684\u51FA\u5E93\u5355\u660E\u7EC6\u4E0D\u5B58\u5728</h4><h5>\u8BE6\u7EC6\u903B\u8F91</h5><div class="detail-text">\u6821\u9A8C\u51FA\u5E93\u5355\u884CID\u662F\u5426\u5B58\u5728\u4E14\u6709\u6548\u3002</div><div class="detail-tip">\u963B\u65AD\u578B\u9519\u8BEF</div><div class="sql">-- \u68C0\u67E5\u51FA\u5E93\u5355\u884C\u662F\u5426\u5B58\u5728 SELECT o.id, o.del_flag, o.bill_no FROM out_delivery_order_detail o WHERE o.id = {\u51FA\u5E93\u5355\u884CID};</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("test-vue/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
