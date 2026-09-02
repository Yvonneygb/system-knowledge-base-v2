<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>装修等级是什么</h2>
    <p>HZERO 平台标准 LOV 值集，对应编码 <code>AE.FIXUP_GRADE</code></p>
  </div>
  <p>本菜单为 HZERO 平台标准 LOV 值集配置页面，对应 LOV 编码 <code>AE.FIXUP_GRADE</code>，无需业务后端代码，所有 CRUD 操作通过 HZERO 平台通用值集服务完成。本文档梳理值集配置规则及其在业务模块中的引用关系。</p>
  <table class="kl-table">
    <tr><th style="width:160px;">属性</th><th>内容</th></tr>
    <tr><td>值集编码</td><td><code>AE.FIXUP_GRADE</code></td></tr>
    <tr><td>中文名称</td><td>门店装修等级</td></tr>
    <tr><td>存储位置</td><td>HZERO 平台 <code>HPFM_LOV_VALUE</code> 表</td></tr>
    <tr><td>当前模式</td><td>同一 value + 同一 meaning，通过 <code>tag</code> 字段标记适用的事业部（organization_id）</td></tr>
    <tr><td>存储方式</td><td>所有业务表中 <code>FIXUP_GRADE</code> 字段统一存储值集的 <strong>value（Long 类型数值）</strong>，界面展示时翻译为 meaning（中文含义）</td></tr>
  </table>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义方式</span>
    <h2>值集定义方式</h2>
    <p>HPFM_LOV_VALUE 表中的定义规则</p>
  </div>
  <p class="kl-desc">值集在 <code>HPFM_LOV_VALUE</code> 表中定义，每个装修等级对应一个 value 和 meaning。当前所有事业部共用同一套 value→meaning 映射，通过 tag 字段区分适用的事业部。</p>
  <div class="kl-two-col">
    <div class="kl-col-box info">
      <div class="kl-col-title">值集定义示例</div>
      <div class="kl-col-items">
        <code>value = 1, meaning = '一级', tag = '123'</code><br>
        <code>value = 2, meaning = '二级', tag = '123'</code><br>
        <code>value = 3, meaning = '三级', tag = '123'</code>
      </div>
    </div>
    <div class="kl-col-box warn">
      <div class="kl-col-title">改动方向</div>
      <div class="kl-col-items">
        如需支持不同事业部自定义装修等级的 value 和 meaning，需在 Java 翻译层增加 organizationId 参数，并调整值集配置方式。
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 上下游</span>
    <h2>上游依赖与下游影响</h2>
    <p>装修等级值集在业务链路中的位置</p>
  </div>
  <h4 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 8px;">上游依赖</h4>
  <table class="kl-table">
    <tr><th>上游模块</th><th>依赖类型</th><th>依赖说明</th><th>依赖成立条件</th></tr>
    <tr><td>HZERO 平台 LOV 服务</td><td>平台服务</td><td>提供值集 <code>AE.FIXUP_GRADE</code> 的 CRUD 接口、值翻译接口</td><td>HZERO 平台已部署且 LOV 服务可用</td></tr>
    <tr><td>HZERO 低代码平台（hlod）</td><td>平台服务</td><td>页面渲染、查询栏与列表配置驱动</td><td>低代码页面已配置并发布</td></tr>
    <tr><td>HZERO 组织服务</td><td>平台服务</td><td>通过 <code>TAG</code> 字段标记值项适用的事业部（organization_id）</td><td>多事业部场景下需配置 TAG</td></tr>
  </table>
  <h4 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:12px 0 8px;">下游影响</h4>
  <ul>
    <li><strong>门店装修申请</strong>：通过 <code>lookupCode: 'AE.FIXUP_GRADE'</code> 引用值集，选择门店装修等级，提交时校验是否有对应的报销政策标准。</li>
    <li><strong>门店验收报销</strong>：选择"本次店面装修等级"和"本次门头装修等级"，匹配 <code>TERMINAL_DECORATE_LINE</code> 标准行计算补贴金额。</li>
    <li><strong>门店装修标准设置</strong>：以装修等级为维度字段，定义不同等级对应的补贴标准（额度内/额度外单价）。</li>
    <li><strong>财务费用申请（关店/变更/变更关店）</strong>：展示并校验门店装修等级，匹配报销政策。</li>
    <li><strong>门店主数据/网点申请单/门店变更</strong>：作为门店属性字段，标识门店当前装修等级。</li>
  </ul>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">装修等级值集 — 配置与引用全链路流程图</h4>
  <p class="bf-main-sub">HZERO 平台 LOV 配置 → 值项 CRUD → 业务引用翻译 → 下游业务</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 820" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#7C3AED"/></marker>
        <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <!-- 上游支撑 -->
      <rect x="50" y="20" width="1100" height="80" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="120" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="240" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO 平台 LOV 服务</text>
      <rect x="400" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="520" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO 低代码平台（hlod）</text>
      <rect x="680" y="52" width="240" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="800" y="74" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">HZERO 组织服务</text>
      <line x1="600" y1="100" x2="600" y2="130" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <!-- 开始 -->
      <rect x="540" y="130" width="120" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="156" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="600" y1="170" x2="600" y2="200" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 进入LOV配置页面 -->
      <rect x="430" y="200" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="227" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">进入 HZERO 平台 LOV 值集配置页面</text>
      <line x1="600" y1="244" x2="600" y2="274" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 查询值项列表 -->
      <rect x="430" y="274" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="301" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">查询装修等级值项列表（按编码/名称/状态）</text>
      <line x1="600" y1="318" x2="600" y2="348" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 操作分支判断 -->
      <polygon points="600,348 700,398 600,448 500,398" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="402" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="600">选择操作</text>
      <!-- 四个操作分支 -->
      <!-- 新建 -->
      <line x1="500" y1="398" x2="340" y2="398" stroke="#16A34A" stroke-width="2"/>
      <line x1="340" y1="398" x2="340" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="260" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
      <text x="340" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">新建值项</text>
      <!-- 编辑 -->
      <line x1="550" y1="448" x2="550" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="470" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
      <text x="550" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">编辑值项</text>
      <!-- 删除 -->
      <line x1="650" y1="448" x2="650" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="570" y="470" width="160" height="40" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
      <text x="650" y="495" text-anchor="middle" fill="#DC2626" font-size="11" font-weight="600">删除值项</text>
      <!-- 启用/禁用 -->
      <line x1="700" y1="398" x2="860" y2="398" stroke="#16A34A" stroke-width="2"/>
      <line x1="860" y1="398" x2="860" y2="470" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="780" y="470" width="160" height="40" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
      <text x="860" y="495" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">启用/禁用值项</text>
      <!-- 汇合到保存校验 -->
      <line x1="340" y1="510" x2="340" y2="540" stroke="#16A34A" stroke-width="2"/>
      <line x1="550" y1="510" x2="550" y2="540" stroke="#16A34A" stroke-width="2"/>
      <line x1="650" y1="510" x2="650" y2="540" stroke="#16A34A" stroke-width="2"/>
      <line x1="860" y1="510" x2="860" y2="540" stroke="#16A34A" stroke-width="2"/>
      <rect x="430" y="540" width="340" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="567" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">保存校验（编码唯一/必填/排序号）</text>
      <line x1="600" y1="584" x2="600" y2="614" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 写入HPFM_LOV_VALUE -->
      <rect x="400" y="614" width="400" height="44" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow2)"/>
      <text x="600" y="641" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="700">写入 HPFM_LOV_VALUE 表（HZERO 平台 LOV 服务）</text>
      <line x1="600" y1="658" x2="600" y2="688" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 业务引用翻译 -->
      <rect x="380" y="688" width="440" height="44" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>
      <text x="600" y="715" text-anchor="middle" fill="#166534" font-size="12" font-weight="600">业务引用：lovService.getMeaning / getValue 翻译</text>
      <line x1="600" y1="732" x2="600" y2="762" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <!-- 结束 -->
      <rect x="540" y="762" width="120" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="600" y="788" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束/判断</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑服务</span>
  </div>
