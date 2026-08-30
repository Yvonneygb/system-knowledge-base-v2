# 统一门户知识库 · UI 风格规范与组件库

> 来源:从 `docs/.vitepress/theme/custom.css` 与现有 7 个业务组件提炼的设计系统。
> 组件技术栈:Vue 3 单文件组件(SFC),自带 `scoped` 样式,统一引用 `--kb-*` 设计令牌。
> 位置:`docs/.vitepress/theme/ui/`,已在主题入口全局注册(`app.use(kbUiPlugin)`),可在任意 `.md` 中直接使用。

---

## 1. 设计原则

1. **单一强调色**:白底为主,紫色 `#7C3AED` 作为唯一品牌强调色(含 hover `#8B5CF6`)。
2. **信息节奏**:白 `#FFFFFF` 与浅灰 `#FBFCFD` 交替,制造阅读节奏,不用重边框。
3. **柔和圆角**:`12 / 8 / 4px` 三级梯度,卡片大圆角、按钮小圆角。
4. **中文优先**:正文字体 `Noto Sans SC`,等线/DengXian 作辅助,系统字体兜底。
5. **语义色克制**:提示/警告/状态用橙、红、绿、黄等语义色,仅作用于小面积(徽章、提示框、状态节点)。

> ⚠️ 唯一例外:「服务费」模块使用蓝色 `#0499FD` 作为模块级主色(`--primary`)。其余模块一律紫色,不要引入第二种强调色。

---

## 2. 设计令牌(Design Tokens)

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--kb-purple` | `#7C3AED` | 主色:主按钮、激活态、链接、强调 |
| `--kb-purple-hover` | `#8B5CF6` | 主色 hover |
| `--kb-purple-light` | `rgba(124,58,237,0.12)` | 浅紫底(选中/高亮背景) |
| `--kb-purple-ghost` | `rgba(124,58,237,0.06)` | 更浅紫底(引用/悬浮) |
| `--kb-bg-white` | `#FFFFFF` | 主背景 |
| `--kb-bg-alt` | `#FBFCFD` | 交替背景 |
| `--kb-bg-surface` | `#F5F7FA` | 表面/表头背景 |
| `--kb-text` | `#000000` | 正文 |
| `--kb-text-sec` | `#6B7280` | 次要文字 |
| `--kb-title` | `rgb(17,24,39)` | 标题 |
| `--kb-border` | `#E5E7EB` | 边框/分割线 |
| `--kb-code-bg` | `#1E1E1E` | 代码块底色 |
| `--kb-radius` | `12px` | 大圆角(卡片) |
| `--kb-radius-sm` | `8px` | 中圆角(按钮/表格) |
| `--kb-radius-xs` | `4px` | 小圆角(标签/小元素) |
| `--kb-font` | `"Noto Sans SC","DengXian","等线",-apple-system,"Segoe UI",sans-serif` | 全局字体 |

间距节奏:卡片内边距 `24px 10%`(左右留白 10%),模块间距 `12–20px`,行高 `1.6–1.75`。

---

## 3. 布局骨架

| 区域 | 尺寸 | 样式 |
| --- | --- | --- |
| 顶部导航栏 | 高 56px,固定 | 白底、底部 1px 边框、紫高亮 Logo |
| 一级导航 | 宽 88px,左侧竖排 | 浅灰底 `#F5F7FA`,图标 + 文字,激活态浅紫底 |
| 二级面板 | 宽 200px | 白底,分组导航,激活态浅紫底 |
| 主内容区 | `margin-left:88px` | 白底,顶栏下方 |
| 响应式 | `<768px` | 一级导航收窄至 56px,隐藏文字标签 |

---

## 4. 组件清单与 API

### 4.1 基础展示

**`<KbCard>`** — 内容卡片
- props:`num`(编号圆)、`title`(标题)、`alt`(浅紫渐变强调变体)、`hover`(hover 抬升,默认 true)
- slots:`default`、`header`、`actions`

