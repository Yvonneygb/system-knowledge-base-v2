---
name: dms-operation-manual
description: DMS 操作手册（Operation Manual）建页技能。为 VitePress 知识库菜单页新增/维护「操作手册」TAB 时使用——采用标准化五章结构（功能说明 / 操作步骤 / 其他操作 / 常见问题 / 相关菜单），并以 BreadcrumbTabs 同级 TAB 形式内嵌、点击原地切换。适用于 DMS 经销商管理系统知识库（v2 / system-knowledge-base-v2 风格）的操作指导类页面编写。
agent_created: true
---

# DMS 操作手册建页技能

## 概述

为 DMS 知识库菜单页新增一个「操作手册」TAB，作为与「历史排查记录」等并列的顶部分页。
手册内容采用**标准化五章结构**，使用普通 Markdown 写在同一页的 `<div id="manual" markdown="1">` 容器内，由 `BreadcrumbTabs.vue` 驱动点击切换（无独立页面跳转）。

本技能聚焦「操作手册」这一类页面。它与 `dms-kb-completion` 互补：后者维护 key-logic / detail-logic / faq 等**源码分析区块**（用 `KbCard` 组件包裹），本技能维护**面向操作者的步骤化手册**（用普通 Markdown 表格，无 KbCard 限制）。

## 何时使用

- 用户要求为某菜单新增或改写「操作手册」「查看操作手册」「操作指引」TAB
- 用户给出"按这个结构创建操作手册"类指令
- 需要在现有菜单页内嵌一份分步操作说明（非源码逻辑）

## 标准文档结构（五章）

顶级章节用中文序号 `## 一、功能说明` …… `## 五、相关菜单`；子节用 `### 2.1` / `### 3.1`；操作步骤用 `#### 步骤N：xxx`。
完整骨架与字段示意见 `references/manual-template.md`，照其填充即可。

```
## 一、功能说明          核心能力表（适用模块 / 核心能力 / 入口菜单）
## 二、操作步骤          2.1 进入列表页 / 2.2 新建…；步骤1–N（#### 步骤N）
## 三、其他操作          3.1 导出 / 3.2 删除 / 3.3 查看详情
## 四、常见问题          Q1–QN（### Q1：…）
## 五、相关菜单          关联菜单列表
```

**编号铁律**：
- 顶级章节必须连续（一→五，不可跳号；删除某章后整体顺延重排）
- 子节随父章编号（2.x / 3.x / 4.x…），同样连续
- 操作步骤内步骤用 `#### 步骤1：…`、`#### 步骤2：…`，连续无缺
- 常见问题用 `### Q1：…`、`### Q2：…`
- 删除/新增章节后，**全局重排所有序号**，并确认文中无残留的旧交叉引用（如"见第三章"）

**可读性约定**（来自实操反馈）：
- 选项型内容（如凭证类型）用对比表，而非嵌套无序列表
- 字段列表按「必填 / 可选」分组标注，并写明格式限制
- 提示类信息用引用块（`>`），不要用大段堆砌文字

## 内嵌工作流（v2 风格）

### Step 1：BreadcrumbTabs.vue 增加 TAB

在 `.vitepress/theme/BreadcrumbTabs.vue` 的 `tabs` 数组追加一项（必须含 `manual` 这个固定 `id`，因为它同时是页面 `<div id>` 与切换键）：

```js
{ id: 'manual', label: '操作手册', icon: 'fa-solid fa-book' },
```

并在 `<template>` 内对应位置加一个 book 图标 `<svg v-if="tab.id==='manual'" …>`（见 `references/embed-snippets.md`）。
`applyTabVisibility()` 已按 `tabs.map(t => t.id)` 遍历切换 `display`，无需改其它逻辑。

### Step 2：index.md 写入容器

菜单页顶部放 `<BreadcrumbTabs />`（无需 slot）。手册内容放在页面末尾的容器 div 内：

```html
<div id="manual" style="display:none;" class="kb-manual" markdown="1">
（此处必须空一行）

## 一、功能说明
…
</div>
```

> ⚠ **铁律：`<div id="manual" markdown="1">` 之后必须紧跟一个空行。** 否则 markdown-it 把首行当行内解析，引用块的 `>` 会被转义成 `&gt;`，样式全失。

### Step 3：custom.css 标题恢复 + SVG 兜底

- `#manual` 内标题默认被全局 `.kb-page-content h1,h2 { display:none }` 隐藏，需在 `custom.css` 追加 `#manual h1..h4 { display:block !important }` 及 `10%` 左右留白规则（见 `references/embed-snippets.md`，仓库已内置，新增模块一般无需再改）。
- SVG 兜底规则（锁导航/装饰 SVG 到 32px，防"巨型图标"）仓库已内置，勿删。

### Step 4：内容编写

在容器内用**普通 Markdown**：标题、有序/无序列表、表格、`>` 引用块、` ``` ` 代码块均正常渲染。
**与 dms-kb-completion 的区别**：此处**允许使用 Markdown 原生表格**，不要套 `KbCard`（`#manual` 是普通 markdown 容器，不是 Vue 组件 slot，不存在 `|` 管道符冲突）。

## 关键坑位（务必遵守）

1. **空行铁律**：`<div … markdown="1">` 后空一行；其余 Markdown 块之间按需空行。
2. **整体重排序号**：增删任意章节/步骤后，全文件顺延重编号，并核对交叉引用。
3. **中文路径 git 操作**：git bash 下带中文路径的命令会破坏/丢失文件。
   - 提交用整树命令：`git add -A`（不要写具体中文路径）
   - 误改后回退用：`git checkout HEAD -- .`（整树，避开中文路径）
   - 推送：`git push new-origin master`
4. **部署验证**：推送后等 GitHub Actions（`gh run watch`）`success`，再用 `curl` 抓线上 HTML 校验：
   - 新 TAB 存在、`#manual` 内有真实 `<table>`（非字面 `|` 管道）
   - 无 `&gt;` 残留、SVG 无超大（兜底规则在 bundled CSS）

## 参考文件

- `references/manual-template.md` — 标准化五章全文骨架（含步骤/FAQ/相关菜单写法示例）
- `references/embed-snippets.md` — BreadcrumbTabs.vue 片段、index.md 容器、custom.css `#manual` 与 SVG 兜底规则原文
