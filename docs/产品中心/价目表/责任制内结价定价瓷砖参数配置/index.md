<BreadcrumbTabs />

<div id="biz-intro" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 定义</span>
    <h2>瓷砖参数配置维护什么</h2>
    <p>针对瓷砖品类的特殊内结价参数，采用头行结构管理</p>
  </div>
  <div class="biz-2col-inner">
    <div class="kl-col-box">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">配置头</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">记录适用范围与品类</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>配置名称</strong> — 便于识别的命名</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>适用范围</strong> — 命中的组织/业务场景</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#F5F3FF;border-radius:8px;"><div style="font-size:.75rem;"><strong>瓷砖品类</strong> — 限定具体瓷砖品类编码</div></div>
      </div>
    </div>
    <div class="kl-col-box alt">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <div style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#7c3aed,#6d28d9);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="8" r="1.5" stroke="white" stroke-width="1.5"/></svg></div>
        <h4 style="font-size:1rem;font-weight:800;color:#1F2937;margin:0;">配置行</h4>
      </div>
      <p style="font-size:0.78rem;font-weight:600;color:#6B7280;margin:0 0 10px;">一个头关联多行具体参数</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>参数项</strong> — 规格/等级/工艺等参数</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>系数值</strong> — 各行对应的定价系数</div></div>
        <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:#EDE9FE;border-radius:8px;"><div style="font-size:.75rem;"><strong>行序号</strong> — 控制参数行的顺序</div></div>
      </div>
    </div>
  </div>
</div>

<div class="kl-card">
  <div class="biz-kl-hdr">
    <span class="biz-tag" style="background:rgba(124,58,237,0.08);color:#7C3AED;border-color:rgba(124,58,237,0.18);"> 影响</span>
    <h2>配置被谁引用</h2>
    <p>瓷砖特殊参数服务于瓷砖内结价与跨事业部定价</p>
  </div>
  <div class="biz-3col">
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 2v12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">瓷砖算价</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">供瓷砖内结价计算引用。</p></div>
      </div>
    </div>
    <div class="kl-col-box alt" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#16A34A,#15803D);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="white" stroke-width="1.5"/><path d="M5 6h6M5 9h6" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">跨部定价</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">支撑跨事业部销售申请定价。</p></div>
      </div>
    </div>
    <div class="kl-col-box" style="margin-bottom:0;">
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:linear-gradient(135deg,#7C3AED,#A78BFA);"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 4V8C3 11 8 14 8 14C8 14 13 11 13 8V4L8 2Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg></div>
        <div><h5 style="font-size:0.88rem;font-weight:800;color:#1F2937;margin:0 0 6px;">销售报价</h5><p style="font-size:0.73rem;color:#6B7280;margin:0;line-height:1.6;">作为报价与经营分析的输入。</p></div>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</div>

<div id="biz-flow" style="display:none;">
<div class="tab-pad">
<div class="bf-truth-flow">
  <h4 class="bf-main-title">责任制内结价定价瓷砖参数配置 — 全链路流程图</h4>
  <p class="bf-main-sub">开始 → ★瓷砖参数配置★ → 结束（头行结构CRUD，保存即生效无审批；下游供瓷砖特殊内结价定价计算）</p>
  <div class="bf-fc-svg-wrap">
    <svg class="bf-fc-svg" style="max-height:none;" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#16A34A"/></marker>
        <marker id="arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#9CA3AF"/></marker>
        <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#3B82F6"/></marker>
        <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><polygon points="0,0 10,5 0,10" fill="#EF4444"/></marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/></filter>
      </defs>
      <rect x="50" y="20" width="1100" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="42" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="600">上游支撑</text>
      <rect x="280" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="340" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">基础参数配置(同体系)</text>
      <rect x="410" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="470" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">瓷砖品类主数据</text>
      <rect x="540" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="600" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">产品主档</text>
      <rect x="670" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="730" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">组织主数据</text>
      <rect x="800" y="56" width="120" height="34" rx="5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.2"/>
      <text x="860" y="78" text-anchor="middle" fill="#1D4ED8" font-size="11" font-weight="600">适用范围值集</text>
      <line x1="540" y1="115" x2="540" y2="150" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-blue)"/>
      <rect x="500" y="150" width="80" height="44" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="540" y="177" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">开始</text>
      <line x1="540" y1="194" x2="540" y2="228" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="400" y="228" width="280" height="54" rx="6" fill="#16A34A" stroke="#15803D" stroke-width="2" filter="url(#shadow)"/>
      <text x="540" y="252" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="700">★瓷砖参数配置★</text>
      <text x="540" y="270" text-anchor="middle" fill="#DCFCE7" font-size="10">新建头行·填规格/等级/工艺系数·保存即生效</text>
      <line x1="540" y1="282" x2="540" y2="316" stroke="#16A34A" stroke-width="2" marker-end="url(#arr-green)"/>
      <rect x="485" y="316" width="110" height="40" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="540" y="341" text-anchor="middle" fill="#7C3AED" font-size="13" font-weight="600">结束</text>
      <line x1="540" y1="356" x2="540" y2="400" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-green)"/>
      <rect x="50" y="400" width="1100" height="95" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="600" y="422" text-anchor="middle" fill="#166534" font-size="13" font-weight="600">下游影响</text>
      <rect x="270" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="345" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">内结价定价计算(瓷砖)</text>
      <rect x="440" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="515" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">跨事业部销售申请定价</text>
      <rect x="610" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="685" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">销售报价</text>
      <rect x="780" y="438" width="150" height="36" rx="5" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.2"/>
      <text x="855" y="461" text-anchor="middle" fill="#166534" font-size="11" font-weight="600">经营分析</text>
    </svg>
  </div>
  <div class="bf-fc-legend">
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-green"></span> 主流程步骤</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-purple"></span> 开始/结束</span>
    <span class="bf-fc-legend-item"><span class="bf-fc-dot bf-fc-dot-blue"></span> 上游支撑</span>
    <span class="bf-fc-legend-item"><span style="display:inline-block;width:22px;height:2px;background:#EF4444;"></span> 审批拒绝/驳回</span>
  </div>