**`<KbBadge>`** — 状态徽章/标签
- props:`type`(`purple`/`red`/`orange`/`green`/`yellow`)、`text`
- slot:徽章文字(优先级高于 `text`)

**`<KbTip>`** — 橙色实操提示
- props:`icon`(默认显示灯泡图标)
- slot:提示内容

**`<KbWarn>`** — 红色警告
- props:`icon`(默认显示警示图标)
- slot:警告内容

**`<KbFormula>`** — 紫色公式框
- props:`label`(公式标题)
- slot:公式代码

**`<KbHighlight>`** — 行内高亮文字
- props:`deep`(更深紫色)
- slot

**`<KbQuote>`** — 紫色左边线引用块
- slot

### 4.2 结构

**`<KbList>`** — 有序/列表
- props:`items`(数组)、`plain`(无序号项目符号变体)
- slot `item`:`{ item, index }` 自定义每条

**`<KbTable>`** — 数据表格
- props:`columns`(`[{key,label,width?}]`)、`rows`(`[{key:value}]`)、`striped`(默认 true 斑马纹)
- slots:`rows`(自定义行)、`default`(完全自定义表格内容)

**`<KbSectionTitle>`** — 章节大标题(下划线分隔)
- props:`title`;slot

**`<KbSubTitle>`** — 紫色左边线小标题
- props:`title`;slot

### 4.3 流程 / 布局 / 导航

**`<KbSteps>`** — 水平步骤流程
- props:`steps`(`[{title,desc?}]`)

**`<KbTimeline>`** — 竖向时间轴
- props:`items`(`[{date,title,desc?}]`)

**`<KbFlow>`** — 状态机流转
- props:`nodes`(`[{label,type,icon?}]`);`type`:`new`(蓝)/`run`(橙)/`approved`(绿)/`rejected`(红)/`any`(灰)/`cancel`(浅灰)

**`<KbHero>`** — 业务介绍大卡(扁平白卡 + 大号编号)
- props:`num`、`title`、`desc`;slot(补充说明)

**`<KbRoleCard>`** — 角色卡
- props:`badge`(徽章字)、`title`、`desc`、`color`(`blue`/`purple`/`green`/`orange`/`red`/`cyan`/`gray`);slot

**`<KbTwoCol>`** — 两栏对比
- props:`leftTitle`、`rightTitle`、`left`、`right`、`leftType`、`rightType`(`pass`/`cancel`/`gray`/`info`/`warn`)
- slots:`left`、`right`

**`<KbBreadcrumbTabs>`** — 分段切换 Tab
- props:`tabs`(`[{id,label,icon?}]`)、`modelValue`(激活 id)、`mode`(`section` 自动切换 `<section id>` 可见性 / `free` 仅 emit)
- emits:`update:modelValue`、`change`

---

## 5. 使用示例(在 `.md` 中)

```md
<KbHero num="01" title="家装真实性核销" desc="家装订单真实性核验业务说明" />

<KbCard num="1" title="核销前提">
需先完成要货订单并入库。
</KbCard>

<KbBadge type="purple">进行中</KbBadge>
<KbBadge type="green">已通过</KbBadge>
<KbBadge type="red">已驳回</KbBadge>

<KbTip>提交前请核对单据编号。</KbTip>
<KbWarn>重复提交将导致单据锁定。</KbWarn>

<KbFormula label="应扣金额">应扣 = 实付 − 已核销</KbFormula>

<KbList :items="['资料齐全','系统初核','人工复核']" />

<KbTable
  :columns="[{key:'step',label:'环节'},{key:'owner',label:'负责方'}]"
  :rows="[{step:'初核',owner:'系统'},{step:'复核',owner:'业务员'}]" />

<KbSteps :steps="[{title:'申请',desc:'发起核销'},{title:'审核',desc:'主管审批'}]" />

<KbFlow :nodes="[{label:'新建',type:'new'},{label:'审核中',type:'run'},{label:'通过',type:'approved'}]" />

<KbRoleCard badge="业" title="业务员" desc="发起与跟进核销单" color="purple" />

<KbTwoCol
  left-title="通过情形" right-title="不通过情形"
  left="资料齐全且金额一致" right="单据缺失或金额不符" />
```

