# 内嵌代码片段（DMS 操作手册 TAB）

## 1. BreadcrumbTabs.vue — tabs 数组追加项

```js
// .vitepress/theme/BreadcrumbTabs.vue  <script setup> 内 tabs 数组
const tabs = [
  // … 现有七/八个 tab …
  { id: 'manual', label: '操作手册', icon: 'fa-solid fa-book' },
]
```

## 2. BreadcrumbTabs.vue — template 内追加 book 图标

```html
<!-- 放在其它 <svg v-if="tab.id==='…'"> 之后 -->
<svg v-if="tab.id==='manual'" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
</svg>
```

> `applyTabVisibility()` 已 `tabs.map(t => t.id)` 遍历切换 `display`，无需改动其它逻辑。

## 3. index.md — 手册容器（注意开标签后空一行）

```html
<div id="manual" style="display:none;" class="kb-manual" markdown="1">

## 一、功能说明
…
</div>
```

## 4. custom.css — #manual 标题恢复 + 左右留白

```css
/* ====== 操作手册 tab 内容：恢复标题显示（全局 .kb-page-content h1/h2 被隐藏，这里单独恢复） ====== */
#manual {
  padding: 8px 10% 24px;
}
#manual h1, #manual h2, #manual h3, #manual h4 {
  display: block !important;
}
#manual h2 {
  font-size: 1.15rem !important;
  font-weight: 700 !important;
  color: var(--kb-title) !important;
  margin: 28px 0 14px !important;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--kb-purple-light);
}
#manual h3 {
  font-size: 1rem !important;
  font-weight: 700 !important;
  color: var(--kb-purple) !important;
  margin: 20px 0 10px !important;
}
#manual > p {
  line-height: 1.8 !important;
  color: var(--kb-text) !important;
}
```

## 5. custom.css — SVG 兜底（防"巨型图标"，仓库已内置，勿删）

```css
.kb-page-content svg:not(.bf-fc-svg),
.kb-tabs-bar svg,
.kb-primary-nav svg,
.kb-secondary-panel svg,
.kb-topbar svg {
  max-width: 32px !important;
  max-height: 32px !important;
  width: auto !important;
  height: auto !important;
}
```