</div>
</div>
</div>

<div id="key-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard num="1" title="重点逻辑1：头行结构 `头行结构`">
<ul><li><strong>业务意义</strong>：瓷砖参数配置采用头行结构，头表记录规格/品类/生产基地等适用范围，行表记录各大类中类的具体定价</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：头表（LNK_RSP_STM_PORC_CFG_HEAD）记录规格、生产基地、瓷砖品类等概要信息</li></ul>
<ul><li>第2点：行表（LNK_RSP_STM_PORC_CFG_LINE）通过headId关联头表，记录大类、中类、定价等具体参数</li></ul>
<ul><li>第3点：一个头可关联多行明细，头行为一对多关系</li></ul>
</KbCard>

<KbCard num="2" title="重点逻辑2：新建头时自动生成明细行 `自动级联生成`">
<ul><li><strong>业务意义</strong>：新建头表保存后，系统自动按值集生成所有大类中类组合的明细行，确保配置完整性</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：头表保存成功后，系统查询值集CRM.RSP_STM_PORC_CFG_TYPE_SUB的所有条目</li></ul>
<ul><li>第2点：为每个值集条目创建一行明细，type1=parentVal（大类），type2=val（中类），price=0，status='valid'</li></ul>
<ul><li>第3点：自动生成的明细行通过batchInsertSelective批量插入</li></ul>
</KbCard>

<KbCard num="3" title="重点逻辑3：头表重复校验 `唯一性校验`">
<ul><li><strong>业务意义</strong>：同一规格+瓷砖品类+生产基地组合不允许重复配置</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：新建头表时，查询是否已存在相同standard+category+productionBaseCode的记录</li></ul>
<ul><li>第2点：如果存在，抛出异常"该规格已存在，请核对数据！"</li></ul>
</KbCard>

<KbCard num="4" title="重点逻辑4：行表重复校验 `行唯一性`">
<ul><li><strong>业务意义</strong>：同一头表下大类+中类组合唯一，避免重复定价</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：新增行时，查询同一headId下是否已存在相同type1+type2的记录</li></ul>
<ul><li>第2点：如果存在，抛出异常"该头表下已存在相同大类和中类的配置，请勿重复新增"</li></ul>
<ul><li>第3点：更新行时，如果type1或type2发生变化，需排除自身做重复校验</li></ul>
</KbCard>

<KbCard num="5" title="重点逻辑5：大类中类级联 `字段级联`">
<ul><li><strong>业务意义</strong>：中类选项根据大类动态过滤，确保中类属于选中的大类</li></ul>
<ul><li><strong>具体逻辑描述</strong></li></ul>
<ul><li>第1点：中类（type2）的选项来源值集CRM.RSP_STM_PORC_CFG_TYPE_SUB，通过parentValue关联父级type1</li></ul>
<ul><li>第2点：大类变更时，自动清空中类并刷新中类选项</li></ul>
</KbCard>

</div>
</div>
</div>