---

## 6. 组件目录

```
docs/.vitepress/theme/ui/
├── index.js            # 聚合导出 + kbUiPlugin
├── KbCard.vue
├── KbBadge.vue
├── KbTip.vue
├── KbWarn.vue
├── KbFormula.vue
├── KbHighlight.vue
├── KbQuote.vue
├── KbList.vue
├── KbTable.vue
├── KbSectionTitle.vue
├── KbSubTitle.vue
├── KbSteps.vue
├── KbTimeline.vue
├── KbFlow.vue
├── KbHero.vue
├── KbRoleCard.vue
├── KbTwoCol.vue
└── KbBreadcrumbTabs.vue
```

---

## 7. 内容呈现规范(与参考页【家装真实性核销】对齐)

### 7.1 模块交替底色
`.kl-wrap` 下的 `.kl-card` / `.kb-card` 子元素按 `:nth-child(odd/even)` 交替底色:
- `odd` (奇数位): `#FFFFFF` 白
- `even` (偶数位): `#FBFCFC` 浅灰

视觉节奏:不依赖边框分隔,只用底色交替制造层级。KBB 组件 scoped `background` 已被全局 `!important` 覆盖。

### 7.1.1 模块标题靠左(biz-kl-hdr)
所有模块化卡片标题容器 `.biz-kl-hdr` 必须**靠左对齐**(`text-align: left`):
- 全局 `custom.css` 默认是 `text-align: center` (居中),由于全局改动影响 141 个页面,**当前约定为:具体页面用内联 style 覆盖** —— 在 `<div class="biz-kl-hdr">` 上加 `style="text-align:left;"`
- 内联 style 优先级最高,能压过 `custom.css` 的 `text-align: center`
- 后续如有需要统一全局靠左,可将 `custom.css` 第 1941 行的 `text-align: center` 改为 `text-align: left`,自动对 141 个源页面生效
- 涵盖场景:`biz-kl-hdr` 内的 `h2`(如「界面模块 1」「列表页查询栏」「详情页头表单」「常见问题排查思路」等模块大标题)及其下属文字

### 7.1.2 SQL 代码块留白(外边距 margin)
所有 SQL 代码块(渲染产物 `div[class*="language-"]`)必须与周围内容拉开**外边距**留白(对齐 §2「卡片内边距 24px 10%」的视觉节奏,但语义为外边距 margin,因为 SQL 是暗色块):
- **外边距**:`margin: 24px 10% !important`(上下 24px、左右各 10% 外留白)—— 暗色块与周围卡片/内容之间留白,不撑满容器
- **内部 `pre` 恢复 `padding: 16px !important`**(代码离暗色块边界 16px,不贴边;暗色块自身不再加 padding,避免与 margin 语义混淆)
- **实现位置**:`custom.css` 的 `.kb-page-content div[class*="language-"]` 容器(全局,全 141 页统一生效)
- ⚠️ 术语澄清:`padding`=内边距(元素**内部**),`margin`=外边距(元素**外部**)。SQL 块与周围的留白属于**外边距**,用 `margin`,不要用 `padding` 把暗色块内部撑开
- 适用:Markdown ```` ```sql ```` fenced code block 渲染的 `pre.shiki` 块、FAQ 卡片/报错弹窗内的 `pre.shiki` 块(全站统一)
- 注:本项目 VitePress 配置 `html: false`,`.md` 中写 `<style>` / `<style scoped>` / `:deep()` / `vp-raw` 均被 markdown-it 剥除,**SQL 块级样式只能用 `custom.css` 全局方案**,无法单页覆盖

### 7.1.3 SQL 代码块前的「查询SQL：」引导文字(引用块)
SQL 代码块前的引导说明文字(如「查询SQL：」)必须用 **Markdown 引用块**书写,不要写成 HTML `<p>`:
- 正确:`> 查询SQL：`(渲染为 `.kb-page-content blockquote`,带紫色左边线 + 浅紫底,即规范「样式」)
- 错误:`<p style="...">&gt; 查询SQL：</p>` —— 会让 `&gt;` 变成字面文本 `>` 且**丢失紫色引用边框**(用户反馈的「样式丢失」)
- 引用块与下方 ```` ```sql ```` 代码块之间保留一个空行,二者不合并
- 原因:本项目 `html: false`,HTML `<p>` 即使写了内联样式也只是裸段落,无法获得引用块装饰;用 Markdown `>` 才走 `.kb-page-content blockquote` 样式
- 引导文字引用块的**左右外边距(留白)**:`custom.css` 用 `.kb-page-content blockquote:not(.kb-quote) { margin: 24px 10% !important; }`(外边距上下 24px、左右各 10%,与 SQL 块 `margin:24px 10%` 同向外缩进、左右对齐);仅作用于纯引用块,不影响 KbQuote 组件。⚠️ 是 `margin`(外边距/块外侧),不是 `padding`(内边距/块内部)

