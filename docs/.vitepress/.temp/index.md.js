import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.6ab74304.js";
const __pageData = JSON.parse('{"title":"\u77E5\u8BC6\u5E93\u9996\u9875","description":"","frontmatter":{"title":"\u77E5\u8BC6\u5E93\u9996\u9875"},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u6B22\u8FCE\u8BBF\u95EE\u77E5\u8BC6\u5E93" tabindex="-1">\u6B22\u8FCE\u8BBF\u95EE\u77E5\u8BC6\u5E93 <a class="header-anchor" href="#\u6B22\u8FCE\u8BBF\u95EE\u77E5\u8BC6\u5E93" aria-hidden="true">#</a></h1><p>\u6B63\u5728\u8DF3\u8F6C\u5230\u5185\u5BB9\u9875\u9762...</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