<div id="detail-logic" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="界面模块1：瓷砖参数配置列表页">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>序号</td><td>-</td><td>序号渲染</td><td>行序号</td><td>常显</td><td>自动计算=当前行索引+1</td></tr>
<tr><td>配置编码</td><td>LNK_RSP_STM_PORC_CFG_HEAD.RSP_STM_HEAD_CODE</td><td>文本链接</td><td>配置唯一编码</td><td>常显</td><td>查询条件：like模糊匹配；点击跳转详情页；可排序</td></tr>
<tr><td>规格</td><td>LNK_RSP_STM_PORC_CFG_HEAD.STANDARD</td><td>文本框</td><td>瓷砖规格</td><td>常显</td><td>查询条件：like模糊匹配；可排序</td></tr>
<tr><td>生产基地</td><td>LNK_RSP_STM_PORC_CFG_HEAD.PRODUCTION_BASE_CODE</td><td>下拉选择框</td><td>生产基地</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.LNK_PRICE_APP_FORM_PROD_BASE；可排序</td></tr>
<tr><td>瓷砖品类</td><td>LNK_RSP_STM_PORC_CFG_HEAD.CATEGORY</td><td>文本框</td><td>瓷砖品类</td><td>常显</td><td>查询条件：like模糊匹配；可排序</td></tr>
<tr><td>状态</td><td>LNK_RSP_STM_PORC_CFG_HEAD.STATUS</td><td>下拉选择框</td><td>配置有效/失效状态</td><td>常显</td><td>查询条件：=精确匹配；值集CRM.LNK_RSP_STM_CFG_STATUS；可排序</td></tr>
<tr><td>创建人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>创建人姓名</td><td>常显</td><td>查询条件：like模糊匹配；可排序</td></tr>
<tr><td>创建时间</td><td>LNK_RSP_STM_PORC_CFG_HEAD.CREATION_DATE</td><td>日期</td><td>记录创建时间</td><td>常显</td><td>查询条件：range范围查询；格式YYYY-MM-DD；可排序</td></tr>
<tr><td>最后更新人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>最后更新人姓名</td><td>常显</td><td>可排序</td></tr>
<tr><td>最后更新时间</td><td>LNK_RSP_STM_PORC_CFG_HEAD.LAST_UPDATE_DATE</td><td>日期</td><td>记录最后更新时间</td><td>常显</td><td>格式YYYY-MM-DD；可排序</td></tr>
<tr><td>备注</td><td>LNK_RSP_STM_PORC_CFG_HEAD.REMARKS</td><td>文本框</td><td>备注说明</td><td>常显</td><td>-</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块2：新建/编辑详情页-头表单">
<blockquote>详情页8列表单布局。新建时规格/生产基地/瓷砖品类可编辑；编辑时这些字段不可编辑，状态和备注可编辑。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>配置编码</td><td>LNK_RSP_STM_PORC_CFG_HEAD.RSP_STM_HEAD_CODE</td><td>文本框</td><td>配置唯一编码</td><td>常显</td><td>系统自动生成（编码规则CRM.RSP_STM_CFG_CODE）；不可编辑</td></tr>
<tr><td>规格</td><td>LNK_RSP_STM_PORC_CFG_HEAD.STANDARD</td><td>文本框</td><td>瓷砖规格</td><td>常显</td><td>必填；新建时可编辑，编辑时不可编辑</td></tr>
<tr><td>生产基地</td><td>LNK_RSP_STM_PORC_CFG_HEAD.PRODUCTION_BASE_CODE</td><td>下拉选择框</td><td>生产基地</td><td>常显</td><td>必填；值集CRM.LNK_PRICE_APP_FORM_PROD_BASE；新建时可编辑，编辑时不可编辑</td></tr>
<tr><td>瓷砖品类</td><td>LNK_RSP_STM_PORC_CFG_HEAD.CATEGORY</td><td>文本框</td><td>瓷砖品类</td><td>常显</td><td>必填；新建时可编辑，编辑时不可编辑</td></tr>
<tr><td>备注</td><td>LNK_RSP_STM_PORC_CFG_HEAD.REMARKS</td><td>文本域</td><td>备注说明</td><td>常显</td><td>非必填</td></tr>
<tr><td>状态</td><td>LNK_RSP_STM_PORC_CFG_HEAD.STATUS</td><td>下拉选择框</td><td>配置有效/失效状态</td><td>常显</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS</td></tr>
<tr><td>创建人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>创建人姓名</td><td>常显</td><td>系统自动记录；不可编辑</td></tr>
<tr><td>创建时间</td><td>LNK_RSP_STM_PORC_CFG_HEAD.CREATION_DATE</td><td>日期</td><td>记录创建时间</td><td>常显</td><td>系统自动记录；不可编辑；格式YYYY-MM-DD</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块3：详情页-明细行表格">
<blockquote>明细行表格通过headId关联头表，展示该头表下所有明细行。支持新建和编辑明细行。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>序号</td><td>-</td><td>序号渲染</td><td>行序号</td><td>常显</td><td>自动计算=当前行索引+1</td></tr>
<tr><td>大类</td><td>LNK_RSP_STM_PORC_CFG_LINE.TYPE_1</td><td>下拉选择框</td><td>瓷砖大类</td><td>常显</td><td>值集CRM.RSP_STM_PORC_CFG_TYPE；可排序；查询条件：=精确匹配</td></tr>
<tr><td>中类</td><td>LNK_RSP_STM_PORC_CFG_LINE.TYPE_2</td><td>下拉选择框</td><td>瓷砖中类</td><td>常显</td><td>值集CRM.RSP_STM_PORC_CFG_TYPE_SUB；级联父级type1；可排序；查询条件：=精确匹配</td></tr>
<tr><td>定价</td><td>LNK_RSP_STM_PORC_CFG_LINE.PRICE</td><td>文本框</td><td>定价金额</td><td>常显</td><td>可排序</td></tr>
<tr><td>状态</td><td>LNK_RSP_STM_PORC_CFG_LINE.STATUS</td><td>下拉选择框</td><td>行有效/失效状态</td><td>常显</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS；可排序</td></tr>
<tr><td>创建人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>创建人姓名</td><td>常显</td><td>可排序</td></tr>
<tr><td>创建时间</td><td>LNK_RSP_STM_PORC_CFG_LINE.CREATION_DATE</td><td>日期</td><td>记录创建时间</td><td>常显</td><td>格式YYYY-MM-DD；可排序</td></tr>
<tr><td>最后修改人</td><td>HZERO.IAM_USER.REAL_NAME</td><td>文本框</td><td>最后修改人姓名</td><td>常显</td><td>可排序</td></tr>
<tr><td>最后修改时间</td><td>LNK_RSP_STM_PORC_CFG_LINE.LAST_UPDATE_DATE</td><td>日期</td><td>记录最后修改时间</td><td>常显</td><td>格式YYYY-MM-DD；可排序</td></tr>
<tr><td>操作</td><td>-</td><td>按钮</td><td>编辑按钮</td><td>编辑模式下禁用</td><td>点击打开编辑弹窗</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="界面模块4：明细行新建/编辑弹窗">
<blockquote>弹窗2列表单布局。新建时标题"新建明细行"，编辑时标题"编辑明细行"。</blockquote>
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>数据库列名</th><th>组件</th><th>业务释义</th><th>显隐条件</th><th>取值/赋值逻辑</th></tr>
</thead>
<tbody>
<tr><td>大类</td><td>LNK_RSP_STM_PORC_CFG_LINE.TYPE_1</td><td>下拉选择框</td><td>瓷砖大类</td><td>常显</td><td>必填；值集CRM.RSP_STM_PORC_CFG_TYPE；变更时清空中类</td></tr>
<tr><td>中类</td><td>LNK_RSP_STM_PORC_CFG_LINE.TYPE_2</td><td>下拉选择框</td><td>瓷砖中类</td><td>常显</td><td>必填；值集CRM.RSP_STM_PORC_CFG_TYPE_SUB；级联父级type1</td></tr>
<tr><td>定价</td><td>LNK_RSP_STM_PORC_CFG_LINE.PRICE</td><td>数字输入框</td><td>定价金额</td><td>常显</td><td>必填；min=0，max=999999，步长0.01</td></tr>
<tr><td>状态</td><td>LNK_RSP_STM_PORC_CFG_LINE.STATUS</td><td>下拉选择框</td><td>行有效/失效状态</td><td>常显</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS；默认valid</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="选择弹窗">
<p>本菜单无选择弹窗。所有字段使用值集下拉选择框（Select组件），中类级联大类。</p>
</KbCard>