### 7.2 表格表头(紫色)
所有 `.kb-page-content table th` 必须使用紫色表头:
- 底色:`linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)` 浅紫渐变
- 文字色:`#5B21B6` 深紫
- 字重:`700`
- 下边框:`2px solid var(--kb-purple, #7C3AED)` 紫色
- `white-space: nowrap` 单行不换行
- 字号:`0.85rem`

### 7.3 表格列宽灵活 + 不换行(通用表格)
- `table-layout: auto` 自动列宽
- `white-space: nowrap` 表头与单元格都不换行
- 长字段名(`EPM_UPLOAD_INVOICE_VERIFER.INVOICE_VERIFER_NO`)可占据足够宽度,不挤压其他列
- 边框:仅保留 `border-bottom: 1px solid rgba(0,0,0,0.06)`,无四周重边框
- hover 行:`background: rgba(124,58,237,0.04)` 浅紫

> 注:**「详细逻辑」TAB 内的 7 列字段清单表为特例**(列序固定、列宽可控、卡片内横向滚动),适用 **§7.7**,不适用本条的 auto + nowrap。

### 7.4 选择弹窗(LOV)结构
每个弹窗必须包含两个子模块,用 `**入参**` 和 `**数据范围**` 加粗小标题区分:

```md
<KbSubTitle>弹窗N：标题LOV <KbBadge type="purple">单选</KbBadge></KbSubTitle>

**入参**

| 字段名 | 中文名 | 释义 | 示例 |
|-------|-------|------|------|
| isHome | 是否家装 | 2表示家装 | 2 |

**数据范围**

```sql
SELECT * FROM EPM_PROJECT WHERE IS_HOME = 2
\```
```

要点:
- **单选/多选**用 `<KbBadge type="purple">单选</KbBadge>` 标签放在 KbSubTitle 标题右侧(用 slot 嵌套)
- 入参表格只保留 4 列:字段名/中文名/释义/示例
- 数据范围用 SQL 代码块展示
- 若无入参(只有数据范围),省略「入参」小节

### 7.5 重点逻辑(key-logic TAB)结构
「重点逻辑」TAB 内的每条重点逻辑用 `<KbCard num="N">` 包裹,内部结构严格三层(与参考页【家装核销发票上传】的「重点逻辑」对齐):

```md
<KbCard num="N" title="重点逻辑N：一句话标题 标签">

<KbQuote>用一句话说明该逻辑解决了什么业务问题 / 为什么这样设计</KbQuote>

**具体逻辑**：

- 1、第1点：...
- 2、第2点：...
- 3、第3点：...

</KbCard>
```

