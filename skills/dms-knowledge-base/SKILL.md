---
name: dms-knowledge-base
description: 将业务 MD 文档按「一级/二级/三级」结构自动纳入「统一门户知识库」(VitePress),生成菜单与页面并套用 Kb* 紫色 UI 组件风格。当用户提供业务说明 MD 并希望归入知识库菜单时使用,例如给出三级路径"家装管理 / 家装往来 / 家装核销发票上传";自动维护导航菜单(含左侧一/二级导航与顶部面包屑标签栏)、每页含【业务介绍】【权限控制】【历史排查记录】三个空白区块、MD 表格原样呈现(详细逻辑字段清单表按 UI 规范 §7.7 转写为 HTML 字段表;报错一览表按 §7.8 转写为按钮+弹窗;常见问题问答按 §7.9 转写为 kl-card Q&A 卡片)。
---

# DMS 知识库

把用户提供的业务 MD,按三级结构(如 `家装管理 / 家装往来 / 家装核销发票上传`)自动生成知识库页面与导航菜单,套用项目既有的 Kb* UI 组件风格。

## 前置条件
- 项目:`/workspace/system-knowledge-base`(VitePress + Vue 3)
- 组件库:`docs/.vitepress/theme/ui/` 下的 `Kb*` 组件,已在主题全局注册,`.md` 中直接使用,无需 import
- 规范详解:`/root/.codebuddy/UI风格规范.md`(设计令牌 + 18 个组件 API)
- 自定义布局:`docs/.vitepress/theme/KbLayout.vue`(含一/二级导航面板 + 面包屑组件)
- 面包屑组件:`docs/.vitepress/theme/BreadcrumbTabs.vue`(8 标签页切换)

## 工作流

### 1. 解析三级结构
从用户消息或文件名识别三级路径,支持分隔符:`/`、`>`、`-`、`、`、中文「一级:二级:三级」。
优先级:MD frontmatter `category` > 消息显式路径 > 文件名约定。
**无法判定时简短询问用户该菜单的三级归属,不要臆测。**

得到 `一级 / 二级 / 三级`,例如 `家装管理 / 家装往来 /家装核销发票上传`。

### 2. 创建 / 更新页面(面包屑 + 留白 + Tab 结构)
目标路径:`docs/<一级>/<二级>/<三级>/index.md`

**⚠️ 强制前置:读取 UI 风格规范**
在生成任何页面前,**必须先用 Read 工具读取 `/root/.codebuddy/UI风格规范.md`**,确保页面遵循最新的设计令牌(`--kb-*` CSS 变量)、18 个 Kb* 组件 API、布局规范与禁止事项。**每一个界面都要引入该规范,不得凭记忆生成。**

**⚠️ 页面必须遵循参考页【家装真实性核销】的视觉结构:**
1. 顶部放 `<BreadcrumbTabs />`(面包屑/标签栏,8 个 tab 切换)
2. 所有内容用 `<div class="tab-pad"><div class="kl-wrap">` 包裹(左右留白对齐参考页)
3. 内容按 8 个 tab 区块拆分,每个区块对应 BreadcrumbTabs 的一个标签

#### 页面模板(严格照此结构;三个必留空白区块用 KbCard):

```md
<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbHero num="<n>" title="<三级名>" desc="<可选一句话说明>" />
<KbCard title="业务介绍">
<!-- 空白:待补充 -->
</KbCard>
</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<!-- MD 正文中的「业务流程」相关内容(## 业务流程 及其子节)原样粘贴于此 -->
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<!-- MD 正文中的「重点逻辑」相关内容(## 重点逻辑):每条用 <KbCard num="N"> 包裹,KbQuote(业务意义) + **具体逻辑**：(strong 文本) + `-` 无序列表(ul/li 详细逻辑),见下方「重点逻辑(key-logic)特殊处理」 -->
</div></div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<!-- MD 正文中的「详细逻辑」「数据库表详解」等原样粘贴于此 -->
</div></div>
</div>

<div id="permission" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<KbCard title="权限控制">
<!-- 空白:待补充 -->
</KbCard>
</div></div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<!-- MD 正文中的「常见问题FAQ」原样粘贴于此 -->
</div></div>
</div>

<div id="changelog" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<!-- MD 正文中的「更新记录」原样粘贴于此 -->
</div></div>
</div>

<div id="history" style="display:none;">
<div class="tab-pad"><div class="kl-wrap">
<KbCard title="历史排查记录">
<!-- 空白:待补充 -->
</KbCard>
</div></div>
</div>
```