<KbCard title="导入">
<h4>前置约定</h4>
<ul><li>模板编码：CRM.RSP_STM_PORC_CFG</li><li>使用通用导入组件CommonImport，支持Excel导入</li></ul>
<h4>字段映射</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>字段含义</th><th>是否必输</th><th>字段格式</th><th>重复判定字段</th></tr>
</thead>
<tbody>
<tr><td>规格</td><td>是</td><td>文本</td><td>STANDARD+CATEGORY+PRODUCTION_BASE_CODE</td></tr>
<tr><td>生产基地</td><td>是</td><td>值集CRM.LNK_PRICE_APP_FORM_PROD_BASE</td><td>同上</td></tr>
<tr><td>瓷砖品类</td><td>是</td><td>文本</td><td>同上</td></tr>
<tr><td>大类</td><td>是</td><td>值集CRM.RSP_STM_PORC_CFG_TYPE</td><td>HEAD_ID+TYPE_1+TYPE_2</td></tr>
<tr><td>中类</td><td>是</td><td>值集CRM.RSP_STM_PORC_CFG_TYPE_SUB</td><td>同上</td></tr>
<tr><td>定价</td><td>是</td><td>数字</td><td>-</td></tr>
<tr><td>备注</td><td>否</td><td>文本</td><td>-</td></tr>
</tbody>
</table>
<h4>处理逻辑</h4>
<ul><li><strong>校验逻辑</strong>：后端validateRequiredFields校验必填字段，checkRepeatRecord校验头表重复</li><li><strong>导入逻辑</strong>：通过通用导入框架处理</li><li><strong>重复处理策略</strong>：同一规格+品类+生产基地已存在时报错阻断</li><li><strong>性能方案</strong>：批量插入/更新</li></ul>
<h4>异常与结果约定</h4>
<ul><li>部分成功/失败时的处理：事务回滚</li><li>结果反馈机制：导入结果文件下载</li></ul>
<h4>运维保障</h4>
<ul><li>日志记录：HZERO平台标准日志</li><li>断点续传/重试机制：通用导入框架支持</li></ul>
</KbCard>

<KbCard title="其他按钮">
<table class="kb-field-tbl">
<thead>
<tr><th>按钮名称</th><th>按钮作用</th><th>所在位置</th><th>显隐条件/可点击条件</th><th>影响</th></tr>
</thead>
<tbody>
<tr><td>新建</td><td>跳转新建详情页</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.porc_cfg.ps.add</td><td>打开新建详情页</td></tr>
<tr><td>导入</td><td>导入配置数据</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.porc_cfg.ps.import</td><td>打开通用导入组件上传Excel</td></tr>
<tr><td>导出</td><td>导出列表数据</td><td>列表页</td><td>权限hzero.product_data.rsp_stm.porc_cfg.ps.export</td><td>异步导出Excel文件</td></tr>
<tr><td>明细行新建</td><td>打开新建明细弹窗</td><td>详情页明细行表格</td><td>权限hzero.product_data.rsp_stm.porc_cfg.ps.add；编辑模式下禁用</td><td>弹窗填写大类/中类/定价/状态后保存</td></tr>
<tr><td>明细行编辑</td><td>打开编辑明细弹窗</td><td>详情页明细行操作列</td><td>权限hzero.product_data.rsp_stm.porc_cfg.ps.add；编辑模式下禁用</td><td>弹窗编辑大类/中类/定价/状态后保存</td></tr>
</tbody>
</table>
<h4>按钮1：新建（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.porc_cfg.ps.add</li><li><strong>执行逻辑</strong>：</li><li>第1点：跳转到新建详情页/rspStmPorcCfg/detail</li><li>第2点：填写规格、生产基地、瓷砖品类、备注后保存头表</li><li>第3点：保存头表后系统自动生成配置编码和明细行</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/rspStmPorcCfgHead</li></ul>
<h4>按钮2：导出（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.porc_cfg.ps.export</li><li><strong>执行逻辑</strong>：按当前查询条件异步导出Excel文件</li><li><strong>接口调用</strong>：GET /v1/&#123;organizationId&#125;/rspStmPorcCfgHead/export</li></ul>
<h4>按钮3：导入（列表页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.porc_cfg.ps.import</li><li><strong>执行逻辑</strong>：打开通用导入组件，模板编码CRM.RSP_STM_PORC_CFG</li><li><strong>接口调用</strong>：通用导入框架接口</li></ul>
<h4>按钮4：明细行新建（详情页）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.porc_cfg.ps.add；非编辑模式</li><li><strong>执行逻辑</strong>：</li><li>第1点：打开"新建明细行"弹窗，填写大类、中类、定价、状态</li><li>第2点：大类变更时清空中类并刷新中类选项</li><li>第3点：确认后校验必填字段，调用行保存接口</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/rspStmPorcCfgLine</li></ul>
<h4>按钮5：明细行编辑（详情页行操作）</h4>
<ul><li><strong>触发条件</strong>：拥有权限hzero.product_data.rsp_stm.porc_cfg.ps.add；非编辑模式</li><li><strong>执行逻辑</strong>：</li><li>第1点：打开"编辑明细行"弹窗，带出当前行数据</li><li>第2点：修改大类/中类/定价/状态后确认保存</li><li><strong>接口调用</strong>：POST /v1/&#123;organizationId&#125;/rspStmPorcCfgLine</li></ul>
</KbCard>

<KbCard title="保存校验">
<ul><li>校验1：头表-瓷砖品类非空 —— 确保指定瓷砖品类</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端validateRequiredFields方法校验category非空</p>
<ul><li>系统体现：后端阻断性报错"瓷砖品类不能为空"</li></ul>
<ul><li>排查SQL：</li></ul>