</div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：LOV 值集配置">
<ul><li><strong>业务意义</strong>：装修等级是门店管理和财务报销的核心基础数据，不同装修等级对应不同的报销标准，需统一配置和维护。</li><li><strong>具体逻辑描述</strong>：通过 HZERO 平台标准 LOV 配置界面维护值集 <code>AE.FIXUP_GRADE</code>，每个装修等级对应一个 <code>VALUE</code>（值编码）和 <code>MEANING</code>（值名称）。所有业务表中 <code>FIXUP_GRADE</code> 字段统一存储 <code>VALUE</code>（Long 类型数值），界面展示时通过 <code>lovService.getMeaning("AE.FIXUP_GRADE", value)</code> 翻译为 <code>MEANING</code>（中文含义）。</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：值编码唯一性">
<ul><li><strong>业务意义</strong>：确保同一 LOV 下值编码不重复，避免业务引用歧义。</li><li><strong>具体逻辑描述</strong>：同一 <code>LOV_CODE = 'AE.FIXUP_GRADE'</code> 下 <code>VALUE</code> 字段唯一。新增/编辑保存时由 HZERO 平台校验，若重复提示"等级编码已存在"。</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：生效日期控制">
<ul><li><strong>业务意义</strong>：值项可通过开始/结束日期控制生效范围，支持装修等级的版本化管理。</li><li><strong>具体逻辑描述</strong>：值项配置 <code>START_DATE</code> 和 <code>END_DATE</code>，业务查询时仅返回当前日期在生效范围内的值项，过期或未生效的值项不在下拉列表中展示。</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：排序号控制">
<ul><li><strong>业务意义</strong>：控制值项在下拉列表中的展示顺序，提升用户选择体验。</li><li><strong>具体逻辑描述</strong>：通过 <code>ORDER_SEQ</code> 字段控制值项展示顺序，查询时按 <code>ORDER_SEQ</code> 升序排列。</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：多事业部适配">
<ul><li><strong>业务意义</strong>：支持不同事业部自定义装修等级的值和含义。</li><li><strong>具体逻辑描述</strong>：当前所有事业部共用同一套 <code>VALUE → MEANING</code> 映射，通过 <code>TAG</code> 字段区分适用的事业部（<code>organization_id</code>）。如需支持不同事业部自定义，需在 Java 翻译层增加 <code>organizationId</code> 参数，并调整值集配置方式。</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块">
<p>本页面为 HZERO 平台标准 LOV 配置界面，无独立前端源码，基于 HZERO 低代码平台（hlod）渲染。</p>
<h4>查询栏字段</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>LOV 编码</td><td>LOV_CODE</td><td>TextField</td><td>LOV 编码</td><td>始终显示</td><td>固定为 `AE.FIXUP_GRADE`，不可编辑</td></tr>
<tr><td>值编码</td><td>VALUE</td><td>TextField</td><td>装修等级编码</td><td>始终显示</td><td>手工输入，模糊查询</td></tr>
<tr><td>值名称</td><td>MEANING</td><td>TextField</td><td>装修等级名称</td><td>始终显示</td><td>手工输入，模糊查询</td></tr>
<tr><td>状态</td><td>ENABLE_FLAG</td><td>Select</td><td>启用状态</td><td>始终显示</td><td>启用/禁用</td></tr>
</tbody>
</table>
<h4>列表展示字段</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>值编码</td><td>VALUE</td><td>TextField</td><td>装修等级编码</td><td>始终显示</td><td>唯一标识</td></tr>
<tr><td>值名称</td><td>MEANING</td><td>TextField</td><td>装修等级名称</td><td>始终显示</td><td>显示用</td></tr>
<tr><td>描述</td><td>DESCRIPTION</td><td>TextField</td><td>等级描述</td><td>始终显示</td><td>补充说明</td></tr>
<tr><td>标签</td><td>TAG</td><td>TextField</td><td>标记适用的事业部</td><td>始终显示</td><td>organization_id</td></tr>
<tr><td>排序号</td><td>ORDER_SEQ</td><td>NumberField</td><td>排序顺序</td><td>始终显示</td><td>控制显示顺序</td></tr>
<tr><td>状态</td><td>ENABLE_FLAG</td><td>Select</td><td>启用状态</td><td>始终显示</td><td>启用/禁用</td></tr>
<tr><td>开始日期</td><td>START_DATE</td><td>DatePicker</td><td>生效开始日期</td><td>始终显示</td><td>控制值项生效范围</td></tr>
<tr><td>结束日期</td><td>END_DATE</td><td>DatePicker</td><td>生效结束日期</td><td>始终显示</td><td>控制值项生效范围</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>序号</th><th>按钮名称</th><th>所在位置</th><th>功能说明</th><th>触发条件</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>新建</td><td>列表工具栏</td><td>新增装修等级值项</td><td>始终可用</td></tr>
<tr><td>2</td><td>编辑</td><td>列表行操作</td><td>编辑装修等级值项</td><td>选择一条数据</td></tr>
<tr><td>3</td><td>删除</td><td>列表行操作</td><td>删除装修等级值项</td><td>选择一条数据</td></tr>
<tr><td>4</td><td>启用/禁用</td><td>列表行操作</td><td>切换值项启用状态</td><td>选择一条数据</td></tr>
</tbody>
</table>
<h4>按钮1：新建（列表工具栏）</h4>
<p><strong>触发条件</strong>：点击"新建"按钮</p>
<p><strong>执行逻辑</strong>：</p>
<ol><li>打开新建值项弹窗/抽屉</li><li>填写值编码、值名称、描述、排序号、开始/结束日期</li><li>保存时校验值编码唯一性、必填项</li><li>调用 HZERO 平台 LOV 服务新增接口写入 <code>HPFM_LOV_VALUE</code> 表</li></ol>
<h4>按钮2：编辑（列表行操作）</h4>
<p><strong>触发条件</strong>：选择一条数据点击"编辑"</p>
<p><strong>执行逻辑</strong>：</p>
<ol><li>打开编辑值项弹窗/抽屉，回显当前值项数据</li><li>修改值项信息（值编码通常不可编辑）</li><li>保存时校验必填项</li><li>调用 HZERO 平台 LOV 服务更新接口更新 <code>HPFM_LOV_VALUE</code> 表</li></ol>
<h4>按钮3：删除（列表行操作）</h4>
<p><strong>触发条件</strong>：选择一条数据点击"删除"</p>
<p><strong>执行逻辑</strong>：</p>
<ol><li>弹出确认框："确定删除该装修等级吗？"</li><li>确认后调用 HZERO 平台 LOV 服务删除接口</li><li>检查该值项是否被业务数据引用，若被引用则提示无法删除</li></ol>
<h4>按钮4：启用/禁用（列表行操作）</h4>
<p><strong>触发条件</strong>：选择一条数据点击"启用/禁用"</p>
<p><strong>执行逻辑</strong>：</p>
<ol><li>切换 <code>ENABLE_FLAG</code> 字段值（1↔0）</li><li>调用 HZERO 平台 LOV 服务更新接口</li><li>禁用后该值项不在业务下拉列表中展示</li></ol>
</KbCard>