要点:
- **业务意义**必须用 `<KbQuote>` 紫色引用块承载(即 `class="kb-quote"`),**不要**写成 `**业务意义**：...` 粗体段落
- **具体逻辑**必须用 `**具体逻辑**：`(`<strong>` 包裹的普通文本)呈现,**不要**写成 `<KbSubTitle>具体逻辑</KbSubTitle>` 组件,也**不要**写成 `具体逻辑描述`
- **详细逻辑**必须用 Markdown 无序列表 `- 1、第N点：...`(渲染为 `ul > li`),**每条 li 文本以 `1、2、3、` 中文序号开头**;这是手动序号,**不要**用自动编号的有序列表(`<ol>`,即 Markdown `1.` `2.` 形式)

### 7.6 校验逻辑(保存校验/提交校验)结构
每个校验(`校验1`、`校验2` ...)必须用 `KbSubTitle` 标题区分,内部结构:

```md
<KbSubTitle>标题文字 —— 描述</KbSubTitle>

- 第1点：...
- 第2点：...

<KbTip>toast错误提醒"..."</KbTip>

```sql
排查SQL
\```
```

要点:
- **KbSubTitle 标题**作为校验项的视觉锚点
- **详细逻辑**用 Markdown 列表(`- 第1点：...`)
- **系统体现**用 `<KbTip>` 橙色提示框包裹
- **排查SQL**用 ```sql 代码块(暗色)
- 每个校验 KbCard 内可有多个 KbSubTitle,逐个校验标题化
- **「导入」等模块的「校验逻辑」「导入逻辑」必须分点展示**:用 Markdown 子列表,每条校验项/匹配规则独立一行(如「凭证号码必须存在」「发票数量必须大于0」),**不要写成一行用分号分隔的长句**

### 7.7 字段清单表(详细逻辑 TAB)— 例外规则
【家装核销发票上传】等页面的「详细逻辑」TAB 内含 **7 列字段清单表**(字段名 / 组件 / 业务释义 / 显隐条件 / 取值·赋值逻辑 / 合法值 / 数据库列名)。这类表**不再使用 Markdown 管道表**,而是渲染为 HTML 表,以满足「列序固定 + 列宽可控 + 卡片内横向滚动」的需求:

- **容器**:外层 `<div class="kb-field-scroll">`,`overflow-x: auto`;表格超宽时在卡片内显示横向滚动条,不撑破整体布局
- **表类**:`<table class="kb-field-tbl">`,`table-layout: fixed`(固定列宽,不再 auto)
- **列序(固定 7 列,数据库列名必须置于最后一列)**:
  字段名 → 组件 → 业务释义 → 显隐条件 → 取值/赋值逻辑 → 合法值 → 数据库列名
- **列宽**(由 `<colgroup>` 精确控制,合计 100%):

  | 列 | 字段名 | 组件 | 业务释义 | 显隐条件 | 取值/赋值逻辑 | 合法值 | 数据库列名 |
  |---|---|---|---|---|---|---|---|
  | 宽 | 13% | 9% | 17% | 12% | 21% | **12%** | 16% |

  - **合法值列宽约减半**(原约 21% → 12%),避免该列过宽挤压其他列
- **单元格允许换行**:`white-space: normal` + `word-break: break-word`(与 §7.3 的 nowrap 不同),长 SQL / 值集说明可自然折行
- **表头仍单行不换行**(`white-space: nowrap`),紫色渐变表头样式与全局一致
- **最小宽度**:`min-width: 960px`;当卡片宽度不足时由 `.kb-field-scroll` 触发横向滚动,而非横向溢出页面
- 列宽与滚动样式由 `custom.css` 的 `.kb-page-content .kb-field-tbl` / `.kb-field-scroll` 强制(用 `.kb-page-content` 前缀压过通用表格规则)

### 7.8 报错一览表 + 「查看」弹窗(FAQ)
【常见问题】TAB 内的「报错一览表」用于集中罗列报错信息与对应排查逻辑,**详细逻辑列用按钮触发弹窗**(参考【家装真实性核销】的实现):

- **表格**:HTML 表(可复用 `kb-field-tbl` + `kb-field-scroll`,或 `kl-table`),固定 5 列:
  `报错信息 | 提示节点 | 根因与解决方案 | 等级 | 详细逻辑`
- **详细逻辑列**:不写裸文本,而是紫色按钮:
  `<td style="text-align:center;"><a href="#err-detail-N" class="view-btn">查看</a></td>`
  - `.view-btn` 为全局紫色按钮(`custom.css` 已定义),`N` 为报错序号(从 1 起,与弹窗 id 对应)
- **弹窗(纯 CSS `:target`,无需 JS)**:表格下方放置与报错一一对应的弹窗层:
  ```html
  <div id="err-detail-N" class="error-detail-overlay">
    <div class="error-detail-box" v-pre>
      <a href="#" class="close-btn">&times;</a>
      <h4><span style="color:#7C3AED;">报错：</span>{报错信息}</h4>
      <h5>详细逻辑</h5>
      <div class="detail-text" v-pre>{编号步骤 / 排查说明}</div>
      <div class="detail-tip" v-pre>{等级提示}</div>
      <!-- 可选：排查 SQL —— 用 fenced ```sql 块,前后留空行使其脱离 v-pre 被 Shiki 高亮 -->
      
      ```sql
      SELECT ... FROM ... WHERE ...
        AND ...
      ```
      
    </div>
  </div>
  ```
  - 点击「查看」→ URL 锚点变为 `#err-detail-N` → `.error-detail-overlay:target { display:flex; align-items:center; justify-content:center }` 显示遮罩弹窗并**垂直+水平居中**;点右上角 `×`(`.close-btn`,`href="#"`)清空锚点关闭。弹窗内容高(`.error-detail-box` 限 `max-height:80vh; overflow-y:auto`),超长可滚动,始终居中。
  - `.error-detail-overlay`(遮罩,`position:fixed; top/left/right/bottom:0; z-index:9999`)、`.error-detail-box`(白卡,`max-height:80vh; overflow-y:auto`)、`.close-btn`、`.detail-text`、`.detail-tip` 均由 `custom.css` 全局定义,**直接复用即可,无需新增样式**
  - 弹窗内文字类内容(含 `:` 等 Vue 特殊字符)用 `v-pre` 包裹;**但 SQL 必须用 fenced ```` ```sql ```` 代码块**,并以其前后各一个空行脱离 `v-pre` 原始块作用域,交给 VitePress/Shiki 高亮为暗色 `pre.shiki` 代码框(自动换行、不超出框宽),不要写成裸 `<pre><code class="language-sql">`(不会被高亮且会横向溢出)
  - **遮罩必须铺满整个视口**:`.error-detail-overlay` 用 `position:fixed`,其包含块是「最近的带 `transform`/`filter`/`perspective`/`will-change`/`contain` 的祖先」,否则遮罩只盖住该祖先而非整屏。报错一览表通常包在 `<KbCard>` 内,而 `KbCard` 的 hover 抬升带 `transform: translateY(-1px)`,会让遮罩只盖住那张卡片——**必须给该 `<KbCard>` 加 `:hover="false"` 关掉 hover transform**(`custom.css` 另有 `.kb-card:has(.error-detail-overlay:target){transform:none!important}` 兜底)。弹窗不要放在任何会动画/transform 的祖先内部。
  - **切换 TAB 时清除 `:target` 锚点**:弹窗靠 `:target` 显示,若切走 TAB 时锚点(`#err-detail-N`)残留,返回该 TAB 弹窗会"自己冒出来"。`BreadcrumbTabs` 组件已在 `watch(activeTab)` 中切 tab 时用 `history.replaceState` 清除 `#err-detail` 锚点,**不要去掉这段逻辑**,也不要让弹窗依赖"父级 `display:none` 来隐藏"——弹窗应只由 `:target` 控制显隐。