```sql
SELECT * FROM LNK_RSP_STM_PORC_CFG_HEAD WHERE CATEGORY IS NULL;
```
<ul><li>校验2：头表-规格非空 —— 确保指定规格</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端validateRequiredFields方法校验standard非空</p>
<ul><li>系统体现：后端阻断性报错"规格不能为空"</li></ul>
<ul><li>排查SQL：</li></ul>

```sql
SELECT * FROM LNK_RSP_STM_PORC_CFG_HEAD WHERE STANDARD IS NULL;
```
<ul><li>校验3：头表-生产基地非空 —— 确保指定生产基地</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端validateRequiredFields方法校验productionBaseCode非空</p>
<ul><li>系统体现：后端阻断性报错"生产基地不能为空"</li></ul>
<ul><li>排查SQL：</li></ul>

```sql
SELECT * FROM LNK_RSP_STM_PORC_CFG_HEAD WHERE PRODUCTION_BASE_CODE IS NULL;
```
<ul><li>校验4：头表-重复规格校验 —— 避免重复配置</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端checkRepeatRecord方法查询相同standard+category+productionBaseCode的记录</p>
<p>- 第2点：如果存在，抛出"该规格已存在，请核对数据！"</p>
<ul><li>系统体现：后端阻断性报错</li></ul>
<ul><li>排查SQL：</li></ul>

```sql
SELECT STANDARD, CATEGORY, PRODUCTION_BASE_CODE, COUNT(*) AS cnt
    FROM LNK_RSP_STM_PORC_CFG_HEAD
    GROUP BY STANDARD, CATEGORY, PRODUCTION_BASE_CODE
    HAVING COUNT(*) > 1;
```
<ul><li>校验5：行表-大类非空 —— 确保指定大类</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端saveData方法校验type1非空</p>
<ul><li>系统体现：后端阻断性报错"大类不能为空"</li></ul>
<ul><li>校验6：行表-中类非空 —— 确保指定中类</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端saveData方法校验type2非空</p>
<ul><li>系统体现：后端阻断性报错"中类不能为空"</li></ul>
<ul><li>校验7：行表-定价非空 —— 确保指定定价</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：后端saveData方法校验price非null</p>
<ul><li>系统体现：后端阻断性报错"定价不能为空"</li></ul>
<ul><li>校验8：行表-重复大类中类校验 —— 避免重复定价</li></ul>
<ul><li>详细逻辑</li></ul>
<p>- 第1点：新增时查询同一headId下相同type1+type2的记录</p>
<p>- 第2点：如果存在，抛出"该头表下已存在相同大类和中类的配置，请勿重复新增"</p>
<ul><li>系统体现：后端阻断性报错</li></ul>
<ul><li>排查SQL：</li></ul>

```sql
SELECT HEAD_ID, TYPE_1, TYPE_2, COUNT(*) AS cnt
    FROM LNK_RSP_STM_PORC_CFG_LINE
    GROUP BY HEAD_ID, TYPE_1, TYPE_2
    HAVING COUNT(*) > 1;
```
</KbCard>

<KbCard title="提交校验">
<p>本菜单无提交/审批功能，数据保存后直接生效。</p>
</KbCard>

<KbCard title="状态机">
<h4>状态机流转图</h4>

```text
[新建头表] → valid（生效） → 编辑时改为invalid → invalid（失效）

[自动生成明细行] → valid（生效） → 编辑时改为invalid → invalid（失效）
```
<h4>状态机列表</h4>
<table class="kb-field-tbl">
<thead>
<tr><th>状态机名称</th><th>状态释义</th><th>可执行的操作</th></tr>
</thead>
<tbody>
<tr><td>valid</td><td>生效</td><td>编辑、改为失效</td></tr>
<tr><td>invalid</td><td>失效</td><td>编辑</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表1：LNK_RSP_STM_PORC_CFG_HEAD（瓷砖参数配置头表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ROW_ID</td><td>VARCHAR2</td><td>主键</td><td>-</td><td>序列服务生成，新增时自动赋值</td></tr>
<tr><td>RSP_STM_HEAD_CODE</td><td>VARCHAR2</td><td>配置编码</td><td>配置编码</td><td>编码规则CRM.RSP_STM_CFG_CODE自动生成；不可编辑</td></tr>
<tr><td>STATUS</td><td>VARCHAR2</td><td>状态</td><td>状态</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS；新建默认valid</td></tr>
<tr><td>STANDARD</td><td>VARCHAR2</td><td>规格</td><td>规格</td><td>必填；新建后不可修改</td></tr>
<tr><td>CATEGORY</td><td>VARCHAR2</td><td>瓷砖品类</td><td>瓷砖品类</td><td>必填；新建后不可修改</td></tr>
<tr><td>PRODUCTION_BASE_CODE</td><td>VARCHAR2</td><td>生产基地</td><td>生产基地</td><td>必填；值集CRM.LNK_PRICE_APP_FORM_PROD_BASE；新建后不可修改</td></tr>
<tr><td>REMARKS</td><td>VARCHAR2</td><td>备注</td><td>备注</td><td>非必填</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>乐观锁版本号</td><td>-</td><td>@VersionAudit自动维护</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>创建时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>CREATED_BY</td><td>NUMBER</td><td>创建人ID</td><td>创建人</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>最后更新时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>NUMBER</td><td>最后更新人ID</td><td>最后更新人</td><td>@ModifyAudit自动填充</td></tr>
</tbody>
</table>
</KbCard>