<KbCard title="选择弹窗">
<p>本页面无选择弹窗。</p>
</KbCard>

<KbCard title="保存校验">
<p><strong>校验1：</strong>值编码必填 —— 确保值项有唯一标识</p>
<p><strong>校验2：</strong>值编码唯一 —— 同一 LOV 下值编码不可重复，避免业务引用歧义</p>
<p><strong>校验3：</strong>值名称必填 —— 确保值项有展示名称</p>
<p><strong>校验4：</strong>排序号必填 —— 确保值项在下拉列表中有明确顺序</p>
</KbCard>

<KbCard title="提交校验">
<p>本页面无审批流程，保存即生效，无需提交校验。</p>
</KbCard>

<KbCard title="状态机">

```sql
[新建] ──保存──→ [启用(ENABLE_FLAG=1)] ──禁用──→ [禁用(ENABLE_FLAG=0)]
                                              └──启用──→ [启用]
```
<table class="kb-field-tbl">
<thead>
<tr><th>当前状态</th><th>触发动作</th><th>目标状态</th></tr>
</thead>
<tbody>
<tr><td>新建</td><td>保存</td><td>启用</td></tr>
<tr><td>启用</td><td>禁用</td><td>禁用</td></tr>
<tr><td>禁用</td><td>启用</td><td>启用</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="导入">
<p>不支持导入功能。</p>
</KbCard>