#### MD 正文到 Tab 的映射规则:

| MD 顶层 `## ` 标题关键词 | 目标 Tab ID | 说明 |
|---|---|---|
| 包含「业务流程」 | `biz-flow` | 业务流程图、上游依赖、下游影响 |
| 包含「重点逻辑」 | `key-logic` | 各个重点逻辑条目 |
| 包含「详细逻辑」或「数据库表」 | `detail-logic` | 详细逻辑 + 数据库表详解 |
| 包含「常见问题」或「FAQ」或「faq」 | `faq` | 常见问题FAQ |
| 包含「更新记录」或「changelog」 | `changelog` | 更新记录 |
| 其他(兜底) | `biz-flow` | 未匹配的归入业务流 |

要点:
- `<KbHero>` 的 `title` 用三级菜单名;`num` 用该二级下三级的序号(从 1 递增)
- **三个固定区块(业务介绍 / 权限控制 / 历史排查记录)只放标题占位(KbCard),内部不写任何内容**,除非用户明确提供了
- 用户 MD 正文**逐字**放入对应 tab,不要总结、改写或删减
- 每个区块必须包裹在 `<div class="tab-pad"><div class="kl-wrap">` 内(左右留白 + 模块交替底色)
- 所有 8 个 tab div 必须存在且 id 与 BreadcrumbTabs 一致,否则点击空标签会隐藏所有内容

#### 重点逻辑(key-logic)特殊处理(参考【家装核销发票上传】):
【重点逻辑】TAB 的每条重点逻辑都用 `<KbCard num="N">` 包裹,内部结构严格三层,与【家装核销发票上传】的「重点逻辑」对齐(详细规则见 UI 规范 §7.5):
- **业务意义**:必须用 `<KbQuote>` 紫色引用块(`class="kb-quote"`)承载,**不要**写成 `**业务意义**：...` 粗体段落
- **具体逻辑**:必须用 `**具体逻辑**：`(`<strong>` 包裹的普通文本)呈现,**不要**写成 `<KbSubTitle>具体逻辑</KbSubTitle>` 组件,也**不要**写成 `具体逻辑描述`
- **详细逻辑**:必须用 Markdown 无序列表 `- 1、第N点：...`(渲染为 `ul > li`),**每条 li 文本以 `1、2、3、` 中文序号开头**;这是手动序号,**不要**用自动编号的有序列表(`<ol>`,即 Markdown `1.` `2.` 形式)
  ```md
  <KbCard num="N" title="重点逻辑N：一句话标题 标签">

  <KbQuote>用一句话说明该逻辑解决了什么业务问题 / 为什么这样设计</KbQuote>

  **具体逻辑**：

  - 1、第1点：...
  - 2、第2点：...
  - 3、第3点：...

  </KbCard>
  ```

#### 选择弹窗(LOV)特殊处理:
原 MD 中 `#### 弹窗N：标题LOV` 的 6 列表格(字段名/中文名/释义/示例/数据范围/单选多选)必须**拆为两个子模块**:
- **入参**:4 列表格(字段名/中文名/释义/示例)
- **数据范围**:`\`\`\`sql` 代码块
- 原「单选/多选」用 `<KbBadge type="purple">单选</KbBadge>` 标签,通过 KbSubTitle 的 slot 嵌套放在弹窗标题右侧:
  ```md
  <KbSubTitle>弹窗1：项目选择LOV <KbBadge type="purple">单选</KbBadge></KbSubTitle>

  **入参**

  | 字段名 | 中文名 | 释义 | 示例 |
  |-------|-------|------|------|
  | isHome | 是否家装 | 2表示家装 | 2 |

  **数据范围**

  ```sql
  SELECT * FROM EPM_PROJECT WHERE IS_HOME = 2
  ```
  ```