<KbCard title="表2：LNK_RSP_STM_PORC_CFG_LINE（瓷砖参数配置行表）">
<table class="kb-field-tbl">
<thead>
<tr><th>字段名</th><th>类型</th><th>释义</th><th>对应界面字段</th><th>逻辑</th></tr>
</thead>
<tbody>
<tr><td>ROW_ID</td><td>VARCHAR2</td><td>主键</td><td>-</td><td>序列服务生成，新增时自动赋值</td></tr>
<tr><td>HEAD_ID</td><td>VARCHAR2</td><td>头表ID</td><td>-</td><td>关联LNK_RSP_STM_PORC_CFG_HEAD.ROW_ID</td></tr>
<tr><td>RSP_STM_LINE_CODE</td><td>VARCHAR2</td><td>行编码</td><td>-</td><td>当前未在界面展示</td></tr>
<tr><td>STATUS</td><td>VARCHAR2</td><td>状态</td><td>状态</td><td>值集CRM.LNK_RSP_STM_CFG_STATUS；新建默认valid</td></tr>
<tr><td>TYPE_1</td><td>VARCHAR2</td><td>大类</td><td>大类</td><td>必填；值集CRM.RSP_STM_PORC_CFG_TYPE</td></tr>
<tr><td>TYPE_2</td><td>VARCHAR2</td><td>中类</td><td>中类</td><td>必填；值集CRM.RSP_STM_PORC_CFG_TYPE_SUB；级联父级TYPE_1</td></tr>
<tr><td>PRICE</td><td>NUMBER</td><td>定价</td><td>定价</td><td>必填；范围0~999999</td></tr>
<tr><td>OBJECT_VERSION_NUMBER</td><td>NUMBER</td><td>乐观锁版本号</td><td>-</td><td>@VersionAudit自动维护</td></tr>
<tr><td>CREATION_DATE</td><td>DATE</td><td>创建时间</td><td>创建时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>CREATED_BY</td><td>NUMBER</td><td>创建人ID</td><td>创建人</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>LAST_UPDATE_DATE</td><td>DATE</td><td>最后更新时间</td><td>最后修改时间</td><td>@ModifyAudit自动填充</td></tr>
<tr><td>LAST_UPDATED_BY</td><td>NUMBER</td><td>最后更新人ID</td><td>最后修改人</td><td>@ModifyAudit自动填充</td></tr>
</tbody>
</table>
</KbCard>

</div>
</div>
</div>

<div id="faq" style="display:none;">
<div class="tab-pad">
<div class="kl-wrap">
<KbCard title="报错一览表">
<table class="kb-field-tbl">
<thead>
<tr><th>报错信息</th><th>提示节点</th><th>根因与解决方案</th><th>等级</th><th>详细逻辑</th></tr>
</thead>
<tbody>
<tr><td>瓷砖品类不能为空</td><td>头表保存</td><td>未填写瓷砖品类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>规格不能为空</td><td>头表保存</td><td>未填写规格</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>生产基地不能为空</td><td>头表保存</td><td>未选择生产基地</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>该规格已存在，请核对数据！</td><td>头表保存</td><td>同一规格+品类+生产基地已存在</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>大类不能为空</td><td>行表保存</td><td>未选择大类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>中类不能为空</td><td>行表保存</td><td>未选择中类</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>定价不能为空</td><td>行表保存</td><td>未填写定价</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>该头表下已存在相同大类和中类的配置，请勿重复新增</td><td>行表保存</td><td>同一头表下大类+中类已存在</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>保存明细行失败</td><td>行表保存弹窗确认</td><td>后端保存接口返回失败</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>头表ID不能为空</td><td>行表保存</td><td>新增明细行时headId为空</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>更新行ID不能为空</td><td>行表保存</td><td>更新明细行时id为空</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>大类和小类必须同时传入</td><td>行表保存</td><td>更新时type1与type2仅传其一</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>该头表下已存在相同大类和中类的配置，请勿重复设置</td><td>行表保存</td><td>更新行时大类中类变更后与其他行重复</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>保存失败</td><td>头表保存按钮</td><td>后端返回failed或业务校验异常</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>保存异常，请稍后重试</td><td>头表保存按钮</td><td>网络异常或服务不可用</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>查询失败</td><td>列表查询/详情加载</td><td>接口请求异常或权限不足</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>权限不足</td><td>页面访问/按钮操作</td><td>当前用户无对应权限编码</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>暂无数据</td><td>列表查询</td><td>查询结果为空集</td><td>toast提醒</td><td>[查看]</td></tr>
<tr><td>会话过期</td><td>任意操作</td><td>登录态失效或Token过期</td><td>阻断性报错</td><td>[查看]</td></tr>
<tr><td>当前有未保存的更改，确定要离开吗？</td><td>返回按钮</td><td>编辑模式下点击返回，前端Modal.confirm确认</td><td>确认弹窗</td><td>[查看]</td></tr>
</tbody>
</table>
<blockquote><strong>"该规格已存在，请核对数据！"详细逻辑</strong>：
后端checkRepeatRecord方法查询相同standard+category+productionBaseCode的记录，存在则抛出异常。
排查SQL：</blockquote>

```sql
SELECT STANDARD, CATEGORY, PRODUCTION_BASE_CODE, COUNT(*) AS cnt
FROM LNK_RSP_STM_PORC_CFG_HEAD
GROUP BY STANDARD, CATEGORY, PRODUCTION_BASE_CODE
HAVING COUNT(*) > 1;
```
<blockquote><strong>"该头表下已存在相同大类和中类的配置，请勿重复新增"详细逻辑</strong>：
后端saveData方法中，新增行时查询同一headId下相同type1+type2的记录，存在则抛出异常。
排查SQL：</blockquote>

```sql
SELECT HEAD_ID, TYPE_1, TYPE_2, COUNT(*) AS cnt
FROM LNK_RSP_STM_PORC_CFG_LINE
GROUP BY HEAD_ID, TYPE_1, TYPE_2
HAVING COUNT(*) > 1;
```
<h4>报错1：瓷砖品类不能为空</h4>
<ul><li><strong>触发条件</strong>：头表保存时，未填写瓷砖品类（CATEGORY字段）</li><li><strong>逻辑分析</strong>：后端保存头表前校验CATEGORY非空。瓷砖品类是瓷砖参数配置的核心维度，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT H.ID, H.STANDARD AS 规格, H.CATEGORY AS 瓷砖品类,
         H.PRODUCTION_BASE_CODE AS 生产基地
  FROM LNK_RSP_STM_PORC_CFG_HEAD H
  WHERE H.ID = :headId AND H.CATEGORY IS NULL;