<KbCard title="业务引用说明">
<p>装修等级值集 <code>AE.FIXUP_GRADE</code> 在多个业务模块中被引用，统一存储 <code>VALUE</code>（Long 类型数值），界面展示时翻译为 <code>MEANING</code>。</p>
<h4>引用菜单汇总</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>菜单名称</th><th>核心 Entity</th><th>界面显示字段</th><th>存储内容</th><th>业务用途</th></tr>
</thead>
<tbody>
<tr><td>门店装修申请与进度更新</td><td>FinFeeApplyFinishedHeader</td><td>门店装修等级/门头装修等级</td><td>VALUE</td><td>匹配装修标准、提交校验、OA 推送</td></tr>
<tr><td>门店装修申请变更</td><td>FinFeeApplyChangeHeader</td><td>门店装修等级/门头装修等级</td><td>VALUE</td><td>从原申请单带入，打印展示</td></tr>
<tr><td>门店装修申请关闭</td><td>FinFeeApplyClose</td><td>门店装修等级/门头装修等级</td><td>VALUE</td><td>从原申请单带入，仅展示</td></tr>
<tr><td>门店验收与报销单</td><td>FinFeeCheckBxHeader</td><td>本次店面装修等级/本次门头装修等级</td><td>VALUE</td><td>匹配装修标准行、计算补贴金额</td></tr>
<tr><td>门店装修标准设置</td><td>TerminalDecorateStandard + TerminalDecorateLine</td><td>门店装修等级</td><td>VALUE</td><td>作为标准行维度字段，定义补贴标准</td></tr>
<tr><td>网点资料（门店主数据）</td><td>MktTerminal</td><td>门店装修等级</td><td>VALUE</td><td>门店属性字段，标识当前装修等级</td></tr>
<tr><td>网点申请单</td><td>MktTerminalApply</td><td>门店装修等级</td><td>VALUE</td><td>门店申请属性字段</td></tr>
<tr><td>门店变更</td><td>MktTerminalModify</td><td>装修等级（变更前/后）</td><td>VALUE</td><td>记录变更前后对比</td></tr>
<tr><td>门头展板报销（旧）</td><td>FinFeeBxHeader</td><td>门店装修等级</td><td>VALUE</td><td>旧版菜单，历史数据展示</td></tr>
<tr><td>门店装修申请（旧）</td><td>FinFeeApplyHeader</td><td>门店装修等级/本次申请装修等级</td><td>VALUE</td><td>旧版菜单，历史数据展示</td></tr>
</tbody>
</table>
<h4>Java 层翻译方式</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>翻译方式</th><th>代码</th><th>方向</th><th>使用场景</th></tr>
</thead>
<tbody>
<tr><td>标准翻译</td><td>`lovService.getMeaning("AE.FIXUP_GRADE", value)`</td><td>VALUE→MEANING</td><td>打印/展示时将数值翻译为中文</td></tr>
<tr><td>反向翻译</td><td>`lovService.getValue("AE.FIXUP_GRADE", meaning)`</td><td>MEANING→VALUE</td><td>OA 回写时将中文反查为数值</td></tr>
<tr><td>注解翻译</td><td>`@LovValue(lovCode="AE.FIXUP_GRADE", meaningField="fixupGradeMeaning")`</td><td>VALUE→MEANING</td><td>VO 返回前端时自动翻译</td></tr>
</tbody>
</table>
<h4>SQL 层翻译方式</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>翻译方式</th><th>SQL</th><th>使用场景</th></tr>
</thead>
<tbody>
<tr><td>JOIN 翻译</td><td>`LEFT JOIN HPFM_LOV_VALUE hlv ON hlv.LOV_CODE='AE.FIXUP_GRADE' AND hlv.VALUE=TO_CHAR(afh.FIXUP_GRADE) AND hlv.TAG LIKE CONCAT('%',CONCAT(afh.ORGANIZATION_ID,'%'))`</td><td>导出/报表查询</td></tr>
<tr><td>函数翻译</td><td>`GET_DIV_DICT_NAME('AE.FIXUP_GRADE', TO_CHAR(cbh.FIXUP_GRADE), cbh.ORGANIZATION_ID)`</td><td>导出/报表查询</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="HPFM_LOV（HZERO 平台 LOV 值表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>LOV_ID</td><td>Long</td><td>主键ID</td><td>无</td><td>自增</td></tr>
<tr><td>LOV_CODE</td><td>VARCHAR</td><td>LOV 编码</td><td>LOV 编码</td><td>固定为 `AE.FIXUP_GRADE`</td></tr>
<tr><td>LOV_TYPE_CODE</td><td>VARCHAR</td><td>LOV 类型</td><td>无</td><td>独立值集</td></tr>
<tr><td>DESCRIPTION</td><td>VARCHAR</td><td>LOV 描述</td><td>无</td><td>值集描述</td></tr>
<tr><td>CREATION_DATE</td><td>LocalDateTime</td><td>创建时间</td><td>无</td><td>系统自动</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>LocalDateTime</td><td>最后更新时间</td><td>无</td><td>系统自动</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="HPFM_LOV_VALUE（LOV 值项表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>LOV_VALUE_ID</td><td>Long</td><td>主键ID</td><td>无</td><td>自增</td></tr>
<tr><td>LOV_CODE</td><td>VARCHAR</td><td>LOV 编码</td><td>LOV 编码</td><td>固定为 `AE.FIXUP_GRADE`</td></tr>
<tr><td>VALUE</td><td>VARCHAR</td><td>值编码</td><td>值编码</td><td>唯一标识，业务表存储此值</td></tr>
<tr><td>MEANING</td><td>VARCHAR</td><td>值名称</td><td>值名称</td><td>界面展示用</td></tr>
<tr><td>TAG</td><td>VARCHAR</td><td>标签</td><td>无</td><td>标记适用的事业部（organization_id）</td></tr>
<tr><td>DESCRIPTION</td><td>VARCHAR</td><td>描述</td><td>描述</td><td>补充说明</td></tr>
<tr><td>ORDER_SEQ</td><td>Long</td><td>排序号</td><td>排序号</td><td>控制显示顺序</td></tr>
<tr><td>START_DATE</td><td>LocalDateTime</td><td>生效开始日期</td><td>开始日期</td><td>控制值项生效范围</td></tr>
<tr><td>END_DATE</td><td>LocalDateTime</td><td>生效结束日期</td><td>结束日期</td><td>控制值项生效范围</td></tr>
<tr><td>ENABLE_FLAG</td><td>Long</td><td>启用标志</td><td>状态</td><td>1=启用，0=禁用</td></tr>
<tr><td>CREATION_DATE</td><td>LocalDateTime</td><td>创建时间</td><td>无</td><td>系统自动</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>LocalDateTime</td><td>最后更新时间</td><td>无</td><td>系统自动</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>等级编码已存在</td><td>新增/编辑保存时</td><td>同一 LOV 下 `VALUE` 重复；使用不同的编码</td><td>错误</td><td>保存前查询 `HPFM_LOV_VALUE` 校验 `VALUE` 唯一性</td></tr>
<tr><td>值编码不能为空</td><td>新增/编辑保存时</td><td>`VALUE` 字段未填写；填写值编码</td><td>错误</td><td>必填校验</td></tr>
<tr><td>值名称不能为空</td><td>新增/编辑保存时</td><td>`MEANING` 字段未填写；填写值名称</td><td>错误</td><td>必填校验</td></tr>
<tr><td>店面装修等级没有对应的政策标准</td><td>门店装修申请提交时</td><td>装修等级未配置对应的报销政策标准；在装修标准配置中补充该等级的报销标准</td><td>错误</td><td>提交校验查询 `TERMINAL_DECORATE_LINE` 无对应标准行</td></tr>
<tr><td>无政策标准不能提交！</td><td>门店装修申请提交时</td><td>`FIXUP_GRADE` 为空或 0；选择有效的装修等级</td><td>错误</td><td>提交校验 `FIXUP_GRADE` 非空非 0</td></tr>
<tr><td>店面装修等级没有有效期内的政策标准！</td><td>门店装修申请提交时</td><td>装修等级在有效期内无对应标准；检查 `TERMINAL_DECORATE_LINE` 配置</td><td>错误</td><td>提交校验精确匹配有效期内标准行无结果</td></tr>
<tr><td>值集编码不存在</td><td>查询时</td><td>值集 `AE.FIXUP_GRADE` 未创建；先在 HZERO 值集管理中创建值集</td><td>错误</td><td>查询 `HPFM_LOV` 无对应 `LOV_CODE`</td></tr>
<tr><td>网络异常/接口超时</td><td>任意接口调用</td><td>网络中断或接口响应超时，检查网络及后端超时配置</td><td>error</td><td>axios catch 或 timeout</td></tr>
<tr><td>权限不足</td><td>点击操作按钮</td><td>当前用户无对应按钮权限码，联系管理员授权</td><td>error</td><td>permissionList 校验未通过</td></tr>
<tr><td>数据不存在</td><td>编辑/删除</td><td>值项ID不存在或已删除，检查 LOV_VALUE_ID 有效性</td><td>error</td><td>接口返回数据为空</td></tr>
<tr><td>状态不允许操作</td><td>启用/禁用</td><td>值项状态不允许该操作，如已启用不可重复启用，检查 ENABLE_FLAG</td><td>error</td><td>后端校验状态机失败</td></tr>
<tr><td>描述不能为空</td><td>保存提交</td><td>未填写描述，填写后保存</td><td>error</td><td>前端校验 DESCRIPTION 非空</td></tr>
<tr><td>排序号不能为空</td><td>保存提交</td><td>未填写排序号，填写后保存</td><td>error</td><td>前端校验 ORDER_SEQ 非空</td></tr>
</tbody>
</table>
<h4>报错1：等级编码已存在</h4>
<ul><li><strong>触发条件</strong>：新增或编辑保存装修等级值项时，同一 LOV（AE.FIXUP_GRADE）下 VALUE 字段与已有值项重复</li><li><strong>逻辑分析</strong>：后端保存前查询 HPFM_LOV_VALUE 表，校验同一 LOV_CODE='AE.FIXUP_GRADE' 下 VALUE 唯一性，若存在重复则提示"等级编码已存在"。确保值编码唯一，避免业务引用歧义</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT VALUE AS 值编码,
         COUNT(*) AS 重复数量,
         LISTAGG(MEANING, ',') WITHIN GROUP (ORDER BY LOV_VALUE_ID) AS 值名称列表
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
  GROUP BY VALUE
  HAVING COUNT(*) > 1;