#### 保存校验/提交校验特殊处理:
原 MD 中的 `- 校验N：标题 —— 描述` 列表项,**每个校验都必须用 `<KbSubTitle>` 标题区分**,内部结构:
```md
<KbSubTitle>标题文字 —— 描述</KbSubTitle>

- 第1点：...
- 第2点：...

<KbTip>toast错误提醒"..."</KbTip>

```sql
排查SQL
\```
```
- **KbSubTitle** 作为校验项视觉锚点(紫色左边线)
- **详细逻辑**用 Markdown 列表
- **系统体现**用 `<KbTip>` 橙色提示框
- **排查SQL**用 `\`\`\`sql` 代码块
- **「导入」等模块的「校验逻辑」「导入逻辑」必须分点展示并带有序号**:用 Markdown 有序子列表(`1.` `2.` `3.` …),每条校验项/匹配规则独立一行并自动编号(如「1. 凭证号码必须存在」「2. 发票数量必须大于0」),**不要写成一行用分号分隔的长句,也不要用无序 `-` 列表丢失序号**

#### 报错一览表 + 「查看」弹窗特殊处理(参考【家装真实性核销】):
【常见问题】TAB 的「报错一览表」是 5 列汇总表(`报错信息 | 提示节点 | 根因与解决方案 | 等级 | 详细逻辑`),**详细逻辑列必须渲染为按钮 + 弹窗**,不能写裸文本 `[查看]`:
- 源 MD 一般为 Markdown 5 列表,需**转写为 HTML 表**(可复用 `.kb-field-scroll` + `<table class="kb-field-tbl">`),列序固定为 `报错信息 | 提示节点 | 根因与解决方案 | 等级 | 详细逻辑`
- **详细逻辑列**:`<td style="text-align:center;"><a href="#err-detail-N" class="view-btn">查看</a></td>`,`N` 从 1 起与弹窗 id 对应;`.view-btn` 为全局紫色按钮,无需自写样式
- **每个报错对应一个弹窗**(表格下方,纯 CSS `:target` 触发,无需 JS):
  ```html
  <div id="err-detail-N" class="error-detail-overlay">
    <div class="error-detail-box" v-pre>
      <a href="#" class="close-btn">&times;</a>
      <h4><span style="color:#7C3AED;">报错：</span>{报错信息}</h4>
      <h5>详细逻辑</h5>
      <div class="detail-text" v-pre>{编号步骤 / 排查说明}</div>
      <div class="detail-tip" v-pre>{等级提示}</div>
      <!-- 排查 SQL：用 fenced ```sql 块,前后留空行使其脱离 v-pre 被 Shiki 高亮 -->

      ```sql
      SELECT ... FROM ... WHERE ...
        AND ...
      ```

    </div>
  </div>
  ```
  - 点击「查看」→ URL 锚点 `#err-detail-N` → `.error-detail-overlay:target { display:flex; align-items:center; justify-content:center }` 显示遮罩并**垂直+水平居中**(弹窗 `max-height:80vh; overflow-y:auto`,超长可滚动且始终居中);右上角 `×`(`.close-btn`,`href="#"`)清空锚点关闭
  - 弹窗结构/样式(`.error-detail-overlay` / `.error-detail-box` / `.close-btn` / `.detail-text` / `.detail-tip`)已在 `custom.css` 全局定义,**直接复用,无需新增样式**
  - 弹窗内文字类内容(含 `:` 等 Vue 特殊字符)用 `v-pre` 包裹;**但 SQL 必须用 fenced ```` ```sql ```` 代码块**,并以前后空行脱离 `v-pre` 原始块作用域交给 VitePress/Shiki 高亮为暗色 `pre.shiki` 代码框(自动换行、不超出框宽),**不要写成裸 `<pre><code class="language-sql">`**(无高亮且横向溢出)
  - **遮罩必须铺满整个视口**:`.error-detail-overlay` 是 `position:fixed`,其包含块是「最近的带 `transform`/`filter`/`perspective`/`will-change`/`contain` 的祖先」。报错一览表通常包在 `<KbCard>` 内,而 `KbCard` 的 hover 抬升带 `transform`,会让遮罩只盖住那张卡片——**必须给该 `<KbCard>` 加 `:hover="false"`**(如 `<KbCard title="报错一览表" :hover="false">`),`custom.css` 另有 `.kb-card:has(.error-detail-overlay:target){transform:none!important}` 兜底。弹窗不要放在任何会动画/transform 的祖先内部。
  - **切换 TAB 时清除 `:target` 锚点**:弹窗靠 `:target` 显示,若切走 TAB 时 `#err-detail-N` 锚点残留,返回该 TAB 弹窗会"自己冒出来"。`BreadcrumbTabs` 组件已在 `watch(activeTab)` 中用 `history.replaceState` 清除 `#err-detail` 锚点,**不要去掉这段逻辑**;弹窗只应由 `:target` 控制显隐,不要依赖"父级 `display:none` 隐藏"。