- **等级徽标**:`toast提醒` 用紫色(`background:#F5F3FF;color:#7C3AED`)、`阻断性报错` 用红色(`background:#FEF2F2;color:#DC2626`),圆角小标签
- **未编写详细逻辑的报错**:弹窗内以「(该报错的详细逻辑细则待补充;以下为表格中『根因与解决方案』供参考:)」+ 表格「根因与解决方案」内容兜底,保证每个「查看」按钮都可点开、有内容

### 7.9 常见问题(Q&A)卡片(参考【家装真实性核销】)

【常见问题】TAB 的问答内容**用卡片式 Q&A 呈现**(参考【家装真实性核销】的「其他常见问题」),替代原本 Markdown 无序列表:

- **容器**:保留外层 `<KbCard title="常见问题">`(与同页其他 TAB 章节框一致),内部用 `<div class="faq-qa-wrap">` 包裹所有问答。
- **每条问答 = 一张 `kl-card`**(所有卡片统一用 `kl-card`,**不再交替 `kl-card alt`**),结构:
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
  - `.kl-num` 为紫色圆形编号徽标(`custom.css` 全局定义),`.kl-card-title` 为标题行(编号 + 问题文本),**白底**(`background:#FFFFFF`)。
  - `.faq-answer` **用内联 style 上色**(`background:#F5F3FF` 浅紫底 + 小圆角);`strong` 标签用品牌紫 `#7C3AED` 标注「原因 / 处理 / 排查SQL / 控制点」等小标题(与 §7.8 等级徽标紫色一致)。
  - **视觉层次**:问题标题 `.kl-card-title` 白底、答案 `.faq-answer` 紫底;外层 `.kl-card` **左右各 12px padding**(`padding-left:12px; padding-right:12px`),以【OCR识别后发票信息未自动填充】卡片为基准,所有常见问题卡片样式一致。