```
<h4>报错2：值编码不能为空</h4>
<ul><li><strong>触发条件</strong>：新增或编辑保存时，VALUE 字段未填写</li><li><strong>逻辑分析</strong>：前端表单对 VALUE 字段配置 required 校验，提交前校验值编码是否填写，为空则阻止提交并提示"值编码不能为空"。值编码是值项的唯一标识，业务表存储此值，必须明确</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID,
         LOV_CODE AS LOV编码,
         VALUE AS 值编码,
         MEANING AS 值名称,
         ENABLE_FLAG AS 状态
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND (VALUE IS NULL OR VALUE = '');
```
<h4>报错3：值名称不能为空</h4>
<ul><li><strong>触发条件</strong>：新增或编辑保存时，MEANING 字段未填写</li><li><strong>逻辑分析</strong>：前端表单对 MEANING 字段配置 required 校验，提交前校验值名称是否填写，为空则阻止提交并提示"值名称不能为空"。值名称用于界面展示，必须明确</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID,
         LOV_CODE AS LOV编码,
         VALUE AS 值编码,
         MEANING AS 值名称,
         ENABLE_FLAG AS 状态
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND (MEANING IS NULL OR MEANING = '');
```
<h4>报错4：店面装修等级没有对应的政策标准</h4>
<ul><li><strong>触发条件</strong>：门店装修申请提交时，所选装修等级在 TERMINAL_DECORATE_LINE 表中无对应的标准行</li><li><strong>逻辑分析</strong>：后端提交校验查询 TERMINAL_DECORATE_LINE 表，根据 FIXUP_GRADE 匹配装修标准行，若无对应标准行则提示"店面装修等级没有对应的政策标准"。确保装修等级有对应的报销标准，避免提交后无法计算补贴金额</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT lv.VALUE AS 装修等级编码,
         lv.MEANING AS 装修等级名称,
         lv.ENABLE_FLAG AS 状态
  FROM HPFM_LOV_VALUE lv
  WHERE lv.LOV_CODE = 'AE.FIXUP_GRADE'
    AND lv.ENABLE_FLAG = 1
    AND NOT EXISTS (
      SELECT 1 FROM TERMINAL_DECORATE_LINE tdl
      WHERE tdl.FIXUP_GRADE = lv.VALUE
    );
```
<h4>报错5：无政策标准不能提交！</h4>
<ul><li><strong>触发条件</strong>：门店装修申请提交时，FIXUP_GRADE 字段为空或为 0</li><li><strong>逻辑分析</strong>：后端提交校验 FIXUP_GRADE 字段非空非 0，若为空或为 0 则提示"无政策标准不能提交！"。装修等级是匹配报销标准的必要字段，必须选择有效值</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT ACCEPTANCE_ID AS 验收ID,
         STORE_NAME AS 门店名称,
         FIXUP_GRADE AS 店面装修等级,
         FRONTDOOR_FIXUP_GRADE AS 门头装修等级
  FROM FIN_FEE_CHECK_BX_HEADER
  WHERE FIXUP_GRADE IS NULL
     OR FIXUP_GRADE = 0;