- **等级徽标**:`toast提醒` 紫色(`#F5F3FF`/`#7C3AED`)、`阻断性报错` 红色(`#FEF2F2`/`#DC2626`)圆角小标签
- **未编写详细逻辑的报错**:弹窗内以「(该报错的详细逻辑细则待补充;以下为表格中『根因与解决方案』供参考：)」+ 表格「根因与解决方案」内容兜底,保证每个「查看」按钮都可点开、有内容
- 详细规则见 UI 规范 §7.8

#### 常见问题(Q&A)卡片特殊处理(参考【家装真实性核销】):
【常见问题】TAB 中「报错一览表」之外的**问答内容(问题 + 原因 + 解决思路)必须用卡片式 Q&A 呈现**,参考【家装真实性核销】的「其他常见问题」,**禁止写成 Markdown 无序列表**:
- 保留外层 `<KbCard title="常见问题">`(与同页其他 TAB 章节框一致),内部用 `<div class="faq-qa-wrap">` 包裹所有问答
- **每条问答 = 一张 `kl-card`**(所有卡片统一用 `kl-card`,**不再交替 `kl-card alt`**):
  ```html
  <div class="kl-card" style="margin-bottom:20px; padding-left:12px; padding-right:12px;">
    <div class="kl-card-title" style="margin-bottom:16px; background:#FFFFFF;">
      <span class="kl-num">Q1</span>
      <span style="font-size:15px;">{问题标题}</span>
    </div>
    <div class="faq-answer" style="padding:12px 16px; background:#F5F3FF; border-radius:6px; font-size:14px; color:#374151; line-height:1.8;">
      <strong style="color:#7C3AED;">原因：</strong>{根因}<br>
      <strong style="color:#7C3AED;">处理：</strong>{解决思路}
    </div>
  </div>
  ```
  - `.kl-num` 为紫色圆形编号徽标(全局类,`custom.css` 已定义);`.kl-card-title` 为标题行(编号 + 问题文本),**白底**(`background:#FFFFFF`)
  - `.faq-answer` **用内联 style 上色**(`background:#F5F3FF` 浅紫底 + 小圆角);`strong` 用品牌紫 `#7C3AED` 标注「原因 / 处理 / 排查SQL / 控制点」等小标题(与 §7.8 等级徽标紫色一致)
  - **视觉层次**:问题标题 `.kl-card-title` 白底、答案 `.faq-answer` 紫底;外层 `.kl-card` **左右各 12px padding**(`padding-left:12px; padding-right:12px`),以【OCR识别后发票信息未自动填充】卡片为基准,所有常见问题卡片样式一致
  - 含 SQL 的问题在 `.faq-answer` 内用 fenced ```` ```sql ```` 代码块(由 Shiki 高亮为暗色 `pre.shiki` 代码框,自动换行、不超出框宽),**不要写成裸 `<pre><code class="language-sql">`**;SQL 需格式化(关键字大写、子句换行、AND/OR 缩进)且单行不超框宽
- `kl-card` / `kl-num` / `kl-card-title` 为 `custom.css` 全局类,`faq-answer` 靠内联 style,**直接复用参考页写法,无需新增样式**
- 详细规则见 UI 规范 §7.9

### 3. 表格严格原样(字段清单表 / 报错一览表 / 常见问题Q&A 除外)
- 若源 MD 含表格,页面中**原样保留 Markdown 管道表格语法**(`| 表头 |... |` 与分隔行 `|---|---|`)
- VitePress 会渲染成 HTML `<table>`,表头、单元格内容与源文件**逐字一致**
- **禁止**用 `KbTable` 重新组织、禁止 AI 归纳表头、禁止改写/删减单元格内容——"不要自己理解"
- **例外一 — 详细逻辑 TAB 的「字段清单表」(7 列:字段名/组件/业务释义/显隐条件/取值赋值逻辑/合法值/数据库列名)**:
  - 源 MD 一般为 Markdown 7 列表,需**转写为 HTML 表**(外层 `.kb-field-scroll` + `<table class="kb-field-tbl">`),以实现固定列宽 + 卡片内横向滚动(样式见 UI 规范 §7.7)
  - **列序固定:数据库列名必须置于最后一列**,其余列顺序不变
  - **列宽由 `<colgroup>` 控制**:合法值列约减半(12%),其余列宽见 UI 规范 §7.7
  - **单元格内容仍逐字保留**,仅调整列序与列宽,不得改写/删减文字
- **例外二 — 【常见问题】TAB 的「报错一览表」(5 列:报错信息/提示节点/根因与解决方案/等级/详细逻辑)**:
  - 需**转写为 HTML 表**,详细逻辑列渲染为 `.view-btn` 紫色按钮,表格下方配 `.error-detail-overlay` 弹窗(纯 CSS `:target` 触发),详见 UI 规范 §7.8
- **例外三 — 【常见问题】TAB 的问答内容(问题 + 原因 + 解决思路)**:
  - **不是表格**,不能用 Markdown 无序列表原样粘贴;必须按上方「常见问题(Q&A)卡片特殊处理」转写为 `kl-card` + `kl-num` + `faq-answer` 卡片式结构(详见 UI 规范 §7.9),与【家装真实性核销】风格对齐
  - 单元格内容逐字保留,仅将「详细逻辑」列由裸文本改为按钮 + 弹窗,不得改写/删减报错信息与根因文字

### 4. 维护导航菜单(⚠️ 两处都要改!)

**关键发现:** 本项目使用自定义布局 `KbLayout.vue`,其左侧一/二级导航面板由 `secondaryNav` 数据驱动,**不读取** VitePress 默认的 `sidebar` 配置。因此新增菜单必须同时维护两处:

#### 4a. 主导航(真实生效): `docs/.vitepress/theme/KbLayout.vue`

在 `const secondaryNav = { ... }` 对象中,找到对应的**一级 key**(如 `'家装管理'`),在其数组中添加/确认**二级分组**:

```js
// 在 '家装管理' 数组内添加新分组
{
  label: '<二级名>',        // 如 '家装往来'
  icon: 'fa-solid fa-receipt', // 分组图标(Font Awesome)
  items: [
    {
      label: '<三级名>',     // 如 '家装核销发票上传'
      link: '/<一级>/<二级>/<三级>/',  // 路径以 / 开头和结尾
      icon: 'fa-solid fa-file-invoice', // 菜单项图标
    }
  ]
}
```

同时需在模板 `<template>` 的分组图标 SVG 区域(`v-if="group.label === '..."`)添加该分组的 SVG 图标(参照已有分组的格式)。

#### 4b. 备份配置(保持同步): `docs/.vitepress/config.ts`

在 `themeConfig.sidebar` 的对应一级 key 下,将菜单项加入正确的二级 group:

```ts
{ text: '🧾 <三级名>', link: '/<一级>/<二级>/<三级>/' }
```

> ⚠️ 此处 sidebar 配置不影响实际导航显示(被 KbLayout 覆盖),但保持同步可避免未来迁移时的遗漏。

#### 4c. 自动化建议

每次新增页面后,扫描 `docs/` 下所有三级 `index.md`,重建:
1. `KbLayout.vue` 的 `secondaryNav`(真实导航)
2. `config.ts` 的 `sidebar`(备份同步)

### 5. 构建与预览
```bash
cd /workspace/system-knowledge-base && npm run build
```
构建后预览(8000 端口静态服务)自动反映新页面。告知用户预览地址与新增菜单路径。

## 禁止事项
- **不要在未读取 `/root/.codebuddy/UI风格规范.md` 的情况下生成页面**——每一个界面都必须先引入该规范
- 不要给三个空白区块(业务介绍/权限控制/历史排查记录)编造内容
- 不要改写 / 删减用户 MD 正文与表格
- 不要引入第二种品牌色(仅紫色 `#7C3AED`;服务费模块例外)
- 不要在页面用重边框,套用 Kb* 组件风格
- 不要省略 `<BreadcrumbTabs />` 或 `tab-pad`/`kl-wrap` 包裹(否则缺失面包屑与留白)
- 不要只改 config.ts sidebar 而忽略 KbLayout.vue secondaryNav(否则菜单不会出现!)
- **不要把选择弹窗的入参和 SQL 挤在同一表格**,必须按 UI 规范拆分为两个子模块
- **不要把多个校验逻辑堆在一个段落**,必须按 UI 规范用 KbSubTitle 逐个标题化
- **不要把「重点逻辑」的"业务意义"写成粗体段落(`**业务意义**：...`)**,必须用 `<KbQuote>` 紫色引用块(`class="kb-quote"`)承载,与【家装核销发票上传】对齐(见 UI 规范 §7.5)
- **不要把「重点逻辑」的"具体逻辑"写成 `<KbSubTitle>具体逻辑</KbSubTitle>` 组件或 `具体逻辑描述`**,必须用 `**具体逻辑**：`(`<strong>` 包裹的普通文本,与【家装核销发票上传】一致,见 UI 规范 §7.5)
- **不要把「重点逻辑」的详细逻辑写成自动编号的有序列表(`<ol>`,即 Markdown `1.` `2.` 形式),也不要漏掉 `1、2、3、` 序号**:必须用 `<ul><li>` 无序列表,并在每条 li 文本前手动加 `1、2、3、` 中文序号(如 `- 1、第1点：...`,与【家装核销发票上传】的 `ul/li` 结构一致,见 UI 规范 §7.5)
- **不要把【常见问题】写成 Markdown 无序列表**,必须用 `kl-card` Q&A 卡片(紫色 `kl-num` 编号徽标 + 浅紫 `faq-answer` 答案框,见 UI 规范 §7.9),与【家装真实性核销】风格对齐
- **不要把 SQL 写成裸 `<pre><code class="language-sql">`**(无高亮且横向溢出),必须用 fenced ```` ```sql ```` 代码块(由 Shiki 高亮为暗色 `pre.shiki` 代码框、自动换行不超出框宽);报错弹窗(§7.8)与常见问题卡片(§7.9)均适用
- **不要让「报错一览表」的「查看」弹窗偏离垂直居中**,必须由 `.error-detail-overlay:target { display:flex; align-items:center; justify-content:center }` 实现垂直+水平居中(弹窗限 `max-height:80vh; overflow-y:auto`,超长可滚动且始终居中)
- **不要把报错弹窗嵌在带 `transform` 的祖先内部**(典型坑:`报错一览表` 包在 `<KbCard>` 里,其 hover 抬升 `transform` 会让遮罩只盖住那张卡片而非整屏);必须给该 `<KbCard>` 加 `:hover="false"`,或把弹窗放到无 transform 的层级
- **不要让「报错一览表」弹窗的 `:target` 锚点跨 TAB 残留**:切换 TAB 时 `BreadcrumbTabs` 必须用 `history.replaceState` 清除 `#err-detail` 锚点,否则返回该 TAB 弹窗会自动冒出;弹窗只应由 `:target` 控制显隐,不要依赖"父级 `display:none` 隐藏"
- **不要保留代码块复制按钮的英文 `Copy Code`**(VitePress 默认 `title="Copy Code"` 且仅图标):必须用 `custom.css` 的 `button.copy::after { content:"复制" }` 显示中文"复制"(复制成功后 `::after` 显示"已复制"),tooltip 同步改为"复制";按钮须为**白色文字(`color: #fff`)、无底色、`font-size: .8rem !important`**,不要做成紫色底色的胶囊按钮(文字颜色与暗色代码块 `pre.shiki` 协调即可)
- **不要使用浅灰表头**(传统 `#F5F7FA`),必须用紫色渐变表头(由全局 CSS 强制)
- **不要让普通表格(LOV 入参表等)内容竖排换行**(列宽自动 + `white-space:nowrap` 由全局 CSS 强制);「详细逻辑」TAB 的 7 列字段清单表(见 UI 规范 §7.7)、「报错一览表」(5 列,详细逻辑列用按钮 + `:target` 弹窗,见 UI 规范 §7.8)、「常见问题」Q&A 卡片(`kl-card` + 浅紫 `faq-answer` 答案框,见 UI 规范 §7.9)为特例,允许换行 / 固定列宽 / 卡片内横向滚动