- **含 SQL 的问题**:在 `.faq-answer` 内用 fenced ```` ```sql ```` 代码块(自动交给 Shiki 高亮为暗色 `pre.shiki` 代码框,自动换行、不超出框宽),**不要写成裸 `<pre><code class="language-sql">`**。SQL 需格式化(关键字大写、子句换行、AND/OR 缩进)且单行列宽不超过代码框:
  ```html
  <div class="faq-answer" style="...背景:#F5F3FF...">
    <strong style="color:#7C3AED;">排查SQL：</strong>
    
    ```sql
    SELECT V.INVOICE_VERIFER_NO, I.INVOICE_CODE, I.INVOICE_NUMBER
    FROM EPM_UPLOAD_INVOICE_INFO I
    JOIN EPM_UPLOAD_INVOICE_VERIFER V ON V.INVOICE_VERIFER_ID = I.INVOICE_VERIFER_ID
    WHERE I.INVOICE_CODE = ?
      AND I.INVOICE_NUMBER = ?
    ```
    
  </div>
  ```
- **复用要求**:`kl-card` / `kl-num` / `kl-card-title` 为 `custom.css` 全局类,`faq-answer` 靠内联 style,**直接复用参考页写法,无需新增样式**。

---

## 8. 禁止事项

1. 不要新增第二种品牌主色(服务费蓝 `#0499FD` 仅限该模块)。
2. 不要使用重边框/深色分割线,用浅灰 `#E5E7EB` + 留白分层。
3. 不要在卡片外使用大圆角以外的形状;按钮/标签统一小圆角。
4. 组件样式一律引用 `--kb-*` 令牌,禁止硬编码颜色值(保证主题统一可换肤)。
5. **不要使用浅灰表头**(传统 `#F5F7FA`),必须用紫色渐变表头。
6. **不要让普通表格(LOV 入参表等)内容竖排换行**(必须 `white-space: nowrap` + 列宽自动);「详细逻辑」TAB 的 7 列字段清单表为特例,允许换行 + 固定列宽 + 卡片内横向滚动(见 §7.7)。
7. **不要把多个校验逻辑堆在一个段落里**,必须用 KbSubTitle 逐个标题化。
8. **不要把选择弹窗的入参与 SQL 挤在同一表格**,必须拆为「入参」+「数据范围」两个子模块。
9. **不要把"单选/多选"放在表格里**,必须用 KbBadge 标签放弹窗标题右侧。
10. **不要把【常见问题】写成 Markdown 无序列表**,必须用 `kl-card` Q&A 卡片(紫色 `kl-num` 编号徽标 + 浅紫 `faq-answer` 答案框,见 §7.9),与【家装真实性核销】风格对齐。
11. **不要把 SQL 写成裸 `<pre><code class="language-sql">`**(无高亮且横向溢出),必须用 fenced ```` ```sql ```` 代码块,由 VitePress/Shiki 高亮为暗色 `pre.shiki` 代码框、自动换行不超出框宽;报错弹窗(§7.8)与常见问题卡片(§7.9)均适用。
12. **不要让「报错一览表」的「查看」弹窗偏离垂直居中**,必须由 `.error-detail-overlay:target { display:flex; align-items:center; justify-content:center }` 实现垂直+水平居中(弹窗本身限 `max-height:80vh; overflow-y:auto`,超长可滚动且始终居中)。
13. **不要把报错弹窗嵌在带 `transform` 的祖先内部**(典型坑:`报错一览表` 包在 `<KbCard>` 里,其 hover 抬升 `transform` 会让遮罩只盖住那张卡片而非整屏);必须给该 `<KbCard>` 加 `:hover="false"`,或把弹窗放到无 transform 的层级。
14. **不要让「报错一览表」弹窗的 `:target` 锚点跨 TAB 残留**:切换 TAB 时 `BreadcrumbTabs` 必须用 `history.replaceState` 清除 `#err-detail` 锚点,否则返回该 TAB 弹窗会自动冒出;弹窗只应由 `:target` 控制显隐,不要依赖"父级 `display:none` 隐藏"。
15. **不要保留代码块复制按钮的英文 `Copy Code`**(VitePress 默认 `title="Copy Code"` 且仅图标):必须通过 `custom.css` 的 `button.copy::after { content:"复制" }` 显示中文"复制"(复制成功后 `::after` 显示"已复制"),tooltip 同步改为"复制"。样式上按钮须为**白色文字(`color: #fff`)、无底色(`background: none`)、`font-size: .8rem !important`**,不要做成带紫色底色的胶囊按钮(文字颜色与暗色代码块 `pre.shiki` 协调即可)。
16. **不要把「重点逻辑」的"业务意义"写成粗体段落(`**业务意义**：...`)**,必须用 `<KbQuote>` 紫色引用块(即 `class="kb-quote"`)承载,与【家装核销发票上传】对齐(见 §7.5)。
17. **不要把「重点逻辑」的"具体逻辑"写成 `<KbSubTitle>具体逻辑</KbSubTitle>` 组件或 `具体逻辑描述`**,必须用 `**具体逻辑**：`(`<strong>` 包裹的普通文本,与【家装核销发票上传】一致,见 §7.5)。
18. **不要把「重点逻辑」的详细逻辑写成自动编号的有序列表(`<ol>`,即 Markdown `1.` `2.` 形式),也不要漏掉 `1、2、3、` 序号**:必须用 `<ul><li>` 无序列表,并在每条 li 文本前手动加 `1、2、3、` 中文序号(如 `- 1、第1点：...`,与【家装核销发票上传】的 `ul/li` 结构一致,见 §7.5)。
19. **不要让 `biz-kl-hdr` 标题居中显示**:必须靠左对齐(`text-align: left`),内联 style 覆盖全局 `text-align: center`(见 §7.1.1);「界面模块 1」「详情页头表单」等模块大标题必须从左边缘开始读。
20. **不要让 SQL 代码块紧贴上下文(留白不足)**:必须用 `margin: 24px 10% !important`(上下 24px、左右各 10% 外留白),由 `custom.css` 的 `.kb-page-content div[class*="language-"]` 全局生效(见 §7.1.2)。左右 10% 外边距不可或缺,否则暗色块会撑满容器、与卡片贴边。