```
<h4>报错6：店面装修等级没有有效期内的政策标准！</h4>
<ul><li><strong>触发条件</strong>：门店装修申请提交时，装修等级在有效期内无对应标准行</li><li><strong>逻辑分析</strong>：后端提交校验精确匹配有效期内标准行，查询 TERMINAL_DECORATE_LINE 表中 FIXUP_GRADE 匹配且 START_DATE &lt;= 当前日期 &lt;= END_DATE 的标准行，若无结果则提示"店面装修等级没有有效期内的政策标准！"。确保装修等级在当前时间有有效的报销标准</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT lv.VALUE AS 装修等级编码,
         lv.MEANING AS 装修等级名称,
         lv.START_DATE AS 值项开始日期,
         lv.END_DATE AS 值项结束日期
  FROM HPFM_LOV_VALUE lv
  WHERE lv.LOV_CODE = 'AE.FIXUP_GRADE'
    AND lv.ENABLE_FLAG = 1
    AND SYSDATE BETWEEN lv.START_DATE AND lv.END_DATE
    AND NOT EXISTS (
      SELECT 1 FROM TERMINAL_DECORATE_LINE tdl
      WHERE tdl.FIXUP_GRADE = lv.VALUE
        AND SYSDATE BETWEEN tdl.START_DATE AND tdl.END_DATE
    );
```
<h4>报错7：值集编码不存在</h4>
<ul><li><strong>触发条件</strong>：查询装修等级值集时，HPFM_LOV 表中无 LOV_CODE='AE.FIXUP_GRADE' 的记录</li><li><strong>逻辑分析</strong>：后端查询 HPFM_LOV 表，若不存在 LOV_CODE='AE.FIXUP_GRADE' 的值集定义则提示"值集编码不存在"。需先在 HZERO 值集管理中创建值集 AE.FIXUP_GRADE，再配置值项</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_ID, LOV_CODE, LOV_TYPE_CODE, DESCRIPTION
  FROM HPFM_LOV
  WHERE LOV_CODE = 'AE.FIXUP_GRADE';