```
<h4>报错2：规格不能为空</h4>
<ul><li><strong>触发条件</strong>：头表保存时，未填写规格（STANDARD字段）</li><li><strong>逻辑分析</strong>：后端校验STANDARD非空。规格是瓷砖参数配置的核心维度，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT H.ID, H.STANDARD AS 规格, H.CATEGORY AS 瓷砖品类
  FROM LNK_RSP_STM_PORC_CFG_HEAD H
  WHERE H.ID = :headId AND H.STANDARD IS NULL;
```
<h4>报错3：生产基地不能为空</h4>
<ul><li><strong>触发条件</strong>：头表保存时，未选择生产基地（PRODUCTION_BASE_CODE字段）</li><li><strong>逻辑分析</strong>：后端校验PRODUCTION_BASE_CODE非空。生产基地是瓷砖参数配置的核心维度，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT H.ID, H.STANDARD AS 规格, H.PRODUCTION_BASE_CODE AS 生产基地
  FROM LNK_RSP_STM_PORC_CFG_HEAD H
  WHERE H.ID = :headId AND H.PRODUCTION_BASE_CODE IS NULL;
```
<h4>报错4：大类不能为空</h4>
<ul><li><strong>触发条件</strong>：行表保存时，未选择大类（TYPE_1字段）</li><li><strong>逻辑分析</strong>：后端保存行表前校验TYPE_1非空。大类是瓷砖定价的分类维度，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.ID, L.HEAD_ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.HEAD_ID = :headId AND L.TYPE_1 IS NULL;
```
<h4>报错5：中类不能为空</h4>
<ul><li><strong>触发条件</strong>：行表保存时，未选择中类（TYPE_2字段）</li><li><strong>逻辑分析</strong>：后端校验TYPE_2非空。中类级联大类，必须先选择大类后选择中类，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.ID, L.HEAD_ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.HEAD_ID = :headId AND L.TYPE_2 IS NULL;
```
<h4>报错6：定价不能为空</h4>
<ul><li><strong>触发条件</strong>：行表保存时，未填写定价（PRICE字段）</li><li><strong>逻辑分析</strong>：后端校验PRICE非空。定价是瓷砖参数配置的核心输出值，必填。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.ID, L.HEAD_ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类,
         L.PRICE AS 定价
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.HEAD_ID = :headId AND L.PRICE IS NULL;
```
<h4>报错7：保存明细行失败</h4>
<ul><li><strong>触发条件</strong>：行表保存弹窗点击确认按钮，后端保存接口返回失败</li><li><strong>逻辑分析</strong>：后端saveData方法校验必填项（大类、中类、定价）和唯一性（同一HEAD_ID下TYPE_1+TYPE_2不重复）后插入LNK_RSP_STM_PORC_CFG_LINE表。若校验失败或数据库异常则返回失败，前端提示"保存明细行失败"。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.HEAD_ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类,
         L.PRICE AS 定价, L.STATUS AS 状态
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.HEAD_ID = :headId
  ORDER BY L.TYPE_1, L.TYPE_2;
```
<h4>报错8：头表ID不能为空</h4>
<ul><li><strong>触发条件</strong>：新增明细行保存时，headId字段为空</li><li><strong>逻辑分析</strong>：后端RspStmPorcCfgLineServiceImpl.saveData方法中，对新增行校验line.getHeadId()是否为空，为空则抛出CommonException。常见于前端未正确传入头表ID或头表尚未保存就操作明细行。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT H.ROW_ID AS 头表ID, H.RSP_STM_HEAD_CODE AS 配置编码, H.STANDARD AS 规格
  FROM LNK_RSP_STM_PORC_CFG_HEAD H
  WHERE H.ROW_ID = :headId;
```
<h4>报错9：更新行ID不能为空</h4>
<ul><li><strong>触发条件</strong>：更新明细行时，行id字段为空</li><li><strong>逻辑分析</strong>：后端RspStmPorcCfgLineServiceImpl.saveData方法中，对更新列表校验line.getId()是否为空，为空则抛出CommonException。常见于前端编辑弹窗未带出明细行ID。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.ROW_ID AS 行ID, L.HEAD_ID AS 头表ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.ROW_ID = :lineId;
```
<h4>报错10：大类和小类必须同时传入</h4>
<ul><li><strong>触发条件</strong>：更新明细行时，type1与type2仅传入其中一个</li><li><strong>逻辑分析</strong>：后端RspStmPorcCfgLineServiceImpl.saveData方法中，对更新行校验type1Present与type2Present是否一致，不一致则抛出CommonException。确保大类中类成对修改。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.ROW_ID AS 行ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.ROW_ID = :lineId
    AND (L.TYPE_1 IS NULL OR L.TYPE_2 IS NULL);
```
<h4>报错11：该头表下已存在相同大类和中类的配置，请勿重复设置</h4>
<ul><li><strong>触发条件</strong>：编辑明细行时，修改大类或中类后与同一头表下其他行重复</li><li><strong>逻辑分析</strong>：后端RspStmPorcCfgLineServiceImpl.saveData方法中，更新行时若type1或type2发生变化，查询同一headId下是否已存在相同type1+type2的记录（排除自身），存在则抛出CommonException。与新增校验的区别在于排除自身ID。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT L.HEAD_ID, L.TYPE_1 AS 大类, L.TYPE_2 AS 中类, COUNT(*) AS 重复数
  FROM LNK_RSP_STM_PORC_CFG_LINE L
  WHERE L.HEAD_ID = :headId
  GROUP BY L.HEAD_ID, L.TYPE_1, L.TYPE_2
  HAVING COUNT(*) > 1;