```
<h4>报错8：网络异常/接口超时</h4>
<ul><li><strong>触发条件</strong>：任意接口调用时，网络中断或接口响应超过 axios timeout 配置</li><li><strong>逻辑分析</strong>：前端 axios 请求未收到响应或响应超时，触发 catch 回调统一提示"请求失败"。常见根因：网络中断、hzero-platform 服务假死、数据库慢查询等。需检查网络连通性、后端服务负载、数据库性能</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID, VALUE AS 值编码, MEANING AS 值名称,
         TO_CHAR(LAST_UPDATE_DATE,'YYYY-MM-DD HH24:MI:SS') AS 最后更新时间
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND LAST_UPDATE_DATE >= SYSDATE - 1
  ORDER BY LAST_UPDATE_DATE DESC;
```
<h4>报错9：权限不足</h4>
<ul><li><strong>触发条件</strong>：点击新增、编辑、删除、启用/禁用等按钮时，当前用户无对应 permissionList 权限码</li><li><strong>逻辑分析</strong>：前端 Button 组件通过 permissionList 配置权限码，HZERO 框架校验当前用户角色是否包含该权限码，未包含则按钮不可见或禁用。若强制调用接口，后端也会校验权限返回403。需联系管理员配置对应角色权限</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT U.USER_NAME AS 用户名, R.ROLE_NAME AS 角色名, P.PERMISSION_CODE AS 权限码
  FROM SYS_USER U
  LEFT JOIN SYS_USER_ROLE UR ON U.USER_ID = UR.USER_ID
  LEFT JOIN SYS_ROLE R ON UR.ROLE_ID = R.ROLE_ID
  LEFT JOIN SYS_ROLE_PERMISSION RP ON R.ROLE_ID = RP.ROLE_ID
  LEFT JOIN SYS_PERMISSION P ON RP.PERMISSION_ID = P.PERMISSION_ID
  WHERE P.PERMISSION_CODE LIKE '%fixup_grade%' ORDER BY U.USER_NAME;
```
<h4>报错10：数据不存在</h4>
<ul><li><strong>触发条件</strong>：编辑、删除等操作时，接口返回数据为空或值项ID不存在</li><li><strong>逻辑分析</strong>：前端通过 lovValueId 调用接口，后端查询 HPFM_LOV_VALUE 表无对应记录或记录已逻辑删除，返回空数据。常见根因：值项ID错误、值项已被删除、跨租户查询、数据权限隔离等。需检查 LOV_VALUE_ID 有效性及数据权限</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID, LOV_CODE AS LOV编码, VALUE AS 值编码,
         MEANING AS 值名称, ENABLE_FLAG AS 状态
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND (LOV_VALUE_ID IS NULL OR ENABLE_FLAG IS NULL);
```
<h4>报错11：状态不允许操作</h4>
<ul><li><strong>触发条件</strong>：点击启用/禁用按钮时，值项状态不允许该操作</li><li><strong>逻辑分析</strong>：后端校验状态机，如已启用（ENABLE_FLAG=1）不可重复启用、已禁用（ENABLE_FLAG=0）不可重复禁用等。状态不匹配时后端返回业务异常。需检查值项当前状态及操作流程</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID, VALUE AS 值编码, MEANING AS 值名称,
         ENABLE_FLAG AS 状态, ERROR_INFO AS 异常问题
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND ENABLE_FLAG NOT IN (0, 1)
  ORDER BY CREATE_DATE DESC;
```
<h4>报错12：描述不能为空</h4>
<ul><li><strong>触发条件</strong>：保存时，DESCRIPTION 字段为空</li><li><strong>逻辑分析</strong>：前端表单对 DESCRIPTION 字段'段配置 required 校验，提交前校验描述是否填写，为空则阻止提交并提示"描述不能为空"。描述用于记录值项的业务含义，必须明确</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID, VALUE AS 值编码, MEANING AS 值名称,
         DESCRIPTION AS 描述
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND (DESCRIPTION IS NULL OR DESCRIPTION = '');
```
<h4>报错13：排序号不能为空</h4>
<ul><li><strong>触发条件</strong>：保存时，ORDER_SEQ 字段为空</li><li><strong>逻辑分析</strong>：前端表单对 ORDER_SEQ 字段配置 required 校验，提交前校验排序号是否填写，为空则阻止提交并提示"排序号不能为空"。排序号用于值项在下拉列表中的展示顺序，必须明确</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT LOV_VALUE_ID AS 值项ID, VALUE AS 值编码, MEANING AS 值名称,
         ORDER_SEQ AS 排序号
  FROM HPFM_LOV_VALUE
  WHERE LOV_CODE = 'AE.FIXUP_GRADE'
    AND ORDER_SEQ IS NULL;
```
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="排查SQL汇总">

```sql
-- 1. 查询装修等级值集定义
SELECT LOV_ID, LOV_CODE, LOV_TYPE_CODE, DESCRIPTION
FROM HPFM_LOV
WHERE LOV_CODE = 'AE.FIXUP_GRADE';

-- 2. 查询装修等级值项列表
SELECT LOV_VALUE_ID, LOV_CODE, VALUE, MEANING, TAG,
       DESCRIPTION, ORDER_SEQ, START_DATE, END_DATE,
       ENABLE_FLAG, CREATION_DATE, LAST_UPDATE_DATE
FROM HPFM_LOV_VALUE
WHERE LOV_CODE = 'AE.FIXUP_GRADE'
ORDER BY ORDER_SEQ;

-- 3. 校验值编码唯一性
SELECT VALUE, COUNT(*) AS cnt
FROM HPFM_LOV_VALUE
WHERE LOV_CODE = 'AE.FIXUP_GRADE'
GROUP BY VALUE
HAVING COUNT(*) > 1;

-- 4. 查询使用装修等级的门店验收报销
SELECT ACCEPTANCE_ID, STORE_NAME,
       FIXUP_GRADE AS 店面装修等级,
       FRONTDOOR_FIXUP_GRADE AS 门头装修等级
FROM FIN_FEE_CHECK_BX_HEADER
WHERE FIXUP_GRADE = :fixupGrade
   OR FRONTDOOR_FIXUP_GRADE = :fixupGrade;

-- 5. 检查装修等级是否有对应的报销标准
SELECT LINE_ID, FIXUP_GRADE, DECORATE_PROJECT,
       UPER_AREA, LOWER_AREA, IN_STANDARD, OUT_STANDARD,
       START_DATE, END_DATE
FROM TERMINAL_DECORATE_LINE
WHERE FIXUP_GRADE = :fixupGrade;
```
</KbCard>

</div>
</div>
</div>

<div id="changelog" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="更新记录">
<table class="kb-field-tbl">
<thead>
<tr><th>日期</th><th>提交ID</th><th>提交人</th><th>提交内容</th></tr>
</thead>
<tbody>
<tr><td>2025-11-12</td><td>-</td><td>hfy</td><td>初始创建</td></tr>
<tr><td>2026-07-31</td><td>-</td><td>AI</td><td>对比网站补充定义、详细逻辑、数据库表字段等</td></tr>
<tr><td>2026-08-28</td><td>-</td><td>AI</td><td>完整重写，补充值集 `AE.FIXUP_GRADE` 维护逻辑、多业务引用说明、排查 SQL</td></tr>
<tr><td>2026-08-30</td><td>-</td><td>AI</td><td>按 skill 规范格式重写，明确 HZERO 平台标准值集配置定位</td></tr>
</tbody>
</table>
</KbCard>
</div>
</div>
</div>

<div id="history" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="历史排查记录">

<!-- 空白:待补充 -->

</KbCard>
</div>
</div>
</div>