```
<h4>报错12：保存失败</h4>
<ul><li><strong>触发条件</strong>：头表保存按钮点击时，后端接口返回res.failed=true</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleSave调用rspStmPorcCfgHeadApi.save后，若res.failed为true则通过commonFn_showErrMsg展示后端错误信息。常见于头表重复校验（该规格已存在）或必填校验被前端捕获。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT H.ROW_ID AS 头表ID, H.RSP_STM_HEAD_CODE AS 配置编码,
         H.STANDARD AS 规格, H.CATEGORY AS 瓷砖品类,
         H.PRODUCTION_BASE_CODE AS 生产基地, H.STATUS AS 状态
  FROM LNK_RSP_STM_PORC_CFG_HEAD H
  ORDER BY H.LAST_UPDATE_DATE DESC;
```
<h4>报错13：保存异常，请稍后重试</h4>
<ul><li><strong>触发条件</strong>：头表保存按钮点击时，请求抛出异常进入catch块</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleSave的try-catch块，当网络异常、服务不可用、超时等非业务异常时，notification.error提示"保存异常，请稍后重试"。属于兜底异常处理。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '检查后端服务连通性与数据库连接状态' AS 排查方向 FROM DUAL;
```
<h4>报错14：查询失败</h4>
<ul><li><strong>触发条件</strong>：列表页查询或详情页加载时，接口请求异常</li><li><strong>逻辑分析</strong>：前端DataSet的transport.read请求后端/v1/&#123;organizationId&#125;/rspStmPorcCfgHead或rspStmPorcCfgLine接口，若后端抛出CommonException或网络异常，DataSet自动展示错误提示。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT COUNT(1) AS 头表记录数 FROM LNK_RSP_STM_PORC_CFG_HEAD;
```
<h4>报错15：权限不足</h4>
<ul><li><strong>触发条件</strong>：用户访问页面或点击按钮时，未拥有对应权限编码</li><li><strong>逻辑分析</strong>：前端Button组件通过permissionList配置权限编码（如hzero.product_data.rsp_stm.porc_cfg.ps.add、import、export），HZERO平台校验当前用户角色是否包含该权限编码。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT U.REAL_NAME AS 用户名, R.NAME AS 角色名, P.CODE AS 权限编码
  FROM HZERO.IAM_USER U
    JOIN HZERO.IAM_MEMBER M ON U.ID = M.MEMBER_ID
    JOIN HZERO.IAM_ROLE R ON M.ROLE_ID = R.ID
    JOIN HZERO.IAM_ROLE_PERMISSION RP ON R.ID = RP.ROLE_ID
    JOIN HZERO.IAM_PERMISSION P ON RP.PERMISSION_ID = P.ID
  WHERE P.CODE LIKE 'hzero.product_data.rsp_stm.porc_cfg.ps.%';
```
<h4>报错16：暂无数据</h4>
<ul><li><strong>触发条件</strong>：列表页查询结果为空集或明细行表格无数据</li><li><strong>逻辑分析</strong>：前端Table组件查询后端返回content为空数组时，自动展示"暂无数据"占位。属于正常业务场景，非异常。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT COUNT(1) AS 头表记录数 FROM LNK_RSP_STM_PORC_CFG_HEAD WHERE STATUS = 'valid';
```
<h4>报错17：会话过期</h4>
<ul><li><strong>触发条件</strong>：任意操作时，登录态失效或Token过期</li><li><strong>逻辑分析</strong>：HZERO平台网关层校验请求头中的Authorization Token，若Token过期或无效，返回401状态码，前端拦截器跳转登录页。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '检查HZERO.IAM_USER_TOKEN表或SSO会话状态' AS 排查方向 FROM DUAL;
```
<h4>报错18：当前有未保存的更改，确定要离开吗？</h4>
<ul><li><strong>触发条件</strong>：编辑模式下点击返回按钮</li><li><strong>逻辑分析</strong>：前端detail.tsx中handleBack方法，当editFlag为true时弹出Modal.confirm确认框，用户确认后关闭tab并跳转列表页，取消则留在当前页。防止用户误操作丢失未保存数据。</li><li><strong>排查SQL</strong>：</li></ul>

```sql
SELECT '前端确认弹窗，无需SQL排查' AS 提示 FROM DUAL;
```
</KbCard>

<KbCard title="常见问题">
<ul><li>问题1：新建头表保存后为什么自动出现很多明细行？</li><li>原因：头表保存后系统自动按值集CRM.RSP_STM_PORC_CFG_TYPE_SUB的所有条目生成明细行，price=0，status=valid</li><li>解决思路：自动生成的明细行可在详情页逐行编辑定价</li></ul>
<ul><li>问题2：编辑头表时为什么规格/生产基地/瓷砖品类不能修改？</li><li>原因：编辑时这些字段disabled=!isNew=true，防止修改导致重复校验冲突</li><li>解决思路：如需修改，新建一条配置并将原配置失效</li></ul>
<ul><li>问题3：瓷砖参数配置与基础参数配置的区别？</li><li>原因：基础参数配置为通用定价参数（按产品分类），瓷砖参数配置针对瓷砖品类特殊定价（按规格+品类+生产基地），采用头行结构</li><li>解决思路：瓷砖产品使用瓷砖参数配置，其他产品使用基础参数配置</li></ul>
<ul><li>问题4：中类选项为什么有时为空？</li><li>原因：中类（type2）级联大类（type1），必须先选择大类后才能选择中类</li><li>解决思路：先选择大类，中类选项会自动过滤为该大类下的中类</li></ul>
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
<tr><td>2026-06-02</td><td>-</td><td>-</td><td>初始创建：责任制内结价定价瓷砖参数配置功能</td></tr>
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